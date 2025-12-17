import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep48 = new Episode({
  number: 48,
  code: "201",
  title: "The Lake Nose Monster",
  aPlot: "Nosey",
  bPlot: "Collect a bunch of zinc",
  songs: [
    new Song("Mission Song", [animatronicAnimals]),
    new Song("Save You Save Me", [dannyJacob]),
    new Song("My Wettest Friend", [dannyJacob]),
  ],
  characters: [
    Phineas,
    Lawrence,
    Linda,
    Ferb,
    Candace,
    Perry,
    Jeremy,
    Carl,
    Monogram,
    Doof,
    Vinn,
    Jeremy,
    Webber,
    Dimitri,
    Logan,
    Baljeet,
    Buford,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace, Perry], 6),
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Candace, Jeremy, Webber], 6),
    connectAll([Dimitri, Logan], 1),
    connectAll([Phineas, Ferb, Baljeet, Buford], 6),

    groupConnections([Perry], [Carl, Monogram, Doof], 6),
    groupConnections([Phineas, Ferb, Linda, Lawrence, Candace], [Jeremy], 2),
    groupConnections([Phineas, Ferb], [Webber], 3),
    groupConnections([Jeremy, Webber], [Dimitri, Logan], 3),
    groupConnections([Dimitri], [Candace, Webber], 3),
    groupConnections([Candace], [Logan, Dimitri, Vinn], 6),
    groupConnections([Logan, Dimitri], [Phineas, Ferb, Perry, Candace], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Webber, Baljeet, 6),
  ],
  bits: [wherePerry],
  ferbLines: 2,
});

//#region Bit Handler
wherePerry.addAppearance(ep48, Phineas);
ohTherePerry.addAppearance(ep48, Lawrence);
//#endregion
