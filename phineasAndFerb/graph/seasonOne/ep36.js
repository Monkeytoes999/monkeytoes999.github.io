import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep36 = new Episode({
  number: 36,
  code: "120b",
  title: "Does This Duckbill Make Me Look Fat?",
  aPlot: "Teleporters / Body Swap",
  bPlot: "Slushy the Clown, replacing tapes",
  songs: [
    new Song("Perry the Teenage Girl", [sheenaEaston])
  ],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Construction,
    Candace,
    Perry,
    Jeremy,
    Isabella,
    Monogram,
    Carl,
    Stacy,
    Hirano,
    Gerez,
    Pedro,
    DumbassGinger
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Candace, Perry], 6),
    connectAll([Gerez, DumbassGinger, Pedro], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb], [Jeremy], 2),
    groupConnections([Stacy, Hirano, Gerez, DumbassGinger, Pedro], [Candace, Perry], 3),
    groupConnections([Linda, Candace], [Jeremy], 6),
    groupConnections([Jeremy], [Phineas, Ferb], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Phineas, Construction, 6),
    new Connection(Monogram, Carl, 6),
    new Connection(Hirano, Stacy, 6),
    new Connection(Isabella, Candace, 6),
    new Connection(Jeremy, Perry, 5),
  ],
  bits: [wherePerry, whatchaDoin, aPlatypus, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep36, Phineas);
whatchaDoin.addAppearance(ep36, Isabella);
aPlatypus.addModifiedAppearance(ep36, Doof);
curseYou.addModifiedAppearance(ep36, Doof);
ohTherePerry.addAppearance(ep36, Phineas);
//#endregion
