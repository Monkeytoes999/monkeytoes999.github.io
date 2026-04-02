import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep119 = new Episode({
  number: 119,
  code: "303b",
  title: "Moon Farm",
  aPlot: "Moon Cow Ice Cream",
  bPlot: "Moisture Suckinator",
  songs: [new Song("Moon Farm", [DRSV])],
  characters: [
    Stacy,
    Candace,
    Jeremy,
    Phineas,
    Ferb,
    Isabella,
    Baljeet,
    Buford,
    Perry,
    Monogram,
    Doof,
    Irving,
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford], 6),
    connectAll([Phineas, Ferb, Candace], 6),
    connectAll([Phineas, Ferb, Candace, Stacy, Irving], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Candace, Stacy], [Jeremy], 5),
    groupConnections([Ferb, Isabella, Baljeet, Buford], [Perry], 2),
    groupConnections([Baljeet, Buford, Isabella], [Candace], 3),

    new Connection(Monogram, Carl, 6),
    new Connection(Phineas, Perry, 4),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [],
  ferbLines: 1,
});

//#region Bit Handler
//#endregion
