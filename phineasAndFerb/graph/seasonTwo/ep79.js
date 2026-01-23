import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep79 = new Episode({
  number: 79,
  code: "218b",
  title: "Finding Mary McGuffin",
  aPlot: "Old Timey Detective McGuffin Search",
  bPlot: "Figure out what the uhh 'inator' does",
  songs: [new Song("Not So Bad a Dad", [Vanessa])],
  characters: [
    Linda,
    Lawrence,
    Bimmany,
    Pedro,
    Sally,
    Phineas,
    Ferb,
    Doof,
    Vanessa,
    Charlene,
    Perry,
    Monogram,
    Carl,
    Greg,
    Balthazar,
    DumbassGinger,
    Sassy,
    Chaw,
    SamAdult,
    Terrance,
    Baxter
  ],
  interactions: [
    connectAll([Bimmany, Pedro, Sally, Linda, Lawrence], 1),
    connectAll([Phineas, Ferb, Lawrence, Candace], 6),
    connectAll([Monogram, Carl, Perry], 6),
    connectAll([Balthazar, Chalk, Sassy, DumbassGinger, Sally], 1),
    connectAll([Vanessa, Charlene, SamAdult], 6),

    groupConnections([Doof], [Lawrence, Vanessa, Perry], 6),
    groupConnections([Candace, Ferb], [Perry], 2),
    groupConnections([Balthazar, Chalk, Sassy, DumbassGinger, Sally], [Doof, Vanessa], 3),

    groupConnections([Phineas, Ferb, Candace], [Doof], 2),
    groupConnections([Phineas, Ferb, Candace], [Charlene], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Pedro, Sally, 6),
    new Connection(Bimmany, Linda, 6),
    new Connection(Doof, Charlene, 5),
    new Connection(Vanessa, Charlene, 6),
    new Connection(Phineas, Perry, 4),
    new Connection(Carl, Doof, 4),
    new Connection(Greg, Doof, 3),
    new Connection(Terrance, Chalk, 6),
    new Connection(Baxter, Phineas, 6),
    new Connection(Charlene, Doof, 2),
    new Connection(Candace, Vanessa, 6),
    new Connection(Candace, Sally, 3),
    new Connection(Vanessa, Sally, 6),
  ],
  bits: [lindana, gonnaDo, wherePerry, littleYoung, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
lindana.addModifiedAppearance(ep79);
gonnaDo.addModifiedAppearance(ep79, Candace);
wherePerry.addAppearance(ep79, Phineas);
littleYoung.addAppearance(ep79, Charlene);
curseYou.addAppearance(ep79, Doof);
//#endregion
