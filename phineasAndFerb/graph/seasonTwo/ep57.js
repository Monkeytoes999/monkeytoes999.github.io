import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep57 = new Episode({
  number: 57,
  code: "206a",
  title: "Perry Lays an Egg",
  aPlot: "Trying to hatch an egg [platy-posterior]",
  bPlot: "Whale Translator-inator [also he learned whale]",
  songs: [new Song("Technology vs. Nature", [dannyJacob, Candace])],
  characters: [
    Candace,
    Linda,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Doof,
    Carl,
    Elizabeth,
    Jeremy
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry], 6),
    connectAll([Phineas, Ferb, Candace, Linda], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 3),
    new Connection(Jeremy, Candace, 6),
    new Connection(Doof, Elizabeth, 6),
    new Connection(Perry, Elizabeth, 2),
  ],
  bits: [wherePerry],
  ferbLines: 2,
});

//#region Bit Handler
wherePerry.addAppearance(ep57, Phineas);
//#endregion
