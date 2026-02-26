import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep102 = new Episode({
  number: 102,
  code: "231b",
  title: "The Lemonade Stand",
  aPlot: "Lemonade stand, squeezy lemon robot friend",
  bPlot: "Paper-cut-inator",
  songs: [new Song("You're My Better Best Friend", [lCPowell])],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Perry,
    Monogram,
    Doof,
    Stacy,
    Pedro,
    Balthazar,
    Terrance,
    Chalk,
    Jenny,
    Jeremy,
    Linda,
    Buford,
    MoMo,
    Isabella,
    Ginger,
    Milly,
    Adyson,
    Sam,
    Greg,
    Gretchen,
    Holly,
    Vanessa
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Stacy], 6),
    connectAll([Phineas, Ferb, MoMo], 3),
    connectAll([Isabella, Ginger, Milly], 6),
    connectAll([Logan, Pedro, MoMo, Terrance, Sassy, Adyson, Sam], 1),
    connectAll([Sam, Chalk, Terrance, Pedro, Logan, Greg, Sassy, MoMo], 1),
    connectAll([Terrance, Sam, Buford], 6),
    connectAll([Candace, Stacy, Linda], 6),
    connectAll([Phineas, Ferb, Linda, Perry], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Ferb], [Balthazar, Pedro, Terrance], 6),
    groupConnections([Phineas, Ferb, Candace], [Terrance, Pedro, Balthazar, Chalk], 1),
    groupConnections([Pedro, Sassy, MoMo, Terrance, Sam], [Logan], 3),
    groupConnections([Sam, Chalk, Terrance, Pedro, Logan, Greg, Sassy, MoMo], [Phineas, Ferb], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Phineas, Perry, 4),
    new Connection(Candace, Stacy, 6),
    new Connection(Pedro, Balthazar, 1),
    new Connection(Balthazar, Pedro, 3),
    new Connection(Candace, Jenny, 6),
    new Connection(Jenny, Stacy, 2),
    new Connection(Candace, Jeremy, 4),
    new Connection(Ferb, Isabella, 2),
    new Connection(Phineas, Isabella, 6),
    new Connection(Adyson, Logan, 6),
    new Connection(Terrance, Greg, 1),
    new Connection(Buford, Candace, 6),
    new Connection(Candace, Perry, 2),
    new Connection(Vanessa, Doof, 6),
    new Connection(Vanessa, Perry, 4),
  ],
  bits: [wherePerry, aPlatypus, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep102, Phineas);
aPlatypus.addAppearance(ep102, Doof);
curseYou.addAppearance(ep102, Doof);
ohTherePerry.addAppearance(ep102, Phineas);
//#endregion
