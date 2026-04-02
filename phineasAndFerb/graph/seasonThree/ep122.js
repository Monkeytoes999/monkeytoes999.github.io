import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep122 = new Episode({
  number: 122,
  code: "305b",
  title: "Misperceived Monotreme",
  aPlot: "Funhouse",
  bPlot: "Least Likely-inator",
  songs: [new Song("Funhouse", [aaronJacob])],
  characters: [
    Reynolds,
    Tykera,
    Phineas,
    Ferb,
    Perry,
    Candace,
    Linda,
    Jeremy,
    Monogram,
    Carl,
    Suzy,
    Jenny,
    Sam,
    Irving,
    Isabella,
    Vanessa,
    DoofDad,
    Roger,
    Buford,
    Baljeet,
    GFBH,
    NavyDavy
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Perry, Candace], 6),
    connectAll([Phineas, Buford, Isabella, Ferb, Baljeet, Candace, Jeremy], 6),
    connectAll([Phineas, Ferb, Candace, Linda], 6),

    groupConnections([Candace], [Linda], 6),
    groupConnections([Linda], [Phineas, Ferb], 4),
    groupConnections([Monogram, Carl], [Perry], 4),
    groupConnections([Jeremy, Candace], [Sam], 3),
    groupConnections([Phineas, Ferb, Doof], [Reynolds, Tykera], 3),
    groupConnections([Irving], [Phineas, Ferb], 4),
    groupConnections([Doof], [Vanessa, DoofDad, Roger], 4),
    groupConnections([NavyDavy], [Phineas, Ferb], 6),
    groupConnections([Phineas, Ferb], [Linda], 3),

    new Connection(GFBH, Ferb, 3),
    new Connection(Irving, Isabella, 6),
    new Connection(Reynolds, Tykera, 6),
    new Connection(Carl, Doof, 3),
    new Connection(Monogram, Carl, 6),
    new Connection(Jeremy, Perry, 6),
    new Connection(Linda, Jeremy, 4),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 2),
  ],
  bits: [doMuch, quirkyWorky],
  ferbLines: 1,
});

//#region Bit Handler
doMuch.addModifiedAppearance(ep122, Tykera);
quirkyWorky.addAppearance(ep122);
//#endregion
