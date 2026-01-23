import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep75 = new Episode({
  number: 75,
  code: "216b",
  title: "Isabella and the Temple of Sap",
  aPlot: "Maraca Nut Sap",
  bPlot: "Me-Mobile || Hair Spray",
  songs: [new Song("The Fireside Girl Song", [Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger])],
  characters: [
    Isabella,
    Pinky,
    Gretchen,
    Ginger,
    Holly,
    Katie,
    Milly,
    Adyson,
    AgentPig,
    AgentKangaroo,
    AgentBear,
    AgentOstrich,
    AgentMouse,
    AgentCrocodile,
    Perry,
    Acronym,
    Poofenplotz,
    Buford,
    Linda,
    Candace,
  ],
  interactions: [
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger, Phineas, Ferb, Baljeet, Buford], 6),
    connectAll([AgentBear, AgentCrocodile, AgentMouse, AgentKangaroo, AgentOstrich, Pinky], 6),

    groupConnections([Pinky], [Acronym, Poofenplotz], 6),
    groupConnections([Milly, Holly, Gretchen, Adyson, Katie, Ginger], [Pinky], 2),
    
    new Connection(Acronym, Poofenplotz, 4),
    new Connection(Isabella, Pinky, 6),
    new Connection(Candace, Linda, 6),
  ],
  bits: [ohTherePerry, whatchaDoin, wherePerry, lindana, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
ohTherePerry.addModifiedAppearance(ep75, Isabella);
whatchaDoin.addAppearance(ep75, Isabella);
wherePerry.addModifiedAppearance(ep75, Isabella);
lindana.addAppearance(ep75);
curseYou.addModifiedAppearance(ep75, Poofenplotz)
//#endregion
