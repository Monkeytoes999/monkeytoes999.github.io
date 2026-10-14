import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep129 = new Episode({
  number: 129,
  code: "309a",
  title: "Phineas and Ferb Interrupted",
  aPlot: "Watch grass grow | uh, be boring",
  bPlot: "Dull-and-boring-inator | Dynamic-inator",
  songs: [new Song("Blueprints", [Baljeet, Buford, Isabella, Candace, Doof, Perry])],
  characters: [
    Candace,
    Stacy,
    Jeremy,
    Linda,
    Phineas,
    Ferb,
    Isabella,
    Baljeet,
    Buford,
    Perry,
    Carl,
    Doof,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford, Perry, Candace, Linda], 6),

    groupConnections([Linda], [Phineas, Ferb, Baljeet, Buford, Perry], 3),
    
    new Connection(Candace, Stacy, 6),
    new Connection(Carl, Perry, 6),
    new Connection(Carl, Doof, 4),
    new Connection(Candace, Jeremy, 5),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Perry, Doof, 6),
  ],
  bits: [whatchaDoin, wherePerry, ohTherePerry, curseYou, gonnaDo],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep129, Isabella);
wherePerry.addAppearance(ep129, Phineas);
ohTherePerry.addModifiedAppearance(ep129);
curseYou.addModifiedAppearance(ep129, Doof);
gonnaDo.addModifiedAppearance(ep129, Phineas);
//#endregion
