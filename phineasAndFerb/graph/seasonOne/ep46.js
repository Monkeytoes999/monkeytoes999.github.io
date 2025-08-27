import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep46 = new Episode({
  number: 46,
  code: "126a",
  title: "Out of Toon",
  aPlot: "Animation Studio",
  bPlot: "Dance Away Inator",
  songs: [
    new Song("Pinhead Pierre", [dannyJacob]),
  ],
  characters: [
    Lawrence,
    Perry,
    Phineas,
    Ferb,
    Pinhead,
    Monogram,
    Carl,
    Doof,
    Katie,
    Milly,
    Ginger,
    Adyson,
    Candace,
    GFBH,
    Linda,
    Baljeet,
    Buford,
    Isabella,
    Pedro,
    Cindy,
    Django,
    DumbassGinger,
    Sam,
    Timmy,
    Dimitri,
    Logan,
    Gerez,
    Stanky
  ],
  interactions: [
    connectAll([Lawrence, Perry, Phineas, Ferb], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Candace], 6),
    connectAll([Pedro, Cindy, Django, DumbassGinger, Sam, Timmy, Dimitri, Logan], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb, Lawrence], [Pinhead], 3),
    groupConnections([Phineas, Ferb], [Linda], 2),
    groupConnections([Pedro, Cindy, Django, DumbassGinger, Sam, Timmy, Dimitri, Logan, Gerez, Stanky], [Phineas, Ferb, Isabella, Candace, Baljeet, Buford], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 3),
    new Connection(Milly, Katie, 6),
    new Connection(Ginger, Adyson, 6),
    new Connection(Gerez, Stanky, 1),
    new Connection(Candace, Linda, 6),
  ],
  bits: [ggg, gonnaDo, whatchaDoin, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
ggg.addModifiedAppearance(ep46);
gonnaDo.addAppearance(ep46, Phineas);
whatchaDoin.addAppearance(ep46, Buford);
whatchaDoin.addAppearance(ep46, Isabella);
curseYou.addAppearance(ep46, Doof);
//#endregion
