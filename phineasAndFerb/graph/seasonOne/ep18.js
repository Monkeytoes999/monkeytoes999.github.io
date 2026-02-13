import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep18 = new Episode({
  number: 18,
  code: "110b",
  title: "I, Brobot",
  aPlot: "Phinedroids and Ferbots",
  bPlot: "Giant magnet [erase answering machine]",
  songs: [
    new Song("Phinedroids and Ferbots", [Phineas, Ferb]),
  ],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Santa,
    Monogram,
    Doof,
    Carl,
    Candace,
    Stacy, //on phone
    Hirano //also on phone
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda], 6),
    connectAll([Stacy, Hirano, Candace], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Perry, Doof], [Santa], 6),
    groupConnections([Monogram], [Doof, Santa], 4),

    new Connection(Monogram, Carl, 6),
    new Connection(Carl, Santa, 2),
  ],
  bits: [wherePerry, ggg, panicRoom],
  ferbLines: 0,
});

//#region Bit Handler
wherePerry.addAppearance(ep18, Phineas);
ggg.addAppearance(ep18);
panicRoom.addAppearance(ep18)
//#endregion
