import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep93 = new Episode({
  number: 93,
  code: "226",
  title: "Wizard of Odd",
  aPlot: "It's the Wizard of Oz",
  bPlot: "Phineas and Ferb clean the house | Giant unicycle.",
  songs: [new Song("Yellow Sidewalk", [Isabella, Ginger, Holly, Milly, Katie, Gretchen, Adyson]), new Song("I Wish I Was Cool", [Baljeet]),
  new Song("Tree Related Wish", [Jeremy]), new Song("Want Nothing", [Buford]), new Song("Guard Song", []),
  new Song("Red Rubber Boots", [Doof]), new Song("Rusted", [Candace])],
  characters: [
    Linda,
    Candace,
    Phineas,
    Ferb,
    Perry,
    Jeremy,
    Buford,
    Baljeet,
    GFBH,
    TalkingZebra,
    Suzy,
    Martians,
    Isabella,

    //HALLUCINATIONS
    // Gretchen,
    // Ginger,
    // Adyson,
    // Katie,
    // Milly,
    // Holly, //I suppose?
    // Doof,
    // Stacy,
    // Monogram,
    // Bob,
    // Santa
  ],
  interactions: [
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Candace, Jeremy], 6), 
    
    groupConnections([Linda], [Phineas, Ferb, Perry], 4),
    groupConnections([Candace], [Phineas, Ferb, Perry], 2),
    groupConnections([Candace], [GFBH, Suzy, TalkingZebra, Martians], 3),
    groupConnections([Phineas, Ferb, Isabella, Buford], [Linda], 2),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Jeremy, 4),
    new Connection(Buford, Ferb, 5),

    // new Connection(Perry, Doof, 6),

    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger, Candace, Perry], 6),
    // connectAll([Doof, Candace, Perry, Isabella], 6),
    // connectAll([Phineas, Ferb, Candace, Baljeet, Jeremy, Buford, Doof], 6),

    // groupConnections([Milly, Katie, Ginger, Adyson, Gretchen], [Suzy, Doof], 3),
    // groupConnections([Suzy], [Doof, Candace, Isabella, Milly, Holly, Katie, Ginger, Gretchen, Adyson], 3),
    // groupConnections([Isabella], [Phineas, Ferb], 2),
    // groupConnections([Baljeet, Buford, Jeremy, Perry], [Monogram, Doof], 6),
    // groupConnections([Linda], [Baljeet, Buford, Jeremy], 3),
    // groupConnections([Linda], [Phineas, Ferb, Candace], 6),
    // groupConnections([Isabella], [Santa, Bob], 3),

    // new Connection(Monogram, Doof, 4),
    // new Connection(Holly, Suzy, 4),
    // new Connection(Doof, Suzy, 6),
    // new Connection(Candace, Stacy, 6),
  ],
  bits: [whatchaDoin, ohTherePerry, curseYou, fthWall],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep93, Isabella);
ohTherePerry.addAppearance(ep93, Candace);
curseYou.addModifiedAppearance(ep93, Doof);
fthWall.addAppearance(ep93);
//#endregion
