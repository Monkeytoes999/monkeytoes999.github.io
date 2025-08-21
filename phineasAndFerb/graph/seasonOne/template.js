import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep = new Episode({
  number: 0,
  code: "",
  title: "",
  aPlot: "",
  bPlot: "",
  songs: [],
  characters: [
    Phineas,
    Ferb,
  ],
  interactions: [
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    
    new Connection(Monogram, Doof, 4),
  ],
  bits: [],
  ferbLines: 1,
});

//#region Bit Handler
//#endregion
