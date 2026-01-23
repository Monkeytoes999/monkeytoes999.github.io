import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep78 = new Episode({
  number: 78,
  code: "218a",
  title: "The Bully Code",
  aPlot: "Endanger Baljeet",
  bPlot: "Re-tire-inator",
  songs: [new Song("He'll Do Anything But Go Away", [dannyJacob])],
  characters: [
    Baljeet,
    Jeremy,
    Buford,
    Candace,
    Stacy,
    Phineas,
    Ferb,
    Linda,
    Perry,
    Monogram,
    Doof,
    Rodney,
    Diminutive,
    Wormwood,
    GFBH,
    Bloodpudding,
    Carl
  ],
  interactions: [
    connectAll([Baljeet, Buford, Jeremy], 6),
    connectAll([Monogram, Perry, Carl], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Candace], 6),
    connectAll([Jeremy, Candace, Stacy], 6),

    groupConnections([Doof], [Perry, GFBH, Rodney, Bloodpudding, Diminutive], 6),
    groupConnections([Stacy], [Phineas, Ferb, Baljeet], 4),
    groupConnections([Monogram], [Rodney, Diminutive, Wormwood, GFBH, Bloodpudding], 4),
    groupConnections([Perry, Carl], [Monogram, Diminutive, Wormwood, GFBH, Bloodpudding], 3),
    
    groupConnections([Linda], [Candace, Stacy], 6),
    groupConnections([Linda], [Phineas, Ferb], 2),

    new Connection(Monogram, Doof, 4),
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Rodney, Diminutive, 6),
    new Connection(GFBH, Bloodpudding, 6),
  ],
  bits: [wherePerry, gonnaDo],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep78, Phineas);
gonnaDo.addAppearance(ep78, Phineas);
//#endregion
