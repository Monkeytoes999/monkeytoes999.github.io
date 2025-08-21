import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep15 = new Episode({
  number: 15,
  code: "108b",
  title: "Toy to the World",
  aPlot: "Perry the Inaction Figure",
  bPlot: "Toll Booths",
  songs: [
    new Song("Shimmy Jimmy", [dannyJacob]),
    new Song("Brick", [swampyMarsh]),
  ],
  characters: [
    Candace,
    HDHStoreClerk,
    Stacy,
    Jeremy,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Monogram,
    Doof,
    JB,
    Badinkadink,
    Timmy,
    Balthazar,
    Construction,
    DumbassGinger,
    Dimitri,
    Sally,
    Kris
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Candace, Perry], 6),
    connectAll([Dimitri, Sally, DumbassGinger], 1),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb], [JB], 6),
    groupConnections([Candace], [Stacy, Jeremy], 6),
    groupConnections([HDHStoreClerk], [Candace, Timmy, Phineas, Ferb, Balthazar, Dimitri, Sally, Kris, DumbassGinger], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Phineas, Badinkadink, 6),
    new Connection(Dimitri, DumbassGinger, 6),
    new Connection(Sally, Kris, 1),
    new Connection(Kris, DumbassGinger, 1),
  ],
  bits: [gonnaDo, ggg, wherePerry, littleYoung, doMuch, quirkyWorky, lindana],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep15, Phineas);
ggg.addAppearance(ep15);
wherePerry.addAppearance(ep15, Phineas);
littleYoung.addAppearance(ep15, JB);
doMuch.addAppearance(ep15, Phineas);
quirkyWorky.addAppearance(ep15);
lindana.addAppearance(ep15);
curseYou.addAppearance(ep15, Doof);
//#endregion
