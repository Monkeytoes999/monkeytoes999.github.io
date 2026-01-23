import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep65 = new Episode({
  number: 65,
  code: "210b",
  title: "Swiss Family Phineas",
  aPlot: "Shipwrecked on an island",
  bPlot: "Doofenshmirtz Institute of Evilology… with the help of the monkey enslavinator helmet",
  songs: [new Song("Carl the Intern", [dannyJacob])],
  characters: [
    Phineas,
    Isabella,
    Ferb,
    Candace,
    Linda,
    Lawrence,
    Jeremy,
    Perry,
    Baljeet,
    Buford,
    Monogram,
    Carl
  ],
  interactions: [
    connectAll([Phineas, Isabella, Ferb, Candace, Linda, Lawrence], 6),
    connectAll([Perry, Baljeet, Buford], 6),
    connectAll([Perry, Monogram, Carl], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Linda, Lawrence, Phineas, Ferb], [Jeremy], 2),
    groupConnections([Phineas, Lawrence], [Perry], 4),
    groupConnections([Isabella, Ferb, Linda], [Perry, Baljeet], 2),
    
    new Connection(Candace, Jeremy, 4),
    new Connection(Monogram, Doof, 4),
    new Connection(Lawrence, Baljeet, 2),
    new Connection(Buford, Carl, 6),
    new Connection(Doof, Perry, 6),
  ],
  bits: [wherePerry, whatchaDoin, doMuch, wherePerry, quirkyWorky, farmer, themeSong, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addModifiedAppearance(ep65, Lawrence);
whatchaDoin.addModifiedAppearance(ep65, Buford);
doMuch.addAppearance(ep65, Baljeet);
whatchaDoin.addAppearance(ep65, Isabella);
wherePerry.addModifiedAppearance(ep65, Isabella);
quirkyWorky.addModifiedAppearance(ep65);  
wherePerry.addAppearance(ep65, Baljeet);
farmer.addModifiedAppearance(ep65, Candace);
themeSong.addAppearance(ep65);
curseYou.addAppearance(ep65, Doof);
//#endregion
