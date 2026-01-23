import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep71 = new Episode({
  number: 71,
  code: "214b",
  title: "Vanessassary Roughness",
  aPlot: "uh... largely nothing.",
  bPlot: "Pizzazium Infinionite",
  songs: [new Song("I'm Me", [Vanessa, Ferb])],
  characters: [
    Vanessa,
    Doof,
    AltDimensionAlien,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Candace,
    Stacy,
    Jeremy,
    Monogram,
    Carl,
    Elaine,
    Margaret,
    Baljeet,
    Buford,
    Greg
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Linda, Candace, Stacy], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Baljeet, Buford, Candace, Stacy], 6),

    groupConnections([Phineas, Ferb, Linda, Stacy], [Jeremy], 2),
    groupConnections([Vanessa], [Candace, Stacy], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Doof, Vanessa, 6),
    new Connection(Candace, Jeremy, 5),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Perry, Doof, 5.5),
    new Connection(Vanessa, Ferb, 6),
    new Connection(Ferb, Doof, 5.5),
    new Connection(Greg, Margaret, 1),
  ],
  bits: [gonnaDo, farmer],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep71, Phineas);
farmer.addModifiedAppearance(ep71, Stacy);
littleYoung.addModifiedAppearance(ep71, Linda);
//#endregion
