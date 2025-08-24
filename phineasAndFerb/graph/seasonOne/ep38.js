import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep38 = new Episode({
  number: 38,
  code: "121b",
  title: "Bowl-R-Ama Drama",
  aPlot: "Giant Bowling Ball / Pinball",
  bPlot: "Giant Robotic Penguin Icy-Freeze-Your-Socks-Off-Breathinator",
  songs: [
    new Song("Pin Bowlin'", [robbieWyckoff]),
  ],
  characters: [
    Candace,
    Stacy,
    Candace,
    Linda,
    Lawrence,
    Phineas,
    Ferb,
    Baljeet,
    Buford,
    Carl,
    AgentHedgehog,
    Monogram,
    Doof,
    Isabella,
    Construction,
    Bob,
    Barry,
    Tilly,
    Lily,
    Gerez,
    Beehive,
    ShadyJoe,
    PhilAnnouncer,
    Sam,
    Timmy,
    Cletus,
    Hirano,
    DumbassGinger,
    Balthazar
  ],
  interactions: [
    connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Candace], 6),
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace], 6),
    connectAll([PhilAnnouncer, Cletus, Hirano, Timmy], 6),
    connectAll([Tilly, Lily, Timmy], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Carl], [Perry, AgentHedgehog], 6),
    groupConnections([Phineas, Ferb, Isabella, Baljeet, Buford], [Construction], 3),
    groupConnections([Isabella, Doof, Balthazar], [ShadyJoe], 6),
    groupConnections([Sam, Phineas, Ferb, DumbassGinger, Gerez], [PhilAnnouncer, Cletus, Hirano, Timmy], 3),
    groupConnections([Phineas, Ferb], [PhilAnnouncer], 6),
    groupConnections([Tilly, Lily, Timmy, Jeremy], [Phineas, Ferb, PhilAnnouncer], 3),
    groupConnections([Lily], [Tilly, Bob], 6),
    groupConnections([Candace], [Stacy, Jeremy], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Bob, Barry, 6),
    new Connection(DumbassGinger, Gerez, 1),
    new Connection(Balthazar, Doof, 3)
  ],
  bits: [whatchaDoin],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep38, Baljeet);
wherePerry.addAppearance(ep38, Baljeet);
//#endregion
