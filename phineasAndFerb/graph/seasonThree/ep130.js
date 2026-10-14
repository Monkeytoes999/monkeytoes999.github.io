import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep130 = new Episode({
  number: 130,
  code: "309b",
  title: "A Real Boy",
  aPlot: "Giant popping spring",
  bPlot: "Forget-about-it-inator",
  songs: [new Song("Gumshine", [dannyJacob]), new Song("Real Boy", [Norm])],
  characters: [
    Norm,
    Doof,
    Rodney,
    OrvilleRod,
    Vanessa,
    Isabella,
    Phineas,
    Buford,
    Baljeet,
    Ferb,
    Candace,
    Monogram,
    Carl,
    Perry,
    Stacy,
    Jeremy,
    Balthazar,
    Linda,
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Doof, Rodney, OrvilleRod], 6),
    connectAll([Isabella, Phineas, Buford, Baljeet, Ferb], 6),
    connectAll([Monogram, Carl, Perry], 6),
    connectAll([Candace, Jeremy, Balthazar], 6),
    connectAll([Doof, Norm, Perry], 6),

    groupConnections([Candace], [Phineas, Ferb, Baljeet, Buford, Isabella], 3),
    groupConnections([Doof, Norm], [Vanessa], 6),
    groupConnections([Stacy, Candace], [Phineas, Ferb], 4),
    groupConnections([Candace], [Stacy, Jeremy], 6),
    groupConnections([Jeremy], [Phineas, Ferb], 2),
    groupConnections([Linda], [Phineas, Ferb], 2),
    // groupConnections([Linda], [Phineas, Ferb, Baljeet, Isabella], 3), //I love memory erasure!

    new Connection(Perry, Vanessa, 3),
    new Connection(Rodney, Vanessa, 4),
    new Connection(Norm, Rodney, 2),
    new Connection(Doof, Norm, 6),
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Stacy, 6),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Perry, Norm, 3),
    new Connection(Linda, Perry, 6),
  ],
  bits: [whatchaDoin, wherePerry, fthWall],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep130, Isabella);
wherePerry.addModifiedAppearance(ep130, Phineas);
fthWall.addAppearance(ep130);
ohTherePerry.addAppearance(ep130, Linda);
//#endregion
