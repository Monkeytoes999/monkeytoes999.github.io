import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep99 = new Episode({
  number: 99,
  code: "230a",
  title: "The Secret of Success",
  aPlot: "All-Terrain Vehicle",
  bPlot: "Preempt-inator, Telethon of Evil",
  songs: [new Song("All Terrain Vehicle", [dannyJacob, Phineas]), new Song("Gimme Your Money", [Doof])],
  characters: [
    Candace,
    Stacy,
    Hirano,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Doof,
    Terrance,
    Cindy,
    Baljeet,
    Chalk,
    TadShaw,
    Buford,
    Isabella,
    Tilly,
    Lily,
    Linda,
    Chad,
    Lawrence,
    Bridgette,
    DoofMom
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Buford, Isabella, Baljeet, Candace], 6),
    connectAll([Candace, Stacy, Baljeet], 6),
    connectAll([Candace, Stacy, Baljeet, Chalk], 1),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Phineas, Ferb], [Perry], 4),
    groupConnections([Stacy, Baljeet, Cindy, Chad], [TadShaw], 3),
    groupConnections([Candace, Stacy, Baljeet], [Chalk, Cindy], 1),
    groupConnections([Stacy, Candace], [Phineas, Ferb, Buford, Isabella], 3),
    groupConnections([Stacy, Phineas, Ferb, Isabella, Buford], [Linda], 2),
    groupConnections([Doof], [Phineas, Candace, Bridgette, Isabella, Buford, Ferb], 3),
    groupConnections([Bridgette], [Phineas, Ferb, Candace, Buford, Isabella], 4),

    new Connection(Monogram, Doof, 4),
    new Connection(Stacy, Hirano, 5),
    new Connection(Candace, Hirano, 2),
    new Connection(Terrance, Cindy, 1),
    new Connection(Tilly, Lily, 6),
    new Connection(TadShaw, Candace, 6),
    new Connection(Cindy, Candace, 3),
    new Connection(Candace, Phineas, 6),
    new Connection(Candace, Linda, 6),
    new Connection(Lawrence, Doof, 3),
    new Connection(Doof, DoofMom, 4),
    new Connection(Perry, DoofMom, 2),
    new Connection(Stacy, Chad, 6),
  ],
  bits: [gonnaDo, wherePerry, quirkyWorky, lindana, fthWall, themeSong],
  ferbLines: 3,
});

//#region Bit Handler
gonnaDo.addAppearance(ep99, Phineas);
wherePerry.addAppearance(ep99, Phineas);
quirkyWorky.addModifiedAppearance(ep99);
lindana.addAppearance(ep99);
fthWall.addAppearance(ep99);
themeSong.addAppearance(ep99);
//#endregion
