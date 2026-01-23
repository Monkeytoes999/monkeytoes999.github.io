import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep81 = new Episode({
  number: 81,
  code: "219b",
  title: "Atlantis",
  aPlot: "Atlantis",
  bPlot: "Evil Plant Growth Formula",
  songs: [new Song("Atlantis", [Phineas, Isabella, Buford, Baljeet, Ferb, Irving, dannyJacob])],
  characters: [
    Candace,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Isabella,
    Irving,
    Buford,
    Baljeet,
    Vinn,
    Carl,
    Doof,
    Monogram,
    Jeremy,
    Gartanial,

  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Irving, Buford, Baljeet, Perry, Candace, Linda], 6),
    connectAll([Carl, Perry, Monogram], 6),
    connectAll([Jeremy, Candace, Linda], 6),
    connectAll([Vinn, Gartanial, Jeremy], 6),

    groupConnections([Perry], [Doof], 6),
    groupConnections([Phineas, Ferb, Isabella, Irving, Buford, Baljeet, Perry, Candace, Linda], [Vinn], 1),
    groupConnections([Carl, Monogram], [Doof], 4),


  ],
  bits: [gonnaDo, wherePerry, littleYoung, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep81, Phineas);
wherePerry.addAppearance(ep81, Phineas);
littleYoung.addAppearance(ep81);
curseYou.addModifiedAppearance(ep81, Doof);
//#endregion