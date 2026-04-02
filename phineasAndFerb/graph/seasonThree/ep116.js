import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep116 = new Episode({
  number: 116,
  code: "302a",
  title: "The Great Indoors",
  aPlot: "Biosphere",
  bPlot: "Raininator",
  songs: [new Song("Set the Record Straight", [Jeremy])],
  characters: [
    Phineas,
    Ferb,
    Isabella,
    Ginger,
    Holly,
    Candace,
    Jeremy,
    Linda,
    Monogram,
    Carl,
    Doof,
    Gretchen,
    Katie,
    Adyson,
    Milly
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda, Isabella, Holly, Ginger, Greg, Milly, Adyson, Katie], 6),
    connectAll([Perry, Monogram, Carl], 6),

    groupConnections([Candace, Linda], [Jeremy], 6),
    groupConnections([Jeremy], [Phineas, Ferb], 4),

    new Connection(Linda, Perry, 4),
    new Connection(Candace, Perry, 2),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [whatchaDoin, gonnaDo, wherePerry],
  ferbLines: 2,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep116, Isabella);
gonnaDo.addAppearance(ep116, Phineas);
wherePerry.addAppearance(ep116, Linda);
curseYou.addModifiedAppearance(ep116, Doof);
//#endregion
