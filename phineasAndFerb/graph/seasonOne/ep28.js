import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep28 = new Episode({
  number: 28,
  code: "116",
  title: "Phineas and Ferb Get Busted!",
  aPlot: "The Flying Car of the Future, Today!",
  bPlot: "Some kind of spider robot, idk.",
  songs: [
    new Song("The Good Life", [dannyJacob]),
    new Song("Little Brothers", [Stacy]),
    new Song("Chains on Me", [danPovenmire]),
  ],
  characters: [
    /**Dream 1
    Phineas,
    Ferb,
    Candace,
    Linda,
    Vivian,
    Lawrence,
    Logan,
    Sam,
    DrillSergeant,
    Dimitri,
    Baljeet,
    Stacy,
    Jeremy,
    DumbassGinger,
    MortyWilliams,
    Construction,
    Doof,
    TalkingZebra,
    */

    /**Dream 2
    Candace,
    Phineas,
    Ferb,
    */
   
    Perry,
    Phineas,
  ],
  interactions: [
    /**Dream 1
    connectAll([Phineas, Ferb, Linda, Candace, Lawrence, Perry], 6),
    connectAll([Logan, Sam, Phineas, Ferb, Pedro, Dimitri, Baljeet, DumbassGinger], 1),
    connectAll([Candace, Stacy, Jeremy], 6),

    groupConnections([Phineas, Ferb, Candace, Linda, Lawrence, Logan, Pedro, Dimitri, Baljeet, DumbassGinger], [DrillSergeant], 6),
    groupConnections([Baljeet, Jeremy], [Phineas, Ferb], 6),
    groupConnections([Stacy, Jeremy], [Phineas, Ferb], 4),
    groupConnections([Candace], [MortyWilliams, Sam, Baljeet, Logan, Dimitri], 3),
    groupConnections([Phineas, Ferb, Baljeet], [Construction], 3),
    groupConnections([Candace, Jeremy], [MortyWilliams], 3),
    groupConnections([Linda, Lawrence, DrillSergeant], [MortyWilliams], 4),
    groupConnections([Jeremy, DrillSergeant], [Doof, Perry], 3),
    groupConnections([Candace], [Baljeet, TalkingZebra], 6),

    new Connection(Linda, Vivian, 6),
    new Connection(Jeremy, DrillSergeant, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Jeremy, Baljeet, 3),
    new Connection(Jeremy, TalkingZebra, 4),
    */

    /**Dream 2
    connectAll([Phineas, Ferb, Linda, Lawrence, Candace, Perry], 6),
    
    groupConnections([Phineas, Ferb, Linda, Lawrence], [Jeremy], 2),

    new Connection(Candace, Jeremy, 5),
    new Connection(Monogram, Perry, 6),
    */

    new Connection(Phineas, Perry, 6),
  ],
  bits: [ohTherePerry, whatchaDoin, gonnaDo, littleYoung],
  ferbLines: 1,
});

//#region Bit Handler
ohTherePerry.addAppearance(ep28, Phineas);
whatchaDoin.addAppearance(ep28, DrillSergeant);
gonnaDo.addModifiedAppearance(ep28, Candace);
gonnaDo.addAppearance(ep28, Phineas);
littleYoung.addModifiedAppearance(ep28, DrillSergeant);
curseYou.addAppearance(ep28, Doof);
//#endregion
