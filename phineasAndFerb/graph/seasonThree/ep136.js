import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep136 = new Episode({
  number: 136,
  code: "313a",
  title: "Perry the Actorpus",
  aPlot: "Totally Tools",
  bPlot: "Mustache-inator",
  songs: [new Song("Let's Take Half a Day", [katiePierson])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Mandy,
    Candace,
    Anne,
    Sunisa,
    Danielle,
    Monogram,
    Doof,
    AgentSnail,
    TomTotally,
    Terrance,
    Dave,
    Jose,
    Linda,
    Lawrence
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Perry], 6),
    connectAll([Mandy, Anne, Sunisa, Danielle, Candace], 6),
    connectAll([Perry, Doof, AgentSnail], 6),
    connectAll([Linda, Lawrence, Candace], 6),

    // groupConnections([Perry], [Doof, Monogram], 6),    
    groupConnections([Mandy], [Phineas, Ferb], 4),
    groupConnections([Anne, Sunisa, Danielle], [Phineas, Ferb], 3),
    groupConnections([Candace], [Phineas, Ferb], 5),
    groupConnections([Mandy, Anne, Sunisa, Danielle], [Perry], 3),
    groupConnections([AgentSnail, Perry], [Jose], 2),
    groupConnections([Phineas, Ferb], [TomTotally], 2),
    groupConnections([Linda, Candace], [AgentSnail], 3),

    new Connection(Monogram, Doof, 6),
    new Connection(Monogram, Perry, 6),
    new Connection(Monogram, AgentSnail, 6),
    new Connection(Doof, Jose, 5),
    new Connection(Doof, Dave, 5.5),
  ],
  bits: [doMuch, gonnaDo, quirkyWorky, ohTherePerry, curseYou],
  ferbLines: 0,
});

//#region Bit Handler
doMuch.addModifiedAppearance(ep136);
gonnaDo.addAppearance(ep136, Phineas);
quirkyWorky.addAppearance(ep136);
ohTherePerry.addAppearance(ep136, Phineas);
curseYou.addModifiedAppearance(ep136, Doof);
//#endregion
