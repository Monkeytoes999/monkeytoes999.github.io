import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep82 = new Episode({
  number: 82,
  code: "220a",
  title: "Picture This",
  aPlot: "Picture transporter",
  bPlot: "Mime-inator",
  songs: [new Song("Mexican-Jewish Cultural Festival", [Vivian, Linda]), new Song("There is No Candy in Me", [Baljeet, Candace, Perry, Phineas, Ferb, Buford])],
  characters: [
    Phineas,
    Lawrence,
    Ferb,
    Linda,
    Reginald,
    Candace,
    Vivian,
    Buford,
    Perry,
    Winifred,
    Monogram,
    Doof,
    Isabella,
    Baljeet,
    Cindy,
    Terrance,
    Sassy,
    UncleMaulik
  ],
  interactions: [
    connectAll([Phineas, Ferb, Lawrence], 6),
    connectAll([Phineas, Ferb, Buford, Perry, Candace, Baljeet, Isabella], 6),
    connectAll([Phineas, Ferb, Isabella, Baljeet, Buford, UncleMaulik], 6),
    
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Phineas, Ferb], [Reginald], 4),
    groupConnections([Vivian], [Phineas, Ferb], 2),
    groupConnections([Cindy], [Vivian, Linda], 3),
    groupConnections([Terrance, Sassy], [Doof], 3),
    groupConnections([Linda], [Vivian, Baljeet, Buford, Isabella, Phineas, Ferb], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Lawrence, Linda, 6),
    new Connection(Candace, Vivian, 6),
    new Connection(Reginald, Winifred, 6),
    new Connection(Linda, Vivian, 6),
  ],
  bits: [wherePerry, whatchaDoin, bird, andBy],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep82, Phineas);
whatchaDoin.addAppearance(ep82, Isabella);
bird.addModifiedAppearance(ep82);
andBy.addModifiedAppearance(ep82, Doof);
selfDestruct.addAppearance(ep82);
//#endregion
