// Pull a stable ID off Character/Episode/etc.
const nodeId = n => {
  // console.log(n);
  if (!n) return String(n);

  if (typeof n.getID === "function") return n.getID();

  // If it's a Character instance
  if ("shortName" in n) return n.shortName;
  if ("name" in n) return n.name;

  // Fallbacks
  if ("id" in n) return n.id;
  return String(n);
};

// Canonical edge key for set membership
const edgeKey = (a, b, level, { directed = false } = {}) => {
  const A = nodeId(a), B = nodeId(b);
  return directed || A <= B ? `${A}|${B}|${level}` : `${B}|${A}|${level}`;
};

// Canonical key ignoring level (to detect level mismatches)
const pairKey = (a, b, { directed = false } = {}) => {
  const A = nodeId(a), B = nodeId(b);
  return directed || A <= B ? `${A}|${B}` : `${B}|${A}`;
};

// Flatten nested arrays of edges (because your helpers return arrays)
const flattenEdges = arr => (arr ?? []).flat(Infinity).filter(Boolean);

/**
 * Compare two interaction lists.
 * @param {Object} args
 * @param {Array}  args.original  - the interaction list you already had marked (Array<Connection>)
 * @param {Array}  args.rebuilt   - the new list built with connectAll/groupConnections (Array<Connection>)
 * @param {Object} [args.opts]    - options
 * @param {boolean} [args.opts.directed=false] - treat edges as directed
 * @returns {{missing:Array, extra:Array, levelMismatches:Array, ok:boolean, summary:Object}}
 */
export function diffInteractions({ original, rebuilt, opts = {} }) {
  console.log("Original edges sample:", original.slice(0, 5));
  console.log("Rebuilt edges sample:", rebuilt.slice(0, 5));

  const directed = !!opts.directed;

  const A = flattenEdges(original);
  const B = flattenEdges(rebuilt);

  // Build sets for quick lookup
  const setA = new Set(A.map(e => edgeKey(e.source, e.destination, e.level, { directed })));
  const setB = new Set(B.map(e => edgeKey(e.source, e.destination, e.level, { directed })));

  // Also track pairs (no level) to spot level mismatches
  const pairsA = new Map(); // pairKey -> Set(levels)
  const pairsB = new Map();

  const addPair = (map, e) => {
    const k = pairKey(e.source, e.destination, { directed });
    const lvls = map.get(k) ?? new Set();
    lvls.add(e.level);
    map.set(k, lvls);
  };

  A.forEach(e => addPair(pairsA, e));
  B.forEach(e => addPair(pairsB, e));

  // Compute diffs
  const missing = []; // in original (A) but not in rebuilt (B)
  const extra   = []; // in rebuilt (B) but not in original (A)
  const levelMismatches = []; // same pair exists both sides but with different level set

  // Helper to create a lightweight printable record
  const asRecord = (e) => ({
    a: nodeId(e.source),
    b: nodeId(e.destination),
    level: e.level
  });

  // Missing: edges present in A but not in B
  for (const e of A) {
    const k = edgeKey(e.source, e.destination, e.level, { directed });
    if (!setB.has(k)) missing.push(asRecord(e));
  }

  // Extra: edges present in B but not in A
  for (const e of B) {
    const k = edgeKey(e.source, e.destination, e.level, { directed });
    if (!setA.has(k)) extra.push(asRecord(e));
  }

  // Level mismatches: pair exists on both sides, but level sets differ
  for (const [pair, levelsA] of pairsA.entries()) {
    if (pairsB.has(pair)) {
      const levelsB = pairsB.get(pair);
      const aOnly = [...levelsA].filter(L => !levelsB.has(L));
      const bOnly = [...levelsB].filter(L => !levelsA.has(L));
      if (aOnly.length || bOnly.length) {
        const [a, b] = pair.split("|");
        levelMismatches.push({ a, b, originalLevels: [...levelsA].sort(), rebuiltLevels: [...levelsB].sort() });
      }
    }
  }

  const ok = missing.length === 0 && extra.length === 0 && levelMismatches.length === 0;

  return {
    ok,
    missing,
    extra,
    levelMismatches,
    summary: {
      originalEdges: A.length,
      rebuiltEdges: B.length,
      missing: missing.length,
      extra: extra.length,
      levelMismatches: levelMismatches.length,
      directed
    }
  };
}

// Pretty logger (optional)
export function logDiff(report, label = "Interaction diff") {
  console.group(label);
  console.table(report.summary);
  if (!report.ok) {
    if (report.missing.length) {
      console.group(`Missing (${report.missing.length})`);
      console.table(report.missing);
      console.groupEnd();
    }
    if (report.extra.length) {
      console.group(`Extra (${report.extra.length})`);
      console.table(report.extra);
      console.groupEnd();
    }
    if (report.levelMismatches.length) {
      console.group(`Level mismatches (${report.levelMismatches.length})`);
      console.table(report.levelMismatches);
      console.groupEnd();
    }
  } else {
    console.log("✅ Rebuilt interactions match original.");
  }
  console.groupEnd();
}