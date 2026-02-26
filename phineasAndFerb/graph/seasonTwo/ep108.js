import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep108 = new Episode({
  number: 108,
  code: "235b",
  title: "Brain Drain",
  aPlot: "Video Games",
  bPlot: "Devolitionator",
  songs: [new Song("There's a Platypus Controlling Me", [Doof, Johnny, Lacie])], //I'm willing to give Lacie credit here even though I don't physically see her sing because she's visible in the crowd during the song.
  characters: [
    Linda,
    Phineas,
    Ferb,
    Candace,
    Jeremy,
    Isabella,
    Baljeet, 
    Buford,
    Perry,
    Monogram,
    Carl,
    Doof,
    Vanessa,
    Charlene,
    Johnny,
    Lacie,
    MoMo,
    Elrik
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Linda], 6),
    connectAll([Vanessa, Johnny, Lacie, Doof], 6),
    connectAll([Johnny, Lacie, Charlene], 3),
    connectAll([Perry, Doof, Elrik], 6),

    groupConnections([Candace], [Phineas, Ferb], 6),
    groupConnections([Phineas, Ferb], [Jeremy], 2),
    groupConnections([Phineas, Ferb, Isabella, Baljeet, Buford], [Perry], 5.5),
    groupConnections([Phineas, Ferb, Isabella, Baljeet, Buford], [Doof], 3),
    groupConnections([MoMo], [Vanessa, MoMo], 1),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Candace, Jeremy, 4),
    new Connection(Charlene, Vanessa, 6),
    new Connection(Charlene, Doof, 5),
  ],
  bits: [gonnaDo, whatchaDoin, wherePerry, pharmacist, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addModifiedAppearance(ep108, Phineas);
whatchaDoin.addAppearance(ep108, Isabella);
wherePerry.addAppearance(ep108, Phineas);
pharmacist.addAppearance(ep108, Buford);
ohTherePerry.addAppearance(ep108, Phineas);
//#endregion
