import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep90 = new Episode({
  number: 90,
  code: "224b",
  title: "Candace's Big Day",
  aPlot: "Wedding Planning",
  bPlot: "Junkfoodinator",
  songs: [new Song("Wedding Adventure", [Phineas, Ferb, Linda, Lawrence, Candace, Isabella, Ginger, Gretchen, Milly, Katie, Holly, Adyson])],
  characters: [
    Phineas,
    Tiana,
    Webber,
    Ferb,
    Linda,
    Lawrence,
    Candace,
    Oga,
    Perry,
    Monogram,
    Doof,
    Isabella,
    Holly,
    Milly,
    BEngineer,
    Ginger,
    Buford,
    Baljeet,
    Adyson,
    Django,
    Katie,
    Gretchen
  ],
  interactions: [
    connectAll([Phineas, Ferb, Linda, Lawrence, Tiana, Webber, Candace, Isabella, Gretchen, Adyson, Katie, Milly, Holly, Ginger], 6),

    groupConnections([Phineas, Ferb, Linda, Lawrence, Webber, Tiana], [Oga], 2),
    groupConnections([Phineas, Ferb, Webber, Tiana], [Baljeet, Buford, Django], 3),
    groupConnections([Perry], [Monogram, Doof], 6),

    new Connection(Candace, Oga, 4),
    new Connection(Monogram, Doof, 4),
    new Connection(Phineas, Perry, 4),
    new Connection(Ferb, Perry, 2),
    new Connection(Ginger, Buford, 6),
  ],
  bits: [gonnaDo, wherePerry, lindana, ggg, littleYoung],
  ferbLines: 2,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep90, Phineas);
wherePerry.addModifiedAppearance(ep90, Phineas);
lindana.addModifiedAppearance(ep90, Monogram);
ggg.addAppearance(ep90);
littleYoung.addAppearance(ep90, BEngineer)
//#endregion
