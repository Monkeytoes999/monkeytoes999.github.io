import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep126 = new Episode({
  number: 126,
  code: "307b",
  title: "Meatloaf Surprise",
  aPlot: "Bounce House",
  bPlot: "Rotten-inator",
  songs: [new Song("Meatloaf", [TinyCowboy, Candace, Stacy])],
  characters: [
    Linda,
    Stacy,
    Candace,
    TinyCowboy,
    Phineas,
    Ferb,
    Baljeet,
    Buford,
    Ruby,
    Balthazar,
    Perry,
    Monogram,
    Doof,
    Margaret,
    Terrance,
    Gartanial,
    Oliver,
    Kris,
    Chalk,
    Pedro,
    Logan,
    DumbassGinger,
    Velvet,
    Sally,
    Sassy,
    Chaw,
    Dimitri,
    Sam,
    Gretel,
    Jose,
    DoofMom,
    Roger,
    Arlene,
    Baxter,
    PaisleySideburnBrothers,
    Bimmany,
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    // connectAll([Perry, Monogram, Carl], 6),
    connectAll([Pedro, Logan, DumbassGinger], 6),
    connectAll([Dimitri, Sam, Chaw], 6),
    connectAll([Velvet, Sally, Balthazar], 6),
    connectAll([Velvet, Sally, Balthazar, Sassy], 1),
    connectAll([Candace, Stacy, Baxter], 1),

    groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Candace], [Linda, Stacy], 6),
    groupConnections([Balthazar, Ruby], [Buford], 6),
    groupConnections([Doof], [Gretel, Jose, DoofMom, Roger], 4),
    groupConnections([Perry], [Gretel, Jose, DoofMom, Roger], 2),
    groupConnections([Candace, Stacy], [PaisleySideburnBrothers], 3),
    groupConnections([Candace, Linda], [TinyCowboy], 6), //Nigel and Adrian! Candace can have a 6 to all of them, but Linda only gets those two!
    groupConnections([Arlene, Bimmany, Linda, Sassy, Velvet], [TinyCowboy, Stacy, Candace], 3),

    new Connection(Doof, TinyCowboy, 3),
    new Connection(Arlene, Baxter, 1),
    new Connection(Kris, Gartanial, 1),
    new Connection(Linda, Oliver, 6),
    new Connection(Margaret, Terrance, 1),
    new Connection(Phineas, Perry, 5),
    new Connection(Ruby, Balthazar, 1),
    new Connection(Monogram, Doof, 4),
    new Connection(Chalk, Ruby, 6),
    // new Connection(Perry, Doof, 6),
  ],
  bits: [gonnaDo, bird, wherePerry, quirkyWorky, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep126, Phineas);
bird.addAppearance(ep126);
wherePerry.addAppearance(ep126, Phineas);
quirkyWorky.addAppearance(ep126);
curseYou.addAppearance(ep126, Doof);
//#endregion
