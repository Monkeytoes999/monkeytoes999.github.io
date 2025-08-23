import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep35 = new Episode({
  number: 35,
  code: "120a",
  title: "Put that Putter Away",
  aPlot: "Mini Golf Course",
  bPlot: "Atomic Leaf Blowerinator",
  songs: [
    new Song("Disco Miniature Golfing Queen", [lCPowell]),
  ],
  characters: [
    Candace,
    Stacy,
    Isabella,
    Baljeet,
    Buford,
    Phineas,
    Ferb,
    Duffer,
    Linda,
    Perry,
    Monogram,
    Doof,
    Sam,
    Timmy,
    Balthazar,
    Sally,
    Kris,
    Ginger,
    Adyson,
    Holly,
    Gretchen,
    PhilNeighbor,
    FarmerWife
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford, Stacy, Ginger], 6),
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Ginger, Holly, Adyson, Gretchen], 6),

    groupConnections([Perry], [Monogram, Doof, Phineas], 6),
    groupConnections([Phineas, Ferb, Isabella, Baljeet, Buford, FarmerWife], [Duffer], 6),
    groupConnections([Linda], [Ferb, Isabella, Baljeet, Buford,], 3),
    groupConnections([Candace], [Phineas, Ferb, Isabella, Baljeet, Buford, Ginger], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Stacy, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Stacy, Perry, 4),
    new Connection(Candace, Perry, 2),
    new Connection(Doof, PhilNeighbor, 6),
    new Connection(Perry, PhilNeighbor, 2),
  ],
  bits: [gonnaDo, wherePerry, quirkyWorky, curseYou, farmer, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep35, Phineas);
wherePerry.addAppearance(ep35, Stacy);
quirkyWorky.addAppearance(ep35);
curseYou.addModifiedAppearance(ep35, Doof);
ohTherePerry.addAppearance(ep35, Phineas);
//#endregion
