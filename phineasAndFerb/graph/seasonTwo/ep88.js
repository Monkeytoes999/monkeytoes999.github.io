import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep88 = new Episode({
  number: 88,
  code: "223b",
  title: "Hip Hip Parade",
  aPlot: "Tri-State Area Unification Day Parade",
  bPlot: "Duplic-8-inator",
  songs: [new Song("Tri-State Area Unification", [DannyLH, Sherman, Bobbi])],
  characters: [
    Phineas,
    Ferb,
    Isabella,
    Baljeet,
    Trystate,
    UncleKamal,
    Buford,
    Adjacent,
    Perry,
    Monogram,
    Carl,
    Doof,
    Linda,
    Candace,
    Farmer,
    FarmerWife,
    DannyLH,
    Sherman,
    Bobbi,
    Gerez,
    Dink,
    Baxter,
    Dimitri,
    DumbassGinger,
    Chaw,
    Irving,
    Ginger,
    Holly,
    Sam,
    Pedro,
    Terrance,
    Sally,
    Balthazar
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford], 6),
    connectAll([Phineas, Ferb, Baljeet, Isabella, Candace], 6),
    connectAll([Tilly, Lily, Kris], 1),
    connectAll([DannyLH, Bobbi, Sherman], 6),
    connectAll([Candace, Linda, Baxter], 1),
    connectAll([Dimitri, Chaw, DumbassGinger], 1),
    connectAll([Irving, Phineas, Ferb, Isabella, Ginger, Holly], 6),
    connectAll([Phineas, Ferb, Isabella, Irving, Candace, Linda], 6),
    connectAll([Sam, Pedro, Balthazar, Terrance, Sally], 1),
    
    groupConnections([Phineas, Ferb, Isabella], [Trystate, UncleKamal], 2),
    groupConnections([Phineas, Ferb, Baljeet, Isabella], [Adjacent], 2),
    groupConnections([Phineas], [DannyLH, Bobbi, Sherman], 4),
    groupConnections([Gerez], [Bobbi, Sherman, DannyLH], 3),
    groupConnections([Buford, Candace], [Dink], 3),
    groupConnections([Tilly, Lily, Kris], [Phineas], 3),
    groupConnections([Sam, Pedro, Terrance, Sally, Balthazar], [Phineas, Ferb, Isabella, Ginger, Holly, Irving], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Baljeet, Trystate, 4),
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Linda, Candace, 6),
  ],
  bits: [whatchaDoin, gonnaDo, wherePerry, farmer, aPlatypus, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep88, Isabella);
gonnaDo.addAppearance(ep88, Phineas);
wherePerry.addAppearance(ep88, Phineas);
farmer.addAppearance(ep88, FarmerWife);
aPlatypus.addModifiedAppearance(ep88, Doof);
curseYou.addAppearance(ep88, Doof);
//#endregion
