import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep128 = new Episode({
  number: 128,
  code: "308b",
  title: "Doof Dynasty",
  aPlot: "Um... a lot of things.",
  bPlot: "Kidnap Isabella.... and then uh... dragon?",
  songs: [new Song("The Way of the Platypus", [])],
  characters: [
    BufordChina,
    BaljeetChina,
    PhineasChina,
    FerbChina,
    CandaceChina,
    LindaChina,
    RegentMonogram,
    PrincessIsabella,
    DoofusKhan,
    LawrenceChina,
    GeneralCarl,
    MasterPerry,
    RedundantScribe,
    Yoda,
  ],
  interactions: [
    connectAll([BufordChina, BaljeetChina, PhineasChina, FerbChina], 6),
    connectAll([CandaceChina, LindaChina, LawrenceChina], 6),
    connectAll([RegentMonogram, GeneralCarl, DoofusKhan], 6),
    connectAll([PhineasChina, FerbChina], [PrincessIsabella, RegentMonogram], 6),
    connectAll([PhineasChina, FerbChina, BaljeetChina, BufordChina, MasterPerry, Yoda], 6),

    groupConnections([CandaceChina, DoofusKhan], [PhineasChina, FerbChina, BaljeetChina, BufordChina], 3),
    groupConnections([BufordChina, BaljeetChina,], [RegentMonogram], 3),
    groupConnections([PrincessIsabella, RegentMonogram, LawrenceChina], [DoofusKhan], 4),
    groupConnections([BufordChina, BaljeetChina, PhineasChina, FerbChina], [RedundantScribe, MasterPerry, PrincessIsabella], 6),
    groupConnections([MasterPerry], [DoofusKhan, PrincessIsabella], 4),
    groupConnections([CandaceChina], [RedundantScribe, MasterPerry], 6),
    groupConnections([LindaChina, LawrenceChina], [PhineasChina, FerbChina], 2),

    new Connection(DoofusKhan, PrincessIsabella, 6),
    new Connection(PrincessIsabella, RegentMonogram, 6),
  ],
  bits: [gonnaDo],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addAppearance(ep128, PhineasChina);
//#endregion
