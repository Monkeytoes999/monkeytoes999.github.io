import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep132 = new Episode({
  number: 132,
  code: "310b",
  title: "Road Trip",
  aPlot: "No Stop Truck Stop",
  bPlot: "Shipment of Boom Joice | hitch-a-ride-inator",
  songs: [new Song("Home on the Road", [dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Candace,
    Perry,
    Monogram,
    Doof,
    Farmer,
    FarmerWife
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace, Perry], 6),  

    groupConnections([Perry], [Doof, Monogram], 6),
    
    new Connection(Doof, Lawrence, 6),
    new Connection(Linda, Doof, 3),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Farmer, FarmerWife, 6),
  ],
  bits: [gonnaDo, wherePerry, littleYoung, pharmacist],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep132, Phineas);
wherePerry.addModifiedAppearance(ep132, Phineas);
littleYoung.addModifiedAppearance(ep132);
pharmacist.addAppearance(ep132, Lawrence);
//#endregion
