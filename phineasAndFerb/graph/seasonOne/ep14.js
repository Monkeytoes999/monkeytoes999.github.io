import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep14 = new Episode({
  number: 14,
  code: "108a",
  title: "Jerk de Soleil",
  aPlot: "Cirque",
  bPlot: "Voiceinator [Make everyone else's voice higher]",
  songs: [
    new Song("E.V.I.L. B.O.Y.S.", [Candace]),
  ],
  characters: [
    Baljeet,
    Buford,
    Ferb,
    Phineas,
    Isabella,
    Django,
    Linda,
    Lawrence,
    Candace,
    Perry,
    Jeremy,
    Monogram,
    Doof,
    Carl,
    Johnson,
    Mindy,
    Pedro,
    Logan,
    Sam,
    DumbassGinger,
    Tilly,
    Lily,
    Dimitri,
    Vivian,
    Milly,
    Ginger,
    Gretchen,
    Adyson,
    Holly,
    Katie
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Baljeet, Buford, Isabella, Django, Milly, Holly, Katie, Gretchen, Ginger, Adyson], 6),
    connectAll([Phineas, Ferb, Perry, Linda, Lawrence], 6),
    connectAll([Linda, Lawrence, Vivian, Johnson, Candace], 6),
    connectAll([Jeremy, Pedro, Logan, Sam, DumbassGinger, Dimitri, Tilly, Lily, Mindy], 1),
    
    groupConnections([Linda, Lawrence], [Django, Baljeet, Buford, Isabella], 6),
    groupConnections([Jeremy, Pedro, Logan, Sam, DumbassGinger, Dimitri, Tilly, Lily, Mindy], [Phineas, Ferb, Perry, Baljeet, Buford, Isabella, Django, Milly, Holly, Katie, Gretchen, Ginger, Adyson], 3),
    groupConnections([Candace], [Phineas, Ferb, Jeremy], 6),
    groupConnections([Baljeet, Buford, Isabella, Django], [Candace], 2),
    groupConnections([Perry], [Monogram, Doof], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Jeremy, Mindy, 6),
    new Connection(Tilly, Lily, 6),
    new Connection(Candace, Mindy, 5.5),
    new Connection(Logan, Pedro, 6),
  ],
  bits: [wherePerry, ohTherePerry, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep14, Phineas);
ohTherePerry.addAppearance(ep14, Phineas);
curseYou.addAppearance(ep14, Doof);
//#endregion
