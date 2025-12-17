import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep56 = new Episode({
  number: 56,
  code: "205b",
  title: "Chez Platypus",
  aPlot: "Make a restaurant",
  bPlot: "Delove-inator",
  songs: [new Song("Happy Evil Love Song", [Doof, sheenaEaston])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Linda,
    Lawrence,
    Stacy,
    Candace,
    Jeremy,
    Isabella,
    Gretchen,
    Ginger,
    Katie,
    Baljeet,
    Buford,
    Monogram,
    Doof,
    Carl,
    PhilAnnouncer,
    GFBH,
    Adyson,
    Milly,
    Dimitri,
    Dink,
    Sven,
    Haney,
    Margaret,
    Holly,
    Baljeet
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry], 6),
    connectAll([Phineas, Ferb, Isabella, Gretchen, Ginger, Katie, Adyson, Milly, Holly, Baljeet, Buford, Jeremy, Candace, Linda, Lawrence], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace, Jeremy], [Doof, GFBH], 3),
    groupConnections([Isabella, Buford], [PhilAnnouncer, Doof, Dink, Dimitri, Sven], 6),
    groupConnections([Ferb], [Adyson, Milly], 6),
    groupConnections([Phineas, Ferb], [PhilAnnouncer], 6),
    groupConnections([Ginger, Holly], [PhilAnnouncer], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 3),
    new Connection(Carl, Monogram, 2),
    new Connection(Isabella, Perry, 4),
    new Connection(GFBH, Buford, 6),
    new Connection(Margaret, Haney, 1),
  ],
  bits: [gonnaDo, whatchaDoin, wherePerry, lindana, ohTherePerry, quirkyWorky],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep56, Phineas);
whatchaDoin.addAppearance(ep56, Isabella);
wherePerry.addAppearance(ep56, Phineas);
lindana.addAppearance(ep56);
ohTherePerry.addAppearance(ep56, Phineas);
quirkyWorky.addAppearance(ep56); 
//#endregion
