import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep74 = new Episode({
  number: 74,
  code: "216a",
  title: "Bubble Boys",
  aPlot: "Giant bubble",
  bPlot: "Yodel-inator",
  songs: [new Song("Yodel Odel Obey Me", [Doof])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Baljeet,
    Buford,
    Pinky,
    Monogram,
    Carl,
    Linda,
    Candace,
    Lawrence,
    Isabella,
    Katie,
    Gretchen,
    Milly,
    Ginger,
    Holly,
    Adyson,
    Elaine,
    Greg,
    FishingHat
  ],
  interactions: [
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger, Phineas, Ferb, Baljeet, Buford], 6),
    connectAll([Phineas, Ferb, Perry, Baljeet, Buford], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Elaine, Greg, FishingHat], 1),
    connectAll([Linda, Candace, Phineas, Ferb], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Linda, Candace], [Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger, Baljeet, Buford], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Linda, Lawrence, 5),
    new Connection(Lawrence, Candace, 5),
    new Connection(Candace, Lawrence, 5),
    new Connection(FishingHat, Doof, 3),
    new Connection(Perry, Pinky, 6),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep74, Phineas);
wherePerry.addAppearance(ep74, Phineas);
whatchaDoin.addAppearance(ep74, Isabella);
ohTherePerry.addAppearance(ep74, Phineas);
//#endregion
