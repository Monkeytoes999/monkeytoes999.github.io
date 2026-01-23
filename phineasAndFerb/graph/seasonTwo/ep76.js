import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep76 = new Episode({
  number: 76,
  code: "217a",
  title: "Cheer Up Candace",
  aPlot: "Angkor Wat of Cards, Stand Up Comedy Show, Mix & Mingle Machine",
  bPlot: "Platy-proliferator-inator",
  songs: [new Song("Mix and Mingle Machine", [FarFarMorFletcher, Badinkadink, Bimmany, DannyLH, Kris, Lacie, TomMM, KeithMM, SvenMM, RexMM, Candace])],
  characters: [
    Isabella,
    Phineas,
    Ferb,
    Candace,
    Jeremy,
    Perry,
    Monogram,
    AgentEagle,
    AgentBulldog,
    Carl,
    AgentSquirrel,
    AgentFox,
    AgentPig,
    AgentLizard,
    AgentPorcupine,
    AgentDuck,
    Stacy,
    Shlocko,
    Greg,
    Gerez,
    Kalcium,
    Baljeet,
    Buford,
    Holly,
    Ginger,
    Milly,
    Doof,
    Jerry,
    FarFarMorFletcher,
    Fribbleton,
    Badinkadink,
    Bimmany,
    Lacie,
    DannyLH,
    Kris,
    TomMM,
    KeithMM,
    SvenMM,
    RexMM
  ],
  interactions: [
    connectAll([Isabella, Phineas, Ferb, Candace], 6),
    connectAll([Perry, Monogram, AgentBulldog, AgentEagle], 6),
    connectAll([Perry, AgentSquirrel, AgentFox, AgentBulldog, AgentPig, AgentLizard, AgentPorcupine, AgentDuck], 6),
    connectAll([Greg, Kalcium, Gerez, Stacy, Candace], 1),
    connectAll([Doof, Perry, Jerry], 6),
    connectAll([Candace, Jeremy, Stacy], 6),
    connectAll([FarFarMorFletcher, Badinkadink, Bimmany, DannyLH, Kris, Lacie, TomMM, KeithMM, SvenMM, RexMM, Candace], 1),
    connectAll([Candace, TomMM, KeithMM, SvenMM, RexMM], 6),

    groupConnections([Carl], [Monogram, Perry], 6),
    groupConnections([AgentSquirrel, AgentFox, AgentPig, AgentLizard, AgentPorcupine, AgentDuck], [Monogram], 3),
    groupConnections([Shlocko], [Phineas, Ferb, Candace], 6),
    groupConnections([Candace, Stacy, Greg, Gerez, Kalcium, Holly, Ginger, Milly], [Baljeet, Buford, Ferb], 3),
    groupConnections([Candace, Jeremy], [Kris], 6),
    groupConnections([Candace, Stacy], [Baljeet], 6),

    new Connection(Isabella, Perry, 4),
    new Connection(Isabella, Shlocko, 3),
    new Connection(Greg, Kalcium, 6),
    new Connection(Phineas, Stacy, 6),
  ],
  bits: [wherePerry, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addModifiedAppearance(ep76, Phineas);
wherePerry.addAppearance(ep76, Isabella);
curseYou.addAppearance(ep76, Doof);
//#endregion
