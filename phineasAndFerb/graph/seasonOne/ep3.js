import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//Candace Meap
export const ep3 = new Episode({
  number: 3,
  code: "102a",
  title: "The Fast and the Phineas",
  aPlot: "Swamp Oil 500",
  bPlot: "Deflateinator Ray",
  songs: [
    new Song("Go, Go, Phineas", [Phineas, Ferb, Isabella, Holly, Ginger, Gretchen])
  ],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Perry,
    Vivian,
    Linda,
    Johnson,
    Isabella,
    Monogram,
    Doof,
    Adyson,
    Milly,
    Ginger,
    Gretchen,
    Holly,
    Katie,
    Dave,
    Rick,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Candace, Linda], 6),
    connectAll([Phineas, Isabella, Milly, Holly, Ginger, Gretchen, Katie, Adyson], 6),
    connectAll([Phineas, Dave, Rick], 6),

    groupConnections([Phineas, Ferb], [Isabella], 6),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Jeremy, Vivian], 6),
    groupConnections([Linda], [Johnson, Vivian], 6),

    groupConnections([Ferb, Candace, Isabella, Ginger, Milly, Holly, Gretchen, Katie, Adyson, Jeremy], [Dave, Rick], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Jeremy, Phineas, 3),
  ],
  bits: [gonnaDo, whatchaDoin, wherePerry, littleYoung],
  ferbLines: 0,
});
//#region Bit Handler
gonnaDo.addAppearance(ep3, Phineas);
whatchaDoin.addAppearance(ep3, Isabella);
wherePerry.addAppearance(ep3, Phineas);
littleYoung.addAppearance(ep3, Rick);
//#endregion