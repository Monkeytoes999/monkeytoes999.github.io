import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep77 = new Episode({
  number: 77,
  code: "217b",
  title: "Fireside Girl Jamboree",
  aPlot: "50 Patches in one day",
  bPlot: "Metal Destruct-inator",
  songs: [new Song("Go Candace", [vangieGunn])],
  characters: [
    Stanky,
    Candace,
    Phineas,
    Ferb,
    Stacy,
    Perry,
    Isabella,
    Monogram,
    Doof,
    Carl,
    Gretchen,
    Adyson,
    Holly,
    Ginger,
    Katie,
    Milly,
    Feyersied,
    Haney,
    Buford,
    Balthazar,
    MoMo
  ],
  interactions: [
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger, Phineas, Ferb, Candace, Feyersied], 6),
    connectAll([Phineas, Ferb, Candace, Perry], 6),
    connectAll([Phineas, Ferb, Isabella, Candace, Ginger, Adyson, Milly, Katie], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Haney, Buford], 6),
    groupConnections([Doof], [Katie, Milly], 6),
    groupConnections([Perry], [Katie, Milly], 2),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Stanky, 3),
    new Connection(Candace, Stacy, 6),
    new Connection(Perry, Carl, 2),
    new Connection(Monogram, Carl, 6),
    new Connection(Phineas, Haney, 4),
    new Connection(Candace, Haney, 6),
    new Connection(Isabella, Buford, 4),
    new Connection(Candace, Balthazar, 6),
  ],
  bits: [wherePerry, themeSong, curseYou, littleYoung],
  ferbLines: 2,
});

//#region Bit Handler
wherePerry.addAppearance(ep77, Ferb);
themeSong.addAppearance(ep77);
curseYou.addAppearance(ep77, Doof);
littleYoung.addModifiedAppearance(ep77, Doof);
//#endregion