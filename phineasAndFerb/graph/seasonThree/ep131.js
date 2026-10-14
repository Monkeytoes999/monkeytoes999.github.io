import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep131 = new Episode({
  number: 131,
  code: "310a",
  title: "Mommy Can You Hear Me?",
  aPlot: "",
  bPlot: "Chicken Soup-inator",
  songs: [],
  characters: [
    Candace,
    Jeremy,
    TinyCowboy,
    Linda,
    Stacy,
    Lawrence,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Doof,
    Isabella,
    Buford,
    Baljeet,
    Bob,
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Candace, Linda], 6),
    connectAll([Phineas, Ferb, Isabella, Buford, Baljeet, Linda], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Stacy], [Candace, Phineas, Ferb, Linda], 6),
    groupConnections([Candace], [TinyCowboy, Jeremy], 4),
    groupConnections([Phineas, Ferb, Candace], [Lawrence], 3),
    groupConnections([Phineas, Ferb, Candace], [Perry], 2),
    groupConnections([Ferb, Baljeet, Buford, Isabella], [Bob], 2),
    groupConnections([Bob], [Phineas, Ferb], 4),
    
    new Connection(Phineas, Bob, 4),
    new Connection(Isabella, Linda, 6),
    new Connection(Lawrence, Perry, 4),
    new Connection(Linda, Lawrence, 5),
    new Connection(Candace, Lawrence, 2),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Candace, Jeremy, 4),
    new Connection(Monogram, Doof, 4),
  ],
  bits: [wherePerry, whatchaDoin, aPlatypus],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep131, Lawrence);
whatchaDoin.addModifiedAppearance(ep131, Isabella);
aPlatypus.addModifiedAppearance(ep131, Doof);
//#endregion
