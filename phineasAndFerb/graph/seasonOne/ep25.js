import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//For this episode I think it could be argued that Linda should have level 6 w/ Sherman and Danny, but for now I won't.
//It could also be argued that Isabella, Milly, Ginger, and Gretchen should have level 6 w/ Love Händel as a whole, but again.
export const ep25 = new Episode({
  number: 25,
  code: "114",
  title: "Dude, We're Gettin' the Band Back Together!",
  aPlot: "Love Händel",
  bPlot: "Vanessa's Birthday",
  songs: [
    new Song("History of Rock", [DannyLH, Phineas, Ferb]),
    new Song("Fabulous", [Bobbi, Phineas, Ferb]),
    new Song("Ain't Got Rhythm", [Sherman, Phineas, Ferb]),
    new Song("You Snuck Your Way Right into My Heart", [Bobbi, DannyLH, Sherman]),
  ],
  characters: [
    Linda,
    Lawrence,
    Phineas,
    Ferb,
    Candace,
    Jeremy,
    Perry,
    Monogram,
    Doof,
    Bobbi,
    Sherman,
    DannyLH,
    Stacy,
    Hirano,
    Johnson,
    Vivian,
    Bob,
    Vanessa,
    LoveOGram,
    Beehive,
    Isabella,
    Ginger,
    Katie,
    Gretchen,
    Holly,
    Adyson,
    FricknNerd,
    Johnny,
    Baljeet,
    Buford,
    Milly
  ],
  interactions: [
    connectAll([Lawrence, Phineas, Ferb, DannyLH, Sherman, Bobbi], 6),
    connectAll([Isabella, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Candace, Linda, Lawrence], 6),
    connectAll([Doof, Johnny, Vanessa], 6),

    groupConnections([Perry], [Monogram, Doof, Vanessa], 6),
    groupConnections([Linda, Candace, Vivian, Perry, Johnny, Vanessa, LoveOGram, Gretchen, Milly, Ginger, Isabella, Doof], [DannyLH, Sherman, Bobbi], 3),
    groupConnections([Stacy, Hirano, Johnson, Bob, Holly, Katie], [DannyLH, Sherman, Bobbi], 2),
    groupConnections([Phineas, Ferb, DannyLH, Lawrence], [LoveOGram], 6),
    groupConnections([Vivian, Candace, Phineas], [Linda, Lawrence, Milly, LoveOGram, Ginger, Ferb, Isabella, Gretchen], 3),
    groupConnections([Beehive], [Phineas, Ferb, Bobbi], 3),
    groupConnections([FricknNerd], [Phineas, Ferb, Sherman], 3),
    groupConnections([Milly], [Gretchen, Isabella, Ginger], 6),
    groupConnections([Phineas, Ferb], [Jeremy], 2),
    groupConnections([Linda, Candace], [Bobbi], 6),
    groupConnections([Linda, Candace], [Beehive], 1),

    new Connection(Monogram, Doof, 4),
    new Connection(Johnny, Perry, 3),
    new Connection(Phineas, Isabella, 6),
    new Connection(Stacy, Hirano, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 5),
  ],
  bits: [gonnaDo, wherePerry, littleYoung, lindana, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep25, Phineas);
wherePerry.addAppearance(ep25, Phineas);
littleYoung.addAppearance(ep25, DannyLH);
lindana.addAppearance(ep25);
curseYou.addModifiedAppearance(ep25, Vanessa);
//#endregion
