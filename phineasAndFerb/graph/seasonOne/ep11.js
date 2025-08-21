import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep11 = new Episode({
  number: 11,
  code: "106a",
  title: "Get That Bigfoot Outa My Face!",
  aPlot: "Camp",
  bPlot: "Goin' on a Date",
  songs: [
    new Song("He's Bigfoot", [Clyde])
  ],
  characters: [
    Phineas,
    Buford,
    Baljeet,
    Isabella,
    Gretchen,
    Candace,
    Milly,
    Holly,
    Adyson,
    Ginger,
    Ferb,
    Linda,
    Lawrence,
    Clyde,
    BettyJo,
    DumbassGinger,
    Logan,
    Monogram,
    Doof,
    Katie,
    Pedro,
    Sam,
    Dimitri,
    Lorraine
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Isabella, Buford, Baljeet, Milly, Holly, Adyson, Gretchen, Ginger, Katie, DumbassGinger, Sam, Logan, Pedro, Dimitri, Linda, Lawrence, Clyde, BettyJo], 6),

    groupConnections([Perry], [Phineas, Ferb, Clyde, BettyJo, Candace, Linda, Lawrence, Monogram, Doof], 6),
    groupConnections([Lorraine], [Clyde, BettyJo, Candace], 6),

    new Connection(Monogram, Doof, 4),
  ],
  bits: [andBy],
  ferbLines: 1,
});

//#region Bit Handler
andBy.addModifiedAppearance(ep11, Doof);
//#endregion
