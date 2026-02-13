import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//Space Adventure
export const ep95 = new Episode({
  number: 95,
  code: "228a",
  title: "Not Phineas and Ferb",
  aPlot: "Buford and Baljeet pretend to be P&F",
  bPlot: "Doof shrink-inators landmarks",
  songs: [new Song("Space Adventure", [Phineas])],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Irving,
    Albert,
    Monogram,
    Perry,
    Doof,
    Carl,
    Lawrence,
    Sam,
    Pedro,
    Cindy,
    Dimitri,
    Gartanial,
    DoofDad,
    Isabella,
    Biffany,
    MrsTjinder,
    MrsDuBois
  ],
  interactions: [
    connectAll([Phineas, Ferb, Lawrence], 6),
    connectAll([Phineas, Ferb, Lawrence, Sam, Pedro, Cindy, Dimitri, Gartanial], 1),
    connectAll([Baljeet, Buford, Isabella, Irving, Albert], 6),
    connectAll([MrsDuBois, MrsTjinder, Linda, Candace, Lawrence], 6),

    groupConnections([Irving, Albert, Baljeet, Buford, Candace], [Phineas, Ferb], 4),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Candace], [Isabella, Baljeet, Buford, Irving, MrsTjinder, Biffany, MrsDuBois], 4),

    new Connection(Candace, Albert, 3),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Irving, Albert, 6),
    new Connection(Monogram, Carl, 6),
    new Connection(Doof, DoofDad, 5),
    new Connection(Perry, DoofDad, 2),
  ],
  bits: [gonnaDo, whatchaDoin, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep95, Phineas);
whatchaDoin.addAppearance(ep95, Isabella);
curseYou.addAppearance(ep95, Doof);
//#endregion
