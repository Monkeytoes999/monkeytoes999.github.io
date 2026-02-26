import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep104 = new Episode({
  number: 104,
  code: "232b",
  title: "Ladies and Gentlemen, Meet Max Modem!",
  aPlot: "80s Reunion Concert",
  bPlot: "Alieninator",
  songs: [new Song("Alien Heart", [Phineas, Ferb, Lawrence])],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Perry,
    Linda,
    Lawrence,
    Monogram,
    Doof,
    Greg,
    Sally,
    Margaret,
    Haney
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace, Perry], 6),
    connectAll([Greg, Haney, Margaret], 1),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Greg], [Phineas, Ferb, Lawrence, Candace, Linda, Doof], 3),
    groupConnections([Haney, Margaret], [Lawrence, Phineas, Ferb], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Linda, 2),
    new Connection(Sally, Doof, 3),
    new Connection(Doof, Sally, 3),
  ],
  bits: [gonnaDo, wherePerry, aPlatypus, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep104, Ferb);
wherePerry.addAppearance(ep104, Phineas);
aPlatypus.addModifiedAppearance(ep104);
ohTherePerry.addAppearance(ep104, Linda);
//#endregion
