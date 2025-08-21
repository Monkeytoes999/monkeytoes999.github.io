import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep12 = new Episode({
  number: 12,
  code: "106b",
  title: "Tree to Get Ready",
  aPlot: "Treehouse Robots",
  bPlot: "Poopinator [Poop on Roger]",
  songs: [
    new Song("My Goody Two-Shoes Brother", [Doof])
  ],
  characters: [
    Candace,
    Stacy,
    Linda,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Doof,
    Isabella,
    Lily,
    Vanessa,
    Roger,
    Milly,
    Katie,
    Ginger,
    Holly,
    Adyson,
    Gretchen,
    Bob,
    Beehive,
    Haney,
    Dimitri,
    DumbassGinger,
    Tilly
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda, Stacy], 6),
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Bob, DumbassGinger, Dimitri], 1),

    groupConnections([Perry], [Monogram, Doof, Vanessa], 6),
    groupConnections([Ginger, Holly, Milly, Gretchen, Adyson, Katie], [Phineas, Ferb, Candace, Stacy], 3),
    groupConnections([Isabella, Ginger, Holly, Milly, Gretchen, Adyson, Katie], [Perry], 1),
    groupConnections([Isabella], [Phineas, Ferb, Candace, Stacy], 6),
    groupConnections([Doof], [Roger, Vanessa], 6),
    groupConnections([Lily, Bob, DumbassGinger, Dimitri], [Roger], 3),
    groupConnections([Lily, Tilly], [Doof], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Tilly, Lily, 6),
    new Connection(Perry, Roger, 2),
    new Connection(Vanessa, Roger, 5.5),
    new Connection(Beehive, Haney, 6),
    new Connection(Lily, Roger, 3),
  ],
  bits: [wherePerry, whatchaDoin, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep12, Phineas);
whatchaDoin.addAppearance(ep12, Isabella);
curseYou.addAppearance(ep12, Doof);
//#endregion
