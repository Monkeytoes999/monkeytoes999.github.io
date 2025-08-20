import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep1 = new Episode({
  number: 1,
  code: "101a",
  title: "Rollercoaster",
  aPlot: "Rollercoaster",
  bPlot: "Magnatism Magnifier [Reverse Rotation of Earth]",
  songs: [],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Linda,
    Candace,
    Stacy,
    Jeremy,
    Isabella,
    Monogram,
    Doof,
    BEngineer,
    Dimitri,
    Pedro,
    DumbassGinger,
    Sam,
    Logan,
    Ginger,
    Katie
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Isabella], 6),
    connectAll([Dimitri, Pedro, DumbassGinger], 6),
    connectAll([Isabella, Sam, Katie, Ginger, Logan], 1),

    groupConnections([Dimitri, Logan, Katie, Ginger], [Phineas, Ferb], 3),
    groupConnections([Isabella, Pedro, Dimitri, Logan, DumbassGinger, Sam], [Candace], 2),
    groupConnections([Phineas, Ferb], [Linda, Candace, DumbassGinger, Pedro, Sam], 6),
    groupConnections([Pedro, Dimitri, DumbassGinger], [Sam, Katie, Ginger, Logan], 1),
    groupConnections([Perry], [Linda, Candace, DumbassGinger, Pedro, Sam], 1),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Linda, Stacy], 6),
    groupConnections([Isabella], [Pedro, Dimitri, DumbassGinger], 1),

    new Connection(Phineas, BEngineer, 6),
    new Connection(Ferb, BEngineer, 1),
    new Connection(Candace, Jeremy, 5),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Monogram, Doof, 4),
  ],
  bits: [doMuch, gonnaDo, wellConditionally, whatchaDoin, wherePerry, lindana, littleYoung, andBy, bird, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
doMuch.addAppearance(ep1, Phineas);
gonnaDo.addAppearance(ep1, Phineas);
wellConditionally.addAppearance(ep1, Candace);
whatchaDoin.addAppearance(ep1, Isabella);
wherePerry.addAppearance(ep1, Phineas);
lindana.addAppearance(ep1);
littleYoung.addAppearance(ep1, BEngineer);
andBy.addAppearance(ep1, Doof);
bird.addAppearance(ep1);
curseYou.addAppearance(ep1, Doof);
//#endregion
