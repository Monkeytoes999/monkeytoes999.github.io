import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep49 = new Episode({
  number: 49,
  code: "202a",
  title: "Interview with a Platypus",
  aPlot: "Animal Translator",
  bPlot: "Bo-At [And open Danville Dam]",
  songs: [new Song("Perfect Day", [UnnamedPopTrio])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Stacy, //on phone
    Jeremy,
    Suzy,
    Monogram,
    Doof,
    Carl,
    Isabella,
    Pinky,
    Milly,
    Adyson,
    Ginger,
    Terrance,
    Gartanial,
    Linda,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Isabella, Linda, Candace], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Milly, Adyson, Pinky], 6),
    connectAll([Ginger, Phineas, Ferb, Isabella, Candace], 6),
    connectAll([Terrance, Gartanial, Dimitri, Logan, Balthazar], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace, Jeremy], [Suzy], 4),
    groupConnections([Phineas, Ferb], [Pinky], 2),
    groupConnections([Phineas, Isabella], [Milly, Adyson], 3),
    groupConnections([Candace], [Stacy, Jeremy], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Stacy, Jeremy, 2),
    new Connection(Monogram, Carl, 6),
    new Connection(Isabella, Pinky, 5),
    new Connection(Dimitri, Logan, 6),
    new Connection(Balthazar, Candace, 3),
  ],
  bits: [gonnaDo, quirkyWorky, wherePerry, ohTherePerry, curseYou],
  ferbLines: 0,
});

//#region Bit Handler
gonnaDo.addAppearance(ep49, Phineas);
quirkyWorky.addModifiedAppearance(ep49);
wherePerry.addAppearance(ep49, Phineas);
ohTherePerry.addModifiedAppearance(ep49, Phineas);
curseYou.addAppearance(ep49, Doof);
//#endregion
