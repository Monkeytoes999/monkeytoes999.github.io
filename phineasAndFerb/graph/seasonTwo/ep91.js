import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep91 = new Episode({
  number: 91,
  code: "225a",
  title: "Invasion of the Ferb Snatchers",
  aPlot: "Candace tries to prove that Ferb is an alien | P&F Repair alien ship",
  bPlot: "Inator Garage Sale",
  songs: [new Song("You're Not Ferb", [dannyJacob])],
  characters: [
    Phineas,
    Ferb,
    Perry,
    Candace,
    Linda,
    UncleAngus,
    AuntMora,
    Monogram,
    FrenchFifi,
    Carl,
    Doof,
    Meap,
    Garrbagg
  ],
  interactions: [
    connectAll([Perry, Monogram, Carl, FrenchFifi], 6),
    connectAll([Phineas, Ferb, Perry, Candace, Linda], 6),
    connectAll([Phineas, Ferb, Candace, Garrbagg], 6),
    
    groupConnections([Linda], [Phineas, Ferb], 4),
    groupConnections([Candace, Ferb], [Meap], 2),

    new Connection(Monogram, Doof, 4),
    new Connection(Perry, Doof, 6),
    new Connection(Phineas, Meap, 4),
    new Connection(Garrbagg, Linda, 3), //I... It's something.
  ],
  bits: [panicRoom, wherePerry, curseYou, ohTherePerry],
  ferbLines: 1,
});

//#region Bit Handler
panicRoom.addAppearance(ep91);
wherePerry.addAppearance(ep91, Phineas);
curseYou.addAppearance(ep91, Doof);
ohTherePerry.addAppearance(ep91, Phineas);
//#endregion
