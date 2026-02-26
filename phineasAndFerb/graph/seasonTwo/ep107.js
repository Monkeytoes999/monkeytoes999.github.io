import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep107 = new Episode({
  number: 107,
  code: "335a",
  title: "Split Personality",
  aPlot: "Molecular Separator",
  bPlot: "Look Away-inator",
  songs: [new Song("I'm Through with Me", [Candace])],
  characters: [
    Candace,
    Stacy,
    Jeremy,
    Phineas,
    Ferb,
    Baljeet,
    Buford,
    Perry,
    Monogram,
    Doof,
    Gartanial,
    DoofMom,
    DoofDad,
    Linda,
    Tilly,
    Lily,
    MoMo,
    Dimitri,
    Margaret,
    Sassy
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford], 6),
    connectAll([DoofMom, DoofDad, Doof], 6),
    connectAll([Terrance, MoMo, Dimitri, Candace], 1),
    connectAll([Phineas, Ferb, Candace, Linda], 6),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Stacy], [Phineas, Ferb, Jeremy], 2),
    groupConnections([Perry, Doof], [Gartanial], 1),
    groupConnections([Perry], [DoofMom, DoofDad], 2),
    groupConnections([Candace], [Tilly, Lily], 1),
    groupConnections([Jeremy], [Candace, Terrance, Phineas, Ferb], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Stacy, 6),
    new Connection(Tilly, Lily, 6),
    new Connection(MoMo, Candace, 3),
    new Connection(Doof, Gartanial, 6),
    new Connection(Perry, Gartanial, 1),
    new Connection(Jeremy, Linda, 4),
    new Connection(Linda, Jeremy, 2),
  ],
  bits: [gonnaDo, bird, curseYou],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep107, Phineas);
bird.addModifiedAppearance(ep107);
curseYou.addModifiedAppearance(ep107, Doof);
//#endregion
