import {Connection} from './classes/connection.js';
import {Song} from './classes/song.js';
import {Bit} from './classes/bit.js';
import {Episode} from './classes/episode.js';
import {diffInteractions, logDiff} from "./scripts/interaction-diff.js";
import { connectAll, groupConnections } from './graph/connectionHelpers.js';

//#region Family Handler
Phineas.addFamily(Ferb);
Phineas.addFamily(Candace);
Phineas.addFamily(Linda);
Phineas.addFamily(Lawrence);
Phineas.addFamily(Perry);
Phineas.addFamily(Clyde);
Phineas.addFamily(BettyJo);
Phineas.addFamily(Lorraine);
Phineas.addFamily(Winifred);
Phineas.addFamily(Reginald);

Ferb.addFamily(Candace);
Ferb.addFamily(Linda);
Ferb.addFamily(Lawrence);
Ferb.addFamily(Perry);
Ferb.addFamily(Clyde);
Ferb.addFamily(BettyJo);
Ferb.addFamily(Lorraine);
Ferb.addFamily(Winifred);
Ferb.addFamily(Reginald);
Ferb.addFamily(Ferbgor);

Candace.addFamily(Linda);
Candace.addFamily(Lawrence);
Candace.addFamily(Perry);
Candace.addFamily(Clyde);
Candace.addFamily(BettyJo);
Candace.addFamily(Lorraine);
Candace.addFamily(Winifred);
Candace.addFamily(Reginald);

Linda.addFamily(Lawrence);
Linda.addFamily(Perry);
Linda.addFamily(Clyde);
Linda.addFamily(BettyJo);
Linda.addFamily(Lorraine);
Linda.addFamily(Winifred);
Linda.addFamily(Reginald);

Lawrence.addFamily(Perry);
Lawrence.addFamily(Clyde);
Lawrence.addFamily(BettyJo);
Lawrence.addFamily(Lorraine);
Lawrence.addFamily(Winifred);
Lawrence.addFamily(Reginald);

Perry.addFamily(Clyde);
Perry.addFamily(BettyJo);
Perry.addFamily(Lorraine);
Perry.addFamily(Winifred);
Perry.addFamily(Reginald);

Clyde.addFamily(BettyJo);
Clyde.addFamily(Lorraine);

BettyJo.addFamily(Lorraine);

Winifred.addFamily(Reginald);

Reginald.addFamily(Ferbgor);

Isabella.addFamily(Vivian);
Isabella.addFamily(Pinky);

Stacy.addFamily(Ginger);
Stacy.addFamily(Hirano);

Ginger.addFamily(Hirano);

Jeremy.addFamily(Johnson);
Jeremy.addFamily(Suzy);
Jeremy.addFamily(UncleJoe);
Jeremy.addFamily(Hildegard);

Suzy.addFamily(Johnson);
Suzy.addFamily(UncleJoe);
Suzy.addFamily(Hildegard);

Johnson.addFamily(UncleJoe);
Johnson.addFamily(Hildegard);

Doof.addFamily(DoofDad);
Doof.addFamily(DoofMom);
Doof.addFamily(Vanessa);
Doof.addFamily(Roger);
Doof.addFamily(Charlene);
Doof.addFamily(Jekyll);

Vanessa.addFamily(Roger);
Vanessa.addFamily(Charlene);

DoofDad.addFamily(DoofMom);
DoofDad.addFamily(Jekyll);

Lily.addFamily(Tilly);

Django.addFamily(Beppo);
Django.addFamily(Jenny);

Jenny.addFamily(Beppo);

Farmer.addFamily(FarmerWife);
//#endregion

//#region Episodes
import {ep1} from "./graph/seasonOne/ep1.js";
import {ep2} from "./graph/seasonOne/ep2.js";
import {ep3} from "./graph/seasonOne/ep3.js";
import {ep4} from "./graph/seasonOne/ep4.js";
import {ep5} from "./graph/seasonOne/ep5.js";
import {ep6} from "./graph/seasonOne/ep6.js";
import {ep7} from "./graph/seasonOne/ep7.js";
import {ep8} from "./graph/seasonOne/ep8.js";
import {ep9} from "./graph/seasonOne/ep9.js";
import {ep10} from "./graph/seasonOne/ep10.js";
import {ep11} from "./graph/seasonOne/ep11.js";
import {ep12} from "./graph/seasonOne/ep12.js";
import {ep13} from "./graph/seasonOne/ep13.js";
import {ep14} from "./graph/seasonOne/ep14.js";
import {ep15} from "./graph/seasonOne/ep15.js";
import {ep16} from "./graph/seasonOne/ep16.js";
import {ep17} from "./graph/seasonOne/ep17.js";
import {ep18} from "./graph/seasonOne/ep18.js";
import {ep19} from "./graph/seasonOne/ep19.js";
import {ep20} from "./graph/seasonOne/ep20.js";
import {ep21} from "./graph/seasonOne/ep21.js";
import {ep22} from "./graph/seasonOne/ep22.js";
import {ep23} from "./graph/seasonOne/ep23.js";
import {ep24} from "./graph/seasonOne/ep24.js";
import {ep25} from "./graph/seasonOne/ep25.js";
import {ep26} from "./graph/seasonOne/ep26.js";
import {ep27} from "./graph/seasonOne/ep27.js";
import {ep28} from "./graph/seasonOne/ep28.js";
import {ep29} from "./graph/seasonOne/ep29.js";
import {ep30} from "./graph/seasonOne/ep30.js";
import {ep31} from "./graph/seasonOne/ep31.js";
import {ep32} from "./graph/seasonOne/ep32.js";
import {ep33} from "./graph/seasonOne/ep33.js";
import {ep34} from "./graph/seasonOne/ep34.js";
import {ep35} from "./graph/seasonOne/ep35.js";
import {ep36} from "./graph/seasonOne/ep36.js";
import {ep37} from "./graph/seasonOne/ep37.js";
import {ep38} from "./graph/seasonOne/ep38.js";
import {ep39} from "./graph/seasonOne/ep39.js";
import {ep40} from "./graph/seasonOne/ep40.js";
import {ep41} from "./graph/seasonOne/ep41.js";
import {ep42} from "./graph/seasonOne/ep42.js";
import {ep43} from "./graph/seasonOne/ep43.js";
import {ep44} from "./graph/seasonOne/ep44.js";
import {ep45} from "./graph/seasonOne/ep45.js";
import {ep46} from "./graph/seasonOne/ep46.js";
import {ep47} from "./graph/seasonOne/ep47.js";
//#endregion

var unpackedEpisodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10, ep11, ep12, ep13, ep14, ep15, ep16, ep17, ep18, ep19, ep20, ep21, ep22, ep23, ep24, ep25, ep26, ep27, ep28, ep29, ep30, ep31, ep32, ep33, ep34, ep35, ep36, ep37, ep38, ep39, ep40, ep41, ep42, ep43, ep44, ep45, ep46, ep47];
//#region Packaging
var packedEpisodes = [];
var packedCharacters = [];
var allConnections = [];
var packedConnections = [];

unpackedEpisodes.forEach(ep => {
    packedEpisodes.push(ep.packEpisode());
    packedCharacters = packedCharacters.concat(ep.packCharacters());
    allConnections = allConnections.concat(ep.returnConnections());
});

function findStrongestConnections(connections, allowFamilial) {
  const used = new Set(); // track processed connection IDs or references
  const strongestList = [];

  for (let i = 0; i < connections.length; i++) {
    const connA = connections[i];
    if (used.has(connA)) continue;

    let strongest = connA;
    used.add(connA);

    for (let j = i + 1; j < connections.length; j++) {
      const connB = connections[j];
      if (used.has(connB)) continue;

      if (connA.checkIdenticality(connB)) {
        strongest = strongest.getStrongestConnection(connB, allowFamilial);
        used.add(connB);
      }
    }

    strongestList.push(strongest);
  }

  return strongestList;
}

allConnections = findStrongestConnections(allConnections, true);

allConnections.forEach(con => {
    packedConnections = packedConnections.concat(con.pack());
});
//#endregion

//#region Map
const episodes = new vis.DataSet();
episodes.update(packedEpisodes);
const characters = new vis.DataSet();
characters.update(packedCharacters);
const connections = new vis.DataSet();
connections.update(packedConnections);

const container = document.getElementById('network');

// const allNodes = new vis.DataSet([
//   ...characters.get(),
//   ...episodes.get()
// ]);

// const allEdges = new vis.DataSet([
//   ...s1CharacterAppearances.get(),
//   ...characterInteractions.get(),
//   ...episodeTimeline.get()
// ])

// const seriesTimeline = {
//   nodes: episodes,
//   edges: episodeTimeline
// };

const characterMap = {
  nodes: characters,
  edges: connections
};

// const charatersByEpisodes = {
//   nodes: allNodes,
//   edges: s1CharacterAppearances
// };

// const fullMap = {
//   nodes: allNodes,
//   edges: allEdges
// };

const options = {
  physics: {
    enabled: true,
    solver: "forceAtlas2Based",
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springLength: 150,
      springConstant: 0.05
    },
    stabilization: {
      iterations: 100
    }
  },
  interaction: {
    dragView: true,
    zoomView: true
  },
  nodes: {
    shape: "dot",
    size: 25,
    font: {
      size: 18
    },
    borderWidth: 2,
    color: {
      background: "#2eb8b8",
      border: "#248f8f"
    }
  },
  edges: {
    smooth: {
      type: "dynamic"
    }
  }
};

// new vis.Network(container, seriesTimeline, options);
// new vis.Network(container, charatersByEpisodes, options);
new vis.Network(container, characterMap, options);
// new vis.Network(container, fullMap, options);

const nodes = characters.get().map(n => ({
  id: n.id,
  label: n.title,
  color: n.graphColor
}));

const links = connections.get().map(e => ({
  source: e.from,
  target: e.to
}));

const Graph = ForceGraph3D()
  (document.getElementById('3d-graph'))
    .graphData({ nodes, links })
    .nodeAutoColorBy('group')
    .nodeLabel(node => node.label);
//#endregion