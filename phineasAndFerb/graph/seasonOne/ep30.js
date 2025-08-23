import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep30 = new Episode({
  number: 30,
  code: "117b",
  title: "Leave the Busting to Us!",
  aPlot: "Massive Water Slide",
  bPlot: "Gloominator 3000inator [Ice age the Tri-State Area]",
  songs: [
    new Song("Leave the Busting to Us!", [danPovenmire]),
    new Song("Gotta Make Summer Last", [dannyJacob]),
  ],
  characters: [
    Candace,
    Linda,
    Phineas,
    Ferb,
    Isabella,
    Holly,
    BSKid,
    Logan,
    Lily,
    Sassy,
    Lulu,
    Fifi,
    Perry,
    Monogram,
    Doof,
    Ginger,
    Baljeet,
    Buford,
    Farmer,
    FarmerWife
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Holly], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Ginger, Candace], 6),
    connectAll([Phineas, Ferb, Candace, Linda, Perry], 6),
    connectAll([Lulu, Fifi, Candace, Linda], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof, Kris], 6),
    groupConnections([Candace], [BSKid, Logan, Lily, Sassy], 3),
    groupConnections([Phineas, Ferb, Baljeet, Buford, Isabella, Ginger], [Lulu], 3),
    groupConnections([Lulu], [Phineas, Ferb, Baljeet, Buford, Isabella, Ginger], 3),
    groupConnections([Farmer], [Doof, Perry], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Lily, Sassy, 6),
    new Connection(Farmer, FarmerWife, 6),
    new Connection(BSKid, Doof, 6),
    new Connection(Kris, BSKid, 6),
    new Connection(BSKid, Perry, 2),
  ],
  bits: [ohTherePerry, gonnaDo, wherePerry, farmer, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
ohTherePerry.addAppearance(ep30, Candace);
gonnaDo.addAppearance(ep30, Phineas);
wherePerry.addAppearance(ep30, Phineas);
farmer.addAppearance(ep30);
curseYou.addAppearance(ep30, Doof)
//#endregion
