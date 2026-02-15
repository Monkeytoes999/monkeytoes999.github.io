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
Phineas.addFamily(FarFarMorFletcher);
Phineas.addFamily(Tiana);
Phineas.addFamily(Webber);
Phineas.addFamily(UncleAngus);
Phineas.addFamily(AuntMora);

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
Ferb.addFamily(FarFarMorFletcher);
Ferb.addFamily(Tiana);
Ferb.addFamily(Webber);
Ferb.addFamily(UncleAngus);
Ferb.addFamily(AuntMora);

Candace.addFamily(Linda);
Candace.addFamily(Lawrence);
Candace.addFamily(Perry);
Candace.addFamily(Clyde);
Candace.addFamily(BettyJo);
Candace.addFamily(Lorraine);
Candace.addFamily(Winifred);
Candace.addFamily(Reginald);
Candace.addFamily(FarFarMorFletcher);
Candace.addFamily(Tiana);
Candace.addFamily(Webber);
Candace.addFamily(UncleAngus);
Candace.addFamily(AuntMora);

Linda.addFamily(Lawrence);
Linda.addFamily(Perry);
Linda.addFamily(Clyde);
Linda.addFamily(BettyJo);
Linda.addFamily(Lorraine);
Linda.addFamily(Winifred);
Linda.addFamily(Reginald);
Linda.addFamily(Tiana);
Linda.addFamily(Webber);
Linda.addFamily(UncleAngus);
Linda.addFamily(AuntMora);

Lawrence.addFamily(Perry);
Lawrence.addFamily(Clyde);
Lawrence.addFamily(BettyJo);
Lawrence.addFamily(Lorraine);
Lawrence.addFamily(Winifred);
Lawrence.addFamily(Reginald);
Lawrence.addFamily(FarFarMorFletcher);
Lawrence.addFamily(Tiana);
Lawrence.addFamily(Webber);
Lawrence.addFamily(UncleAngus);
Lawrence.addFamily(AuntMora);

Perry.addFamily(Clyde);
Perry.addFamily(BettyJo);
Perry.addFamily(Lorraine);
Perry.addFamily(Winifred);
Perry.addFamily(Reginald);

Clyde.addFamily(BettyJo);
Clyde.addFamily(Lorraine);
Clyde.addFamily(Tiana);
Clyde.addFamily(Webber);

BettyJo.addFamily(Lorraine);
BettyJo.addFamily(Tiana);
BettyJo.addFamily(Webber);

Lorraine.addFamily(Tiana);
Lorraine.addFamily(Webber);

Winifred.addFamily(Reginald);
Winifred.addFamily(FarFarMorFletcher);
Winifred.addFamily(UncleAngus);
Winifred.addFamily(AuntMora);

Reginald.addFamily(Ferbgor);
Reginald.addFamily(FarFarMorFletcher);
Reginald.addFamily(UncleAngus);
Reginald.addFamily(AuntMora);

Webber.addFamily(Tiana);

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
Doof.addFamily(UncleFluffyPants);
Doof.addFamily(DoofUncleJustin);

Vanessa.addFamily(Roger);
Vanessa.addFamily(Charlene);

DoofDad.addFamily(DoofMom);
DoofDad.addFamily(Jekyll);
DoofDad.addFamily(UncleFluffyPants);
DoofDad.addFamily(DoofUncleJustin);

DoofMom.addFamily(UncleFluffyPants);
DoofMom.addFamily(DoofUncleJustin);

Lily.addFamily(Tilly);

Django.addFamily(Beppo);
Django.addFamily(Jenny);

Jenny.addFamily(Beppo);

Farmer.addFamily(FarmerWife);

Buford.addFamily(Biffany);
Buford.addFamily(Adjacent);

Baljeet.addFamily(MrsTjinder);
Baljeet.addFamily(UncleMaulik);
Baljeet.addFamily(UncleKamal);

MrsTjinder.addFamily(UncleMaulik);
MrsTjinder.addFamily(UncleKamal);

Orville.addFamily(Wilbur);

KP.addFamily(GKP);

Irving.addFamily(Albert);
Irving.addFamily(MrsDuBois);

Albert.addFamily(MrsDuBois);

//I'm not doing the future kids, except to each other.
Xavier.addFamily(Amanda);
Xavier.addFamily(Fred);

