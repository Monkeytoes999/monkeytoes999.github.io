import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep83 = new Episode({
  number: 83,
  code: "220b",
  title: "Nerdy Dancin'",
  aPlot: "Ferbulistic Groove-a-ton 9000",
  bPlot: "L.O.V.E.M.U.F.F.I.N.",
  songs: [new Song("Let's All Dance Until We're Sick", [robbieWyckoff])],
  characters: [
    Candace,
    Stacy,
    Jeremy,
    Dave,
    Greg,
    Dimitri,
    DumbassGinger,
    Greg,
    Terrance,
    GuyzNtheParque,
    NikkiStars,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Doof,
    Norm,
    Stanky,
    Stabby,
    Bloodpudding,
    Montgomery,
    Scotterson,
    Rodney,
    Diminutive,
    Wormwood,
    PhilAnnouncer,
    Carl,
    Sven,
    Bimmany
  ],
  interactions: [
    connectAll([Candace, Stacy, Jeremy], 6),
    connectAll([Dave, Greg, Dimitri, DumbassGinger, Greg, Terrance], 1),
    connectAll([Phineas, Ferb, Jeremy], 6),
    connectAll([Doof, Perry, Norm], 6),
    connectAll([Doof, Rodney, Bloodpudding, Norm, Diminutive, Scotterson, Montgomery, Stabby, Wormwood], 6),
    connectAll([Sven, Bimmany, Stacy], 1),

    groupConnections([Candace, Stacy, Jeremy], [Dave, Greg, Dimitri, DumbassGinger, Greg, Terrance, GuyzNtheParque], 3),
    groupConnections([Candace, Stacy, Jeremy, GuyzNtheParque, Carl, Bimmany, Sven], [NikkiStars, Stanky], 3),
    groupConnections([Ferb, Jeremy], [Perry], 2),
    groupConnections([NikkiStars, Stanky], [Candace, Jeremy, GuyzNtheParque, Monogram, Rodney, Montgomery], 3),
    groupConnections([Diminutive, Rodney, Bloodpudding, Doof, Stabby, Montgomery, Wormwood], [PhilAnnouncer], 3),
    groupConnections([Stanky, Dave, NikkiStars], [Ferb], 3),

    new Connection(Monogram, Doof, 4),
    new Connection(Phineas, Perry, 4),
    new Connection(Perry, Monogram, 6),
    new Connection(Stanky, NikkiStars, 6),
    new Connection(Monogram, Carl, 6),
    new Connection(Perry, Carl, 2),
    new Connection(NikkiStars, Jeremy, 6),

  ],
  bits: [gonnaDo, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep83, Phineas);
wherePerry.addModifiedAppearance(ep83, Phineas);
//#endregion
