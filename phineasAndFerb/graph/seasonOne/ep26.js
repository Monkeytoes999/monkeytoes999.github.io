import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep26 = new Episode({
  number: 26,
  code: "115a",
  title: "Ready for the Bettys",
  aPlot: "P&F find Agent P.'s Layer",
  bPlot: "Who even knows. Destructinator again.",
  songs: [
    new Song("Ready for the Bettys", [Crash, Tink, Missy, Candace, Stacy]),
  ],
  characters: [
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
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace, Stacy], 6),
    connectAll([Candace, Stacy, Crash, Tink, Missy, Dennis], 6),

    groupConnections([Phineas, Ferb], [Doof], 2),
    groupConnections([Phineas, Ferb], [Isabella], 6),
    groupConnections([Phineas, Ferb, Perry, Carl], [Monogram], 6),
    groupConnections([Carl], [Phineas, Ferb], 5.5),
    groupConnections([Perry], [Phineas, Linda, Doof], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Linda, Isabella, 2),
  ],
  bits: [wherePerry, curseYou, whatchaDoin],
  ferbLines: 6,
});

//#region Bit Handler
wherePerry.addAppearance(ep26, Phineas);
curseYou.addAppearance(ep26, Doof);
whatchaDoin.addModifiedAppearance(ep26, Isabella);
//#endregion
