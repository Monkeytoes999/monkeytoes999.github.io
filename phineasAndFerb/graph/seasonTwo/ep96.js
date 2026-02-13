import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep96 = new Episode({
  number: 96,
  code: "228b",
  title: "Phineas and Ferb Busters",
  aPlot: "",
  bPlot: "Straightjacket-inator, ",
  songs: [new Song("Busted Dance", [Candace]), new Song("Bust Your Brothers", [robbieWyckoff])],
  characters: [
    Candace,
    Logan,
    Chaw,
    Linda,
    Phineas,
    Ferb,
    Buford,
    Baljeet,
    Isabella,
    Stacy,
    Perry,
    Jenny,
    Norm,
    AgentMongoose
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Linda, Candace], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Perry, Stacy, Jenny, Candace, Linda], 6),
    connectAll([Doof, Norm, Perry], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Perry, 6),
    new Connection(Logan, Chaw, 6),
    new Connection(Perry, AgentMongoose, 2),
    new Connection(Doof, AgentMongoose, 4),
  ],
  bits: [gonnaDo, wherePerry, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep96, Candace);
wherePerry.addModifiedAppearance(ep96, Monogram);
ohTherePerry.addModifiedAppearance(ep96, Monogram);
ohTherePerry.addAppearance(ep96, Phineas);
//#endregion
