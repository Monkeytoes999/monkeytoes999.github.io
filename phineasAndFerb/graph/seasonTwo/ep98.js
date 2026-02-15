import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep98 = new Episode({
  number: 98,
  code: "229b",
  title: "Robot Rodeo",
  aPlot: "Mechanical bulls, robot rodeo.",
  bPlot: "Inator Convention, Eradicate Rodney's Inator-inator",
  songs: [new Song("Robot Rodeo", [dannyJacob]), new Song("Izzy's Got the Frizzies", [carmenCarter])],
  characters: [
    Phineas,
    Ferb,
    Isabella,
    Baljeet,
    Buford,
    Perry,
    Monogram,
    Candace,
    TinyCowboy,
    Stacy,
    Hirano,
    Wormwood,
    Montgomery,
    Bloodpudding,
    Scotterson,
    Rodney,
    Doof,
    Diminutive,
    Linda,
    Kris,
    Sally,
    Bridgette,
    Bimmany,
    Gartanial,
    Bob,
    Dimitri,
    Chalk,
    Greg,
    Adyson,
    Gretchen,
    Terrance,
    Holly,
    AgentPig,
    AgentRacoon2,
    AgentFrog,
    AgentKangaroo,
    AgentKitty,
    AgentPanda,
    AgentDog,
    AgentChicken,
    Tilly,
    Lily,
    Dave,
    Stabby,
    AgentOwl,
    Logan,
    Cindy,
    Pedro
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford], 6),
    connectAll([Kris, Sally, Bridgette, Bimmany, Gartanial, Bob, Dimitri, Chalk, Greg], 1),
    connectAll([Terrance, Kris, Sally, Dimitri, Chalk, Greg], 1),
    connectAll([Adyson, Gretchen, Holly, Baljeet], 6),
    connectAll([Perry, AgentPig, AgentRacoon2, AgentFrog, AgentKangaroo, AgentKitty, AgentPanda, AgentDog, AgentChicken], 6),
    connectAll([Montgomery, Bloodpudding, Rodney, Doof], 6),
    connectAll([Candace, Stacy, Linda, Hirano, Phineas, Ferb], 6),
    connectAll([Tilly, Lily, Kris, Terrance, Dimitri, Chaw], 1),
    connectAll([Terrance, Bimmany, Dimitri, Dave, Lily], 1),
    connectAll([AgentFrog, AgentDog, AgentOwl, AgentPanda, AgentChicken, Stabby, Scotterson], 1),
    connectAll([Logan, Cindy, Pedro, Dimitri, Chalk], 1),

    groupConnections([Perry], [Doof, Monogram, Phineas, Ferb, Isabella], 6),
    groupConnections([Baljeet, Buford], [Perry], 2),
    groupConnections([Scotterson], [Rodney, Montgomery, Doof, Diminutive], 3),
    groupConnections([Montgomery, Diminutive], [Doof], 3),
    groupConnections([Kris, Sally, Bridgette, Bimmany, Gartanial, Bob, Dimitri, Chalk, Greg], [Baljeet], 3),
    groupConnections([Sally, Kris, Chalk, Greg, Dimitri, Gartanial, Bob], [Phineas], 3),
    groupConnections([Terrance, Kris, Sally, Dimitri, Chalk, Greg], [Gretchen], 3),
    groupConnections([Doof], [AgentPig, AgentRacoon2, AgentFrog, AgentKangaroo, AgentKitty, AgentPanda, AgentDog, AgentChicken], 3),
    groupConnections([Candace, Stacy], [Baljeet, Isabella], 3),
    groupConnections([Tilly, Lily, Kris, Terrance, Dimitri, Chaw], [Phineas, Baljeet], 3),
    groupConnections([Terrance, Bimmany, Dimitri, Dave, Lily], [Buford], 3),
    groupConnections([AgentDog], [Stabby, Scotterson], 6),
    groupConnections([Pedro, Cindy, Logan, Chalk, Phineas], [Dimitri], 6),
    groupConnections([Stacy, Candace], [TinyCowboy], 4),
    groupConnections([Linda, Hirano], [TinyCowboy], 2),

    // new Connection(Perry, Doof, 6),
    new Connection(Diminutive, Montgomery, 1),
    new Connection(Adyson, Baljeet, 6),
    new Connection(Isabella, Holly, 3),
    new Connection(Rodney, Perry, 4),
    new Connection(Tilly, Lily, 6),
    new Connection(Stabby, AgentChicken, 6),
    new Connection(Rodney, AgentKitty, 6),
    new Connection(Phineas, Dimitri, 6),

  ],
  bits: [whatchaDoin, wherePerry, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep98, Isabella);
wherePerry.addAppearance(ep98, Phineas);
ohTherePerry.addAppearance(ep98, Phineas);
//#endregion
