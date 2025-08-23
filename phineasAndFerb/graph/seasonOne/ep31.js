import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep31 = new Episode({
  number: 31,
  code: "118a",
  title: "Crack That Whip",
  aPlot: "Roller Derby",
  bPlot: "Breadinator",
  songs: [
    new Song("Ring of Fun", [dannyJacob]),
  ],
  characters: [
    Lawrence,
    Phineas,
    Ferb,
    BettyJo,
    Clyde, 
    Perry,
    Linda,
    Candace,
    Buford,
    Pedro,
    Logan,
    DumbassGinger,
    Sam,
    Dimitri,
    Stacy,
    Hildegard,
    Jeremy,
    Suzy,
    Monogram,
    Doof,
    FishingHat,
    Bob

  ],
  interactions: [
    connectAll([Lawrence, Phineas, Ferb, BettyJo, Clyde, Perry, Linda], 6),
    // connectAll([Phineas, Ferb, BettyJo, Candace])
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Candace, Phineas, Ferb, BettyJo, Hildegard, Suzy, Jeremy], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Clyde, Stacy, Linda, Lawrence], 6),
    groupConnections([Sam], [BettyJo, Phineas, Ferb, Candace, Stacy], 3),
    groupConnections([FishingHat, Bob], [Phineas, Clyde, Candace, Ferb, BettyJo, Hildegard, Suzy, Jeremy], 3),
    groupConnections([Clyde], [Hildegard, Jeremy, Suzy], 3),
    groupConnections([Linda, Lawrence], [Jeremy], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Linda, Candace, 2),
    new Connection(Dimitri, DumbassGinger, 6),
    new Connection(Logan, Pedro, 6),
    new Connection(BettyJo, Hildegard, 6),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Stacy, Clyde, 3),
    new Connection(Stacy, Lawrence, 2),
    new Connection(FishingHat, Bob, 1),
  ],
  bits: [],
  ferbLines: 1,
});

//#region Bit Handler
//#endregion
