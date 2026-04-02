import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep115 = new Episode({
  number: 115,
  code: "301b",
  title: "Last Train to Bustville",
  aPlot: "Balloon race to Gerheart Summit",
  bPlot: "Dodo egg incubator-inator ",
  songs: [new Song("Give Up", [dannyJacob, oliviaOlson, Candace])],
  characters: [
    Isabella,
    Phineas,
    Ferb,
    Buford,
    Baljeet,
    Candace,
    Lawrence,
    Clyde,
    Perry,
    Monogram,
    Doof,
    Linda,
    BettyJo,
    Glenda,
    Wilbur,
    Orville,
    FarmerWife,
    Farmer
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Candace], 6),
    connectAll([Clyde, Lawrence, Phineas, Ferb], 6),
    connectAll([Linda, BettyJo, Glenda, Candace], 6),
    connectAll([Wilbur, Orville, Glenda], 6),
    connectAll([Farmer, FarmerWife, Doof], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Linda, BettyJo], [Phineas, Ferb], 2),
    
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Clyde, Lawrence, 6),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, themeSong, farmer],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addAppearance(ep115, Phineas);
wherePerry.addAppearance(ep115, Phineas);
whatchaDoin.addModifiedAppearance(ep115, Isabella);
themeSong.addAppearance(ep115);
farmer.addAppearance(ep115, FarmerWife);
//#endregion
