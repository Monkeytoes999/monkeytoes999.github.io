import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep101 = new Episode({
  number: 101,
  code: "231a",
  title: "She's the Mayor",
  aPlot: "Pioneer Town",
  bPlot: "Accelerate-inator",
  songs: [new Song("Ordinary Day", [PaisleySideburnBrothers])],
  characters: [
    // Roger,
    // Candace,
    // Phineas,
    // Ferb,
    // Linda,
    // Lawrence,
    // MoMo,
    // Melanie,
    // Stacy,
    // Isabella,
    // Perry,
    // Monogram,
    // Carl,
    // Doof,
    // AgentWhale,
    // Dimitri,
    // PaisleySideburnBrothers,
    // DoofMom,
    // KatieCaddy,
    // Buford,
    // OldCoot,
    // Baljeet

    Roger,
    Doof,
    AltDimensionAlien,
    OldCoot,
    Candace
  ],
  interactions: [
    // connectAll([Perry, Monogram, Carl, AgentWhale], 6),
    // connectAll([Linda, Lawrence, Phineas, Ferb], 6),
    // connectAll([Roger, Candace, Melanie], 6),
    // connectAll([Phineas, Ferb, Isabella, Buford, OldCoot], 6),
    // connectAll([Candace, Stacy, PaisleySideburnBrothers], 6),
    // connectAll([Roger, Doof, KatieCaddy, Perry], 6),

    // groupConnections([Lawrence, Phineas, Ferb, MoMo], [Candace, Roger], 3),
    // groupConnections([Linda, Lawrence, Phineas, Ferb], [MoMo], 1),
    // groupConnections([Ferb, Isabella], [Perry], 2),
    // groupConnections([Doof], [DoofMom, Perry], 6),
    // groupConnections([Candace, Stacy], [Phineas, Ferb, Isabella, Buford, OldCoot], 3),
    // groupConnections([Baljeet], [Phineas, Ferb, Isabella, Buford], 6),

    // new Connection(Monogram, Doof, 4),
    // new Connection(Phineas, Perry, 4),
    // new Connection(Dimitri, Candace, 3),
    // new Connection(DoofMom, Roger, 4),
    // new Connection(Linda, Candace, 6),
    // new Connection(Candace, Lawrence, 4),

    groupConnections([Candace], [Roger, OldCoot], 3),
    
    new Connection(Doof, AltDimensionAlien, 6),
  ],
  bits: [gonnaDo, isOUT, whatchaDoin, wherePerry, quirkyWorky],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep101, Phineas);
isOUT.addAppearance(ep101, Melanie);
whatchaDoin.addAppearance(ep101, Isabella);
wherePerry.addAppearance(ep101, Phineas);
quirkyWorky.addModifiedAppearance(ep101);
//#endregion
