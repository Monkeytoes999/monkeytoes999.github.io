import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep37 = new Episode({
  number: 37,
  code: "121a",
  title: "Traffic Cam Caper",
  aPlot: "Elevator to the Moon. Also uh fetch a CD.",
  bPlot: "Perry needs to also fetch that CD.",
  songs: [
    new Song("That's How the Animals Go", [Monogram, AgentKitty, AgentDog, AgentOwl, AgentChicken, AgentWorm, Norm])
  ],
  characters: [
    Candace,
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Monogram,
    AgentChicken,
    AgentDog,
    AgentFrog,
    AgentKitty,
    AgentKangaroo,
    AgentOwl,
    AgentRacoon2,
    AgentWorm,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Linda, Lawrence], 6),
    connectAll([Perry, Doof, Norm], 6),
    connectAll([Phineas, Ferb, Candace, Norm], 6),
    connectAll([Carl, Monogram, Perry, AgentDog, AgentChicken, AgentKitty, AgentFrog, AgentKangaroo, AgentOwl, AgentRacoon2], 6),
    connectAll([Carl, Monogram, AgentWorm, AgentChicken, AgentDog, Norm], 6),

    groupConnections([Perry], [Monogram, Carl, Phineas, Ferb, Candace], 6),
    
    new Connection(Monogram, Doof, 4),
  ],
  bits: [whatchaDoin],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addModifiedAppearance(ep37, Phineas);
//#endregion
