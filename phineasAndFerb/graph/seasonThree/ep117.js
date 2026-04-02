import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep117 = new Episode({
  number: 117,
  code: "302b",
  title: "Canderemy",
  aPlot: "Rover / Molecular Separator",
  bPlot: "Combininator",
  songs: [new Song("Just the Two of Us", [dannyJacob])],
  characters: [
    Candace,
    Stacy,
    Jeremy,
    Isabella,
    Phineas,
    Ferb,
    Baljeet,
    Buford,
    Perry, 
    Doof,
    Johnson,
    Norm,
    Tilly,
    Lily,
    Velvet,
    Logan,
    Dimitri,
    Chalk,
    Sam,
    Cindy,
    Ruby,
    Greg,
    Cindy,
    FishingHat,
    Bimmany,
    DumbassGinger,
    Parlet,
    Pedro,
    Gerez,
    Chaw,
    Terrance
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Candace, Jeremy, Stacy], 6),
    connectAll([Candace, Isabella, Phineas, Ferb, Baljeet, Buford], 6),
    connectAll([Johnson, Jeremy, Candace], 6),
    connectAll([Doof, Perry, Norm], 6),
    connectAll([Sam, Dimitri, Logan, Chalk, Tilly, Lily, Velvet, Candace, Stacy], 1),
    connectAll([Ruby, Chalk, Sam, Greg, Cindy, Logan], 1),
    connectAll([Bimmany, DumbassGinger], 1),
    connectAll([FishingHat, Bimmany, Logan], 1),

    // groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Ferb, Isabella], [Perry], 2),
    groupConnections([Bimmany], [Phineas, Isabella], 3),
    groupConnections([Parlet], [Baljeet, Buford], 3),
    groupConnections([Bimmany, FishingHat, Logan], [Ferb], 3),
    groupConnections([Chaw, Terrance], [Phineas, Ferb, Isabella], 3),

    new Connection(Chaw, Terrance, 1),
    new Connection(Pedro, Lily, 1),
    new Connection(Ruby, Cindy, 1),
    new Connection(Tilly, Lily, 6),
    new Connection(Phineas, Perry, 4),
    // new Connection(Monogram, Doof, 4),
  ],
  bits: [whatchaDoin, themeSong, gonnaDo],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep117, Isabella);
themeSong.addAppearance(ep117);
gonnaDo.addModifiedAppearance(ep117, Phineas);
//#endregion
