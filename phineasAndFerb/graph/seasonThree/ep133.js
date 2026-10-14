import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep133 = new Episode({
  number: 133,
  code: "311a",
  title: "Skiddley Whiffers",
  aPlot: "Giant Skiddley Whiffers",
  bPlot: "Stalk",
  songs: [new Song("Skiddley Whiffers", [dannyJacob])],
  characters: [
    Candace,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Carl,
    Doof,
    Vanessa,
    Lacie,
    Johnny,
    Isabella,
    Baljeet,
    Buford,
    Linda,
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Doof, Vanessa, Lacie, Johnny, Perry], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford, Candace, Linda], 6),

    // groupConnections([Perry], [Doof, Monogram], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Phineas, Perry, 4),
    new Connection(Vanessa, Perry, 4),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep133, Phineas);
wherePerry.addAppearance(ep133, Phineas);
whatchaDoin.addModifiedAppearance(ep133, Isabella);
pharmacist.addAppearance(ep133, Johnny);
//#endregion
