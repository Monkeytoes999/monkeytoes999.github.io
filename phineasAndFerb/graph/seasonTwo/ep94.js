import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep94 = new Episode({
  number: 94,
  code: "227",
  title: "The Beak",
  aPlot: "The Beak",
  bPlot: "Uhh Doof gets to be mayor for a little bit",
  songs: [new Song("Yippy Ki Yi Yay!", [dannyJacob]), new Song("The Beak", [dannyJacob, lCPowell])],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Candace,
    Isabella,
    PhilAnnouncer,
    ShadyJoe,
    Buford,
    Baljeet,
    Roger,
    DoofMom,
    KP,
    Melanie,
    GKP,
    Dave,
    Chalk,
    Charles,
    Tilly,
    Lily,
    ProducerGuy,
    Stacy,
    Elaine
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Phineas, Ferb, Isabella], 6),
    connectAll([Doof, PhilAnnouncer, ShadyJoe], 6),
    connectAll([Isabella, Baljeet, Buford], 6),
    connectAll([Tilly, Lily, ProducerGuy], 1),
    connectAll([Phineas, Ferb, Linda, Candace, Stacy], 6),
    connectAll([Phineas, Ferb, Candace, Linda, Isabella], 6),

    groupConnections([Monogram, Carl, Perry], [PhilAnnouncer, ShadyJoe], 3),
    groupConnections([Monogram, Carl, Isabella, Roger, Melanie, ShadyJoe, Dave, Chalk, Charles, Elaine, Lily, Doof], [KP], 3),
    groupConnections([Doof], [Perry, Roger], 6),
    groupConnections([Phineas, Ferb, ShadyJoe, Isabella], [GKP], 3),
    groupConnections([Chalk], [Dave, Charles], 3),
    groupConnections([Tilly, Lily, ProducerGuy], [Isabella], 3),
    groupConnections([Doof, Roger, Perry], [Melanie], 6),
    groupConnections([KP], [Phineas, Ferb], 6),
    groupConnections([Ferb], [Elaine, ProducerGuy], 3),
    groupConnections([Elaine], [Phineas, Ferb, Candace, Isabella, Linda], 3),

    new Connection(Dave, Charles, 6),
    new Connection(Carl, Doof, 3),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Roger, 3),
    new Connection(Roger, DoofMom, 4),
    new Connection(Doof, DoofMom, 2),
    new Connection(KP, GKP, 5),
    new Connection(Tilly, Lily, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, KP, 6),
    new Connection(Isabella, KP, 6),
    new Connection(Tilly, Candace, 3),
    new Connection(Elaine, ProducerGuy, 1),
  ],
  bits: [whatchaDoin, wherePerry, isOUT, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addAppearance(ep94, Isabella);
wherePerry.addAppearance(ep94, Phineas);
isOUT.addAppearance(ep94, Candace);
curseYou.addAppearance(ep94, Doof);
//#endregion
