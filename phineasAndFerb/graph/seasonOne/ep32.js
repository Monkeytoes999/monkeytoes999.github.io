import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//Xavier and Amanda
export const ep32 = new Episode({
  number: 32,
  code: "118b",
  title: "The Best Lazy Day Ever",
  aPlot: "P&F do nothing, Candace goes nuts",
  bPlot: "Slow-motion-inator & Uglyinator [Make everyone else uglier thus being more handsome]",
  songs: [
    new Song("Do Nothing Day", [Jeremy, Coltrane, IncidentalsDrummer, Candace]),
  ],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Stacy,
    Jeremy,
    Monogram,
    Doof,
    Carl,
    Timmy,
    VanceWard,
    Coltrane,
    IncidentalsDrummer,
  ],
  interactions: [
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Perry, Linda], 6),
    connectAll([Jeremy, Coltrane, IncidentalsDrummer], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Phineas, Ferb, Stacy, Linda], 6),
    groupConnections([Candace, Stacy], [Jeremy, Coltrane, IncidentalsDrummer], 6),
    groupConnections([Phineas, Ferb], [Jeremy], 2),
    groupConnections([Stacy], [Phineas, Ferb], 2),
    groupConnections([Doof, Perry, Linda, Phineas, Ferb], [VanceWard], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 3),
    new Connection(Carl, Doof, 2),
    new Connection(Candace, Timmy, 3),
  ],
  bits: [wherePerry, littleYoung, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep32, Phineas);
littleYoung.addModifiedAppearance(ep32); //NOT REAL NOT REAL
curseYou.addAppearance(ep32, Doof);
ohTherePerry.addAppearance(ep32, Phineas);
//#endregion
