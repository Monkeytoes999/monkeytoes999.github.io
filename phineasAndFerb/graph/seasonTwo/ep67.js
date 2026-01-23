import "../../characters/globals.js";
import { Episode } from "../../classes/episode.js";
import { Song } from "../../classes/song.js";
import { Connection } from "../../classes/connection.js";
import "../../bits/globals.js";
import { Bit } from "../../classes/bit.js";
import { connectAll, groupConnections } from "../connectionHelpers.js";

export const ep67 = new Episode({
  number: 67,
  code: "212",
  title: "Phineas and Ferb's Quantum Boogaloo",
  aPlot: "Uhhh time travel. x7.",
  bPlot: "Not really a B plot this episode.",
  songs: [new Song("Today is Gonna Be a Great Day", [BowlingForSoup, Phineas, Ferb]), new Song("Charmed Life", [Doof])],
  characters: [
    Ferb,
    Phineas,
    Baljeet,
    Isabella,
    Candace,
    Stacy,
    Linda,
    Xavier,
    Fred,
    Amanda,
    Perry,
    Doof,
    BowlingForSoup,
    Onassis,
    Pedro,
    Dimitri,
    DumbassGinger,
    Logan,
    Chalk,
    Terrance,
    Pedro,
    Chaw,
    Dimitri,
    Sam
  ],
  interactions: [
    connectAll([Phineas, Ferb, Baljeet], 6),
    connectAll([Phineas, Ferb, Isabella], 6),
    connectAll([Phineas, Ferb, Candace], 6),
    //Yeah no. That's literally ALL the canon interactions of the episode..... kinda...................... because the Isabella who did this would get wiped out and this is all a paradox anyway BUT. We're just gonna say ^. Even though that Isabella had interactions with other people.

    // connectAll([Phineas, Ferb, Candace, Xavier, Fred, Amanda, Isabella, Linda], 6),
    // connectAll([Phineas, Ferb, BowlingForSoup], 6),
    // connectAll([Pedro, Dimitri, DumbassGinger], 6), //This timeline gets erased.
    // connectAll([Phineas, Ferb, Isabella, Logan, Chalk, Pedro, Terrance, DumbassGinger], 6), //Same timeline, still erased.
    // connectAll([Phineas, Ferb, Isabella, Chalk, Pedro, DumbassGinger, Terrance, Chaw, Sam, Dimitri], 6), //Same timeline, still erased.
    // connectAll([Perry, Monogram, Carl, Doof], 6) //You get the idea.
    // Blah blah connectAll([Phineas, Ferb, Candace, Perry, Linda], 6), //Timeline uhh A? Maybe kinda sorta maybe kinda?

    // groupConnections([Candace], [Stacy, Amanda, Onassis], 6),
    // groupConnections([Stacy], [Phineas, Ferb, Xavier, Fred], 2),
    // groupConnections([Xavier, Amanda], [BowlingForSoup], 3),
    // groupConnections([Pedro, Dimitri, DumbassGinger], [Phineas, Ferb], 4),
    
    // new Connection(Perry, Doof, 6),
    // new Connection(Phineas, Perry, 4),
    // new Connection(Ferb, Perry, 2),
  ],
  bits: [gonnaDo, whatchaDoin, wherePerry],
  ferbLines: 1,
});

//#region Bit Handler
gonnaDo.addAppearance(ep67, Phineas);
whatchaDoin.addAppearance(ep67, Isabella);
whatchaDoin.addAppearance(ep67, Phineas);
wherePerry.addAppearance(ep67, Phineas);
littleYoung.addAppearance(ep67, Linda);
//#endregion
