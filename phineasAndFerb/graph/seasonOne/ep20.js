import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep20 = new Episode({
  number: 20,
  code: "111b",
  title: "Journey to the Center of Candace",
  aPlot: "Shrinking Sub",
  bPlot: "Make-up-your-mind-inator",
  songs: [
    new Song("Hemoglobin Highway", [dannyJacob]),
  ],
  characters: [
    Linda,
    Phineas,
    Ferb,
    Perry,
    Candace,
    Jeremy,
    Stacy, //on phone [audible]
    Jenny, //on phone [audible]
    Isabella,
    Pinky,
    Monogram,
    Doof,
    UncleJoe
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Isabella, Candace, Jeremy, UncleJoe], 6),
    connectAll([Phineas, Ferb, Isabella, Pinky], 6),
    connectAll([Perry, Monogram, Doof], 6),
    connectAll([Stacy, Jenny, Candace], 6),

    groupConnections([Phineas, Ferb, Isabella, Candace, Jeremy], [Pinky], 6),
    groupConnections([Phineas, Ferb], [Stacy, Jenny], 3),
    groupConnections([Phineas, Ferb, Linda, Candace, Jeremy, Isabella], [Perry], 6),

    new Connection(Doof, Pinky, 5.5),
  ],
  bits: [whatchaDoin, wherePerry, littleYoung, ohTherePerry, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep20, Isabella);
wherePerry.addAppearance(ep20, Phineas);
littleYoung.addModifiedAppearance(ep20, Phineas);
ohTherePerry.addModifiedAppearance(ep20, Phineas);
curseYou.addAppearance(ep20, Doof);
//#endregion
