import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep10 = new Episode({
  number: 10,
  code: "105b",
  title: "Lights, Candace, Action!",
  aPlot: "The Curse of the Princess Monster",
  bPlot: "Age Acceleratorinator [Cheese!]",
  songs: [],
  characters: [
    Candace,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Monogram,
    Doof,
    ProducerGuy,
    OlgaChicago,
    Isabella,
    Holly,
    Gretchen,
    Milly,
    Ginger,
    Pedro,
    Sam,
    Logan,
    Timmy,
    Dimitri,
    Haney,
    Tilly,
    Lily
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Perry, Candace], 6),
    connectAll([Phineas, Ferb, Candace, Milly, Holly, Gretchen, Ginger], 6),
    connectAll([Holly, Milly, Pedro, Sam, Dimitri, Logan, Timmy, DumbassGinger], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb, Candace, Isabella], [ProducerGuy], 6),
    groupConnections([Phineas, Ferb, Candace], [Haney], 1),
    groupConnections([Candace], [Tilly, Lily], 3),
    groupConnections([OlgaChicago, Dimitri], [Candace], 6),

    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, OlgaChicago, 6),
    new Connection(Logan, Candace, 4),
    new Connection(Tilly, Lily, 6),
    new Connection(Tilly, Candace, 4),
    new Connection(Lily, Candace, 3),
  ],
  bits: [wherePerry, littleYoung, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep10, Phineas);
littleYoung.addAppearance(ep10, Candace);
curseYou.addAppearance(ep10, Doof);
//#endregion
