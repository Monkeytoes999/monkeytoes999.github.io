import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep109 = new Episode({
  number: 109,
  code: "236a",
  title: "Make Play",
  aPlot: "Giant Jukebox",
  bPlot: "Super Claw-inator",
  songs: [],
  characters: [
    Lawrence,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Baldegunde,
    Roger,
    Doof,
    Carl,
    Guiserblint,
    Stacy,
    Elaine,
    Isabella,
    Baljeet,
    Buford,
    DoofMom,
    DannyLH,
    Sherman,
    Bobbi,
    Jeremy,
    Coltrane,
    Gerez,
    Linda,
    Construction,
    Melanie
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Lawrence, Phineas, Ferb], 6),
    connectAll([Phineas, Ferb, Baldegunde, Isabella, Baljeet, Buford], 6),
    connectAll([Doof, DoofMom, Roger], 6),
    connectAll([Jeremy, Coltrane, Gerez], 6),
    connectAll([Bobbi, Sherman, DannyLH], 6),
    connectAll([Phineas, Ferb, Baldegunde, Candace], 6),
    connectAll([Roger, Baldegunde, Guiserblint], 6),
    connectAll([Phineas, Ferb, Perry], 6),

    groupConnections([Monogram], [Baldegunde, Roger, Doof], 4),
    groupConnections([Perry], [Baldegunde, DoofMom], 2),
    groupConnections([Monogram, Carl, Perry], [Candace], 3),
    groupConnections([Candace, Stacy], [Phineas, Ferb], 4),
    groupConnections([Phineas, Ferb, Baldegunde, Isabella, Baljeet], [DannyLH, Sherman, Bobbi, Jeremy, Coltrane, Gerez], 6),
    groupConnections([Phineas, Ferb, Baldegunde], [Linda], 2),
    groupConnections([Phineas, Ferb], [Guiserblint], 3),
    groupConnections([Construction, Doof, Perry, Roger, Melanie], [Jeremy, Coltrane, Gerez], 3),
    groupConnections([Doof, Perry], [Melanie], 3),

    new Connection(Perry, Doof, 6),
    new Connection(Monogram, Baldegunde, 4),
    new Connection(Candace, Guiserblint, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Elaine, 1),
    new Connection(Candace, Jeremy, 4),
    new Connection(Candace, Linda, 4),
    new Connection(Linda, Baldegunde, 2),
    new Connection(Roger, Melanie, 6),
    new Connection(Perry, Roger, 3),
  ],
  bits: [gonnaDo, wherePerry, fthWall, whatchaDoin, andBy, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep109, Phineas);
wherePerry.addAppearance(ep109, Phineas);
fthWall.addAppearance(ep109, Carl);
whatchaDoin.addAppearance(ep109, Isabella);
andBy.addAppearance(ep109, Doof);
curseYou.addAppearance(ep109, Doof);
ohTherePerry.addAppearance(ep109, Phineas);
//#endregion
