import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep59 = new Episode({
  number: 59,
  code: "207",
  title: "The Chronicles of Meap",
  aPlot: "Fix Meap's Ship",
  bPlot: "Static-Electro Amplifinator [Balloony]",
  songs: [new Song("My Ride From Outer Space", [dannyJacob]), new Song("Bango Ru", [dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Linda,
    Crash,
    Meap,
    Mitch,
    Monogram,
    Carl,
    Doof,
    Isabella,
    Balloony,
    Baljeet,
    Buford,
    Vanessa,
    Chalk,
    Terrance,
    Tilly,
    Lily,
    Elaine,
    Gerez,
    Bimmany,
    Vinn,
    Pedro
  ],
  interactions: [
    connectAll([Phineas, Ferb, Meap, Mitch, Candace, Isabella], 6),
    connectAll([Meap, Mitch, Doof, Perry], 6),
    connectAll([Gerez, Chalk, Pedro, Tilly, Lily], 1),

    groupConnections([Perry], [Monogram, Doof, Carl, Meap], 6),
    groupConnections([Candace], [Linda, Stacy], 6),
    groupConnections([Linda], [Crash, Stacy], 2),
    groupConnections([Monogram, Carl], [Doof], 4),
    groupConnections([Balloony], [Doof, Meap, Mitch], 6),

    new Connection(Candace, Crash, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Balloony, 2),
    new Connection(Baljeet, Buford, 6),
    new Connection(Ferb, Vanessa, 6),
    new Connection(Terrance, Chalk, 6),
    new Connection(Tilly, Lily, 6),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, quirkyWorky, ggg],
  ferbLines: 3,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep59, Phineas);
gonnaDo.addModifiedAppearance(ep59, Candace);
wherePerry.addModifiedAppearance(ep59, Phineas);
whatchaDoin.addAppearance(ep59, Isabella)
quirkyWorky.addAppearance(ep59);
ggg.addModifiedAppearance(ep59, Candace);
littleYoung.addModifiedAppearance(ep59, Mitch);
//#endregion
