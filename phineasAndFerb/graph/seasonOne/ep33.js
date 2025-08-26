import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep33 = new Episode({
  number: 33,
  code: "119a",
  title: "Boyfriend from 27,000 B.C.",
  aPlot: "Cave Man",
  bPlot: "Sandwich Suit Remove-inator",
  songs: [],
  characters: [
    PhilAnnouncer,
    Phineas,
    Ferb,
    Perry,
    Jeremy,
    Stacy,
    Lawrence,
    Linda,
    Monogram,
    Carl,
    Doof,
    Conk,
    Vanessa,
    Badinkadink,
    TheaterEmployee
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace], 6),
    connectAll([Stacy, Candace, TheaterEmployee, Badinkadink, Conk], 6),

    groupConnections([Phineas, Ferb, Perry], [PhilAnnouncer], 3),
    groupConnections([Perry], [Phineas, Ferb, Monogram, Doof, Carl], 6),
    groupConnections([Stacy], [Phineas, Ferb], 4),
    groupConnections([Phineas, Ferb], [Conk], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Jeremy, 6),
    new Connection(Jeremy, Stacy, 5),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Doof, Vanessa, 5),
  ],
  bits: [gonnaDo, wherePerry, andBy, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep33, Phineas);
wherePerry.addAppearance(ep33, Phineas);
andBy.addAppearance(ep33, Doof);
curseYou.addAppearance(ep33, Doof);
//#endregion
