import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//Candace Meap
export const ep52 = new Episode({
  number: 52,
  code: "203b",
  title: "Backyard Aquarium",
  aPlot: "Backyard Aquarium",
  bPlot: "P.S.A.A.I.O.T.F.M.E.P.C-inator & Hot-Dog-Vendor-Revenginator",
  songs: [new Song("When Will He Call Me?", [sheenaEaston])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Linda,
    Jeremy,
    Beehive,
    Monogram,
    Doof,
    Dimitri,
    Logan,
    Gartanial,
    Chaw,
    Terrance,
    Greg,
    Elaine,
    Bimmany,
    Bob,
    Kris,
    Chalk,
    Vinn,
    Margaret,
    Bridgette,
    Sally,
    Tilly,
    Lily
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Perry], 6),
    connectAll([Kris, Bimmany, Elaine, Greg, Terrance, Bob], 1),
    connectAll([Vinn, Margaret, Bob, Greg, Chalk, Bimmany], 1),
    connectAll([Sally, Gartanial, Terrance, Margaret, Elaine, Tilly, Lily, Logan,], 1),
    connectAll([Jeremy, Kris, Sally, Bridgette, Bob, Chaw, Greg, Dimitri, Bimmany, Gartanial], 1),
    connectAll([Tilly, Lily, Kris, Sally, Terrance, Chalk, Greg], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Linda, Jeremy, Bob, Phineas], 6),
    groupConnections([Candace], [Gartanial, Chaw], 3),
    groupConnections([Kris, Bimmany, Greg, Terrance, Elaine], [Bob, Candace], 3),
    groupConnections([Vinn, Margaret, Bob, Greg, Chalk, Bimmany], [Phineas, Candace], 3),
    groupConnections([Linda], [Jeremy, Bridgette], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Dimitri, Doof, 6),
    new Connection(Sally, Candace, 3),
    new Connection(Chaw, Gartanial, 1),
  ],
  bits: [wherePerry, littleYoung, gonnaDo, lindana, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addModifiedAppearance(ep52, Phineas)
littleYoung.addAppearance(ep52);
wherePerry.addAppearance(ep52, Phineas);
gonnaDo.addModifiedAppearance(ep52, Phineas);
lindana.addAppearance(ep52);
ggg.addAppearance(ep52);
curseYou.addAppearance(ep52, Doof);
ohTherePerry.addAppearance(ep52, Phineas);
//#endregion
