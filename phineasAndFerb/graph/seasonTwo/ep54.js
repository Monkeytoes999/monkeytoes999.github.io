import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep54 = new Episode({
  number: 54,
  code: "204b",
  title: "Elementary My Dear Stacy",
  aPlot: "[Candace and Stacy being detectives]",
  bPlot: "Fly Big Ben to the tri-state area",
  songs: [new Song("It's Elementary", [dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Winifred,
    Reginald,
    Candace,
    Stacy,
    Linda,
    Lawrence,
    Perry,
    Monogram,
    Double00,
    Initials,
    Doof
  ],
  interactions: [
    connectAll([Phineas, Linda, Lawrence, Candace, Stacy, Phineas, Ferb, Winifred, Reginald], 6),
    connectAll([Perry, Monogram, Double00, Initials], 6),

    groupConnections([Perry, Double00], [Doof], 6),
    groupConnections([Monogram, Initials], [Doof], 4),

  ],
  bits: [],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addModifiedAppearance(ep54, Phineas);
littleYoung.addAppearance(ep54);
//#endregion
