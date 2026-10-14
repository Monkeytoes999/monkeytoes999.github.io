import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep134 = new Episode({
  number: 134,
  code: "311b",
  title: "Tour de Ferb",
  aPlot: "Bike Race",
  bPlot: "Pop-up-inator",
  songs: [new Song("Bust is in the Bag", [Candace]), new Song("Tour de Ferb", [aaronJacob, dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Buford,
    Baljeet,
    BaljeetsGreatGrandfather,
    BaljeetsGrandfather,
    MrTjinder,
    Candace,
    Linda,
    Perry,
    Monogram,
    Doof,
    Isabella,
    Milly,
    Ali,
    Katie,
    Ginger,
    GregLeMond,
    Holly,
    GertrudeDoof,
    Gretchen,
    Adyson
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Buford, Baljeet, Isabella, Holly, Katie, Ginger, Gretchen, Adyson, Ali], 6),
    connectAll([Milly, Katie, Ginger, Holly, Adyson, Ali], 6),
    connectAll([Phineas, Ferb, Buford, Baljeet, Isabella, GregLeMond], 6),
    
    groupConnections([Phineas, Ferb, Buford], [BaljeetsGreatGrandfather, BaljeetsGrandfather, MrTjinder], 3),
    groupConnections([Baljeet], [BaljeetsGreatGrandfather, BaljeetsGrandfather, MrTjinder], 4),
    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Linda, Candace], [Perry], 4),
    groupConnections([Candace], [Baljeet, Buford, Phineas, Ferb, Isabella], 3),
    groupConnections([Linda, Candace], [Doof], 3),

    new Connection(Candace, Linda, 6),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [gonnaDo, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep134, Phineas);
wherePerry.addAppearance(ep134, Candace);
//#endregion
