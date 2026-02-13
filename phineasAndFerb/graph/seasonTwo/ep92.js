import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep92 = new Episode({
  number: 92,
  code: "225b",
  title: "Ain't No Kiddie Ride",
  aPlot: "Ramped up kiddie rides",
  bPlot: "Aerosol-Propelled Ozone Deplete-inator",
  songs: [new Song("Ain't No Kiddie Ride", [dannyJacob])],
  characters: [
    Candace,
    Linda,
    Margaret,
    Phineas,
    Ferb,
    Perry,
    Buford,
    Baljeet,
    Monogram,
    Carl,
    Doof,
    Vic,
    Roger,
    Isabella,
    GuyzNtheParque, //one of them, red hat guy. Right at the start of the song.
    Dave,
    Cletus,
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Linda, Perry, Candace], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, Candace], 6),

    groupConnections([GuyzNtheParque], [Phineas, Ferb, Baljeet, Isabella, Buford, Candace], 3),
    groupConnections([Buford, Isabella, Doof], [Perry], 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Doof, Vic, 6),
    new Connection(Dave, Candace, 3),
    new Connection(Doof, Roger, 5),
    new Connection(Cletus, Candace, 3),
  ],
  bits: [gonnaDo, wherePerry, whatchaDoin, andBy, curseYou, ohTherePerry],
  ferbLines: 0,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep92, Phineas);
wherePerry.addAppearance(ep92, Phineas);
whatchaDoin.addAppearance(ep92, Isabella);
andBy.addAppearance(ep92, Doof);
curseYou.addAppearance(ep92, Doof);
ohTherePerry.addAppearance(ep92, Phineas);
littleYoung.addModifiedAppearance(ep92, Linda);
//#endregion
