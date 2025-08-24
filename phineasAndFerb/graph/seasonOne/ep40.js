import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep = new Episode({
  number: 40,
  code: "122b",
  title: "Oil on Candace",
  aPlot: "Large paint",
  bPlot: "Impress Dr. Gevaarlijk. Also uh I think that's just another version of the destructinator",
  songs: [
    new Song("Impress My Professor", [Doof]),
  ],
  characters: [
    Tilly,
    Lily,
    Phineas,
    Ferb,
    Django,
    Linda,
    Lawrence,
    Candace,
    Beppo,
    Perry,
    Monogram,
    Doof,
    Gevaarlijk
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda, Lawrence, Django], 6),
    connectAll([Phineas, Linda], [Beppo], 4),
    connectAll([Ferb, Lawrence, Candace], [Beppo], 3),
    connectAll([Gevaarlijk, Doof, Perry], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace, Linda], [Perry], 4),
    groupConnections([Monogram], [Doof, Gevaarlijk], 4),
    
    new Connection(Django, Beppo, 6),
  ],
  bits: [doMuch, ohTherePerry, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
doMuch.addAppearance(ep40, Gevaarlijk);
ohTherePerry.addAppearance(ep40, Doof);
curseYou.addModifiedAppearance(ep40, Doof);
//#endregion
