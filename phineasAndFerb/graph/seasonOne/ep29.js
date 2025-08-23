import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep29 = new Episode({
  number: 29,
  code: "117a",
  title: "Greece Lightning",
  aPlot: "Chariot Racing",
  bPlot: "Norm ['The enemy of the Platypus is man']",
  songs: [
    new Song("Paul Bunyan", [dannyJacob]),
    new Song("My Chariot", [robbieWyckoff]),
  ],
  characters: [
    Candace,
    Phineas,
    Ferb,
    Perry,
    Lawrence,
    Monogram,
    Doof,
    Isabella,
    Norm,
    Sam,
    Logan,
    Dimitri,
    DumbassGinger,
    Baljeet,
    Buford,
    Holly,
    Katie,
    Timmy,
    Kris,
    Pedro,
    Django,
    Sally,
    FricknNerd,
    BSKid
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Perry], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford, Holly, Katie, Candace], 6),
    connectAll([Doof, Perry, Norm], 6),
    connectAll([Logan, Sam, Dimitri, DumbassGinger, Timmy, Kris, Pedro], 1),
    connectAll([DumbassGinger, Sam, Dimitri, Django, FricknNerd, Dimitri, BSKid, Logan, Kris]),

    groupConnections([Lawrence], [Phineas, Ferb, Candace, Isabella], 6),
    groupConnections([Logan, Sam, Dimitri, DumbassGinger, Timmy, Kris, Pedro, Sally, Django, FricknNerd, BSKid], [Phineas, Ferb, Isabella, Katie, Holly, Buford, Baljeet, Candace], 3),
    groupConnections([Timmy, Sam, DumbassGinger, Logan, Pedro, Phineas, Ferb, Baljeet, Buford, Katie, Isabella, Holly, Kris, FricknNerd], [Django], 3),

    groupConnections([Phineas, Ferb, Candace, Baljeet, Katie, Kris, Timmy, BSKid], [Norm], 3),

    new Connection(Perry, Monogram, 6),
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Norm, 6),
    new Connection(Django, Sally, 1),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, ggg],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addAppearance(ep29, Phineas);
wherePerry.addAppearance(ep29, Phineas);
whatchaDoin.addAppearance(ep29, Lawrence)
ggg.addAppearance(ep29);
//#endregion
