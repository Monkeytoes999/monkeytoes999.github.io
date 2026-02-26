import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep103 = new Episode({
  number: 103,
  code: "232a",
  title: "We Call It Maze",
  aPlot: "Giant Maze",
  bPlot: "Lean DEI [Tiltinator]. ALSO, echo!",
  songs: [new Song("Not Knowing Where You're Going", [swampyMarsh])],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Jeremy,
    Perry,
    Monogram,
    Doof,
    Baljeet,
    Buford,
    Isabella,
    Melissa,
    Linda
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Baljeet, Isabella, Melissa], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Phineas, Ferb], [Jeremy], 2),
    groupConnections([Candace, Isabella, Melissa], [GFBH], 3),
    groupConnections([Isabella, Melissa], [Linda], 2),

    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Jeremy, 5),
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Candace, Linda, 6),
  ],
  bits: [gonnaDo, whatchaDoin, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep103, Ferb);
whatchaDoin.addModifiedAppearance(ep103, Phineas);
wherePerry.addAppearance(ep103, Phineas);
//#endregion
