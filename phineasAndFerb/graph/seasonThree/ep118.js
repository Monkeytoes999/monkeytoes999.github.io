import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep118 = new Episode({
  number: 118,
  code: "303a",
  title: "The Belly of the Beast",
  aPlot: "Harbor Day Reenactment",
  bPlot: "Saltwater Taffyinator",
  songs: [new Song("Shark of Danville Harbor", [Squint])],
  characters: [
    Cindy,
    Dimitri,
    Lawrence,
    Phineas,
    Ferb,
    Linda,
    Squint,
    Terrance,
    Sally,
    Buford,
    Baljeet,
    Perry,
    Monogram,
    Carl,
    Doof,
    Candace,
    Stacy
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Sally, Terrance, Cindy, Dimitri], 1),
    connectAll([Candace, Stacy, Squint], 6),
    connectAll([Linda, Lawrence, Sally, Terrance, Dimitri], 1),
    connectAll([Phineas, Ferb, Candace, Linda, Baljeet, Buford], 6),
    connectAll([Phineas, Ferb, Squint], 6),

    // groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Linda, Lawrence, Phineas, Ferb], [Buford, Baljeet], 3),
    groupConnections([Phineas, Ferb, Linda], [Perry], 2),
    groupConnections([Phineas, Ferb, Linda, Lawrence, Terrance, Cindy, Dimitri, Sally], [Squint], 3),
    groupConnections([Candace, Stacy], [Phineas, Ferb], 3),

    new Connection(Lawrence, Perry, 4),
    new Connection(Cindy, Dimitri, 1),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [gonnaDo, wherePerry, curseYou],
  ferbLines: 0,
});

//#region Bit Handler
gonnaDo.addAppearance(ep118, Phineas);
wherePerry.addAppearance(ep118, Lawrence);
curseYou.addAppearance(ep118, Doof);
//#endregion
