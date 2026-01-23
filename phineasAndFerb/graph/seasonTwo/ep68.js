import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep68 = new Episode({
  number: 68,
  code: "213a",
  title: "Hide and Seek",
  aPlot: "Miniature Hide & Seek",
  bPlot: "Eye-bot? [Find Perry's house]",
  songs: [new Song("When You're Small", [dannyJacob])],
  characters: [
    Linda,
    Phineas,
    Ferb,
    Vivian,
    Isabella,
    Baljeet,
    Buford,
    Irving,
    Perry,
    Monogram,
    Doof,
    Candace,
    Stacy,
    Pinky
  ],
  interactions: [
    connectAll([Linda, Baljeet, Buford, Phineas, Ferb, Isabella, Candace, Vivian], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Isabella, Phineas, Ferb, Baljeet, Buford], [Perry], 2),
    groupConnections([Irving, Phineas, Ferb, Baljeet, Buford], [Pinky], 2),
    groupConnections([Candace], [Pinky, Stacy], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Pinky, Isabella, 6),
    new Connection(Perry, Irving, 2),
  ],
  bits: [gonnaDo, Irving, selfDestruct],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep68, Phineas);
wherePerry.addModifiedAppearance(ep68, Irving);
selfDestruct.addAppearance(ep68);
//#endregion
