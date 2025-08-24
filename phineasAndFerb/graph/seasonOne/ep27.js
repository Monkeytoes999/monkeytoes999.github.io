import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//I don't love some of these. Reginald might theoretically get connections to the people playing his themes. 
//They might theoretically gets 3s back at him.
export const ep27 = new Episode({
  number: 27,
  code: "115b",
  title: "The Flying Fishmonger",
  aPlot: "Jumpp McGregor's Gorge",
  bPlot: "Now Who's Blinded by Sand-inator",
  songs: [
    new Song("Flying Fishmonger", [Phineas, Ferb, Katie, Isabella, Gretchen, Holly, Adyson]),
  ],
  characters: [
    Reginald,
    Winifred,
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Candace,
    Stacy,
    Construction,
    Isabella,
    Perry,
    Carl,
    Monogram,
    Tilly,
    Lily,
    Bob,
    Jeremy,
    Johnson,
    Boris,
    Baljeet,
    Buford,
    Cindy,
    FishingHat,
    Milly,
    Gretchen,
    Katie,
    Adyson,
    Holly,
    Dimitri,
    Kris
  ],
  interactions: [
    connectAll([Phineas, Ferb, Katie, Isabella, Gretchen, Holly, Adyson], 6),
    connectAll([Phineas, Ferb, Milly, Gretchen, Isabella], 6),
    connectAll([Phineas, Ferb, Candace, Linda, Lawrence, Reginald, Winifred], 6),

    groupConnections([Isabella, Adyson], [Milly], 6),
    groupConnections([Perry], [Carl, Monogram, Doof], 6),
    groupConnections([Reginald], [Katie, Isabella, Gretchen, Holly, Adyson, Milly], 3),
    groupConnections([FishingHat, Bob], [Phineas, Ferb, Holly, Reginald, Isabella, Milly, Gretchen, Adyson], 3),
    groupConnections([Linda, Lawrence, Winifred], [Stacy], 2),
    groupConnections([Candace], [Stacy, Jeremy], 6),
    groupConnections([FishingHat, Tilly, Lily], [Bob], 1),
    groupConnections([Buford, Cindy], [Baljeet], 6),
    
    new Connection(Carl, Doof, 4),
    new Connection(Dimitri, Kris, 1),
    new Connection(Buford, Cindy, 3),
    new Connection(Doof, Boris, 6),
    new Connection(Perry, Boris, 2),
    new Connection(Candace, Johnson, 2),
    new Connection(Jeremy, Johnson, 5),
    new Connection(Monogram, Doof, 3),
    new Connection(Monogram, Carl, 6),
    new Connection(Isabella, Perry, 5),
    new Connection(Isabella, Ferb, 4),
    new Connection(Isabella, Reginald, 2),
    new Connection(Phineas, Perry, 4),
    new Connection(Tilly, Lily, 6),
  ],
  bits: [gonnaDo, ggg, whatchaDoin, curseYou],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addAppearance(ep27, Phineas);
ggg.addAppearance(ep27);
whatchaDoin.addAppearance(ep27);
wherePerry.addModifiedAppearance(ep27, Isabella);
curseYou.addAppearance(ep27, Doof);
//#endregion
