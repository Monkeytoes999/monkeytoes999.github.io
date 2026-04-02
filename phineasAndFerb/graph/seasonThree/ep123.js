import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//Candace Meep
export const ep123 = new Episode({
  number: 123,
  code: "306a",
  title: "Candace Disconnected",
  aPlot: "Candace Phone",
  bPlot: "Old Norm Head | Pick-'em-up-inator | Exercise program",
  songs: [new Song("Dance Baby", [aaronJacob])],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Stacy,
    Linda,
    Perry,
    Monogram,
    Carl,
    Charlene,
    Vanessa,
    Isabella,
    Baljeet,
    Buford,
    Norm,
    AgentTurtle
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Candace], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford, Candace], 6),

    // groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Doof], [Perry, Charlene], 6),
    groupConnections([Doof, Charlene], [Vanessa], 4),
    groupConnections([AgentTurtle, Carl], [Candace], 4),

    new Connection(AgentTurtle, Perry, 2),
    new Connection(Perry, Candace, 3),
    new Connection(AgentTurtle, Carl, 6),
    new Connection(Vanessa, Doof, 4),
    new Connection(Doof, Norm, 5),
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Candace, Stacy, 4),
    new Connection(Linda, Stacy, 6),
    new Connection(Candace, Linda, 6),
    new Connection(Monogram, Doof, 4),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, curseYou],
  ferbLines: 3,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep123, Phineas);
wherePerry.addAppearance(ep123, Phineas);
whatchaDoin.addAppearance(ep123, Isabella);
curseYou.addModifiedAppearance(ep123, Vanessa);
curseYou.addAppearance(ep123, Doof);
//#endregion
