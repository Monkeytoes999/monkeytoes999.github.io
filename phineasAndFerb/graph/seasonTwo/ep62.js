import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep62 = new Episode({
  number: 62,
  code: "209a",
  title: "Let's Take a Quiz",
  aPlot: "Game Show",
  bPlot: "Scorchinator",
  songs: [new Song("Let's Take a Quiz", [dannyJacob]), new Song("Flip Flop Jingle", [dannyJacob])],
  characters: [
    Candace,
    Stacy,
    Jeremy,
    Jenny,
    Phineas,
    Isabella,
    Ferb,
    Hirano,
    Baljeet,
    Buford,
    Perry,
    Monogram,
    Carl,
    Doof,
    Gretchen,
    Milly,
    Katie,
    Sally,
    Bob,
    Margaret,
    Ginger,
    Kalcium,
    Gartanial,
    Coltrane
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Isabella, Candace, Baljeet, Buford, Gretchen, Milly, Katie, Ginger], 6),
    connectAll([Perry, Carl, Doof], 6),
    connectAll([Bob, Margaret, Gartanial], 1),
    connectAll([Phineas, Ferb, Candace, Perry], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Stacy, Candace], [Jenny], 2),
    groupConnections([Bob, Margaret, Kalcium, Gartanial], [Phineas, Candace, Buford], 3),
    
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Monogram, Doof, 4),
    new Connection(Stacy, Hirano, 3),
    new Connection(Candace, Hirano, 2),
    new Connection(Coltrane, Candace, 4),
    new Connection(Coltrane, Jeremy, 6),
  ],
  bits: [whatchaDoin, wherePerry, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addModifiedAppearance(ep62, Isabella);
wherePerry.addAppearance(ep62, Phineas);
curseYou.addAppearance(ep62, Doof);
//#endregion
