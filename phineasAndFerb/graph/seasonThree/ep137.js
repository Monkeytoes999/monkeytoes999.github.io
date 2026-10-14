import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep137 = new Episode({
  number: 137,
  code: "313b",
  title: "Bullseye!",
  aPlot: "Giant Darts",
  bPlot: "L.O.V.E. M.U.F.F.I.N. Leader election or whatever.",
  songs: [new Song("Evil Tonight", [Doof, Montgomery, Bloodpudding, Irksome, Wormwood, Stabby, Rodney, Scotterson, Diminutive, Hornswaggle, Bringdown])],
  characters: [
    Linda,
    Phineas,
    Ferb,
    Lawrence,
    Candace,
    Perry,
    Monogram,
    Doof,
    Montgomery,
    Bloodpudding,
    Irksome,
    Wormwood,
    Stabby,
    Rodney,
    Scotterson,
    Diminutive,
    Hornswaggle,
    Bringdown,
    OtherEvilDavid,
    Klimpaloon
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Linda, Phineas, Ferb], 6),
    connectAll([Isabella, Phineas, Ferb], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford], 6),
    connectAll([Doof, Montgomery, Bloodpudding, Irksome, Wormwood, Stabby, Rodney, Scotterson, Diminutive, Hornswaggle, Bringdown, Lawrence], 6),
    connectAll([OtherEvilDavid, Montgomery, Wormwood, Bringdown, Stabby, Bloodpudding], 1),
    connectAll([Phineas, Ferb, Doof, Rodney], 1),
    connectAll([Phineas, Ferb, Lawrence, Perry], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Candace], [Phineas, Ferb], 4),
    groupConnections([Isabella], [Baljeet, Buford], 2),
    groupConnections([Perry], [Montgomery, Bloodpudding, Irksome, Wormwood, Stabby, Rodney, Scotterson, Diminutive, Hornswaggle, Bringdown], 3),
    groupConnections([OtherEvilDavid], [Rodney, Doof, Lawrence], 3),

    new Connection(Linda, Lawrence, 5),
    new Connection(Perry, Doof, 6),
    new Connection(Isabella, Linda, 6),
    new Connection(Monogram, Lawrence, 4),
    new Connection(Lawrence, Klimpaloon, 4),
  ],
  bits: [whatchaDoin, wherePerry, pharmacist, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep137, Isabella);
wherePerry.addAppearance(ep137, Phineas);
pharmacist.addAppearance(ep137, Lawrence);
ohTherePerry.addAppearance(ep137, Phineas);
//#endregion
