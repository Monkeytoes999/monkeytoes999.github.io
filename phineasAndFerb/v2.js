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

Isabella.addFamily(Vivian);
Isabella.addFamily(Pinky);

Stacy.addFamily(Ginger);
Stacy.addFamily(Hirano);

Ginger.addFamily(Hirano);

Jeremy.addFamily(Johnson);
Jeremy.addFamily(Suzy);
Jeremy.addFamily(UncleJoe);

Suzy.addFamily(Johnson);
Suzy.addFamily(UncleJoe);

Johnson.addFamily(UncleJoe);

Doof.addFamily(DoofDad);
Doof.addFamily(DoofMom);
Doof.addFamily(Vanessa);
Doof.addFamily(Roger);
Doof.addFamily(Charlene);

Vanessa.addFamily(Roger);
Vanessa.addFamily(Charlene);

DoofDad.addFamily(DoofMom);

Lily.addFamily(Tilly);
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
//#  endregion

{//25
  var episode25Songs = [
    new Song("History of Rock", [DannyLH, Phineas, Ferb]),
    new Song("Fabulous", [Bobbi, Phineas, Ferb]),
    new Song("Ain't Got Rhythm", [Sherman, Phineas, Ferb]),
    new Song("You Snuck Your Way Right into My Heart", [Bobbi, DannyLH, Sherman]),
  ];
  var episode25Characters = [
    Linda,
    Lawrence,
    Phineas,
    Ferb,
    Candace,
    Jeremy,
    Perry,
    Monogram,
    Doof,
    Bobbi,
    Sherman,
    DannyLH,
    Stacy,
    Hirano,
    Johnson,
    Vivian,
    Bob,
    Vanessa,
    LoveOGram,
    Beehive,
    Isabella,
    Ginger,
    Katie,
    Gretchen,
    Holly,
    Adyson,
    FricknNerd,
    Johnny,
    Baljeet,
    Buford,
    Milly
  ];
  var episode25Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Jeremy, 2),
    new Connection(Phineas, DannyLH, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Bobbi, 6),
    new Connection(Phineas, Sherman, 6),
    new Connection(Phineas, LoveOGram, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Jeremy, 2),
    new Connection(Ferb, DannyLH, 6),
    new Connection(Ferb, Bobbi, 6),
    new Connection(Ferb, Sherman, 6),
    new Connection(Ferb, LoveOGram, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Vanessa, 6),
    new Connection(Perry, DannyLH, 3),
    new Connection(Perry, Bobbi, 3),
    new Connection(Perry, Sherman, 3),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Jeremy, 5),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, DannyLH, 3),
    new Connection(Candace, Bobbi, 6),
    new Connection(Candace, Sherman, 3),
    new Connection(Candace, Beehive, 1),

    new Connection(Linda, Lawrence, 6),
    new Connection(Linda, DannyLH, 3),
    new Connection(Linda, Bobbi, 6),
    new Connection(Linda, Sherman, 3),
    new Connection(Linda, Beehive, 1),

    new Connection(Lawrence, LoveOGram, 6),
    new Connection(Lawrence, DannyLH, 6),
    new Connection(Lawrence, Bobbi, 6),
    new Connection(Lawrence, Sherman, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(Stacy, Bobbi, 2),
    new Connection(Stacy, DannyLH, 2),
    new Connection(Stacy, Sherman, 2),
    new Connection(Stacy, Hirano, 6),

    new Connection(Hirano, Bobbi, 2),
    new Connection(Hirano, DannyLH, 2),
    new Connection(Hirano, Sherman, 2),
    
    new Connection(Vivian, Bobbi, 3),
    new Connection(Vivian, DannyLH, 3),
    new Connection(Vivian, Sherman, 3),
    new Connection(Vivian, Linda, 3),
    new Connection(Vivian, Lawrence, 3),
    new Connection(Vivian, Milly, 3),
    new Connection(Vivian, LoveOGram, 3),
    new Connection(Vivian, Ginger, 3),
    new Connection(Vivian, Ferb, 3),
    new Connection(Vivian, Isabella, 3),
    new Connection(Vivian, Gretchen, 3),
    
    new Connection(Stacy, Bobbi, 2),
    new Connection(Stacy, DannyLH, 2),
    new Connection(Stacy, Sherman, 2),
    
    new Connection(Johnson, Bobbi, 2),
    new Connection(Johnson, DannyLH, 2),
    new Connection(Johnson, Sherman, 2),
    
    new Connection(Bob, Bobbi, 2),
    new Connection(Bob, DannyLH, 2),
    new Connection(Bob, Sherman, 2),

    new Connection(Bobbi, DannyLH, 6),
    new Connection(Bobbi, Sherman, 6),
    new Connection(Bobbi, LoveOGram, 3),

    new Connection(DannyLH, Sherman, 6),
    
    new Connection(Sherman, LoveOGram, 3),

    new Connection(Doof, Vanessa, 6),
    new Connection(Doof, Johnny, 6),
    new Connection(Doof, Bobbi, 3),
    new Connection(Doof, DannyLH, 3),
    new Connection(Doof, Sherman, 3),

    new Connection(Beehive, Bobbi, 3),
    new Connection(Beehive, Phineas, 3),
    new Connection(Beehive, Ferb, 3),
    
    new Connection(Isabella, Bobbi, 3),
    new Connection(Isabella, DannyLH, 3),
    new Connection(Isabella, Sherman, 3),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),

    new Connection(Ginger, Bobbi, 3),
    new Connection(Ginger, DannyLH, 3),
    new Connection(Ginger, Sherman, 3),
    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),

    new Connection(Holly, Bobbi, 2),
    new Connection(Holly, DannyLH, 2),
    new Connection(Holly, Sherman, 2),
    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    // new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),

    new Connection(Gretchen, Bobbi, 3),
    new Connection(Gretchen, DannyLH, 3),
    new Connection(Gretchen, Sherman, 3),
    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),

    new Connection(Katie, Bobbi, 2),
    new Connection(Katie, DannyLH, 2),
    new Connection(Katie, Sherman, 2),
    // new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),

    // new Connection(Milly, Adyson, 6),
    new Connection(Milly, Bobby, 3),
    new Connection(Milly, DannyLH, 3),
    new Connection(Milly, Sherman, 3),

    new Connection(FricknNerd, Sherman, 3),
    new Connection(FricknNerd, Phineas, 3),
    new Connection(FricknNerd, Ferb, 3),

    new Connection(Vanessa, Johnny, 6),
    new Connection(Vanessa, Bobby, 3),
    new Connection(Vanessa, DannyLH, 3),
    new Connection(Vanessa, Sherman, 3),

    new Connection(Johnny, Doof, 2),
    new Connection(Johnny, Perry, 3),
    new Connection(Johnny, Bobby, 3),
    new Connection(Johnny, DannyLH, 3),
    new Connection(Johnny, Sherman, 3),

    new Connection(LoveOGram, DannyLH, 6),
    new Connection(LoveOGram, Bobbi, 3),
    new Connection(LoveOGram, Sherman, 3),
  ];
  var episode25Bits = [
    gonnaDo, wherePerry, littleYoung, lindana, curseYou
  ];
  var ep25 = new Episode(25, "114", "Dude, We're Gettin' the Band Back Together!", "Love Händel", "Vanessa's Birthday", 
    episode25Songs, episode25Characters, episode25Interactions, episode25Bits, 2);
  {//bitHandler
    gonnaDo.addAppearance(25, Phineas);
    wherePerry.addAppearance(25, Phineas);
    littleYoung.addAppearance(25, DannyLH);
    lindana.addAppearance(25);
    curseYou.addModifiedAppearance(25, Vanessa);
  }
