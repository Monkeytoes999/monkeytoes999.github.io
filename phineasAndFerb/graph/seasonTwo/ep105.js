import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep105 = new Episode({
  number: 105,
  code: "233",
  title: "Nerds of a Feather",
  aPlot: "Science Fiction / High Fantasy Convention",
  bPlot: "Pitch Doof 'N' Puss",
  songs: [new Song("Ducky Momo is My Friend", [Candace]), new Song("To War", [Baljeet, Buford, Sam, Django, Irving, Albert], new Song("Ducky Momo Theme", [lCPowell, dannyJacob]))],
  characters: [
    Candace,
    TalkingZebra,
    Phineas,
    Ferb,
    CliveAdisson,
    Doof,
    Perry,
    Monogram,
    Roger,
    Bridgette,
    Linda,
    Stacy,
    Irving,
    Albert,
    Suzy,
    Jeremy,
    Kris,
    Margaret,
    Sally,
    Pedro,
    Baljeet,
    Buford,
    Django,
    Sam,
    McGarland
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace], 6),
    connectAll([Phineas, Ferb, Irving, Albert, Baljeet, Buford], 6),
    connectAll([Phineas, Ferb, CliveAdisson], 6),
    connectAll([Irving, Buford, Sam, Baljeet, Albert, Django], 6),
    connectAll([Doof, Perry, McGarland], 6),

    groupConnections([Candace], [TalkingZebra, Linda], 6),
    groupConnections([Phineas, Ferb], [CliveAdisson], 4),
    groupConnections([Stacy, Jeremy], [Candace], 5),
    groupConnections([Baljeet, Irving], [CliveAdisson], 3),
    groupConnections([Candace], [Baljeet, Buford, Sam, Albert, Irving], 3),
    groupConnections([Doof], [Roger, Monogram, Bridgette], 4),
    groupConnections([McGarland, Perry], [Roger, Monogram, Bridgette], 3),
    groupConnections([Jeremy], [Stacy, Candace], 6),
    
    new Connection(Linda, Stacy, 2),
    new Connection(Candace, Stacy, 4),
    new Connection(Candace, CliveAdisson, 2),
    new Connection(Jeremy, Kris, 1),
    new Connection(Margaret, Suzy, 3),
    new Connection(Baljeet, Ferb, 4),
  ],
  bits: [wherePerry, gonnaDo, isOUT],
  ferbLines: 2,
});

//#region Bit Handler
wherePerry.addModifiedAppearance(ep105, Doof);
gonnaDo.addModifiedAppearance(ep105, Phineas);
isOUT.addAppearance(ep105, Doof);
//#endregion
