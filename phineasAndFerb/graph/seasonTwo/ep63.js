import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep63 = new Episode({
  number: 63,
  code: "209b",
  title: "At the Car Wash",
  aPlot: "Car Wash",
  bPlot: "Mountain-Out-Of-A-Molehill-inator",
  songs: [new Song("Phintastic Ferbulous Car Wash", [dannyJacob, Phineas, Isabella, Katie, Milly, Ginger, Adyson, Gretchen, Holly, Baljeet, Buford, Ferb])],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Isabella,
    Holly,
    Ginger,
    Katie,
    Perry,
    Monogram,
    Carl,
    Doof,
    Candace,
    Stacy,
    Jeremy,
    GFBH,
    DoofMom,
    DoofDad,
    Baljeet,
    Buford,
    Adyson,
    Milly,
    Greg,
    Hoxx,
    Norm,
    Pedro,
    Sam,
    Dimitri
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda], 6),
    connectAll([Monogram, Carl, Perry], 6),
    connectAll([Isabella, Holly, Gretchen, Katie, Milly, Adyson, Ginger, Phineas, Baljeet, Buford, Ferb], 6),
    connectAll([Sam, Dimitri, Holly, Gretchen, Milly], 1),
    connectAll([Phineas, Ferb, Perry], 6),

    groupConnections([Isabella, Ginger, Katie, Holly], [Perry], 2),
    groupConnections([Candace], [Phineas, Ferb, Stacy, Jeremy], 6),
    groupConnections([Doof], [DoofMom, DoofDad], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Doof, Carl, 3),
    new Connection(Baljeet, Buford, 6),
    new Connection(Greg, Hoxx, 1),
    new Connection(Doof, Norm, 6),
  ],
  bits: [whatchaDoin, wherePerry, littleYoung, curseYou],
  ferbLines: 2,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep63, Phineas);
wherePerry.addAppearance(ep63, Phineas);
littleYoung.addModifiedAppearance(ep63, Phineas);
curseYou.addAppearance(ep63, Doof);
curseYou.addModifiedAppearance(ep63, Doof);
//#endregion
