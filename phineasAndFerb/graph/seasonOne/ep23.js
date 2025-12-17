import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

//Candace Meap
export const ep23 = new Episode({
  number: 23,
  code: "113a",
  title: "It's a Mud, Mud, Mud, Mud World",
  aPlot: "Monster Truck Rally",
  bPlot: "Monster Truck Away-inator / Monster Truck Locatinator",
  songs: [
    new Song("Truck Driving Girl", [dannyJacob]),
  ],
  characters: [
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Charlene,
    Candace,
    Stacy,
    Perry,
    Monogram,
    Doof,
    Carl,
    Construction,
    Beehive,
    GFBH,
    AltDimensionAlien,
    ChefGuy,
    Dink,
    Isabella,
    Buck,
    Dimitri,
    Tilly,
    Lily,
    Kris,
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Lawrence, Linda], 6),
    connectAll([Monogram, Carl, Perry], 6),
    // connectAll([Isabella, Milly, Holly, Gretchen, Adyson, Katie, Ginger], 6),

    groupConnections([Phineas, Ferb, Candace, Lawrence], [Buck], 6),
    groupConnections([Buck], [Isabella, Dink], 3),
    groupConnections([Phineas], [Construction, Beehive, GFBH], 6),
    groupConnections([Phineas, Ferb], [Charlene], 2),
    groupConnections([ChefGuy], [Linda, Charlene, Candace], 6),
    groupConnections([Doof], [Perry, AltDimensionAlien], 6),
    groupConnections([Kris], [Lawrence, Candace], 3),
    
    new Connection(Isabella, Dink, 6),
    new Connection(Beehive, GFBH, 6),
    new Connection(Stacy, Lawrence, 2),
    new Connection(Monogram, Doof, 4),
    new Connection(Carl, Doof, 2),
    new Connection(Linda, Charlene, 6),
    new Connection(Tilly, Lily, 6),
    new Connection(Candace, Stacy, 6),
  ],
  bits: [wherePerry, selfDestruct, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep23, Phineas);
selfDestruct.addModifiedAppearance(ep23);
curseYou.addAppearance(ep23, Doof);
//#endregion
