import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep64 = new Episode({
  number: 64,
  code: "210a",
  title: "Oh, There You Are, Perry",
  aPlot: "'Plat-Attractor 3000' [find Perry]",
  bPlot: "The Regurgitator",
  songs: [new Song("Come Home Perry", [Phineas, Ferb, Perry, Isabella, Baljeet, Buford, Jeremy, Gretchen, Ginger, Milly, Adyson, Holly, Katie, Perry])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Monogram,
    Regurgitator,
    Carl,
    AgentSnail,
    Marty,
    Kris,
    Jeremy,
    Katie,
    Ginger,
    Adyson,
    Gretchen,
    Milly,
    Holly,
    Balthazar,
    Pedro,
    Greg,
    Bimmany,
    Hoxx,
    Kris,
    GuyzNtheParque, //ONLY  HAT/GLASSES DUDE
    Gartanial,
    Terrance,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Isabella, Baljeet, Buford, Jeremy, Gretchen, Ginger, Milly, Adyson, Holly, Katie], 6),
    connectAll([Regurgitator, Doof, Perry], 6),
    connectAll([Greg, Bimmany, Kris, GuyzNtheParque, Hoxx], 1),

    groupConnections([Perry], [Phineas, Ferb, Candace, Monogram, Doof, Carl, Isabella, Baljeet, Katie, Milly, Ginger, Holly], 6),
    groupConnections([Monogram, Carl], [Regurgitator], 4),
    groupConnections([Monogram], [Doof, AgentSnail], 4),
    groupConnections([Kris, Balthazar, Pedro, Greg, Bimmany, Kris, GuyzNtheParque, Gartanial, Terrance, Hoxx], [Phineas, Ferb, Perry, Isabella, Baljeet, Buford, Jeremy, Gretchen, Ginger, Milly, Adyson, Holly, Katie], 3),
    groupConnections([Buford, Jeremy, Gretchen, Adyson], [Perry], 4),

    new Connection(Monogram, Carl, 6),
    new Connection(Marty, Candace, 6),
    new Connection(Pedro, Balthazar, 1),
    new Connection(Gartanial, Terrance, 1),
    new Connection(Perry, AgentSnail, 2),
  ],
  bits: [ohTherePerry, lindana, ggg, selfDestruct, curseYou],
  ferbLines: 0,
});

//#region Bit Handler
ohTherePerry.addModifiedAppearance(ep64);
ohTherePerry.addModifiedAppearance(ep64, Candace);
lindana.addAppearance(ep64);
ggg.addModifiedAppearance(ep64, Marty);
selfDestruct.addModifiedAppearance(ep64);
curseYou.addAppearance(ep64, Doof);
ohTherePerry.addAppearance(ep64, Candace);
//#endregion
