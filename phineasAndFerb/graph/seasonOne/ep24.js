import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep24 = new Episode({
  number: 0,
  code: "113b",
  title: "The Ballad of Badbeard",
  aPlot: "Badbeard's Treasure",
  bPlot: "Sea Cave ?? ? ?",
  songs: [
    new Song("The Ballad of Badbeard", [Clyde, Phineas, Ferb, Isabella, Baljeet, Buford, Gretchen, Holly, Ginger, Adyson, Milly]),
  ],
  characters: [
    Clyde,
    Phineas,
    Ferb,
    Perry,
    Baljeet,
    Buford,
    Candace,
    BettyJo,
    Isabella,
    AgentEagle,
    TalkingZebra,
    Gretchen,
    Holly,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford, Gretchen, Holly, Ginger, Adyson, Milly], 6),
    connectAll([Perry, AgentEagle, Monogram], 6),
    connectAll([Candace, Perry, BettyJo], 6),

    groupConnections([Perry], [Phineas, Ferb, Baljeet, Buford, Isabella, Doof], 6),
    groupConnections([Phineas, Ferb, Baljeet, Buford, Perry, Isabella, BettyJo], [Clyde], 6),
    groupConnections([AgentEagle], [Doof, Candace], 5.5),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, TalkingZebra, 6),
    new Connection(Candace, Clyde, 3),
  ],
  bits: [wherePerry, gonnaDo, pharmacist, selfDestruct, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addModifiedAppearance(ep24, BettyJo);
gonnaDo.addModifiedAppearance(ep24, Phineas);
pharmacist.addAppearance(ep24);
selfDestruct.addAppearance(ep24);
curseYou.addAppearance(ep24, Doof);
//#endregion
