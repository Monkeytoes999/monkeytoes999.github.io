import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep55 = new Episode({
  number: 55,
  code: "205a",
  title: "Don't Even Blink",
  aPlot: "Figure out where the stuff goes",
  bPlot: "Invisinator",
  songs: [new Song("Watchin' and Waitin'", [Ferb, Phineas, Isabella, Gretchen, Milly, Katie, Holly, Adyson, Ginger, Baljeet, Stacy, Buford])],
  characters: [
    Stacy,
    Candace,
    Phineas,
    Ferb,
    Linda,
    Hirano,
    Perry,
    Monogram,
    Doof,
    Isabella,
    Baljeet,
    Buford,
    Katie,
    Gretchen,
    Adyson,
    Holly,

  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Linda, Adyson, Holly, Gretchen, Katie, Ginger, Milly, Candace, Stacy, Phineas, Ferb, Isabella, Baljeet, Buford], 6),
    connectAll([Katie, Gretchen, Doof], 6),
    groupConnections([Perry], [Monogram, Doof], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Stacy, Hirano, 4),
    new Connection(Candace, Hirano, 2),
  ],
  bits: [wherePerry, quirkyWorky],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep55, Phineas);
quirkyWorky.addAppearance(ep55);
//#endregion
