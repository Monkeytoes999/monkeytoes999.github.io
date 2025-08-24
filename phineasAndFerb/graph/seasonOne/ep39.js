import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep39 = new Episode({
  number: 39,
  code: "122a",
  title: "The Monster of Phineas-n-Ferbenstein",
  aPlot: "Platypus Frankenstein",
  bPlot: "Concoction Brewinator [uh transformation drink]",
  songs: [
    new Song("He's Eviler", [AndrewsSisters])
  ],
  characters: [
    Phineas,
    Ferb,
    Candace,
    Winifred,
    Reginald,
    Perry,
    Monogram,
    Doof,
    Ferbgor,
    Phineastein,
    Constance,
    PlatypusMonster,
    DoofDad,
    Jekyll,
    AngryMob,
    Jameson,
    AndrewsSisters,
    FrankenIsabella,
    GFBH,
    Jeremiah
  ],
  interactions: [
    connectAll([Phineas, Ferb, Candace, Winifred, Reginald], 6),
    connectAll([Phineastein, Constance, Ferbgor, PlatypusMonster], 6),

    groupConnections([Perry], [Monogram, Doof], 6),
    groupConnections([Ferb, Candace, Winifred, Reginald], [Perry], 2),
    
    groupConnections([Phineas, Ferb, Candace, Winifred], [Ferbgor, Phineastein, Constance, PlatypusMonster, AngryMob, FrankenIsabella, Jeremiah], 2),
    groupConnections([Reginald], [Ferbgor, Phineastein, Constance, PlatypusMonster, AngryMob, FrankenIsabella, Jeremiah], 4),

    groupConnections([Perry], [DoofDad, Jekyll, Jameson, AngryMob, PlatypusMonster], 2),
    groupConnections([Doof, DoofDad], [Jekyll, Jameson, AngryMob, PlatypusMonster], 4),
    
    groupConnections([AngryMob], [Jekyll, Constance, Jameson], 6),
    groupConnections([AngryMob], [Phineastein, Ferbgor], 4),
    groupConnections([Phineastein, Ferbgor], [AngryMob], 3),
    groupConnections([Jekyll], [Jameson, AndrewsSisters, PlatypusMonster], 6),
    groupConnections([FrankenIsabella], [Phineastein, Ferbgor, PlatypusMonster], 6),
    
    new Connection(Monogram, Doof, 4),
    new Connection(Phineas, Perry, 4),
    new Connection(Doof, DoofDad, 6),

    new Connection(PlatypusMonster, FrankenIsabella, 6),
    new Connection(GFBH, PlatypusMonster, 1),
    new Connection(Constance, Jeremiah, 6),
  ],
  bits: [wherePerry, gonnaDo, whatchaDoin],
  ferbLines: 1,
});

//#region Bit Handler
wherePerry.addAppearance(ep39, Phineas);
gonnaDo.addAppearance(ep39, Phineastein);
whatchaDoin.addAppearance(ep39, FrankenIsabella);
//#endregion
