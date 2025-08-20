import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep5 = new Episode({
  number: 5,
  code: "103a",
  title: "The Magnificent Few",
  aPlot: "Driving Cattle",
  bPlot: "Termite Controlling Helmet",
  songs: [
    new Song("In The Mall", [Phineas, Ferb, Isabella])
  ],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Linda,
    Isabella,
    Perry,
    Monogram,
    Doof,
    Vanessa,
    Tilly,
    Lily,
    Haney,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Candace, Linda], 6),
    connectAll([Perry, Doof, Vanessa], 6),

    groupConnections([Phineas, Ferb, Linda], [Isabella], 6),
    groupConnections([Candace], [Stacy, Haney], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Monogram, 6),
    new Connection(Tilly, Lily, 6),
    new Connection(Isabella, Candace, 2),
  ],
  bits: [whatchaDoin, wherePerry, andBy, lindana, selfDestruct, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep5, Isabella);
wherePerry.addAppearance(ep5, Phineas);
andBy.addAppearance(ep5, Doof);
lindana.addAppearance(ep5);
selfDestruct.addAppearance(ep5);
curseYou.addAppearance(ep5, Doof);
//#endregion
