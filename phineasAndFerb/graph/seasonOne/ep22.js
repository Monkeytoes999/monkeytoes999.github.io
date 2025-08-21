import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep22 = new Episode({
  number: 22,
  code: "112b",
  title: "I Scream, You Scream",
  aPlot: "Sundae Machine",
  bPlot: "Space Laser-inator",
  songs: [
    new Song("Busted", [Candace, Vanessa]),
  ],
  characters: [
    Hirano,
    Isabella,
    Phineas,
    Ferb,
    Linda,
    ChefGuy,
    Charlene,
    Vanessa,
    Carl,
    Candace,
    Stacy,
    Jeremy,
    Perry,
    Monogram,
    Doof,
    ChefGuy,
    Beehive,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Hirano], 6),
    connectAll([Phineas, Ferb, Candace, Linda], 6),
    connectAll([Vanessa, Doof, Charlene, Perry], 6),
    connectAll([Perry, Carl, Monogram], 6),
    connectAll([Ferb, Carl, Vanessa], 6),

    groupConnections([Charlene], [Linda], 6),
    groupConnections([Linda, Charlene, Beehive], [ChefGuy], 3),
    groupConnections([Monogram], [Doof, Vanessa], 4),
    groupConnections([Beehive], [Linda, Charlene], 1),
    
    new Connection(Charlene, Candace, 2),
    new Connection(Linda, Vanessa, 2),
    new Connection(Phineas, Perry, 4),
    new Connection(Candace, Perry, 2),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 5),
    new Connection(Stacy, Jeremy, 2),
  ],
  bits: [whatchaDoin, gonnaDo, littleYoung, wellConditionally, wherePerry, ggg, doMuch],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addModifiedAppearance(ep22, Phineas);
gonnaDo.addAppearance(ep22, Phineas);
littleYoung.addAppearance(ep22); //FAKE GUY. NOT BEING TRACKED.
wellConditionally.addModifiedAppearance(ep22, Phineas);
wherePerry.addModifiedAppearance(ep22, Phineas);
ggg.addAppearance(ep22);
doMuch.addAppearance(ep22, Charlene);
//#endregion
