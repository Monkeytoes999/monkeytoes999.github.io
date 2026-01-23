import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep61 = new Episode({
  number: 61,
  code: "208b",
  title: "De Plane! De Plane!",
  aPlot: "Biggest Airplane [papier-maché] Paper Pelican",
  bPlot: "Evaporatorinator",
  songs: [new Song("Big Ginormous Airplane", [Ferb])],
  characters: [
    Stacy,
    Candace,
    Jeremy,
    Phineas,
    Ferb,
    Perry,
    Baljeet,
    Buford,
    Isabella,
    Milly,
    Holly,
    Gretchen,
    Adyson,
    Ginger,
    Katie,
    Monogram,
    Doof,
    Lawrence,
    DoofMom,
    Nicolette,
    Dimitri,
    Chaw,
    Sally,
    Kris,
    Pedro,
    Terrance,
    DumbassGinger,
    Logan,
    Sam,
    Chalk,
    Cindy,
    Gartanial,
    Vinn
  ],
  interactions: [
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Perry], 6),
    connectAll([Dimitri, Chaw, Buford, Sally, Kris, Pedro, Terrance, DumbassGinger, Logan, Sam, Chalk, Cindy], 1),
    connectAll([Milly, Holly, Gretchen, Adyson, Katie, Ginger, Vinn, Sally, Kris], 6),
    connectAll([Greg, Nicolette, Jeremy], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Sally, Kris, Vinn], [Baljeet, Isabella], 6), //Very very heavily implied.
    groupConnections([Candace], [Stacy, Jeremy, Nicolette], 6),
    groupConnections([Stacy], [Jeremy, Nicolette], 4),
    groupConnections([Greg], [Candace, Jeremy], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Doof, DoofMom, 6),
    new Connection(Perry, DoofMom, 2),
    new Connection(Baljeet, Lawrence, 5.5)
  ],
  bits: [gonnaDo, whatchaDoin, wherePerry, quirkyWorky, Doof, Phineas],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep61, Phineas);
whatchaDoin.addAppearance(ep61, Isabella);
wherePerry.addAppearance(ep61, Phineas);
quirkyWorky.addAppearance(ep61);
curseYou.addAppearance(ep61, Doof);
ohTherePerry.addAppearance(ep61, Phineas);
//#endregion
