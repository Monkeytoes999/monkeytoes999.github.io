import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep50 = new Episode({
  number: 50,
  code: "202b",
  title: "Tip of the Day",
  aPlot: "A-G-L=E=T",
  bPlot: "Read-my-mind-inator",
  songs: [new Song("Perfect Day", [Phineas, Ferb, Isabella, Baljeet, Buford, Candace])],
  characters: [
    Lawrence,
    Phineas,
    Ferb,
    Candace,
    Linda,
    Doof,
    Jeremy,
    Jenny,
    OlgaChicago,
    Baljeet,
    Perry,
    Monogram,
    Carl,
    Milly,
    Katie,
    Ginger,
    Holly,
    Adyson,
    Gretchen,
    Isabella,
    Buford,
    Louis,
    Stacy,
    Margaret,
    Vivian,
    Greg,
    Bimmany,
    Bob,
    Beehive
  ],
  interactions: [
    connectAll([Lawrence, Phineas, Ferb, Candace, Linda], 6),
    connectAll([Phineas, Ferb, Baljeet, Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger, Buford], 6),
    connectAll([Candace, Stacy, Jeremy], 6),
    connectAll([Haney, Gerez, Margaret], 1),
    connectAll([Greg, Bimmany, Gerez, Bob], 1),

    groupConnections([Candace, Carl, Stacy], [Doof], 3),
    groupConnections([Phineas, Ferb, Baljeet], [Perry], 6),
    groupConnections([Candace], [Jenny, OlgaChicago], 4),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Ferb, Isabella, Baljeet, Buford, Katie, Ginger, Adyson, Milly, Holly, Gretchen], [Louis], 3),
    groupConnections([Baljeet, Buford, Isabella], [Candace], 6),
    groupConnections([Margaret, Vivian, Haney, Gerez, Carl, Monogram, Greg, Bimmany, Bob], [Phineas, Ferb, Isabella, Baljeet, Buford], 3),
    groupConnections([Haney, Margaret], [Candace], 6),
    groupConnections([Beehive, Louis], [Phineas, Ferb, Candace], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Baljeet, 3),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 3),
    new Connection(Phineas, Louis, 6),
  ],
  bits: [gonnaDo, wherePerry],
  ferbLines: 0,
});

//#region Bit Handler
gonnaDo.addAppearance(ep50, Phineas);
wherePerry.addModifiedAppearance(ep50, Lawrence);
//#endregion
