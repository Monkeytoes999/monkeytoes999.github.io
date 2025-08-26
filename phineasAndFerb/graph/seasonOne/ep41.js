import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep41 = new Episode({
  number: 41,
  code: "123a",
  title: "Unfair Science Fair",
  aPlot: "Build a portal to Mars [science fair]",
  bPlot: "Very large baking soda volcano (and Inator)",
  songs: [
    new Song("Baliwood", [Baljeet, Phineas, Ferb]),
  ],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Isabella,
    Baljeet,
    McGillicuddy,
    Monogram,
    Doof,
    Candace,
    Jeremy,
    Wendy,
    SlushyDawgManager,
    Tilly,
    Lily,
    Dimitri,
    Gerez,
    Cindy,
    Pedro,
    Logan,
    JB,
    Martians,
    Timmy,
    Sally,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Baljeet, Isabella, Perry], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Candace, Jeremy, SlushyDawgManager, Wendy], 6),
    connectAll([Gerez, Cindy, Dimitri], 1),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb], [McGillicuddy], 2),
    groupConnections([Timmy, Sally, McGillicuddy], [Doof], 3),
    groupConnections([Phineas, Ferb, Baljeet, McGillicuddy], [Martians], 3),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Tilly, Lily, 6),
    new Connection(Pedro, Logan, 1),
    new Connection(JB, Doof, 6),
    new Connection(McGillicuddy, Baljeet, 6),
    new Connection(Timmy, Sally, 1),
  ],
  bits: [doMuch, gonnaDo, wherePerry, littleYoung, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
doMuch.addAppearance(ep41, Phineas);
gonnaDo.addAppearance(ep41, Phineas);
wherePerry.addAppearance(ep41, Phineas);
littleYoung.addModifiedAppearance(ep41); //FAKE PERSON FAKE PERSON
ohTherePerry.addAppearance(ep41, Phineas);
//#endregion