const report = diffInteractions({
  original: episode25Interactions,
  rebuilt: findStrongestConnections(ep25.interactions)
});
logDiff(report, "Ep25");
}

{//26
  var episode26Songs = [
    new Song("Ready for the Bettys", [Crash, Tink, Missy, Candace, Stacy]),
  ];
  var episode26Characters = [
    Candace,
    Stacy,
    Tink,
    Crash,
    Missy,
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Dennis,
    Monogram,
    Perry,
    Doof,
    Isabella
  ];
  var episode26Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Stacy, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Monogram, 6),
    new Connection(Phineas, Isabella, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Stacy, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Monogram, 6),
    new Connection(Ferb, Isabella, 6),

    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Linda, 6),
    new Connection(Candace, Dennis, 6),
    new Connection(Candace, Tink, 6),
    new Connection(Candace, Tink, 6),
    new Connection(Candace, Missy, 6),

    new Connection(Stacy, Linda, 6),
    new Connection(Stacy, Lawrence, 6),
    new Connection(Stacy, Dennis, 6),
    new Connection(Stacy, Tink, 6),
    new Connection(Stacy, Tink, 6),
    new Connection(Stacy, Missy, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Linda, Lawrence, 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),

    new Connection(Carl, Phineas, 5.5),
    new Connection(Carl, Ferb, 5.5),

    new Connection(Crash, Tink, 6),
    new Connection(Crash, Missy, 6),
    new Connection(Crash, Dennis, 6),

    new Connection(Tink, Missy, 6),
    new Connection(Tink, Dennis, 6),

    new Connection(Missy, Dennis, 6),
  ];
  var episode26Bits = [
    wherePerry, curseYou, whatchaDoin
  ];
  var ep26 = new Episode(26, "115a", "Ready for the Bettys", "Agent P. Land", "Destruct-inator", 
    episode26Songs, episode26Characters, episode26Interactions, episode26Bits, 6);
  {//bitHandler
    wherePerry.addAppearance(26, Phineas);
    curseYou.addAppearance(26, Doof);
    whatchaDoin.addModifiedAppearance(26, Isabella);
  }
}

