import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep47 = new Episode({
  number: 47,
  code: "126b",
  title: "Hail Doofania!",
  aPlot: "Rainbowinator",
  bPlot: "Doofania - own country",
  songs: [
    new Song("Hail Doofania!", [Doof]),
  ],
  characters: [
    Doof,
    Norm,
    Roger,
    Phineas,
    Ferb,
    Isabella,
    Linda,
    Perry,
    Candace,
    Vanessa,
    Charlene,
    Oga,
    Monogram,
    Carl,
    Lawrence,
    Mindy,
    Stacy,
    Jeremy
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Perry, Linda], 6),
    connectAll([Doof, Norm, Vanessa, Charlene], 6),

    // groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Charlene], [Oga, Vanessa, Doof], 6),
    groupConnections([Candace], [Linda, Mindy, Stacy, Jeremy, Vanessa], 6),
    groupConnections([Monogram, Carl, Doof], [Perry], 4),
    groupConnections([Norm], [Roger, Perry], 2),
    groupConnections([Charlene, Perry], [Norm], 2),

    // new Connection(Monogram, Doof, 4),
    new Connection(Doof, Roger, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Candace, Lawrence, 2),
    new Connection(Linda, Lawrence, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [gonnaDo, whatchaDoin, littleYoung, wherePerry, selfDestruct, curseYou, ggg],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep47, Doof);
whatchaDoin.addModifiedAppearance(ep47, Isabella);
gonnaDo.addAppearance(ep47, Phineas);
whatchaDoin.addAppearance(ep47, Norm);
littleYoung.addModifiedAppearance(ep47, Norm);
wherePerry.addAppearance(ep47, Phineas);
selfDestruct.addAppearance(ep47);
curseYou.addModifiedAppearance(ep47, Phineas);
ggg.addAppearance(ep47);
//#endregion
