import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//This was my worst tracked episode to date I think, given the tinkering I had to do with connections because yeah those were just wrong.. I would recommend rewatching this one.
export const ep19 = new Episode({
  number: 19,
  code: "111a",
  title: "Mom's Birthday",
  aPlot: "Mom's Birthday",
  bPlot: "Shrinkspheria",
  songs: [
    new Song("I Love You Mom", [Candace, Phineas, Ferb]),
  ],
  characters: [
    Candace,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Vivian,
    Buford,
    Monogram,
    Doof,
    Baljeet,
    Isabella,
    Ginger,
    Holly,
    Gretchen,
    Adyson,
    Milly,
    Ginger,
    Lily,
    Katie,
    Johnson,
    Dimitri,
    Lawrence
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda, Lawrence], 6),
    connectAll([Phineas, Ferb, Isabella, Ginger, Adyson, Gretchen, Holly, Milly, Buford, Baljeet, Vivian], 6),
    connectAll([Phineas, Ferb, Isabella, Milly, Holly, Ginger, Katie, Adyson, Gretchen, Candace], 6),
    connectAll([Johnson, Baljeet, Buford, Dimitri, Vivian], 1),

    groupConnections([Perry], [Monogram, Doof, Phineas, Ferb, Candace], 6),
    groupConnections([Johnson, Dimitri], [Phineas, Ferb, Candace, Linda, Isabella, Holly, Katie, Milly, Ginger, Adyson, Lawrence], 3),
    groupConnections([Linda], [Vivian, Isabella, Ginger, Adyson, Gretchen, Holly, Milly, Buford, Baljeet], 6),
    groupConnections([Vivian, Baljeet, Buford], [Candace], 3),
    groupConnections([Lily, Katie], [Phineas, Ferb, Linda, Isabella, Holly], 3),
    groupConnections([Lily], [Ginger, Katie, Milly, Baljeet, Buford], 1),
    groupConnections([Buford, Baljeet, Linda], [Katie], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Johnson, Holly, 6), //I don't know when this would have happened.
  ],
  bits: [wherePerry, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep19, Phineas);
curseYou.addAppearance(ep19, Doof);
ohTherePerry.addModifiedAppearance(ep19, Candace);
//#endregion
