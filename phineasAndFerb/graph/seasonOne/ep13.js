import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep13 = new Episode({
  number: 13,
  code: "107",
  title: "It's About Time!",
  aPlot: "Time Machine",
  bPlot: "Freeze-inator Ray",
  songs: [
    new Song("When We Didn't Get Along", [dannyJacob]),
    new Song("My Nemesis", [UnnamedPopTrio, Doof])
  ],
  characters: [
    Candace,
    Ferb,
    Phineas,
    Lawrence,
    Linda,
    Perry,
    Dimitri,
    Monogram,
    Carl,
    Doof,
    Isabella,
    Ginger,
    Gretchen,
    Milly,
    Adyson,
    Holly,
    Fribbleton, 
    AgentPanda,
    Jeremy,
    Katie,
    Feelbetter,
    Bob,
    AgentChicken,
    AgentDog,
    AgentDuck,
    AgentFrog,
    AgentKangaroo,
    AgentKitty,
    AgentOwl,
    AgentPig,
    AgentRacoon2
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace, Perry], 6),
    connectAll([Phineas, Ferb, Candace, Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([AgentChicken, AgentDog, AgentDuck, AgentFrog, AgentKangaroo, AgentKitty, AgentOwl, AgentPig, AgentRacoon2, Bob], 1),
    connectAll([Perry, Doof, Feelbetter, AgentPanda], 6),

    groupConnections([Perry], [Isabella, Monogram, Carl], 6),
    groupConnections([Ginger, Holly, Gretchen, Katie, Milly, Adyson], [Perry], 2),
    groupConnections([Phineas, Ferb], [Dimitri], 3),
    groupConnections([Phineas, Ferb, Candace], [Fribbleton], 6),
    groupConnections([AgentChicken, AgentDog, AgentDuck, AgentFrog, AgentKangaroo, AgentKitty, AgentOwl, AgentPig, AgentRacoon2, Bob], [Perry, Doof, Feelbetter, AgentPanda], 3),
    
    new Connection(AgentKangaroo, Bob, 6),
    new Connection(AgentPig, AgentDuck, 6),
    new Connection(Carl, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Candace, Jeremy, 6),
  ],
  bits: [wherePerry, whatchaDoin, littleYoung, curseYou, ohTherePerry],
  ferbLines: 2,
});

//#region Bit Handler
wherePerry.addAppearance(ep13, Phineas);
whatchaDoin.addAppearance(ep13, Isabella);
littleYoung.addAppearance(ep13, Fribbleton);
curseYou.addModifiedAppearance(ep13, Doof);
wherePerry.addModifiedAppearance(ep13, Isabella);
ohTherePerry.addAppearance(ep13, Phineas);
//#endregion
