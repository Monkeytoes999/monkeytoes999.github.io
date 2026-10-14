import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep135 = new Episode({
  number: 135,
  code: "312",
  title: "My Fair Goalie",
  aPlot: "Football X7",
  bPlot: "Have a fever. But also, if-a-tree-fell-in-the-forest-inator",
  songs: [new Song("Lady Song", [Eliza])],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Adrian,
    Lucy,
    Beckham3,
    Beckham2,
    Pele2,
    Beckham1,
    Pele1,
    Eliza,
    Nostrils,
    Candace,
    Isabella,
    Baljeet,
    Buford,
    Monogram,
    Carl,
    Doof,
    Jeremy,
    Reynolds,
    RossEforp,
    Ruby,
    Irving,
    JohnnyChild
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Adrian, Lucy, Beckham1, Beckham2, Beckham3, Pele1, Pele2, Eliza], 6),
    connectAll([Phineas, Ferb, Beckham1, Beckham2, Beckham3, Pele1, Pele2, Isabella, Baljeet, Buford, Irving], 6),
    connectAll([Phineas, Ferb, Beckham1, Beckham2, Beckham3, Pele1, Pele2, Isabella, Baljeet, Buford, Nostrils], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Candace, Eliza, Jeremy], 6),
    connectAll([Phineas, Ferb, Ruby], 6),
    connectAll([Candace, Linda, Lawrence, Lucy, Adrian], 6),

    groupConnections([Beckham1, Beckham2, Beckham3, Pele1, Pele2, Phineas, Ferb, Isabella, Baljeet, Buford], [Reynolds, RossEforp], 3),
    groupConnections([Beckham1, Beckham2, Beckham3, Pele1, Pele2, Ferb], [Perry], 2),
    groupConnections([Phineas, Ferb, Buford, Beckham1, Beckham2, Beckham3, Pele1, Pele2, Nostrils], [Buck], 2),

    groupConnections([Linda, Lawrence, Lucy, Eliza, JohnnyChild, RossEforp], [Nostrils], 3),
    // groupConnections([Perry], [Doof, Monogram], 6),

    groupConnections([Candace, Jeremy, Eliza], [Phineas, Ferb, Baljeet, Buford, Beckham1, Beckham2, Beckham3, Pele1, Pele2], 3),    
    
    new Connection(Monogram, Doof, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Phineas, Perry, 5),
    new Connection(Reynolds, RossEforp, 4),
    new Connection(Baljeet, Buck, 4),
    new Connection(JohnnyChild, RossEforp, 4),
  ],
  bits: [whatchaDoin, gonnaDo, wherePerry, fthWall, andBy],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep135, Isabella);
gonnaDo.addAppearance(ep135, Phineas);
wherePerry.addModifiedAppearance(ep135, Beckham3);
fthWall.addAppearance(ep135, Phineas);
andBy.addAppearance(ep135, Doof);
//#endregion
