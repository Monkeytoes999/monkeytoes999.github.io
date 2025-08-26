import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep42 = new Episode({
  number: 42,
  code: "123b",
  title: "Unfair Science Fair Redux (Another Story)",
  aPlot: "Portal to Mars [Mars]",
  bPlot: "BUILD the volcano.",
  songs: [
    new Song("Queen of Mars", [Candace]),
  ],
  characters: [
    Baljeet,
    Candace,
    Jeremy,
    Stacy,
    Jenny,
    Phineas,
    Ferb,
    Wendy,
    OlgaChicago,
    Perry,
    SlushyDawgManager,
    Martians,
    Linda,
    UnknownGuy
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Baljeet, Candace], 6),
    connectAll([Phineas, Ferb, Candace, Martians], 6),
    connectAll([Candace, Jenny, Stacy], 6),
    connectAll([Perry, Doof, Monogram, Carl], 6),

    groupConnections([Candace, Jenny, Stacy], [Suzy], 2),
    groupConnections([Jeremy, Jenny, Stacy], [UnknownGuy], 3),
    groupConnections([Candace], [SlushyDawgManager, UnknownGuy], 6),

    new Connection(Jeremy, Suzy, 6),
    new Connection(Candace, Wendy, 5),
    new Connection(Candace, OlgaChicago, 4),
    new Connection(Doof, Martians, 6),
  ],
  bits: [isOUT],
  ferbLines: 1,
});

//#region Bit Handler
isOUT.addAppearance(ep42, Candace);
//#endregion
