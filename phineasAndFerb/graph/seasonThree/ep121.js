import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep121 = new Episode({
  number: 121,
  code: "305a",
  title: "Ask a Foolish Question",
  aPlot: "Supercomputer",
  bPlot: "Metal Unearth-inator | All-purpose-inator",
  songs: [new Song("Super Computer", [dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Isabella,
    Baljeet,
    Buford,
    Candace,
    Perry,
    Monogram,
    Doof,
    Norm,
    Gretchen,
    Adyson,
    Holly,
    Katie,
    Milly,
    Ginger,
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Linda, Candace], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Isabella, Baljeet, Buford], [Linda], 4),
    groupConnections([Phineas, Ferb, Baljeet, Buford], [Katie, Milly, Holly, Ginger, Adyson, Gretchen], 3),
    groupConnections([Isabella], [Gretchen, Milly, Holly, Katie, Ginger, Adyson], 4),
    groupConnections([Baljeet, Buford, Isabella], [Candace, Linda], 3),

    new Connection(Candace, Perry, 4),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [gonnaDo, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep121, Phineas);
curseYou.addAppearance(ep121, Doof);
//#endregion
