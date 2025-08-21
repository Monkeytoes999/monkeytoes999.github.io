import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep8 = new Episode({
  number: 8,
  code: "104b",
  title: "Flop Starz",
  aPlot: "Become one hit wonders",
  bPlot: "Doof just kinda makes the building walk",
  songs: [
    new Song("I'm Lindana and I Wanna Have Fun", [Linda]),
    new Song("Gitchee Gitchee Goo", [Phineas, Ferb, Isabella, Milly, Gretchen, Adyson, Candace])
  ],
  characters: [
    BSKid,
    PhilAnnouncer,
    Linda,
    Phineas,
    Ferb,
    Candace,
    Stacy,
    Monogram,
    Doof,
    Jeremy,
    Logan,
    DumbassGinger,
    Dimitri,
    Isabella,
    Milly,
    Gretchen,
    Adyson,
    Sam,
    Baxter,
    Marty,
    Construction,
    Johnson
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Candace, Perry], 6),
    connectAll([Phineas, Ferb, Candace, Isabella, Milly, Gretchen, Adyson], 6),
    connectAll([Candace, Stacy, Jeremy], 6),
    connectAll([Stacy, Jeremy, Dimitri, DumbassGinger, Logan, Sam], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Linda, Stacy, Jeremy, Dimitri, DumbassGinger, Logan, Sam, Johnson], [PhilAnnouncer], 3),
    groupConnections([Linda, Candace, Dimitri, Johnson], [Marty], 3),
    groupConnections([Stacy, Jeremy, Dimitri, DumbassGinger, Logan, Sam], [Isabella, Milly, Gretchen, Phineas, Ferb, Adyson], 3),
    groupConnections([Isabella, Milly, Gretchen, Adyson], [Baxter, Perry], 3),
    groupConnections([Dimitri, DumbassGinger, Logan, Sam], [Candace], 3),
    groupConnections([BSKid, Phineas, Ferb, Candace, Marty], [PhilAnnouncer], 6),
    groupConnections([Phineas, Ferb], [BSKid], 3),
    groupConnections([Phineas, Ferb], [Baxter], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Linda, Stacy, 6),
    new Connection(Dimitri, Johnson, 1),
  ],
  bits: [lindana, gonnaDo, wherePerry, aPlatypus, ggg, littleYoung, curseYou],
  ferbLines: 0,
});
//#region Bit Handler
lindana.addAppearance(ep8);
gonnaDo.addAppearance(ep8, Phineas);
wherePerry.addAppearance(ep8, Phineas);
aPlatypus.addModifiedAppearance(ep8, Doof);
ggg.addAppearance(ep8);
littleYoung.addAppearance(ep8, Baxter);
curseYou.addAppearance(ep8, Phineas);
//#endregion
