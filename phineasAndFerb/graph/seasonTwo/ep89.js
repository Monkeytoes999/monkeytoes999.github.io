import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep89 = new Episode({
  number: 89,
  code: "224a",
  title: "Just Passing Through",
  aPlot: "Atomic scrambling thing",
  bPlot: "Be-gone-inator",
  songs: [new Song("Just Passing Through", [Bobbi, Sherman, DannyLH])],
  characters: [
    Phineas,
    Lawrence,
    Ferb,
    Candace,
    Linda,
    Perry,
    Monogram,
    Roger,
    Doof,
    Isabella,
    Baljeet,
    Buford,
    DannyLH,
    Bobbi,
    Sherman,
    Pedro,
    Jeremy,
    Stacy,
    FishingHat,
    Terrance,
    Bob,
    Logan,
    Margaret,
    Elaine,
    Orville,
    Wilbur,
    Arlene,
    Sam,
    Greg,
    Kris,
    Chaw,
    Balthazar,
    Logan,
    Vivian,
    Johnson
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Lawrence, Candace, Linda], 6),
    connectAll([Bobbi, Sherman, DannyLH], 6),
    connectAll([FishingHat, Bob, Terrance], 1),
    connectAll([Elaine, Bob, FishingHat], 1),
    connectAll([Terrance, Sam, Greg, Kris], 1),
    connectAll([Greg, Chaw, Kris], 1),
    connectAll([Phineas, Ferb, Baljeet, Isabella, Buford, Linda, Candace], 6),
    connectAll([Phineas, Ferb, Baljeet, Isabella, Buford, Jeremy], 6),
    connectAll([Linda, Vivian, Johnson], 6),

    groupConnections([Monogram], [Doof, Roger], 4),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb, Isabella, Baljeet, Buford, Pedro], [DannyLH, Bobbi, Sherman], 3),
    groupConnections([FishingHat, Terrance, Bob, Logan, Margaret, Wilbur, Orville, Sam, Pedro], [Lawrence], 3),
    groupConnections([Arlene, Terrance, Bob, Elaine, FishingHat], [Orville, Wilbur], 3),
    groupConnections([Chaw, Logan], [Candace], 3),
    groupConnections([FishingHat, Phineas, Ferb, Baljeet, Buford, Candace, Jeremy, Lawrence, Sam, Elaine], [Roger, Linda, Johnson, Vivian], 3),
    groupConnections([Wilbur, Orville], [Doof], 3),

    new Connection(Perry, Roger, 2),
    new Connection(Doof, Roger, 4),
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Stacy, 6),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Candace, Jeremy, 6),
    new Connection(Logan, Margaret, 1),
    new Connection(Candace, Balthazar, 6),
    new Connection(Logan, Chaw, 1),
  ],
  bits: [gonnaDo, wherePerry, selfDestruct, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep89, Phineas);
wherePerry.addAppearance(ep89, Phineas);
selfDestruct.addAppearance(ep89);
curseYou.addAppearance(ep89, Doof);
//#endregion
