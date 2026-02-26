import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep100 = new Episode({
  number: 100,
  code: "230b",
  title: "The Doof Side of the Moon",
  aPlot: "Tallest Building",
  bPlot: "Rotate the moon, Lunar Rotate-inator",
  songs: [new Song("Keep on Building", [danPovenmire, dannyJacob, swampyMarsh])],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Linda,
    Isabella,
    Albert,
    Irving,
    Jenny,
    Perry,
    Monogram,
    Doof,
    GFBH,
    Bimmany
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Irving, Candace, Albert], 6),
    connectAll([Albert, Irving, GFBH, Bimmany], 1),
    connectAll([Phineas, Ferb, Linda, Candace], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Candace], [Stacy, Jenny], 6),
    groupConnections([Stacy], [Phineas, Ferb], 2),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Linda, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Albert, Linda, 2),
    new Connection(Phineas, Perry, 4),
    new Connection(Irving, Perry, 2),
  ],
  bits: [gonnaDo, quirkyWorky, whatchaDoin, wherePerry, lindana],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addAppearance(ep100, Phineas);
quirkyWorky.addAppearance(ep100);
whatchaDoin.addAppearance(ep100, Isabella);
wherePerry.addAppearance(ep100, Phineas);
lindana.addAppearance(ep100)
curseYou.addModifiedAppearance(ep100, Doof);
//#endregion
