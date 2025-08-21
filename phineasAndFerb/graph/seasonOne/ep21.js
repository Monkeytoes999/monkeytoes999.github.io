import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep21 = new Episode({
  number: 21,
  code: "112a",
  title: "Run Away Runway",
  aPlot: "Forever Summer Fasion Line",
  bPlot: "Copy-and-paste-inator [Clones]",
  songs: [
    new Song("Forever Summer", [dannyJacob, swampyMarsh]),
  ],
  characters: [
    Candace,
    Phineas,
    Perry,
    Gaston,
    Ferb,
    Stacy,
    Monogram,
    Doof,
    Milly,
    Katie,
    Ginger,
    Adyson,
    Holly,
    BEngineer,
    Pedro,
    Johnson,
    Haney,
    Bob,
    Tilly,
    Lily,
    Sam,
    Timmy
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda], 6),
    connectAll([Phineas, Ferb, Isabella, Milly, Holly, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof, Phineas, Ferb, Candace], 6),
    groupConnections([Phineas, Ferb, Candace, BEngineer], [Gaston], 6),
    groupConnections([Isabella, Stacy, Pedro, Johnson, Haney, Bob, Lily, Sam, Timmy], [Gaston], 3),
    groupConnections([Lily, Sam, Timmy], [Doof], 3),
    groupConnections([Sam], [Lily, Timmy], 1),
    groupConnections([Pedro], [Phineas, Ferb], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Tilly, Lily, 6),
    new Connection(Candace, BEngineer, 3),
    new Connection(Candace, Stacy, 6),
    new Connection(Stacy, Ferb, 4),
    new Connection(Timmy, Lily, 6),
    new Connection(Johnson, Doof, 1),
    new Connection(Isabella, Linda, 6),
  ],
  bits: [whatchaDoin, gonnaDo, curseYou, pharmacist, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addModifiedAppearance(ep21, Phineas);
gonnaDo.addAppearance(ep21, Phineas);
gonnaDo.addModifiedAppearance(ep21, Candace);
whatchaDoin.addAppearance(ep21, Isabella);
curseYou.addAppearance(ep21, Doof);
pharmacist.addAppearance(ep21);
ohTherePerry.addAppearance(ep21, Phineas);
//#endregion
