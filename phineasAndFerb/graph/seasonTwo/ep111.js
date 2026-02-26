import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep111 = new Episode({
  number: 111,
  code: "237 / 238",
  title: "Phineas and Ferb Summer Belongs to You!",
  aPlot: "Jump-rope Robot Thing, Sun Beater 3000",
  bPlot: "Discredit Monogram",
  songs: [new Song("I Believe We Can", [ClayAiken, ChakaKhan, Phineas, Ferb]), new Song("J-Pop (Welcome to Tokyo)", [StacyCousins]), new Song("Rubber Bands, Rubber Balls", [UncleSabu]), new Song("Bouncin' Around the World", [Bobbi, Sherman, DannyLH]),
  new Song("In the City of Love", [Isabella, Ferb]), new Song("Summer Belongs to You", [Milly, Katie, Gretchen, Ginger, Adyson, Phineas, Isabella, Holly, Buford, Ferb, Baljeet, Candace, Sam, Chalk])],
  characters: [
    Candace,
    Jeremy,
    Linda,
    Construction,
    Phineas,
    Ferb,
    Perry,
    Construction,
    Doof,
    Vanessa,
    Lawrence,
    Stacy,
    Chalk,
    DumbassGinger,
    Isabella,
    Milly,
    Adyson,
    Chaw,
    Buford,
    Sam,
    Baljeet,
    Ginger,
    Pedro,
    Dimitri,
    Gretchen,
    Holly,
    Katie,
    ClayAiken,
    Logan,
    Terrance,
    ChakaKhan,
    Carl,
    Monogram,
    Cindy,
    StacyCousins,
    Bāchan,
    Klimpaloon,
    UncleSabu, //EP SPLIT AFTER THIS

    Irving,
    Kris,
    Sally,
    Jenny,
    Django,
    Sarah,
    Balthazar
  ],
  interactions: [
    connectAll([Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),
    connectAll([Phineas, Ferb, Perry], 6),
    connectAll([Candace, Linda, Lawrence, Phineas, Ferb], 6),
    connectAll([Chalk, DumbassGinger, Isabella, Milly, Adyson, Chaw, Buford, Sam, Baljeet, Ginger, Pedro], 1),
    connectAll([Gretchen, Baljeet, Pedro, Buford, Dimitri, Sam, Holly, Katie, Chalk, Chaw, DumbassGinger, Adyson, Ginger], 1),
    connectAll([Phineas, Ferb, Isabella, Buford, Candace, Baljeet, Vanessa], 6),
    connectAll([Terrance, Katie, Ginger, DumbassGinger, Baljeet, Isabella, Buford, Holly, Gretchen, Dimitri, Chaw, Logan, Pedro, Adyson, Chalk, Sam], 1),
    connectAll([Phineas, Ferb, ClayAiken, ChakaKhan], 6),
    connectAll([Doof, Vanessa, Monogram, Perry], 6),
    connectAll([Cindy, Pedro, Logan, Katie, Gretchen, Ginger, Holly, Chalk, Adyson, Chaw, DumbassGinger, Terrance], 1),
    connectAll([Phineas, Ferb, Candace, Isabella, Baljeet, Buford, Bāchan, StacyCousins], 6),
    connectAll([Phineas, Ferb, Baljeet, Buford, Isabella, UncleSabu], 6),
    connectAll([Chaw, Ginger, Sam, Buford, Baljeet, Sally, Irving, Kris, Phineas, Ferb, Isabella, Katie, Milly, Pedro, Candace, Logan, Adyson, Gretchen, Chaw, Dimitri, Linda, Lawrence], 1),
    connectAll([Chaw, Baljeet, Sally, Django, Gretchen, Milly, Pedro, Ginger, Holly, Buford, Stacy, Jenny, Katie, Phineas, Ferb, Isabella, Sarah], 1),
    connectAll([Sarah, Sally, Django, Ginger, Milly, Jenny, Jeremy], 1),
    connectAll([Phineas, Ferb, Isabella, Milly, Katie, Holly, Gretchen, Adyson, Ginger, Pedro, Sam, Sarah, Jenny, Chalk, DumbassGinger, Terrance, Stacy, Candace, Jeremy, Dimitri, Balthazar, Baljeet, Buford, Pedro, Sally, Django, Logan, Chaw], 1),
    connectAll([Milly, Katie, Gretchen, Ginger, Adyson, Phineas, Isabella, Holly, Buford, Ferb, Baljeet, Candace, Sam, Chalk], 6), //Summer Belongs to You Performers.
    
    groupConnections([Candace], [Jeremy, Stacy], 6),
    groupConnections([Chalk, DumbassGinger, Adyson, Milly, Sam, Ginger], [Buford], 3),
    groupConnections([Gretchen, Baljeet, Pedro, Buford, Dimitri, Sam, Holly, Katie, Chalk, Chaw, DumbassGinger, Adyson, Ginger, Gretchen, Baljeet, Pedro, Buford, Dimitri, Sam, Holly, Katie, Chalk, Chaw, DumbassGinger, Adyson, Ginger, Milly, Logan, Terrance], [Phineas, Ferb], 3),
    groupConnections([Sam, Adyson, Chaw, Katie, Holly, Isabella, Milly, Pedro, Chalk, Buford, Ginger, Logan, Baljeet, Dimitri, Terrance, Gretchen, DumbassGinger], [ClayAiken], 3),
    groupConnections([Adyson, Milly, Sam, Logan, Isabella, Buford, Katie, Holly, Baljeet, Gretchen, Stacy, ChakaKhan, ClayAiken], [ChakaKhan], 3),
    groupConnections([Isabella, ClayAiken, Gretchen, Baljeet, Milly, Buford, Holly, Ginger, Katie], [Perry], 2),
    groupConnections([Carl], [Monogram, Doof, Vanessa], 4),
    groupConnections([Cindy, Pedro, Logan, Katie, Gretchen, Ginger, Holly, Chalk, Adyson, Chaw, DumbassGinger, Terrance, Sam], [Phineas, Ferb, Candace, Isabella, Baljeet, Buford], 3),
    groupConnections([Ferb, Baljeet, Buford, Vanessa, Isabella], [Klimpaloon], 3),
    groupConnections([Candace, Vanessa], [UncleSabu], 2),
    groupConnections([Stacy, Phineas], [Jeremy], 2),
    groupConnections([Isabella, Baljeet, Buford, Ferb], [Jeremy], 2),
    groupConnections([Candace], [ClayAiken, ChakaKhan], 2),
    groupConnections([Baljeet, Buford, Isabella], [Linda, Lawrence], 2), 
    groupConnections([Jenny], [Chaw, Chalk, Milly, Holly], 1),
    groupConnections([Jenny, Stacy], [Isabella, Phineas, Ferb], 3),
    groupConnections([Stacy, Kris, Adyson, Holly], [Phineas, Ferb, Isabella, Buford], 3),
    groupConnections([Chaw, Ginger, Holly, Katie, Sally, Django], [Candace], 3),
    groupConnections([Chaw, Sally, Django, Gretchen, Milly, Pedro, Ginger, Holly, Buford, Jenny, Katie, Sarah], [Candace, Phineas, Ferb], 3),
    groupConnections([Chaw, Ginger, Sam, Sally, Irving, Kris, Katie, Milly, Pedro, Logan, Adyson, Gretchen, Chaw, Dimitri], [Phineas], 3),
    groupConnections([Pedro, Sam, Sarah, Jenny, Chalk, DumbassGinger, Terrance, Stacy, Candace, Jeremy, Dimitri, Balthazar, Baljeet, Buford, Pedro, Sally, Django, Logan, Chaw], [Phineas, Ferb, Isabella, Milly, Katie, Holly, Gretchen, Adyson, Ginger], 3),

    new Connection(Perry, Carl, 6),
    new Connection(Linda, Construction, 3),
    new Connection(ClayAiken, Buford, 4),
    new Connection(ClayAiken, Gretchen, 6),
    new Connection(Stacy, StacyCousins, 5),
    new Connection(Phineas, Klimpaloon, 4),
    new Connection(Candace, Klimpaloon, 6),
    new Connection(Phineas, Jeremy, 4),
    new Connection(Ferb, Doof, 2),
    new Connection(Monogram, Carl, 4),
    new Connection(Doof, Carl, 2),
    new Connection(Stacy, Kris, 1),
    new Connection(Stacy, Jenny, 6),
  ],
  bits: [ohTherePerry, fthWall, gonnaDo, whatchaDoin],
  ferbLines: 7,
});

//#region Bit Handler
ohTherePerry.addAppearance(ep111, Phineas);
fthWall.addAppearance(ep111, Phineas);
gonnaDo.addAppearance(ep111, Phineas);
whatchaDoin.addModifiedAppearance(ep111, Isabella);
wherePerry.addAppearance(ep111, ChakaKhan);
//#endregion
