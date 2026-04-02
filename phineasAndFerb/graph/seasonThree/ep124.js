import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep124 = new Episode({
  number: 124,
  code: "306b",
  title: "Magic Carpet Ride",
  aPlot: "Aerial Area Rug",
  bPlot: "Stain-inator",
  songs: [new Song("Aerial Area Rug", [aaronJacob, dannyJacob])],
  characters: [
    Pinhead,
    Lawrence,
    Phineas,
    Ferb,
    Linda,
    Perry,
    Monogram,
    Doof,
    Candace,
    Stacy,
    Balthazar,
    Roger,
    Isabella,
    Buford,
    Baljeet,
    Melanie
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Lawrence, Isabella, Buford, Baljeet, Linda, Candace], 6),
    connectAll([Candace, Stacy, Balthazar], 1),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Phineas, Ferb], [Linda], 3),
    groupConnections([Phineas, Ferb, Lawrence, Isabella, Buford, Baljeet], [Pinhead], 4),
    groupConnections([Candace, Stacy], [Phineas, Ferb], 4),

    new Connection(Roger, Melanie, 6),
    new Connection(Perry, Roger, 3),
    new Connection(Doof, Roger, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Lawrence, Linda, 6),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [gonnaDo, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep124, Phineas);
wherePerry.addAppearance(ep124, Phineas);
//#endregion
