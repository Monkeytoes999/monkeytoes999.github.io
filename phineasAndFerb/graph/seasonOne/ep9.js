import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep9 = new Episode({
  number: 9,
  code: "105a",
  title: "Raging Bully",
  aPlot: "Thumb War",
  bPlot: "Slave-inator [celebrate birthday]",
  songs: [
    new Song("He's a Bully", [robbieWyckoff])
  ],
  characters: [
    Candace,
    Jeremy,
    Linda,
    Johnson,
    Hirano,
    Phineas,
    Ferb,
    Isabella,
    Perry,
    Monogram,
    Doof,
    Carl,
    Bob,
    Phineas,
    Ferb,
    Baljeet,
    Buford,
    DumbassGinger,
    Tilly,
    Lily,
    FishingHat,
    Pedro,
    Isabella,
    Sam,
    Evander,
    Beehive,
    Dimitri,
    Milly,
    OlgaChicago,
    Holly,
    Ginger,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Perry], 6),
    connectAll([Phineas, Ferb, Buford, Isabella, Milly, Holly, Gretchen, Adyson, Katie, Evander], 6),
    connectAll([Linda, Johnson, Hirano], 6),
    connectAll([Tilly, Lily, FishingHat, Sam], 1),

    groupConnections([Phineas], [Beehive, Bob, Dimitri], 1),
    groupConnections([Perry], [Phineas, Ferb, Monogram, Doof, Buford, Milly, Katie, Adyson, Gretchen, Isabella, Holly], 6),
    groupConnections([Perry], [Carl, OlgaChicago], 2),
    groupConnections([Candace], [Phineas, Ferb, Linda, Stacy, Jeremy, Milly, Holly, Ginger], 6),
    groupConnections([Baljeet], [Phineas, Ferb, Buford, Evander, Isabella], 6),
    groupConnections([Buford], [DumbassGinger, Linda], 6),
    groupConnections([Tilly, Lily, FishingHat, Sam], [Buford, Phineas, Evander, Baljeet, Isabella], 3),
    groupConnections([Bob], [Phineas, Buford], 3),
    groupConnections([Tilly, Lily, FishingHat], [Pedro], 1),
    groupConnections([Dimitri], [DumbassGinger, Ferb], 1),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Tilly, Lily, 6),
    new Connection(Holly, Ginger, 6),
    new Connection(Milly, Bob, 6),
    new Connection(Doof, OlgaChicago, 6),
    new Connection(Carl, Perry, 3),
    new Connection(Isabella, DumbassGinger, 4),
    new Connection(Isabella, Linda, 6),
    new Connection(Pedro, Buford, 3),
    new Connection(Dimitri, Evander, 6),
  ],
  bits: [wherePerry, littleYoung, gonnaDo, curseYou, ohTherePerry],
  ferbLines: 2,
});

//#region Bit Handler
wherePerry.addAppearance(ep9, Phineas);
littleYoung.addModifiedAppearance(ep9, Phineas);
gonnaDo.addModifiedAppearance(ep9, Phineas);
curseYou.addAppearance(ep9, Doof);
ohTherePerry.addAppearance(ep9, Phineas);
//#endregion