import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep110 = new Episode({
  number: 110,
  code: "236b",
  title: "Candace Party",
  aPlot: "Candace Intimate Get Together",
  bPlot: "Go-Away-inator",
  songs: [new Song("Breath", [Jeremy]), new Song("Candace Party", [Candace, MoMo, Gerez, Greg, GuyzNtheParque, Sassy, Lacie, Johnny, Jeremy, Sarah])],
  characters: [
    Linda,
    Candace,
    Stacy,
    Jenny,
    Lawrence,
    Phineas,
    Ferb,
    Perry,
    Sarah,
    Coltrane,
    Jeremy,
    GordonGuts,
    GuyzNtheParque, //BOTH OF THEM!
    MoMo,
    Gerez,
    Sassy,
    Greg,
    Lacie,
    Johnny,
    ProducerGuy,
    Vanessa
  ],
  interactions: [
    connectAll([Perry, Monogram, Doof], 6),
    connectAll([Linda, Candace, Lawrence, Phineas, Ferb], 6),
    connectAll([Candace, Stacy, Jenny, Sarah, Jeremy, Coltrane], 6),
    connectAll([MoMo, Gerez, Sassy, Phineas, Ferb], 1),
    connectAll([Lacie, Sassy, Greg, MoMo, Gerez], 1),
    connectAll([GuyzNtheParque, Sassy, MoMo], 1),
    connectAll([Gerez, Stacy, Greg, Jenny, Sarah, MoMo, GuyzNtheParque], 1),
    connectAll([Linda, Lawrence, ProducerGuy], 1),

    groupConnections([Linda], [Stacy, Jenny], 2),
    groupConnections([Doof, Perry], [GordonGuts], 3),
    groupConnections([Gerez, Greg, MoMo, Phineas, Ferb], [Jeremy, Coltrane], 3),
    groupConnections([MoMo, Greg, GuyzNtheParque], [Phineas, Ferb, Candace], 3),
    groupConnections([Greg, Sarah], [Phineas, Ferb], 4),
    groupConnections([Candace], [Johnny, MoMo, Gerez, Greg, Sassy, GuyzNtheParque, Lacie], 6),
    groupConnections([Greg], [Linda, Lawrence], 3),

    new Connection(Perry, Doof, 6),
    new Connection(Lacie, Johnny, 1),
    new Connection(Perry, Candace, 2),
    new Connection(Vanessa, Doof, 6),
  ],
  bits: [wherePerry, ohTherePerry],
  ferbLines: 3,
});

//#region Bit Handler
wherePerry.addAppearance(ep110, Phineas);
ohTherePerry.addAppearance(ep110, Phineas);
//#endregion
