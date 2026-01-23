import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep73 = new Episode({
  number: 73,
  code: "215b",
  title: "Spa Day",
  aPlot: "Build a Spa",
  bPlot: "He gets a cat friend for the episode. Also uh painting arm.",
  songs: [new Song("Spa Day", [Phineas, Ferb, Milly, Katie, Isabella, Ginger, Holly]), new Song("Dr. Coconut", [dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Stacy,
    Isabella,
    Doof,
    Tilly,
    Lily,
    UncleFluffyPants,
    Jeremy,
    Milly,
    Holly,
    Baljeet,
    Buford,
    Bimmany,
    Monogram,
    Carl,
    Ginger,
    Katie,
    Gretchen,
    Gartanial,
    Sam
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Isabella, Milly, Holly, Phineas, Baljeet], 6),
    connectAll([Phineas, Ferb, Perry], 6),
    connectAll([Phineas, Ferb, Candace, Stacy], 6),
    connectAll([Candace, Stacy, Bimmany], 6),
    connectAll([Milly, Ginger, Candace], 6),
    connectAll([Holly, Isabella, Ginger, Candace, Stacy], 6),
    connectAll([Holly, Katie, Isabella, Candace, Stacy], 6),
    connectAll([Phineas, Ferb, Milly, Katie, Isabella, Ginger, Holly], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Isabella, Jeremy], [Candace, Stacy], 6),
    groupConnections([Sam], [Doof, Gartanial], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Tilly, Lily, 6),
    new Connection(Doof, UncleFluffyPants, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 3),
    new Connection(Doof, Monogram, 4),
    new Connection(Doof, Carl, 4),
    new Connection(Phineas, Buford, 4),
    new Connection(Baljeet, Buford, 2),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Gartanial, Doof, 6),
  ],
  bits: [whatchaDoin, littleYoung, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addModifiedAppearance(ep73, Isabella);
whatchaDoin.addAppearance(ep73, Isabella);
littleYoung.addAppearance(ep73);
wherePerry.addAppearance(ep73, Phineas);
//#endregion
