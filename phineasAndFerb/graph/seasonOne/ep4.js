import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep4 = new Episode({
  number: 4,
  code: "102b",
  title: "Lawn Gnome Beach Party of Terror",
  aPlot: "Backyard Beach",
  bPlot: "Destructinator [Gnomes]",
  songs: [
    new Song("If Summer Only Lasted a Day", [dannyJacob]),
    new Song("Backyard Beach", [Ferb])
  ],
  characters: [
    Stanky,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Candace,
    Construction,
    Isabella,
    Milly,
    Ginger,
    Holly,
    Gretchen,
    Katie,
    Stacy,
    Jenny,
    Jeremy,
    Kris,
    FricknNerd,
    Buford,
    Adyson,
    Pedro,
    Sally,
    Django,
    Logan,
    FishingHat,
    Oga,
    Bobby,
    DoofDad,
    DoofMom,
    Kenny
  ],
  interactions: [
    connectAll([Phineas, Ferb, Perry, Candace, Linda], 6),
    connectAll([Phineas, Ferb, Isabella, Milly, Holly, Ginger, Katie], 6),
    connectAll([Stacy, Jenny, Kris, Sally, Buford, Django, FricknNerd, Sam, Logan, Pedro, DumbassGinger], 1),

    groupConnections([Phineas, Ferb], [Isabella], 6),
    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Perry], [DoofDad, DoofMom, Kenny], 2),
    groupConnections([Phineas, Ferb, Candace], [Lawrence], 2),
    groupConnections([Linda], [Buford, Jeremy], 2),
    groupConnections([Isabella, Ginger, Katie, Milly, Holly, Adyson, Kris, Sally, Buford, Django, FricknNerd, Sam, Logan, Pedro, DumbassGinger], [Candace], 3),
    groupConnections([Stacy, Kris], [Phineas, Ferb, Stanky], 3),
    groupConnections([Phineas, Ferb, Buford, Django, Bobby], [Stanky], 6),
    groupConnections([Candace], [Stacy, Jenny, Jeremy], 6),
    groupConnections([Phineas], [Construction, Buford, Pedro], 6),
    groupConnections([Doof], [DoofMom, DoofDad, Kenny], 6),
    groupConnections([Stanky], [Pedro, Stacy, Kris], 4),
    groupConnections([Ferb, Django, FricknNerd], [Jeremy], 1),
    groupConnections([Jenny, FricknNerd, Sam, Pedro], [FishingHat], 1),
    groupConnections([Perry, Pedro], [Stanky], 3),
    groupConnections([Jenny, Pedro], [Ferb], 3),
    groupConnections([Pedro, DumbassGinger], [Perry, Isabella], 3),
    groupConnections([Stacy, Jenny, Kris, Sally, Buford, Django, FricknNerd, Sam, Logan, Pedro, DumbassGinger], [Katie, Ginger, Milly, Holly, Adyson], 1),
    groupConnections([Kris], [Pedro, Sally], 6),
    groupConnections([Buford, Django], [Bobby], 6),
    groupConnections([Buford], [Django, FricknNerd], 6),
    groupConnections([Isabella, Ginger], [Gretchen], 6),
    groupConnections([Ginger, Katie, Milly, Holly], [Adyson], 6),

    new Connection(Stacy, Jenny, 6),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Jenny, Jeremy, 2),
    new Connection(Candace, Buford, 4),
    new Connection(Linda, Lawrence, 4),
    new Connection(Linda, Oga, 6),
    new Connection(Isabella, Linda, 6),
    new Connection(Oga, Candace, 2),
    new Connection(Monogram, Doof, 4),
  ],
  bits: [bird, wherePerry, littleYoung, aPlatypus, ohTherePerry],
  ferbLines: 0,
});

//#region Bit Handler
bird.addAppearance(ep4);
wherePerry.addAppearance(ep4, Phineas);
littleYoung.addAppearance(ep4, Construction);
aPlatypus.addAppearance(ep4, Doof);
ohTherePerry.addAppearance(ep4, Phineas);
//#endregion