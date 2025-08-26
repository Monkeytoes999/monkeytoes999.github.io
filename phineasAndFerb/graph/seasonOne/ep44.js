import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep44 = new Episode({
  number: 44,
  code: "125a",
  title: "Got Game?",
  aPlot: "F-Games",
  bPlot: "Misbehavinator",
  songs: [
    new Song("F-Games", [robbieWyckoff])
  ],
  characters: [
    Phineas,
    Ferb,
    Buford,
    Baljeet,
    Isabella,
    Candace,
    Stacy,
    Jeremy,
    Perry,
    Monogram,
    Doof,
    DoofDad,
    Kenny,
    Linda
  ],
  interactions: [
    connectAll([Phineas, Ferb, Buford, Baljeet, Isabella, Candace], 6),

    groupConnections([Perry], [Monogram, Doof, Phineas, Ferb], 6),
    groupConnections([Candace], [Stacy, Jeremy], 6),
    groupConnections([Phineas, Ferb, Isabella], [Jeremy], 6),
    groupConnections([Doof], [DoofDad, Kenny], 6),
    groupConnections([Perry], [DoofDad, Kenny], 2),
    groupConnections([Candace, Phineas, Ferb], [Linda], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Stacy, 6),
    new Connection(Stacy, Jeremy, 2),
  ],
  bits: [gonnaDo, wherePerry, aPlatypus],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep44, Phineas);
wherePerry.addAppearance(ep44, Phineas);
aPlatypus.addModifiedAppearance(ep44, Doof);
ohTherePerry.addAppearance(ep44, Phineas);
//#endregion
