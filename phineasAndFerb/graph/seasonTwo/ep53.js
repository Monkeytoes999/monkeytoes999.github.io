import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep53 = new Episode({
  number: 53,
  code: "204a",
  title: "Day of the Living Gelatin!",
  aPlot: "Pool full of gelatin",
  bPlot: "Turn-Everything-Evil-inator",
  songs: [new Song("Come On, Kids!", [dannyJacob])],
  characters: [
    Candace,
    Stacy,
    Jenny,
    Jeremy,
    Perry,
    Phineas,
    Ferb,
    Isabella,
    Milly,
    Holly,
    Gretchen,
    Adyson,
    Katie,
    Ginger,
    Baljeet,
    Acronym,
    Poofenplotz,
    Pinky,
    Monogram,
    Doof,
    Linda,
  ],
  interactions: [
    connectAll([Candace, Stacy, Jenny, Phineas, Ferb], 6),
    connectAll([Phineas, Ferb, Perry, Candace], 6),
    connectAll([Phineas, Ferb, Baljeet, Stacy, Jenny, Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Stacy, Jenny], [Perry], 3),
    groupConnections([Perry, Pinky], [Acronym], 6),
    groupConnections([Monogram], [Doof, Acronym], 4),
    groupConnections([Candace], [Holly, Ginger, Adyson, Milly, Gretchen, Katie], 6),
    groupConnections([Linda, Jeremy], [Phineas, Ferb, Candace, Isabella, Stacy, Jenny, Gretchen, Adyson, Holly], 6),

    new Connection(Acronym, Poofenplotz, 4),
    new Connection(Perry, Poofenplotz, 2),

  ],
  bits: [ohTherePerry, gonnaDo, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
ohTherePerry.addAppearance(ep53, Phineas);
gonnaDo.addAppearance(ep53, Phineas);
wherePerry.addAppearance(ep53, Phineas);
//#endregion
