import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep125 = new Episode({
  number: 125,
  code: "307a",
  title: "Bad Hair Day",
  aPlot: "Hair Styling",
  bPlot: "Very Very Bad Inator",
  songs: [new Song("Dart Song", [Doof])],
  characters: [
    Stacy,
    Candace,
    Linda,
    Lawrence,
    Phineas,
    Ferb,
    Johnson,
    Perry,
    Monogram,
    Doof,
    Carl,
    Jeremy,
    Reynolds,
    FarFarMorFletcher,
    Fonzworth
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Stacy, Candace], 6),
    connectAll([Candace, Jeremy, Johnson], 6),
    connectAll([Phineas, Ferb, Linda], 6),
    connectAll([Phineas, Ferb, Candace, Johnson, Jeremy], 6),

    // groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Candace, Jeremy, Johnson], [Reynolds], 1),
    groupConnections([Stacy], [Linda, Lawrence], 4),
    groupConnections([Monogram, Carl], [Doof], 4),
    groupConnections([Candace], [Linda, Lawrence], 2),
    groupConnections([Stacy], [Johnson, Jeremy], 2),
    groupConnections([Reynolds], [Candace], 3),

    new Connection(Johnson, Fonzworth, 4),
    new Connection(Jeremy, Fonzworth, 3),
    new Connection(Candace, Fonzworth, 5.5),
    new Connection(Candace, FarFarMorFletcher, 6),
    new Connection(Jeremy, FarFarMorFletcher, 1),
    new Connection(Linda, Candace, 2),
    new Connection(Stacy, Perry, 4),
    new Connection(Candace, Perry, 2),
    new Connection(Perry, Doof, 6),
    new Connection(Phineas, Johnson, 3),
  ],
  bits: [wherePerry, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep125, Stacy);
curseYou.addAppearance(ep125, Doof);
//#endregion
