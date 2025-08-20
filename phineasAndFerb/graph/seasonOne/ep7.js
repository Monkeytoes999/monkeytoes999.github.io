import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";


//Space Adventure
export const ep7 = new Episode({
  number: 7,
  code: "104a",
  title: "Are You My Mummy",
  aPlot: "Explore the Basement of the Movie Theatre",
  bPlot: "Woodenator",
  songs: [
    new Song("My Undead Mummy", [dannyJacob])
  ],
  characters: [
    Candace,
    Ferb,
    Perry,
    Lawrence,
    Logan,
    FishingHat,
    Dimitri,
    Bob,
    Pedro,
    Phineas,
    Monogram,
    Doof,
    TheaterEmployee
  ],
  interactions: [
    connectAll([Phineas, Ferb, Lawrence, Perry, Candace], 6),
    connectAll([Pedro, FishingHat, Lawrence], 1),

    groupConnections([Phineas, Ferb], [TheaterEmployee], 6),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([FishingHat], [Logan, Phineas, Ferb, Perry, Candace], 1),
    groupConnections([Bob], [Logan, Ferb, Candace, Lawrence, Perry], 1),

    new Connection(Monogram, Doof, 4),
    new Connection(Logan, Pedro, 6),
    new Connection(Pedro, Bob, 1),
  ],
  bits: [wherePerry, lindana, andBy, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep7, Phineas);
lindana.addAppearance(ep7);
andBy.addAppearance(ep7, Doof);
ohTherePerry.addAppearance(ep7, Phineas);
//#endregion
