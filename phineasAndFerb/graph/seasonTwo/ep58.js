import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep58 = new Episode({
  number: 58,
  code: "206b",
  title: "Gaming the System",
  aPlot: "Fully immersive video game",
  bPlot: "Ballgowninator",
  songs: [new Song("Let's Go Digital", [Buford, Baljeet, Isabella, dannyJacob])],
  characters: [
    Buford,
    Phineas,
    Ferb,
    Baljeet,
    Candace,
    Stacy,
    Jeremy,
    Isabella,
    Perry,
    Monogram,
    Doof,
    DoofMom,
    Roger
    ],
  interactions: [
    connectAll([Buford, Baljeet, Phineas, Ferb, Isabella, Candace], 6),
    connectAll([Phineas, Ferb, Isabella, Candace, Jeremy, Perry], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Stacy, Buford, Baljeet], [Jeremy], 2),
    groupConnections([Stacy], [Phineas, Ferb], 2),
    groupConnections([Doof], [DoofMom, Roger], 5),
    groupConnections([Perry], [DoofMom, Roger], 2),

    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Stacy, 6),
  ],
  bits: [gonnaDo, wherePerry, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep58, Phineas);
wherePerry.addAppearance(ep58, Phineas);
curseYou.addAppearance(ep58, Doof);
ohTherePerry.addAppearance(ep58, Phineas);
//#endregion
