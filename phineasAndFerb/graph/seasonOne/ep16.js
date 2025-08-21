import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep16 = new Episode({
  number: 16,
  code: "109",
  title: "One Good Scare Ought To Do It!",
  aPlot: "Haunted House",
  bPlot: "Disintevaporator [Kevin Land]",
  songs: [
    new Song("Perry the Platypus", [randyCrenshaw]),
    new Song("It's Candace", [dannyJacob]),
    new Song("One Good Scare", [Phineas]),
  ],
  characters: [
    Candace,
    Linda,
    Phineas,
    Perry,
    Ferb,
    Isabella,
    Monogram,
    Doof,
    Destructicon,
    Suzy,
    Baljeet,
    Buford,
    Ginger,
    Adyson,
    Holly,
    Katie,
    Milly,
    Gretchen,
    GFBH,
    Django
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda, Perry], 6),
    connectAll([Phineas, Ferb, Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger, Baljeet, Buford], 6),
    connectAll([Phineas, Ferb, Isabella, Candace, GFBH], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Milly, Katie, Ginger], 3),
    groupConnections([Candace], [Jeremy, Baljeet, Buford], 6),
    groupConnections([Holly, Gretchen, Adyson, Milly, Ginger], [Candace], 5.5),
    groupConnections([Candace, Buford, Jeremy], [Suzy], 6),
    groupConnections([Linda], [Milly, Katie, Ginger], 3),
    groupConnections([Django], [Milly, Adyson, Holly, Buford, Ferb, Baljeet, Isabella], 1),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Doof, Destructicon, 6),
    new Connection(Perry, Destructicon, 2),
    new Connection(Linda, Baljeet, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Phineas, Suzy, 4),
    new Connection(Isabella, Suzy, 2),
    new Connection(Perry, GFBH, 2),
  ],
  bits: [whatchaDoin, wherePerry, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addModifiedAppearance(ep16, Isabella);
wherePerry.addAppearance(ep16, Phineas);
ohTherePerry.addModifiedAppearance(ep16, Phineas);
//#endregion
