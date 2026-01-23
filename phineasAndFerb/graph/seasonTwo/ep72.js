import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep72 = new Episode({
  number: 72,
  code: "215a",
  title: "No More Bunny Business",
  aPlot: "X-Ray Glasses",
  bPlot: "Giant Dog-Biscuit-inator  || also Perry & Dennis.",
  songs: [new Song("X-Ray Eyes", [danPovenmire])],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Candace,
    DennisRabbit,
    Perry,
    Monogram,
    Doof,
    Carl,
    AgentDog,
    AgentOwl,
    Planty,
    Isabella,
    Vivian,
    Buford,
    Balthazar,
    Martians,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace], 6),
    connectAll([Carl, AgentDog, AgentOwl], 6),
    connectAll([Phineas, Ferb, Isabella, Vivian], 6),

    groupConnections([Perry], [Monogram, DennisRabbit], 6),
    groupConnections([Phineas, Ferb], [DennisRabbit], 3),
    groupConnections([Perry], [AgentDog, AgentOwl, Carl], 3),
    groupConnections([Monogram], [Doof, DennisRabbit], 4),
    groupConnections([Planty], [Doof], 6),
    groupConnections([Linda], [Perry, DennisRabbit], 3),
    groupConnections([Phineas, Ferb], [Buford, Balthazar], 6),
    groupConnections([Monogram, Carl], [Planty], 6),
    
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 3),
    new Connection(Monogram, Doof, 4),
    new Connection(Carl, Monogram, 6),
    new Connection(Doof, Perry, 4),
    new Connection(Phineas, Linda, 4),
    new Connection(Ferb, Linda, 2),
    new Connection(Phineas, Martians, 3),
    new Connection(DennisRabbit, Monogram, 6),
    new Connection(Candace, Perry, 6),
  ],
  bits: [gonnaDo, wherePerry, quirkyWorky, whatchaDoin, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep72, Phineas);
wherePerry.addAppearance(ep72, Phineas);
quirkyWorky.addAppearance(ep72);
whatchaDoin.addAppearance(ep72, Isabella);
curseYou.addModifiedAppearance(ep72, Doof);
ohTherePerry.addAppearance(ep72, Candace);
//#endregion
