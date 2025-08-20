import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep6 = new Episode({
  number: 6,
  code: "103b",
  title: "S'Winter",
  aPlot: "S'Winter",
  bPlot: "Melt-inator 6-5000 [Chocolate Doofs]",
  songs: [
    new Song("S'Winter", [Adyson, Gretchen, Isabella, Phineas, Ferb])
  ],
  characters: [
    Phineas,
    Ferb,
    Lawrence,
    Linda,
    Candace,
    Isabella,
    Milly,
    Katie,
    Ginger,
    Holly,
    Timmy,
    Sam,
    Gretchen,
    Jeremy,
    DD,
    Stacy,
    Django,
    Dimitri,
    Buford,
    FishingHat,
    Baljeet,
    Logan,
    Kris,
    DumbassGinger,
    Pedro,
    Tilly,
    Lily,
    Bob
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda, Lawrence], 6),
    connectAll([Phineas, Ferb, Isabella, Milly, Katie, Ginger, Holly], 6),
    connectAll([Isabella, Gretchen, Adyson], 6),
    connectAll([Candace, Jeremy, DD], 6),
    connectAll([Jeremy, Logan, Baljeet, Pedro, Django, Buford, Dimitri], 1),

    groupConnections([Phineas, Ferb, Candace], [Perry], 6),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Vanessa, Buford, FishingHat], 6),
    groupConnections([Jeremy, Sam, Logan, Baljeet, Pedro], [Stacy, DumbassGinger], 1),
    groupConnections([Kris], [Logan, Baljeet, Sam, Jeremy, Pedro, DumbassGinger], 1),
    groupConnections([Timmy, Jeremy, Stacy, Sam, Django, Kris, Logan, Baljeet, DumbassGinger, Pedro, Dimitri, Buford], [Phineas, Ferb], 3),
    groupConnections([Django], [Vanessa, Sam], 3),
    groupConnections([Timmy, Sam, Django, Kris, Logan, Baljeet, DumbassGinger, Pedro, Dimitri], [Candace], 3),
    groupConnections([Jeremy, Sam, Kris, Logan, Baljeet, DumbassGinger, Pedro], [Timmy], 3),
    groupConnections([Sam, Vanessa, Logan, DumbassGinger, Dimitri], [Jeremy], 3),
    groupConnections([FishingHat], [Dimitri, Tilly, Lily], 1),
    groupConnections([Stacy], [Django, Buford, Dimitri], 1),
    groupConnections([Timmy], [Gretchen, Adyson, Isabella], 3),
    groupConnections([Sam], [Logan, Baljeet, Pedro, Django, Buford, Dimitri], 1),

    new Connection(Monogram, Doof, 4),
    new Connection(Tilly, Lily, 6),
    new Connection(Stacy, DD, 4),
    new Connection(Sam, Vanessa, 3),
    new Connection(Candace, Dimitri, 3), //There's no shot this is a two-way interaction and 3 seems like the best descriptor
    new Connection(Isabella, Pedro, 6),
    new Connection(Vanessa, DD, 3), //This is kinda a stretch but
    new Connection(Timmy, Django, 1),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, ohTherePerry],
  ferbLines: 1,
});
//#region Bit Handler
gonnaDo.addAppearance(ep6, Phineas);
wherePerry.addAppearance(ep6, Phineas);
whatchaDoin.addAppearance(ep6, Isabella);
ohTherePerry.addAppearance(ep6, Phineas);
//#endregion