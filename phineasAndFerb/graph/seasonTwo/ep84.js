import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep84 = new Episode({
  number: 84,
  code: "221a",
  title: "I Was a Middle Aged Robot",
  aPlot: "Floating pep-squad mobile [Cheer on Candace]",
  bPlot: "EULG, [Perry is piloting robo-Lawrence]",
  songs: [new Song("Bubble Gum", [Phineas, Ferb, Candace, Lawrence, Milly, Katie, Gretchen, Adyson, Holly, Ginger])],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Lawrence,
    Perry,
    Linda,
    Monogram,
    Doof,
    Isabella,
    Carl,
    Holly,
    Gretchen,
    Katie,
    Ginger,
    Adyson,
    PhilAnnouncer,
    Milly,
    Balthazar,
    FishingHat,
    Bob,
    Elaine,
    Rick,
    Bimmany,
    Dave,
    Greg,
    Bob,
    BEngineer,
    Pedro,
    Sam,
    Sally,
    Terrance,
    Lily
  ],
  interactions: [
    connectAll([Isabella, Holly, Gretchen, Adyson, Katie, Ginger, Phineas, Ferb, Milly], 6),
    connectAll([FishingHat, Bob, Elaine, Rick, Bimmany, Dave, Greg, Bob, Phineas, Ferb], 1),
    connectAll([Phineas, Ferb, Candace, Lawrence, Perry], 6),
    connectAll([Linda, Lawrence, Candace], 6),
    connectAll([Monogram, Carl, Perry], 6),
    connectAll([Monogram, Perry, Doof], 6),
    connectAll([Phineas, Perry, Balthazar], 6),
    connectAll([Sam, Sally, Terrance, Pedro, Balthazar, Lily, Linda], 1),

    groupConnections([Carl], [Linda, Candace, Phineas, Ferb, Perry], 5.5),
    groupConnections([Monogram], [Linda, Candace, Phineas, Ferb], 3),
    groupConnections([Candace], [PhilAnnouncer], 3),
    groupConnections([FishingHat, Bob, Elaine, Rick, Bimmany, Dave, Greg, Bob, Pedro, Balthazar], [Lawrence, Candace], 3),
    groupConnections([Balthazar], [Lawrence, Perry, Carl], 3),
    groupConnections([Isabella, Holly, Gretchen, Adyson, Katie, Ginger, Milly], [Candace, Lawrence], 4),
    groupConnections([Sam, Sally, Terrance, Pedro, Balthazar, Lily], [Candace, Lawrence], 3),
    groupConnections([BEngineer, Bimmany, Pedro], [Candace, Lawrence, Phineas, Ferb], 3),

    new Connection(Monogram, Balthazar, 4),
    // new Connection(Lawrence, Monogram, 3), //Immediately gets erased from his memory
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, ggg, andBy, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep84, Phineas);
wherePerry.addAppearance(ep84, Phineas);
whatchaDoin.addAppearance(ep84, Isabella);
ggg.addAppearance(ep84, Carl);
andBy.addAppearance(ep84, Doof);
curseYou.addModifiedAppearance(ep84, Doof);
ohTherePerry.addAppearance(ep84, Phineas);
//#endregion
