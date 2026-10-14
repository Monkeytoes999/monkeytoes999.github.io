import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep127 = new Episode({
  number: 127,
  code: "308a",
  title: "Tri-Stone Area",
  aPlot: "Invent the Wheel",
  bPlot: "Stickinator",
  songs: [new Song("Zubada", [Phinabunk, Gerb, Isabelock, Boofgard, Baljug, Mog, Da, Cantok, Jerabunk, Bunka, StoneGinger, StoneKatie, StoneGretchen, StoneAdyson, StoneHolly, StoneMilly])],
  characters: [
    Phinabunk,
    Gerb,
    Bunka,
    Isabelock,
    Boofgard,
    Baljug,
    Monobrow,
    Doofengung,
    Gnarl,
    Da,
    Mog,
    Cantok,
    StoneStacy,
    Rojuh,
    Jerabunk,
    Conk,
    StoneAdyson,
    StoneGinger,
    StoneHolly,
    StoneKatie,
    StoneMilly,
    StoneGretchen,

    danPovenmire,
    swampyMarsh,
  ],
  interactions: [
    connectAll([danPovenmire, swampyMarsh], 6),

    connectAll([Phinabunk, Gerb, Isabelock, Boofgard, Baljug, Mog, Da, Cantok, Jerabunk, Bunka, StoneGinger, StoneKatie, StoneGretchen, StoneAdyson, StoneHolly, StoneMilly], 6),
    connectAll([Bunka, Monobrow, Gnarl], 6),

    groupConnections([Conk], [Phinabunk, Gerb], 4),

    new Connection(Mog, Da, 6),
    new Connection(Cantok, StoneStacy, 6),
    new Connection(Doofengung, Bunka, 6),
    new Connection(Doofengung, Rojuh, 4),
    new Connection(Bunka, Rojuh, 2),
    new Connection(Monobrow, Doofengung, 4),
  ],
  bits: [whatchaDoin, wherePerry, littleYoung, quirkyWorky, aPlatypus, curseYou],
  ferbLines: 1,
});

//#region Bit Handler
whatchaDoin.addModifiedAppearance(ep127, Isabelock);
whatchaDoin.addModifiedAppearance(ep127, Boofgard);
wherePerry.addModifiedAppearance(ep127, swampyMarsh);
littleYoung.addModifiedAppearance(ep127);
quirkyWorky.addModifiedAppearance(ep127);
aPlatypus.addModifiedAppearance(ep127, Doofengung);
curseYou.addModifiedAppearance(ep127, Doofengung);
//#endregion
