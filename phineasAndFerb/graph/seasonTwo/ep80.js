import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep80 = new Episode({
  number: 80,
  code: "219a",
  title: "What Do It Do?",
  aPlot: "Reverse Engineering",
  bPlot: "Traps. Also like, anti-romance-inator or whatever",
  songs: [new Song("What Do It Do", [dannyJacob]), new Song("Bust Em Beat Em Frenzy", [Candace])],
  characters: [
    Lawrence,
    Linda,
    Phineas,
    Ferb,
    Candace,
    Perry,
    Monogram,
    Carl,
    Doof,
    Stacy,
    Gerez,
    Bimmany,
    Greg,
    Sassy,
    Buford,
    Baljeet,
    Isabella,
    Irving,
    Katie,
    Holly,
    Cindy
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Candace], 6),
    connectAll([Phineas, Ferb, Isabella, Buford, Baljeet, Irving, Katie, Holly], 6),
    connectAll([Gerez, Bimmany, Sassy, Greg], 1),

    groupConnections([Perry, Linda], [Doof], 6),
    groupConnections([Lawrence], [Candace, Phineas, Ferb], 4),
    groupConnections([Candace, Phineas, Ferb], [Lawrence], 2),
    groupConnections([Gerez, Bimmany, Sassy, Greg], [Lawrence, Linda], 3),
    
    new Connection(Carl, Perry, 5),
    new Connection(Monogram, Perry, 4),
    new Connection(Carl, Monogram, 6),
    new Connection(Linda, Candace, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Linda, Lawrence, 5),
  ],
  bits: [wherePerry, gonnaDo, curseYou],
  ferbLines: 3,
});

//#region Bit Handler
wherePerry.addAppearance(ep80, Phineas);
wherePerry.addModifiedAppearance(ep80, Monogram);
gonnaDo.addAppearance(ep80, Phineas);
curseYou.addAppearance(ep80, Doof);
//#endregion
