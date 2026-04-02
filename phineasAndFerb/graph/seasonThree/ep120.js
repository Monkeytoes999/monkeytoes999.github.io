import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep120 = new Episode({
  number: 120,
  code: "304",
  title: "Phineas' Birthday Clip-O-Rama!",
  aPlot: "Birthday clip video thing",
  bPlot: "Video Beam Hijack-non-inator",
  songs: [],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Stacy,
    Baljeet,
    Buford,
    Isabella,
    Irving,
    Perry,
    Monogram,
    Carl,
    Linda,
    Roger,
    Biffany,
    Jeremy,
    Milly,
    Holly,
    Gretchen,
    Katie,
    Ginger,
    Adyson,
    Tabitha,
    DumbassGinger,
    Buck,
    Balthazar,
    Lawrence,
    Velvet,
    Dimitri,
    Chalk,
    Logan,
    Terrance,
    Sam,
    Chaw,
    Cindy,
    Pedro,
    Sally,
    Ruby,
    Gerez,
    Kris
  ],
  interactions: [
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Perry, Monogram, Carl], 6),
    connectAll([Baljeet, Buford, Isabella, Irving, Ferb], 6),
    connectAll([Phineas, Adyson, Holly, Gretchen, Irving, Buford, Isabella, Ferb, Katie, Baljeet, Ginger, Adyson, Tabitha], 6),
    connectAll([Velvet, Dimitri, Linda, Lawrence], 1),
    connectAll([Chalk, Logan, Terrance, Dimitri, Terrance, Sam, Chaw, Cindy, Pedro], 1),
    connectAll([Linda, Lawrence, Candace, DumbassGinger, Sally, Logan, Pedro, Terrance, Chaw, Isabella, Tabitha, Holly, Ginger, Katie, Adyson, Sam, Cindy, Ruby, Velvet, Irving, Milly, Gretchen], 1),
    connectAll([Gerez, DumbassGinger, Terrance, Dimitri], 1),
    connectAll([Phineas, Candace, Perry], 6),
  
    // groupConnections([Perry], [Doof, Monogram], 6),
    groupConnections([Isabella, Irving, Buford], [Phineas], 4), //I don't know who this was supposed to be a 4 for. I assume it's Phineas. But I could be wrong.
    groupConnections([Ferb, Baljeet], [Phineas], 3),
    groupConnections([Candace], [Ferb, Buford, Irving], 3),
    groupConnections([Candace], [Stacy, Isabella, Linda, Baljeet], 6),
    groupConnections([DumbassGinger], [Isabella, Holly, Buford], 1),
    groupConnections([Chalk, Logan, Terrance, Dimitri, Terrance, Sam, Chaw, Cindy, Pedro], [Phineas], 3),
    groupConnections([Gerez, Linda, Lawrence, Candace, DumbassGinger, Sally, Logan, Pedro, Terrance, Chaw, Isabella, Holly, Ginger, Katie, Adyson, Sam, Cindy, Ruby, Velvet, Irving, Milly, Gretchen, Tabitha], [Phineas], 3),
    groupConnections([Buford, Baljeet, Irving, Pedro, Terrance, Kris, Cindy], [Linda], 3),

    new Connection(Phineas, Isabella, 6),
    new Connection(Linda, Lawrence, 6),
    new Connection(Balthazar, Candace, 6),
    new Connection(DumbassGinger, Phineas, 3),
    new Connection(Jeremy, Ferb, 5),
    new Connection(Phineas, Jeremy, 6),
    new Connection(Candace, Biffany, 3),
    new Connection(Buford, Biffany, 6),
    new Connection(Doof, Roger, 4),
    new Connection(Perry, Roger, 3),
    new Connection(Linda, Phineas, 5),
    new Connection(Phineas, Ferb, 4),
    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
  ],
  bits: [wherePerry, isOUT, fthWall, lindana, bird, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addModifiedAppearance(ep120, Phineas);
wherePerry.addAppearance(ep120, Phineas);
isOUT.addModifiedAppearance(ep120, Candace);
fthWall.addAppearance(ep120, Doof);
lindana.addAppearance(ep120);
bird.addAppearance(ep120);
curseYou.addAppearance(ep120, Doof);
//#endregion
