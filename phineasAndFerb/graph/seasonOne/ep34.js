import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep34 = new Episode({
  number: 34,
  code: "119b",
  title: "Voyage to the Bottom of Buford",
  aPlot: "Find Biff",
  bPlot: "Media Erase-inator",
  songs: [
    new Song("Fish Out of Water", [beverleyStaunton]),
  ],
  characters: [
    Phineas,
    Ferb,
    Baljeet,
    Isabella,
    Dimitri,
    Kris,
    Buford,
    Lily,
    Biffany,
    Perry,
    Monogram,
    Doof,
    Candace,
    Stacy,
    Linda
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb], [Biffany], 2),
    groupConnections([Ferb, Buford], [Perry], 2),
    groupConnections([Candace], [Stacy, Linda, Phineas, Ferb], 6),
    groupConnections([Stacy], [Phineas, Ferb], 4),
    groupConnections([Candace], [Phineas, Ferb, Isabella, Baljeet, Buford], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Dimitri, Kris, 6),
    new Connection(Buford, Biffany, 6),
    new Connection(Phineas, Perry, 4),
    new Connection(Candace, Jeremy, 4),
    new Connection(Stacy, Jeremy, 2),
  ],
  bits: [wherePerry, fthWall, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep34, Phineas);
fthWall.addAppearance(ep34, Phineas);
curseYou.addAppearance(ep34, Doof);
//#endregion
