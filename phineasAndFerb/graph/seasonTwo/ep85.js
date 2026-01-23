import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep85 = new Episode({
  number: 85,
  code: "221b",
  title: "Suddenly Suzy",
  aPlot: "Giant Waterfall",
  bPlot: "Carbon Footprint-inator",
  songs: [new Song("Tuff Gum", [dannyJacob]), new Song("Alabama Bound", [BEngineer])],
  characters: [
    Candace,
    Jeremy,
    Suzy,
    Linda,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Carl,
    Isabella,
    Baljeet,
    Buford,
    BEngineer,
    Farmer,
    FarmerWife
  ],
  interactions: [
    connectAll([Candace, Jeremy, Suzy], 6),
    connectAll([Phineas, Ferb, Linda, Candace, Suzy, Baljeet, Buford, Isabella], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Suzy, Candace], 6), 

    groupConnections([Perry], [Monogram, Doof, BEngineer], 6),

    new Connection(Monogram, Carl, 6),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Farmer, FarmerWife, 6),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, farmer, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep85, Phineas);
wherePerry.addAppearance(ep85, Phineas);
whatchaDoin.addAppearance(ep85, Isabella);
whatchaDoin.addAppearance(ep85, Suzy);
whatchaDoin.addAppearance(ep85, Candace);
farmer.addAppearance(ep85);
curseYou.addAppearance(ep85, Doof);
//#endregion