{//27
  var episode27Songs = [
    new Song("Flying Fishmonger", [Phineas, Ferb, Isabella, Milly, Gretchen, Holly, Adyson, Milly]),
  ];
  var episode27Characters = [
    Reginald,
    Winifred,
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Candace,
    Stacy,
    Construction,
    Isabella,
    Perry,
    Carl,
    Monogram,
    Tilly,
    Lily,
    Bob,
    Jeremy,
    Johnson,
    Boris,
    Baljeet,
    Buford,
    FishingHat,
    Milly,
    Gretchen,
    Katie,
    Adyson,
    Holly,
    Dimitri,
    Kris
  ];
  var episode27Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Winifred, 6),
    new Connection(Phineas, Reginald, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Adyson, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Winifred, 6),
    new Connection(Ferb, Reginald, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Adyson, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Winifred, 6),
    new Connection(Candace, Reginald, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Johnson, 2),

    new Connection(Linda, Lawrence, 6),
    new Connection(Linda, Winifred, 6),
    new Connection(Linda, Reginald, 6),
    new Connection(Linda, Stacy, 2),

    new Connection(Lawrence, Reginald, 6),
    new Connection(Lawrence, Winifred, 6),
    new Connection(Lawrence, Stacy, 2),
    
    new Connection(Reginald, Winifred, 6),
    new Connection(Reginald, Milly, 3),
    new Connection(Reginald, Holly, 3),
    new Connection(Reginald, Gretchen, 3),
    new Connection(Reginald, Katie, 3),
    new Connection(Reginald, Adyson, 3),

    new Connection(Winifred, Stacy, 2),

    new Connection(Perry, Carl, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Boris, 2),

    new Connection(Monogram, Doof, 3),
    new Connection(Monogram, Carl, 6),

    new Connection(Carl, Doof, 4),

    new Connection(Doof, Boris, 6),

    new Connection(Isabella, Reginald, 2),
    new Connection(Isabella, Ferb, 4),
    new Connection(Isabella, Perry, 5),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Adyson, 6),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),

    new Connection(Milly, Adyson, 6),

    new Connection(Milly, Gretchen, 6),

    new Connection(Tilly, Lily, 6),
    new Connection(Tilly, Bob, 1),

    new Connection(Lily, Bob, 1),

    new Connection(Jeremy, Johnson, 5),

    new Connection(Baljeet, Buford, 6),

    new Connection(FishingHat, Phineas, 3),
    new Connection(FishingHat, Ferb, 3),
    new Connection(FishingHat, Reginald, 3),
    new Connection(FishingHat, Isabella, 3),
    new Connection(FishingHat, Milly, 3),
    new Connection(FishingHat, Gretchen, 3),
    new Connection(FishingHat, Holly, 3),
    new Connection(FishingHat, Adyson, 3),
    new Connection(FishingHat, Bob, 1),

    new Connection(Bob, Phineas, 3),
    new Connection(Bob, Ferb, 3),
    new Connection(Bob, Reginald, 3),
    new Connection(Bob, Isabella, 3),
    new Connection(Bob, Gretchen, 3),
    new Connection(Bob, Holly, 3),
    new Connection(Bob, Adyson, 3),

    new Connection(Dimitri, Kris, 1),

  ];
  var episode27Bits = [
    gonnaDo, ggg, whatchaDoin, curseYou
  ];
  var ep27 = new Episode(27, "115b", "The Flying Fishmonger", "Leap McGregor's Gorge", "Now Who's Blinded by Sand-inator", 
    episode27Songs, episode27Characters, episode27Interactions, episode27Bits, 2);
  {//bitHandler
    gonnaDo.addAppearance(27, Phineas);
    ggg.addAppearance(27);
    whatchaDoin.addAppearance(27);
    wherePerry.addModifiedAppearance(27, Isabella);
    curseYou.addAppearance(27, Doof);
  }
}
//#endregion

//var unpackedEpisodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10, ep11, ep12, ep13, ep14, ep15, ep16, ep17, ep18, ep19, ep20, ep21, ep22, ep23, ep24, ep25];
//#region Packaging
var unpackedEpisodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10, ep11, ep12, ep13, ep14, ep15, ep16, ep17, ep18, ep19, ep20, ep21, ep22, ep23, ep24];

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