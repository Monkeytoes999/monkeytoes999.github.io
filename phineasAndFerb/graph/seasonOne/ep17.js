import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep17 = new Episode({
  number: 17,
  code: "110a",
  title: "A Hard Day's Knight",
  aPlot: "Fencing",
  bPlot: "Evil-Con",
  songs: [
    new Song("Ballad of the Black Knight", [swampyMarsh]),
  ],
  characters: [
    Tilly,
    Lily,
    Phineas,
    Ferb,
    Candace,
    Perry,
    Linda,
    Lawrence,
    Winifred,
    Reginald,
    Stacy, //ON PHONE
    Stubbings,
    Pipping,
    Monogram,
    Doof,
    Wexler
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Candace, Linda, Lawrence, Reginald, Winifred], 6),
    connectAll([Perry, Monogram, Wexler], 6),

    groupConnections([Pipping], [Candace, Phineas, Ferb, Stubbings, Reginald], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Doof, Perry, 6),
    new Connection(Doof, Wexler, 5),
    new Connection(Candace, Stacy, 6),
    new Connection(Tilly, Lily, 6),
    new Connection(Candace, Stubbings, 3),
    new Connection(Winifred, Pipping, 3),
  ],
  bits: [wherePerry, aPlatypus, selfDestruct],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep17, Phineas);
aPlatypus.addAppearance(ep17, Doof);
selfDestruct.addModifiedAppearance(ep17);
//#endregion
