import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep87 = new Episode({
  number: 87,
  code: "223a",
  title: "Undercover Carl",
  aPlot: "Anti-Gravity Fun Launcher",
  bPlot: "Anti-Gravity Evil Launchinator | Gary the Gander",
  songs: [new Song("Carl, Incognito", [dannyJacob]), new Song("When You Levitate", [carmenCarter])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Carl,
    Monogram,
    Doof,
    Norm,
    AgentGoose,
    Isabella,
    GordonGuts,
    Linda,
    Charley
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl, AgentGoose], 6),
    connectAll([Phineas, Ferb, Perry, Candace], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Carl, Monogram], 6),

    groupConnections([Monogram, Carl], [Doof], 4),
    groupConnections([Candace], [Carl, Isabella, Baljeet], 3),

    new Connection(Perry, AgentGoose, 2),
    new Connection(Perry, GordonGuts, 6),
    new Connection(GordonGuts, AgentGoose, 4),
    new Connection(Doof, Norm, 6),
    new Connection(Linda, Candace, 6),
  ],
  bits: [gonnaDo, wherePerry, curseYou],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addAppearance(ep87, Phineas);
wherePerry.addModifiedAppearance(ep87, Phineas);
curseYou.addModifiedAppearance(ep87, Doof);
//#endregion
