import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep69 = new Episode({
  number: 69,
  code: "113b",
  title: "That Sinking Feeling",
  aPlot: "'Romantic' Boat Cruise",
  bPlot: "Move the lighthouse",
  songs: [new Song("Boat of Romance", [jackJones])],
  characters: [
    Phineas,
    Ferb,
    Baljeet,
    Mishti,
    MrsTjinder,
    Perry,
    Monogram,
    Doof,
    Candace,
    Jeremy,
    Stacy,
    Linda,
    Lawrence,
    Isabella,
    Adyson,
    Gretchen,
    Holly,
    Ginger,
    Buford,
    Sassy,
    Greg,
    Vanessa,
    FishingHat,
    Kris,
    Sally,
    DumbassGinger,
    Sam,
    Pedro,
    Tilly,
    Terrance,
    Dimitri,
    Elaine,
    Gartanial,
    Chaw,
    Logan,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Baljeet, Mishti, Isabella, Buford], 6),
    connectAll([MrsTjinder, Baljeet, Mishti], 6),
    connectAll([Monogram, Carl, Perry], 6),
    connectAll([Phineas, Ferb, Candace, Isabella, Perry], 6),
    connectAll([Phineas, Isabella, Holly, Gretchen, Adyson, Ginger], 6),
    connectAll([Kris, Sally, DumbassGinger, Sam, Pedro, Tilly, Ferb], 1),
    connectAll([Sassy, Greg, Phineas], 1),
    connectAll([Candace, Jeremy, Buford], 6),
    connectAll([Buford, Holly, Gretchen, Adyson, Ginger, Sam, Dimitri, Sally, FishingHat, Kris, Terrance, Mishti, Phineas, Isabella, Baljeet, Greg, DumbassGinger,], 1),
    connectAll([Sam, Terrance, Elaine, DumbassGinger, Dimitri, Pedro, Greg, Isabella, Phineas], 1),
    connectAll([Buford, DumbassGinger, Sam, Terrance, Dimitri, Pedro, Gartanial, Phineas, Isabella, Chaw, Logan, Greg, FishingHat, Kris, Gretchen, Elaine], 1),

    groupConnections([Baljeet, Ferb], [Perry], 2),
    groupConnections([Monogram, Carl], [Doof], 4),
    groupConnections([Linda], [Phineas, Ferb], 2),
    groupConnections([Linda], [Candace, Lawrence], 6),
    groupConnections([Isabella, Phineas, Ferb, Perry], [Jeremy], 2),
    groupConnections([Candace], [Baljeet, Mishti], 3),
    groupConnections([Sam, Pedro, Dimitri, Terrance, DumbassGinger, Kris, Sally, FishingHat, Greg], [Phineas], 3),
    
    new Connection(Phineas, Perry, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Candace, Jeremy, 4),
    new Connection(Lawrence, Candace, 4),
    new Connection(Doof, Vanessa, 6),
    new Connection(Vanessa, Perry, 4),
    new Connection(Doof, Monogram, 4),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, curseYou],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addAppearance(ep69, Phineas);
wherePerry.addAppearance(ep69, Phineas);
whatchaDoin.addAppearance(ep69, Phineas);
curseYou.addAppearance(ep69, Doof);
//#endregion
