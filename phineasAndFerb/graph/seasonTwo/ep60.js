import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep60 = new Episode({
  number: 60,
  code: "208a",
  title: "Thaddeus and Thor",
  aPlot: "Build a Fort",
  bPlot: "Kickenator 5000",
  songs: [new Song("Kick My Way Into Her Heart", [Doof, Bobbi, Sherman, DannyLH])],
  characters: [
    Linda,
    Candace,
    Phineas,
    Ferb,
    Perry,
    Mandy,
    Thaddeus,
    Thor,
    Monogram,
    Carl,
    Doof,
    Sally,
    DoofMom,
    Roger,
    Bobbi,
    Sherman,
    DannyLH,
    Harry,
    Charlene,
    Vanessa,
    Pedro,
    Greg,
    Gerez,
    Jenny,
    Buford,
    Baljeet,
    Stacy,
    Logan,
    Chalk,
    Ginger,
    Milly,
    Adyson,
    Gretchen,
    Katie,
    Holly,
    DumbassGinger,
    Chaw
  ],
  interactions: [
    connectAll([Phineas, Ferb, Thaddeus, Thor, Candace, Mandy, Isabella], 6),
    connectAll([Phineas, Ferb, Perry, Candace], 6),
    connectAll([Doof, Bobbi, Sherman, DannyLH], 6), //uh I mean probably
    connectAll([Pedro, Greg, Gerez, Jenny, Buford, Baljeet, Stacy, Chalk, Logan, Ginger, Gretchen, Adyson, Holly, Katie, Milly], 1),
    connectAll([Sally, Greg, Gerez, Jenny], 1),
    connectAll([Logan, Terrance, Milly, Adyson, Gretchen, Sam, Chaw, Holly, Ginger, Katie, Cindy, Kris, Chalk, Pedro, Dimitri], 1),
    connectAll([Phineas, Ferb, Candace, Linda], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Linda], [Phineas, Ferb], 2),
    groupConnections([Doof], [DoofMom, Roger], 6),
    groupConnections([Perry], [DoofMom, Roger, Bobbi, Sherman, DannyLH], 2),
    groupConnections([Perry, Vanessa, Sally, DoofMom, Chalk, Terrance], [Charlene], 3),
    groupConnections([Pedro, Greg, Gerez, Jenny, Buford, Baljeet, Stacy, Chalk, Logan, Ginger, Gretchen, Adyson, Holly, Katie, Milly, Sally], [Thaddeus, Thor, Mandy], 3),
    groupConnections([Sally, Logan, Dimitri, Ginger, Sam, Kris, Cindy, Terrance, Greg, DumbassGinger], [Phineas, Ferb, Isabella, Candace], 3),
    groupConnections([Logan, Terrance, Milly, Adyson, Gretchen, Sam, Chaw, Holly, Ginger, Katie, Cindy, Kris, Chalk, Pedro, Dimitri], [Phineas, Ferb,], 3),
    groupConnections([Greg], [Roger, DoofMom], 3),
    groupConnections([Chalk, Terrance], [Doof], 3),
    groupConnections([Thaddeus, Thor], [Harry], 6),

    new Connection(Vanessa, Doof, 6),
    new Connection(Monogram, Doof, 4),
    new Connection(Carl, Perry, 4),
    new Connection(Monogram, Carl, 6),
  ],
  bits: [wherePerry, gonnaDo, whatchaDoin, doMuch],
  ferbLines: 3,
});

//#region Bit Handler
wherePerry.addAppearance(ep60, Phineas);
gonnaDo.addModifiedAppearance(ep60, Thaddeus);
whatchaDoin.addAppearance(ep60, Isabella);
wherePerry.addModifiedAppearance(ep60, Thaddeus);
doMuch.addModifiedAppearance(ep60, Thaddeus);
//#endregion