Amanda.addFamily(Fred);
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
import {ep48} from "./graph/seasonTwo/ep48.js";
import {ep49} from "./graph/seasonTwo/ep49.js";
import {ep50} from "./graph/seasonTwo/ep50.js";
import {ep51} from "./graph/seasonTwo/ep51.js";
import {ep52} from "./graph/seasonTwo/ep52.js";
import {ep53} from "./graph/seasonTwo/ep53.js";
import {ep54} from "./graph/seasonTwo/ep54.js";
import {ep55} from "./graph/seasonTwo/ep55.js";
import {ep56} from "./graph/seasonTwo/ep56.js";
import {ep57} from "./graph/seasonTwo/ep57.js";
import {ep58} from "./graph/seasonTwo/ep58.js";
import {ep59} from "./graph/seasonTwo/ep59.js";
import {ep60} from "./graph/seasonTwo/ep60.js";
import {ep61} from "./graph/seasonTwo/ep61.js";
import {ep62} from "./graph/seasonTwo/ep62.js";
import {ep63} from "./graph/seasonTwo/ep63.js";
import {ep64} from "./graph/seasonTwo/ep64.js";
import {ep65} from "./graph/seasonTwo/ep65.js";
import {ep67} from "./graph/seasonTwo/ep67.js";
import {ep68} from "./graph/seasonTwo/ep68.js";
import {ep69} from "./graph/seasonTwo/ep69.js";
import {ep70} from "./graph/seasonTwo/ep70.js";
import {ep71} from "./graph/seasonTwo/ep71.js";
import {ep72} from "./graph/seasonTwo/ep72.js";
import {ep73} from "./graph/seasonTwo/ep73.js";
import {ep74} from "./graph/seasonTwo/ep74.js";
import {ep75} from "./graph/seasonTwo/ep75.js";
import {ep76} from "./graph/seasonTwo/ep76.js";
import {ep77} from "./graph/seasonTwo/ep77.js";
import {ep78} from "./graph/seasonTwo/ep78.js";
import {ep79} from "./graph/seasonTwo/ep79.js";
import {ep80} from "./graph/seasonTwo/ep80.js";
import {ep81} from "./graph/seasonTwo/ep81.js";
import {ep82} from "./graph/seasonTwo/ep82.js";
import {ep83} from "./graph/seasonTwo/ep83.js";
import {ep84} from "./graph/seasonTwo/ep84.js";
import {ep85} from "./graph/seasonTwo/ep85.js";
import {ep86} from "./graph/seasonTwo/ep86.js";
import {ep87} from "./graph/seasonTwo/ep87.js";
import {ep88} from "./graph/seasonTwo/ep88.js";
import {ep89} from "./graph/seasonTwo/ep89.js";
import {ep90} from "./graph/seasonTwo/ep90.js";
import {ep91} from "./graph/seasonTwo/ep91.js";
import {ep92} from "./graph/seasonTwo/ep92.js";
import {ep93} from "./graph/seasonTwo/ep93.js";
import {ep94} from "./graph/seasonTwo/ep94.js";
import {ep95} from "./graph/seasonTwo/ep95.js";
import {ep96} from "./graph/seasonTwo/ep96.js";
import {ep97} from "./graph/seasonTwo/ep97.js";
import {ep98} from "./graph/seasonTwo/ep98.js";
import {ep99} from "./graph/seasonTwo/ep99.js";
import {ep100} from "./graph/seasonTwo/ep100.js";

//#endregion

var S1Episodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10, ep11, ep12, ep13, ep14, ep15, ep16, ep17, ep18, ep19, ep20, ep21, ep22, ep23, ep24, ep25, ep26, ep27, ep28, ep29, ep30, ep31, ep32, ep33, ep34, ep35, ep36, ep37, ep38, ep39, ep40, ep41, ep42, ep43, ep44, ep45, ep46, ep47];
var S2Episodes = [ep48, ep49, ep50, ep51, ep52, ep53, ep54, ep55, ep56, ep57, ep58, ep59, ep60, ep61, ep62, ep63, ep64, ep65, ep67, ep68, ep69, ep70, ep71, ep72, ep73, ep74, ep75, ep76, ep77, ep78, ep79, ep80, ep81, ep82, ep83, ep84, ep85, ep86, ep87, ep88, ep89, ep90, ep91, ep92, ep93, ep94, ep95, ep96, ep97, ep98, ep99, ep100];

var allEpisodes = [];
allEpisodes = allEpisodes.concat(S1Episodes, S2Episodes);

export function PackNMap(unpackedEpisodes=allEpisodes, familyConnections=true, onlyDirect=false) {
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
    const visited = new Map();
    
    for (let i = 0; i < connections.length; i++) {
      
      let connA = connections[i];
      let strength = connA.getConnectionLevel();
      let conFrom = connA.getConnectionSource().getID();
      let conTo = connA.getConnectionDestination().getID();

      let key = `${conFrom}-${conTo}`
      let revKey = `${conTo}-${conFrom}`

      if (visited.has(key) && (allowFamilial || strength != 7)) {
        if (visited.get(key).strength < strength){

          if (visited.get(key).strength == 1) {
            if (!visited.has(revKey)) {
              let connB = new Connection(connA.getConnectionDestination(), connA.getConnectionSource(), 1);
              visited.set(revKey, {"strength": 1, "conn": connB})
            }
          }

          visited.set(key, {"strength": strength, "conn": connA});

          if (strength >= 6 && visited.has(revKey)) {
            visited.delete(revKey);
          }
        }
      } else if (visited.has(revKey) && visited.get(revKey).strength >= 6) {
        continue;
      } else {
          visited.set(key, {"strength": strength, "conn": connA});
      }
    }

    return Array.from(visited.values()).map(c => c.conn);
  }

  allConnections = findStrongestConnections(allConnections, (familyConnections && !onlyDirect));

  // PURGE NON-DIRECT
  if (onlyDirect) {
    var directConnections = [];
    allConnections.forEach(con => {
      if (con.getConnectionLevel() == 6) {
        directConnections.push(con);
      }
    });
    allConnections = directConnections;
  }

  allConnections.forEach(con => {
    packedConnections = packedConnections.concat(con.pack());
  });

  console.log(allConnections.length);
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
    },
    layout: {
      improvedLayout: false
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
    target: e.to,
    color: e.color
  }));

  const Graph = ForceGraph3D()
    (document.getElementById('3d-graph'))
      .graphData({ nodes, links })
      .nodeAutoColorBy('group')
      .nodeLabel(node => node.label);
  //#endregion
}

PackNMap(allEpisodes, true, false);