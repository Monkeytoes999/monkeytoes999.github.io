import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep2 = new Episode({
  number: 2,
  code: "101b",
  title: "Candace Loses Her Head",
  aPlot: "Candace's face on Mt. Rushmore",
  bPlot: "Drillinator [Toll Highway]",
  songs: [
    new Song("She's Candace", [dannyJacob])
  ],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Perry,
    Linda,
    Lawrence,
    Jeremy,
    Isabella,
    Milly,
    Ginger,
    Holly,
    Gretchen,
    Katie,
    AgentRacoon1,
    Monogram,
    Doof,
    FishingHat,
    Beehive,
    ParkRanger,
    Adyson
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Candace, Linda, Lawrence], 6),
    connectAll([Isabella, Milly, Holly, Ginger, Gretchen, Katie, Adyson], 6),

    groupConnections([Phineas, Ferb], [Isabella, ParkRanger], 6),
    groupConnections([Perry], [AgentRacoon1, Monogram, Doof], 6),
    groupConnections([Linda], [Milly, Ginger, Holly, Gretchen, Katie], 1),
    groupConnections([Candace], [Jeremy, FishingHat], 6),

    new Connection(Linda, Isabella, 6),
    new Connection(Isabella, Candace, 5.5),
    new Connection(Monogram, Doof, 4),
    new Connection(FishingHat, Beehive, 6),
    new Connection(Beehive, Candace, 3),
  ],
  bits: [wherePerry, andBy, whatchaDoin, littleYoung, bird, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep2, Phineas);
andBy.addAppearance(ep2, Doof);
whatchaDoin.addAppearance(ep2, Isabella);
littleYoung.addAppearance(ep2, ParkRanger);
bird.addAppearance(ep2);
curseYou.addModifiedAppearance(ep2, Doof);
//#endregion