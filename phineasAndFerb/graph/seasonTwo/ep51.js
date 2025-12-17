import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep51 = new Episode({
  number: 51,
  code: "203a",
  title: "Attack of the 50 Foot Sister",
  aPlot: "Growth Elixer",
  bPlot: "Smellinator",
  songs: [new Song("Flawless Girl", [dannyJacob])],
  characters: [
    Bridgette,
    PhilAnnouncer,
    Stacy,
    Candace,
    Blanca,
    Bob,
    Phineas,
    Ferb,
    Baljeet,
    Perry,
    AgentKoi,
    Monogram,
    Doof,
    Logan,
    Margaret,
    Otter,
    Tilly,
    Lily,
    Linda,
    Lawrence
  ],
  interactions: [
    connectAll([Phineas, Ferb, Baljeet, Candace], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Stacy, Blanca, Linda], 6),
    groupConnections([Otter], [Phineas, Ferb, Candace], 6),
    groupConnections([Phineas, Ferb], [Lawrence], 2),
    groupConnections([Logan, Margaret], [Blanca], 3),
    groupConnections([AgentKoi], [Monogram, Perry, Doof], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(PhilAnnouncer, Bridgette, 1),
    new Connection(Stacy, Blanca, 3),
    new Connection(Tilly, Lily, 6),
    new Connection(Candace, Lawrence, 4),
    new Connection(Blanca, Otter, 6),

  ],
  bits: [wherePerry, littleYoung, aPlatypus, isOUT],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep51, Phineas);
littleYoung.addModifiedAppearance(ep51, Blanca);
aPlatypus.addAppearance(ep51, Doof);
isOUT.addAppearance(ep51, Candace);
//#endregion
