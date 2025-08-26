import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep45 = new Episode({
  number: 45,
  code: "125b",
  title: "Comet Kermillian",
  aPlot: "Massive observatory & carve faces into comet",
  bPlot: "Giant heat ray & uh steaks",
  songs: [
    new Song("S.I.M.P.", [Candace, GuyzNtheParque]),
  ],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Candace,
    Jeremy,
    Lawrence,
    Perry,
    Monogram,
    Doof,
    Carl,
    Suzy,
    Isabella,
    GuyzNtheParque,
    Gerez,
    Cindy,
    Sam,
    Dimitri,
    Buford,
    Baljeet,
    DumbassGinger,
    Timmy,
    Kris,
    Pedro,
    Pinky
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Candace, Lawrence], 6),
    connectAll([Jeremy, Candace, Suzy], 6),
    connectAll([Isabella, Baljeet, Buford, Dimitri, Pedro, Sam, DumbassGinger, Cindy, Timmy, Kris], 1),
    connectAll([Linda, Lawrence, Cindy], 3),

    groupConnections([Perry], [Monogram, Doof, Phineas, Ferb], 6),
    groupConnections([Phineas, Ferb, Lawrence], [Jeremy], 2),
    groupConnections([Lawrence], [Monogram, Carl], 3),
    groupConnections([Isabella], [Ferb, Linda, Lawrence], 2),
    groupConnections([Gerez, Cindy], [Candace, GuyzNtheParque], 3),
    groupConnections([Sam, Dimitri, Buford, Baljeet, DumbassGinger, Timmy, Kris, Pedro], [Phineas, Ferb], 3),
    groupConnections([Baljeet, Buford, DumbassGinger, Pedro, Sam], [Linda, Lawrence, Candace], 3),
    groupConnections([Linda, Lawrence, Candace], [Baljeet, Buford, DumbassGinger, Pedro, Sam], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Linda, Jeremy, 4),
    new Connection(Linda, Perry, 2),
    new Connection(Lawrence, Perry, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Monogram, Doof, 5.5),
    new Connection(Carl, Lawrence, 3),
    new Connection(Phineas, Isabella, 6),
    new Connection(GuyzNtheParque, Candace, 6),
    new Connection(Jeremy, GuyzNtheParque, 4),
  ],
  bits: [gonnaDo, wherePerry, quirkyWorky, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep45, Phineas);
wherePerry.addAppearance(ep45, Lawrence);
curseYou.addAppearance(ep45, Doof);
ohTherePerry.addAppearance(ep45, Phineas);
//#endregion
