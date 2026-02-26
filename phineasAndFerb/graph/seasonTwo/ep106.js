import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep106 = new Episode({
  number: 106,
  code: "234",
  title: "Phineas and Ferb Hawaiian Vacation",
  aPlot: "Aqua Primates  || Candace tiki charm",
  bPlot: "De-evolutionator  || Stuck on an island",
  songs: [new Song("Prime Calypso", [darrylPhinnessee]), new Song("Bad Luck", [dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Linda,
    Lawrence,
    Candace,
    Hawaaiaiaiaai,
    Monogram,
    Carl,
    Chalk,
    GFBH,
    DrGoldberg,
    Jeremy,
    Laird,
    Rick,
    AgentWhale
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Perry, Linda, Lawrence, Candace, Hawaaiaiaiaai], 6),
    connectAll([Phineas, Ferb, Chalk], 6),
    connectAll([Phineas, Ferb, Candace, Laird], 6),

    groupConnections([Phineas, Ferb, Hawaaiaiaiaai], [GFBH], 3),
    groupConnections([Linda, Lawrence], [DrGoldberg], 4),
    groupConnections([AgentWhale], [Doof, Monogram], 6),
    
    new Connection(Monogram, Doof, 5.5),
    new Connection(Perry, Doof, 6),
    new Connection(Candace, Jeremy, 4),
    new Connection(Candace, Rick, 3),
    new Connection(Perry, AgentWhale, 2),
  ],
  bits: [wherePerry, curseYou, isOUT, littleYoung, gonnaDo, aPlatypus],
  ferbLines: 4,
});

//#region Bit Handler
wherePerry.addAppearance(ep106, Hawaaiaiaiaai);
wherePerry.addAppearance(ep106, Phineas);
curseYou.addAppearance(ep106, Doof);
isOUT.addAppearance(ep106, Candace);
littleYoung.addAppearance(ep106, Laird)
gonnaDo.addAppearance(ep106, Phineas);
aPlatypus.addAppearance(ep106, Perry);
ohTherePerry.addAppearance(ep106, Candace);
//#endregion
