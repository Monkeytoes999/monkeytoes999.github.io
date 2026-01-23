import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep70 = new Episode({
  number: 70,
  code: "214a",
  title: "The Baljeatles",
  aPlot: "Teach Baljeet Rock",
  bPlot: "Nanny-inator... and Bum-bum-inator",
  songs: [new Song("Gimme a Grade", [Phineas, Ferb, Buford, Baljeet])],
  characters: [
    Baljeet,
    Phineas,
    Ferb,
    Perry,
    Candace,
    Stacy,
    Jeremy,
    Monogram,
    Carl,
    Coltrane,
    Greg,
    Sassy,
    Dimitri,
    MoMo,
    Gerez,
    DumbassGinger
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Baljeet], 6),
    connectAll([Candace, Stacy, Jeremy, Coltrane], 6),
    connectAll([Greg, Sassy, MoMo, Dimitri], 1),
    connectAll([Phineas, Ferb, Baljeet, Buford], 6),
    connectAll([Kris, Bob, Greg], 1),
    connectAll([Gerez, DumbassGinger, Dimitri, Greg, Bob], 1),
    connectAll([Sassy, Stacy, Coltrane, MoMo, Greg, Jeremy, Candace], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace, Stacy], [Sassy, Dimitri, MoMo], 3),
    groupConnections([Jeremy], [Sassy, MoMo, Dimitri], 6),
    groupConnections([Kris, Bob, Greg], [Django], 3),
    groupConnections([Gerez, DumbassGinger, Dimitri, Greg, Bob, Sassy, Coltrane, Stacy, MoMo, Candace, Jeremy], [Coltrane, Phineas, Ferb, Buford, Baljeet], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 2),
    new Connection(Baljeet, Coltrane, 6),
  ],
  bits: [gonnaDo],
  ferbLines: 0,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep70, Phineas);
//#endregion
