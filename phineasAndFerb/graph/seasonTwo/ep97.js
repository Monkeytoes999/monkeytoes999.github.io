import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep97 = new Episode({
  number: 97,
  code: "229a",
  title: "The Lizard Whisperer",
  aPlot: "Steve the Chameleon",
  bPlot: "Omnidirectional Amplifinator",
  songs: [new Song("Egyptian Guitar Solo", [Doof])],
  characters: [
    Phineas,
    Ferb,
    Isabella,
    Candace,
    Jeremy,
    Linda,
    Perry,
    Monogram,
    Doof,
    Carl,
    Vanessa,
    Fribbleton,
    Balthazar,
    WindowSteve,
    NewspaperSteve
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Isabella, Candace, Linda], 6),
    connectAll([Vanessa, Jeremy, Doof], 6),
    connectAll([Phineas, Ferb, Isabella, Perry], 6),

    // groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Isabella, Ferb], [Linda], 2),
    groupConnections([Fribbleton, Balthazar], [Phineas, Ferb, Isabella], 3),
    groupConnections([WindowSteve, NewspaperSteve], [Phineas, Ferb, Isabella], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Carl, Doof, 2),
    new Connection(Monogram, Carl, 6),
    new Connection(Phineas, Linda, 4),
    new Connection(Fribbleton, Balthazar, 1),
    new Connection(Perry, Doof, 6),
    new Connection(Jeremy, Perry, 4),
    new Connection(Monogram, Jeremy, 6),
  ],
  bits: [whatchaDoin, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep97, Isabella);
wherePerry.addAppearance(ep97, Isabella);
//#endregion
