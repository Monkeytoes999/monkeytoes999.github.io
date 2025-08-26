import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep43 = new Episode({
  number: 43,
  code: "124",
  title: "Out to Launch",
  aPlot: "Rocket",
  bPlot: "Giant robot ship for hand puppetry",
  songs: [
    new Song("Let's Take A Rocketship To Space", [dannyJacob]),
    new Song("Shooting Star Milkshake Bar", [dannyJacob]),
  ],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Lawrence,
    Linda,
    Jeremy,
    Gerez,
    Bob,
    Stacy,
    Ginger,
    Adyson,
    Holly,
    Katie,
    Gretchen,
    Isabella,
    Milly,
    Monogram,
    Doof,
    HHHans,
    Sassy
  ],
  interactions: [
    connectAll([Phineas, Ferb, Lawrence, Linda, Candace], 6),
    connectAll([Phineas, Ferb, Buford], 6),
    connectAll([Phineas, Ferb, Isabella, Ginger, Katie, Milly, Gretchen, Holly, Adyson], 6),

    groupConnections([Perry], [Monogram, Doof, Phineas, Ferb, Isabella, Candace], 6),
    groupConnections([Phineas, Ferb, Lawrence], [Vivian], 2),
    groupConnections([Candace], [Jeremy, Gerez, Bob], 4), //Sure, imagining the person can be a 4
    groupConnections([Isabella, Phineas], [Jeremy], 2),
    groupConnections([Candace, Jeremy], [Sassy], 1),

    new Connection(Monogram, Doof, 4),
    new Connection(Linda, Vivian, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Doof, HHHans, 3),
    new Connection(Perry, HHHans, 2),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Isabella, Candace, 6),
  ],
  bits: [lindana, bird, wherePerry, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
lindana.addAppearance(ep43);
bird.addAppearance(ep43);
wherePerry.addAppearance(ep43, Phineas);
curseYou.addAppearance(ep43, Doof);
//#endregion
