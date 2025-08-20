import {Connection} from './classes/connection.js';
import {Song} from './classes/song.js';
import {Bit} from './classes/bit.js';
import {Episode} from './classes/episode.js';
import {diffInteractions, logDiff} from "./scripts/interaction-diff.js";
import { connectAll, groupConnections } from './graph/connectionHelpers.js';

//#region Family Handler
Phineas.addFamily(Ferb);
Phineas.addFamily(Candace);
Phineas.addFamily(Linda);
Phineas.addFamily(Lawrence);
Phineas.addFamily(Perry);
Phineas.addFamily(Clyde);
Phineas.addFamily(BettyJo);
Phineas.addFamily(Lorraine);
Phineas.addFamily(Winifred);
Phineas.addFamily(Reginald);

Ferb.addFamily(Candace);
Ferb.addFamily(Linda);
Ferb.addFamily(Lawrence);
Ferb.addFamily(Perry);
Ferb.addFamily(Clyde);
Ferb.addFamily(BettyJo);
Ferb.addFamily(Lorraine);
Ferb.addFamily(Winifred);
Ferb.addFamily(Reginald);

Candace.addFamily(Linda);
Candace.addFamily(Lawrence);
Candace.addFamily(Perry);
Candace.addFamily(Clyde);
Candace.addFamily(BettyJo);
Candace.addFamily(Lorraine);
Candace.addFamily(Winifred);
Candace.addFamily(Reginald);

Linda.addFamily(Lawrence);
Linda.addFamily(Perry);
Linda.addFamily(Clyde);
Linda.addFamily(BettyJo);
Linda.addFamily(Lorraine);
Linda.addFamily(Winifred);
Linda.addFamily(Reginald);

Lawrence.addFamily(Perry);
Lawrence.addFamily(Clyde);
Lawrence.addFamily(BettyJo);
Lawrence.addFamily(Lorraine);
Lawrence.addFamily(Winifred);
Lawrence.addFamily(Reginald);

Perry.addFamily(Clyde);
Perry.addFamily(BettyJo);
Perry.addFamily(Lorraine);
Perry.addFamily(Winifred);
Perry.addFamily(Reginald);

Clyde.addFamily(BettyJo);
Clyde.addFamily(Lorraine);

BettyJo.addFamily(Lorraine);

Winifred.addFamily(Reginald);

Isabella.addFamily(Vivian);
Isabella.addFamily(Pinky);

Stacy.addFamily(Ginger);
Stacy.addFamily(Hirano);

Ginger.addFamily(Hirano);

Jeremy.addFamily(Johnson);
Jeremy.addFamily(Suzy);
Jeremy.addFamily(UncleJoe);

Suzy.addFamily(Johnson);
Suzy.addFamily(UncleJoe);

Johnson.addFamily(UncleJoe);

Doof.addFamily(DoofDad);
Doof.addFamily(DoofMom);
Doof.addFamily(Vanessa);
Doof.addFamily(Roger);
Doof.addFamily(Charlene);

Vanessa.addFamily(Roger);
Vanessa.addFamily(Charlene);

DoofDad.addFamily(DoofMom);

Lily.addFamily(Tilly);
//#endregion

//#region Episodes
import {ep1} from "./graph/seasonOne/ep1.js";
import {ep2} from "./graph/seasonOne/ep2.js";
import {ep3} from "./graph/seasonOne/ep3.js";
import {ep4} from "./graph/seasonOne/ep4.js";
import {ep5} from "./graph/seasonOne/ep5.js";
import {ep6} from "./graph/seasonOne/ep6.js";
import {ep7} from "./graph/seasonOne/ep7.js";

//#endregion

{//8
  var episode8Songs = [
    new Song("I'm Lindana and I Wanna Have Fun", [Linda]),
    new Song("Gitchee Gitchee Goo", [Phineas, Ferb, Isabella, Milly, Gretchen, Adyson, Candace])
  ];
  var episode8Characters = [
    BSKid,
    PhilAnnouncer,
    Linda,
    Phineas,
    Ferb,
    Candace,
    Stacy,
    Monogram,
    Doof,
    Jeremy,
    Logan,
    DumbassGinger,
    Dimitri,
    Isabella,
    Milly,
    Gretchen,
    Adyson,
    Sam,
    Baxter,
    Marty,
    Construction,
    Johnson
  ];
  var episode8Interactions = [
    new Connection(BSKid, PhilAnnouncer, 6),
  
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, BSKid, 3),
    new Connection(Phineas, PhilAnnouncer, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Baxter, 6),
    new Connection(Phineas, Perry, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, BSKid, 3),
    new Connection(Ferb, PhilAnnouncer, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Adyson, 6),
    new Connection(Ferb, Baxter, 6),
    new Connection(Ferb, Perry, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, PhilAnnouncer, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Marty, 3),

    new Connection(Linda, PhilAnnouncer, 3),
    new Connection(Linda, Stacy, 6),
    new Connection(Linda, Marty, 3),

    new Connection(Monogram, Doof, 4),

    new Connection(Stacy, Jeremy, 6),
    new Connection(Stacy, PhilAnnouncer, 3),
    new Connection(Stacy, Isabella, 3),
    new Connection(Stacy, Milly, 3),
    new Connection(Stacy, Gretchen, 3),
    new Connection(Stacy, Phineas, 3),
    new Connection(Stacy, Ferb, 3),
    new Connection(Stacy, Adyson, 3),
    new Connection(Stacy, Dimitri, 1),
    new Connection(Stacy, DumbassGinger, 1),
    new Connection(Stacy, Logan, 1),
    new Connection(Stacy, Sam, 1),
    
    new Connection(Jeremy, PhilAnnouncer, 3),
    new Connection(Jeremy, Isabella, 3),
    new Connection(Jeremy, Milly, 3),
    new Connection(Jeremy, Gretchen, 3),
    new Connection(Jeremy, Adyson, 3),
    new Connection(Jeremy, Phineas, 3),
    new Connection(Jeremy, Ferb, 3),
    new Connection(Jeremy, Dimitri, 1),
    new Connection(Jeremy, DumbassGinger, 1),
    new Connection(Jeremy, Logan, 1),
    new Connection(Jeremy, Sam, 1),
    
    new Connection(Dimitri, PhilAnnouncer, 3),
    new Connection(Dimitri, Candace, 3),
    new Connection(Dimitri, Isabella, 3),
    new Connection(Dimitri, Milly, 3),
    new Connection(Dimitri, Gretchen, 3),
    new Connection(Dimitri, Adyson, 3),
    new Connection(Dimitri, Phineas, 3),
    new Connection(Dimitri, Ferb, 3),
    new Connection(Dimitri, DumbassGinger, 1),
    new Connection(Dimitri, Logan, 1),
    new Connection(Dimitri, Sam, 1),
    new Connection(Dimitri, Johnson, 1),
    new Connection(Dimitri, Marty, 3),
    
    new Connection(DumbassGinger, PhilAnnouncer, 3),
    new Connection(DumbassGinger, Candace, 3),
    new Connection(DumbassGinger, Isabella, 3),
    new Connection(DumbassGinger, Milly, 3),
    new Connection(DumbassGinger, Gretchen, 3),
    new Connection(DumbassGinger, Adyson, 3),
    new Connection(DumbassGinger, Phineas, 3),
    new Connection(DumbassGinger, Ferb, 3),
    new Connection(DumbassGinger, Logan, 1),
    new Connection(DumbassGinger, Sam, 1),
        
    new Connection(Logan, PhilAnnouncer, 3),
    new Connection(Logan, Candace, 3),
    new Connection(Logan, Isabella, 3),
    new Connection(Logan, Milly, 3),
    new Connection(Logan, Gretchen, 3),
    new Connection(Logan, Adyson, 3),
    new Connection(Logan, Phineas, 3),
    new Connection(Logan, Ferb, 3),
    new Connection(Logan, Sam, 1),
    
    new Connection(Sam, PhilAnnouncer, 3),
    new Connection(Sam, Candace, 3),
    new Connection(Sam, Isabella, 3),
    new Connection(Sam, Milly, 3),
    new Connection(Sam, Gretchen, 3),
    new Connection(Sam, Adyson, 3),
    new Connection(Sam, Phineas, 3),
    new Connection(Sam, Ferb, 3),

    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Baxter, 3),
    new Connection(Isabella, Perry, 3),
    new Connection(Isabella, Candace, 6),

    new Connection(Milly, Gretchen, 6),
    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Baxter, 3),
    new Connection(Milly, Perry, 3),
    new Connection(Milly, Candace, 6),

    new Connection(Gretchen, Adyson, 6),
    new Connection(Gretchen, Baxter, 3),
    new Connection(Gretchen, Perry, 3),
    new Connection(Gretchen, Candace, 6),

    new Connection(Adyson, Baxter, 3),
    new Connection(Adyson, Perry, 3),
    new Connection(Adyson, Candace, 6),

    new Connection(PhilAnnouncer, Marty, 6),

    new Connection(Johnson, Marty, 3),
    new Connection(Johnson, PhilAnnouncer, 3),
  ];
  var episode8Bits = [
    lindana, gonnaDo, wherePerry, aPlatypus, ggg, littleYoung, curseYou
  ];
  var ep8 = new Episode(8, "104b", "Flop Starz", "Become one hit wonders", "", 
    episode8Songs, episode8Characters, episode8Interactions, episode8Bits, 0);
  {//bitHandler
    lindana.addAppearance(8);
    gonnaDo.addAppearance(8, Phineas);
    wherePerry.addAppearance(8, Phineas);
    aPlatypus.addModifiedAppearance(8, Doof);
    ggg.addAppearance(8);
    littleYoung.addAppearance(8, Baxter);
    curseYou.addAppearance(8, Phineas);
  }
const report = diffInteractions({
  original: episode8Interactions,
  rebuilt: findStrongestConnections(ep8.interactions)
});
logDiff(report, "Ep8");
}

{//9
  var episode9Songs = [
    new Song("He's a Bully", [robbieWyckoff])
  ];
  var episode9Characters = [
    Candace,
    Jeremy,
    Linda,
    Johnson,
    Hirano,
    Phineas,
    Ferb,
    Isabella,
    Perry,
    Monogram,
    Doof,
    Carl,
    Bob,
    Phineas,
    Ferb,
    Baljeet,
    Buford,
    DumbassGinger,
    Tilly,
    Lily,
    FishingHat,
    Pedro,
    Isabella,
    Sam,
    Evander,
    Beehive,
    Dimitri,
    Milly,
    OlgaChicago,
    Holly,
    Ginger,
  ];
  var episode9Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Baljeet, 6),
    new Connection(Phineas, Buford, 6),
    new Connection(Phineas, Evander, 6),
    new Connection(Phineas, Beehive, 1),
    new Connection(Phineas, Bob, 1),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Linda, 6),

    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Baljeet, 6),
    new Connection(Ferb, Buford, 6),
    new Connection(Ferb, Evander, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Adyson, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Linda, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Carl, 2),
    new Connection(Perry, OlgaChicago, 2),
    new Connection(Perry, Buford, 6),
    new Connection(Perry, Milly, 6),
    new Connection(Perry, Katie, 6),
    new Connection(Perry, Adyson, 6),
    new Connection(Perry, Gretchen, 6),
    new Connection(Perry, Isabella, 6),
    new Connection(Perry, Holly, 6),
    new Connection(Perry, Linda, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Milly, 6),
    new Connection(Candace, Holly, 6),
    new Connection(Candace, Ginger, 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),

    new Connection(Linda, Johnson, 6),
    new Connection(Linda, Hirano, 6),

    new Connection(Johnson, Hirano, 6),

    new Connection(Buford, Baljeet, 6),
    new Connection(Buford, DumbassGinger, 6),
    new Connection(Buford, Isabella, 6),
    new Connection(Buford, Evander, 6),
    new Connection(Buford, Milly, 6),
    new Connection(Buford, Katie, 6),
    new Connection(Buford, Adyson, 6),
    new Connection(Buford, Holly, 6),
    new Connection(Buford, Gretchen, 6),
    new Connection(Buford, Linda, 6),

    new Connection(Isabella, Baljeet, 6),
    new Connection(Isabella, Evander, 6),
    new Connection(Isabella, DumbassGinger, 4),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Linda, 6),

    new Connection(Baljeet, Evander, 6),

    new Connection(Tilly, Lily, 6),
    new Connection(Tilly, Buford, 3),
    new Connection(Tilly, Phineas, 3),
    new Connection(Tilly, Evander, 3),
    new Connection(Tilly, Baljeet, 3),
    new Connection(Tilly, Isabella, 3),
    new Connection(Tilly, Pedro, 1),
    new Connection(Tilly, FishingHat, 1),
    new Connection(Tilly, Sam, 1),

    new Connection(Lily, Buford, 3),
    new Connection(Lily, Phineas, 3),
    new Connection(Lily, Evander, 3),
    new Connection(Lily, Baljeet, 3),
    new Connection(Lily, Isabella, 3),
    new Connection(Lily, Pedro, 1),
    new Connection(Lily, FishingHat, 1),
    new Connection(Lily, Sam, 1),

    new Connection(Pedro, Buford, 3),
    new Connection(Pedro, FishingHat, 1),

    new Connection(FishingHat, Buford, 3),
    new Connection(FishingHat, Phineas, 3),
    new Connection(FishingHat, Isabella, 3),
    new Connection(FishingHat, Baljeet, 3),
    new Connection(FishingHat, Evander, 3),
    new Connection(FishingHat, Isabella, 3),
    new Connection(FishingHat, Sam, 1),

    new Connection(Sam, Buford, 3),
    new Connection(Sam, Phineas, 3),
    new Connection(Sam, Isabella, 3),
    new Connection(Sam, Baljeet, 3),
    new Connection(Sam, Evander, 3),
    new Connection(Sam, Isabella, 3),

    new Connection(Dimitri, Evander, 6),
    new Connection(Dimitri, DumbassGinger, 1),
    new Connection(Dimitri, Phineas, 1),
    new Connection(Dimitri, Ferb, 1),

    new Connection(Milly, Bob, 6),
    new Connection(Milly, Katie, 6),
    new Connection(Milly, Holly, 6),
    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Gretchen, 6),
    new Connection(Milly, Evander, 6),

    new Connection(Katie, Holly, 6),
    new Connection(Katie, Adyson, 6),
    new Connection(Katie, Gretchen, 6),
    new Connection(Katie, Evander, 6),

    new Connection(Holly, Ginger, 6),
    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Evander, 6),

    new Connection(Adyson, Gretchen, 6),
    new Connection(Adyson, Evander, 6),

    new Connection(Gretchen, Evander, 6),

    new Connection(Carl, Perry, 3),

    new Connection(Doof, OlgaChicago, 6),

    new Connection(Bob, Phineas, 3),
    new Connection(Bob, Buford, 3),
  ];
  var episode9Bits = [
    wherePerry, littleYoung, gonnaDo, curseYou, ohTherePerry
  ];
  var ep9 = new Episode(5, "105a", "Raging Bully", "Thumb War", "Slave-inator [uh celebrate birthday]", 
    episode9Songs, episode9Characters, episode9Interactions, episode9Bits, 2);
  {//bitHandler
    wherePerry.addAppearance(9, Phineas);
    littleYoung.addModifiedAppearance(9, Phineas);
    gonnaDo.addModifiedAppearance(9, Phineas);
    curseYou.addAppearance(9, Doof);
    ohTherePerry.addAppearance(9, Phineas);
  }
}

{//10
  var episode10Songs = [
  ];
  var episode10Characters = [
    Candace,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Monogram,
    Doof,
    ProducerGuy,
    OlgaChicago,
    Isabella,
    Holly,
    Gretchen,
    Milly,
    Ginger,
    Pedro,
    Sam,
    Logan,
    Timmy,
    Dimitri,
    Haney,
    Tilly,
    Lily
  ];
  var episode10Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, ProducerGuy, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Haney, 1),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, ProducerGuy, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Haney, 1),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, ProducerGuy, 6),
    new Connection(Candace, OlgaChicago, 6),
    new Connection(Candace, Holly, 6),
    new Connection(Candace, Gretchen, 6),
    new Connection(Candace, Milly, 6),
    new Connection(Candace, Ginger, 6),
    new Connection(Candace, Haney, 1),
    new Connection(Candace, Tilly, 3),
    new Connection(Candace, Lily, 3),

    new Connection(Isabella, ProducerGuy, 6),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Ginger, 6),
    new Connection(Holly, Pedro, 1),
    new Connection(Holly, Sam, 1),
    new Connection(Holly, Dimitri, 1),
    new Connection(Holly, Logan, 1),
    new Connection(Holly, Timmy, 1),
    new Connection(Holly, DumbassGinger, 1),

    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Ginger, 6),

    new Connection(Milly, Ginger, 6),
    new Connection(Milly, Pedro, 1),
    new Connection(Milly, Sam, 1),
    new Connection(Milly, Dimitri, 1),
    new Connection(Milly, Logan, 1),
    new Connection(Milly, Timmy, 1),
    new Connection(Milly, DumbassGinger, 1),
    
    new Connection(Pedro, Sam, 1),
    new Connection(Pedro, Dimitri, 1),
    new Connection(Pedro, Logan, 1),
    new Connection(Pedro, Timmy, 1),
    new Connection(Pedro, DumbassGinger, 1),
    
    new Connection(Sam, Dimitri, 1),
    new Connection(Sam, Logan, 1),
    new Connection(Sam, Timmy, 1),
    new Connection(Sam, DumbassGinger, 1),
    
    new Connection(Dimitri, Logan, 1),
    new Connection(Dimitri, Timmy, 1),
    new Connection(Dimitri, DumbassGinger, 1),
    new Connection(Dimitri, Candace, 6),
    
    new Connection(Logan, Timmy, 1),
    new Connection(Logan, DumbassGinger, 1),
    new Connection(Logan, Candace, 4),

    new Connection(Timmy, DumbassGinger, 1),

    new Connection(Tilly, Lily, 6),
    new Connection(Tilly, Candace, 4),
    
    new Connection(Lily, Candace, 3),
  ];
  var episode10Bits = [
    wherePerry, littleYoung, curseYou
  ];
  var ep10 = new Episode(10, "105b", "Lights, Candace, Action!", "The curse of the Princess Monster", "Age Acellerator-inator [cheese]", 
    episode10Songs, episode10Characters, episode10Interactions, episode10Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(10, Phineas);
    littleYoung.addAppearance(10, Candace);
    curseYou.addAppearance(10, Doof);
  }
}

{//11
  var episode11Songs = [
    new Song("He's Bigfoot", [Clyde])
  ];
  var episode11Characters = [
    Phineas,
    Buford,
    Baljeet,
    Isabella,
    Gretchen,
    Candace,
    Milly,
    Holly,
    Adyson,
    Ginger,
    Ferb,
    Linda,
    Lawrence,
    Clyde,
    BettyJo,
    DumbassGinger,
    Logan,
    Monogram,
    Doof,
    Katie,
    Pedro,
    Sam,
    Dimitri,
    Lorraine
  ];
  var episode11Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Buford, 6),
    new Connection(Phineas, Baljeet, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, DumbassGinger, 6),
    new Connection(Phineas, Sam, 6),
    new Connection(Phineas, Logan, 6),
    new Connection(Phineas, Pedro, 6),
    new Connection(Phineas, Dimitri, 6),

    new Connection(Phineas, BettyJo, 6),
    new Connection(Phineas, Clyde, 6),

    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Buford, 6),
    new Connection(Ferb, Baljeet, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Adyson, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, DumbassGinger, 6),
    new Connection(Ferb, Sam, 6),
    new Connection(Ferb, Logan, 6),
    new Connection(Ferb, Pedro, 6),
    new Connection(Ferb, Dimitri, 6),
    new Connection(Ferb, BettyJo, 6),
    new Connection(Ferb, Clyde, 6),

    new Connection(Perry, BettyJo, 6),
    new Connection(Perry, Clyde, 6),
    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Isabella, 6),
    new Connection(Candace, Buford, 6),
    new Connection(Candace, Baljeet, 6),
    new Connection(Candace, Milly, 6),
    new Connection(Candace, Holly, 6),
    new Connection(Candace, Adyson, 6),
    new Connection(Candace, Gretchen, 6),
    new Connection(Candace, Ginger, 6),
    new Connection(Candace, Katie, 6),
    new Connection(Candace, DumbassGinger, 6),
    new Connection(Candace, Sam, 6),
    new Connection(Candace, Logan, 6),
    new Connection(Candace, Pedro, 6),
    new Connection(Candace, Dimitri, 6),
    new Connection(Candace, Clyde, 6),
    new Connection(Candace, BettyJo, 6),
    new Connection(Candace, Lorraine, 6),

    new Connection(Isabella, Buford, 6),
    new Connection(Isabella, Baljeet, 6),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, DumbassGinger, 6),
    new Connection(Isabella, Sam, 6),
    new Connection(Isabella, Logan, 6),
    new Connection(Isabella, Pedro, 6),
    new Connection(Isabella, Dimitri, 6),
    new Connection(Isabella, Clyde, 6),
    new Connection(Isabella, BettyJo, 6),

    new Connection(Buford, Baljeet, 6),
    new Connection(Buford, Milly, 6),
    new Connection(Buford, Holly, 6),
    new Connection(Buford, Adyson, 6),
    new Connection(Buford, Gretchen, 6),
    new Connection(Buford, Ginger, 6),
    new Connection(Buford, Katie, 6),
    new Connection(Buford, DumbassGinger, 6),
    new Connection(Buford, Sam, 6),
    new Connection(Buford, Logan, 6),
    new Connection(Buford, Pedro, 6),
    new Connection(Buford, Dimitri, 6),
    new Connection(Buford, Clyde, 6),
    new Connection(Buford, BettyJo, 6),

    new Connection(Baljeet, Milly, 6),
    new Connection(Baljeet, Holly, 6),
    new Connection(Baljeet, Adyson, 6),
    new Connection(Baljeet, Gretchen, 6),
    new Connection(Baljeet, Ginger, 6),
    new Connection(Baljeet, Katie, 6),
    new Connection(Baljeet, DumbassGinger, 6),
    new Connection(Baljeet, Sam, 6),
    new Connection(Baljeet, Logan, 6),
    new Connection(Baljeet, Pedro, 6),
    new Connection(Baljeet, Dimitri, 6),
    new Connection(Baljeet, Clyde, 6),
    new Connection(Baljeet, BettyJo, 6),

    new Connection(Milly, Holly, 6),
    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Gretchen, 6),
    new Connection(Milly, Ginger, 6),
    new Connection(Milly, Katie, 6),
    new Connection(Milly, DumbassGinger, 6),
    new Connection(Milly, Sam, 6),
    new Connection(Milly, Logan, 6),
    new Connection(Milly, Pedro, 6),
    new Connection(Milly, Dimitri, 6),
    new Connection(Milly, Clyde, 6),
    new Connection(Milly, BettyJo, 6),

    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Ginger, 6),
    new Connection(Holly, Clyde, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, DumbassGinger, 6),
    new Connection(Holly, Sam, 6),
    new Connection(Holly, Logan, 6),
    new Connection(Holly, Pedro, 6),
    new Connection(Holly, Dimitri, 6),
    new Connection(Holly, Clyde, 6),
    new Connection(Holly, BettyJo, 6),
    
    new Connection(Adyson, Gretchen, 6),
    new Connection(Adyson, Ginger, 6),
    new Connection(Adyson, Katie, 6),
    new Connection(Adyson, DumbassGinger, 6),
    new Connection(Adyson, Sam, 6),
    new Connection(Adyson, Logan, 6),
    new Connection(Adyson, Pedro, 6),
    new Connection(Adyson, Dimitri, 6),
    new Connection(Adyson, Clyde, 6),
    new Connection(Adyson, BettyJo, 6),
    
    new Connection(Gretchen, Ginger, 6),
    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, DumbassGinger, 6),
    new Connection(Gretchen, Sam, 6),
    new Connection(Gretchen, Logan, 6),
    new Connection(Gretchen, Pedro, 6),
    new Connection(Gretchen, Dimitri, 6),
    new Connection(Gretchen, Clyde, 6),
    new Connection(Gretchen, BettyJo, 6),
    
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, DumbassGinger, 6),
    new Connection(Ginger, Sam, 6),
    new Connection(Ginger, Logan, 6),
    new Connection(Ginger, Pedro, 6),
    new Connection(Ginger, Dimitri, 6),
    new Connection(Ginger, Clyde, 6),
    new Connection(Ginger, BettyJo, 6),

    new Connection(Katie, DumbassGinger, 6),
    new Connection(Katie, Sam, 6),
    new Connection(Katie, Logan, 6),
    new Connection(Katie, Pedro, 6),
    new Connection(Katie, Dimitri, 6),
    new Connection(Katie, Clyde, 6),
    new Connection(Katie, BettyJo, 6),

    new Connection(DumbassGinger, Sam, 6),
    new Connection(DumbassGinger, Logan, 6),
    new Connection(DumbassGinger, Pedro, 6),
    new Connection(DumbassGinger, Dimitri, 6),
    new Connection(DumbassGinger, Clyde, 6),
    new Connection(DumbassGinger, BettyJo, 6),

    new Connection(Sam, Logan, 6),
    new Connection(Sam, Pedro, 6),
    new Connection(Sam, Dimitri, 6),
    new Connection(Sam, Clyde, 6),
    new Connection(Sam, BettyJo, 6),
    
    new Connection(Logan, Pedro, 6),
    new Connection(Logan, Dimitri, 6),
    new Connection(Logan, Pedro, 6),
    new Connection(Logan, Clyde, 6),
    new Connection(Logan, BettyJo, 6),
    
    new Connection(Pedro, Dimitri, 6),
    new Connection(Pedro, Clyde, 6),
    new Connection(Pedro, BettyJo, 6),

    new Connection(Dimitri, Clyde, 6),
    new Connection(Dimitri, BettyJo, 6),

    new Connection(Linda, Lawrence, 6),
    new Connection(Linda, Phineas, 6),
    new Connection(Linda, Ferb, 6),
    new Connection(Linda, Candace, 6),
    new Connection(Linda, Perry, 6),
    new Connection(Linda, Isabella, 6),
    new Connection(Linda, Baljeet, 6),
    new Connection(Linda, Buford, 6),
    new Connection(Linda, Milly, 6),
    new Connection(Linda, Holly, 6),
    new Connection(Linda, Gretchen, 6),
    new Connection(Linda, Ginger, 6),
    new Connection(Linda, Adyson, 6),
    new Connection(Linda, DumbassGinger, 6),
    new Connection(Linda, Logan, 6),
    new Connection(Linda, BettyJo, 6),
    new Connection(Linda, Clyde, 6),
    new Connection(Linda, Katie, 6),
    new Connection(Linda, Sam, 6),
    new Connection(Linda, Pedro, 6),
    new Connection(Linda, Dimitri, 6),

    new Connection(Lawrence, Phineas, 6),
    new Connection(Lawrence, Ferb, 6),
    new Connection(Lawrence, Candace, 6),
    new Connection(Lawrence, Perry, 6),
    new Connection(Lawrence, Isabella, 6),
    new Connection(Lawrence, Baljeet, 6),
    new Connection(Lawrence, Buford, 6),
    new Connection(Lawrence, Milly, 6),
    new Connection(Lawrence, Holly, 6),
    new Connection(Lawrence, Gretchen, 6),
    new Connection(Lawrence, Ginger, 6),
    new Connection(Lawrence, Adyson, 6),
    new Connection(Lawrence, DumbassGinger, 6),
    new Connection(Lawrence, Logan, 6),
    new Connection(Lawrence, BettyJo, 6),
    new Connection(Lawrence, Clyde, 6),
    new Connection(Lawrence, Katie, 6),
    new Connection(Lawrence, Sam, 6),
    new Connection(Lawrence, Pedro, 6),
    new Connection(Lawrence, Dimitri, 6),

    new Connection(Clyde, BettyJo, 6),
    new Connection(Clyde, Lorraine, 6),
    
    new Connection(BettyJo, Lorraine, 6),

    new Connection(Monogram, Doof, 4),
  ];
  var episode11Bits = [
    andBy
  ];
  var ep11 = new Episode(11, "106a", "Get That Bigfoot Outa My Face", "Camp!", "Goin' on a date", 
    episode11Songs, episode11Characters, episode11Interactions, episode11Bits, 1);
  {//bitHandler
    andBy.addModifiedAppearance(11, Doof);
  }
}

{//12
  var episode12Songs = [
    new Song("My Goody Two-Shoes Brother", [Doof])
  ];
  var episode12Characters = [
    Candace,
    Stacy,
    Linda,
    Phineas,
    Ferb,
    Perry,
    Monogram,
    Doof,
    Isabella,
    Lily,
    Vanessa,
    Roger,
    Milly,
    Katie,
    Ginger,
    Holly,
    Adyson,
    Gretchen,
    Bob,
    Beehive,
    Haney,
    Dimitri,
    DumbassGinger,
    Tilly
  ];
  var episode12Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Stacy, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Stacy, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Roger, 2),
    new Connection(Perry, Vanessa, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Stacy, 6),

    new Connection(Doof, Roger, 6),

    new Connection(Stacy, Linda, 6),

    new Connection(Isabella, Candace, 6),
    new Connection(Isabella, Stacy, 6),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Perry, 1),

    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),
    new Connection(Ginger, Phineas, 3),
    new Connection(Ginger, Ferb, 3),
    new Connection(Ginger, Candace, 3),
    new Connection(Ginger, Stacy, 3),
    new Connection(Ginger, Perry, 1),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Phineas, 3),
    new Connection(Holly, Ferb, 3),
    new Connection(Holly, Candace, 3),
    new Connection(Holly, Stacy, 3),
    new Connection(Holly, Perry, 1),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),
    new Connection(Gretchen, Phineas, 3),
    new Connection(Gretchen, Ferb, 3),
    new Connection(Gretchen, Candace, 3),
    new Connection(Gretchen, Stacy, 3),
    new Connection(Gretchen, Perry, 1),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),
    new Connection(Katie, Phineas, 3),
    new Connection(Katie, Ferb, 3),
    new Connection(Katie, Candace, 3),
    new Connection(Katie, Stacy, 3),
    new Connection(Katie, Perry, 1),

    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Phineas, 3),
    new Connection(Milly, Ferb, 3),
    new Connection(Milly, Candace, 3),
    new Connection(Milly, Stacy, 3),
    new Connection(Milly, Perry, 1),

    new Connection(Adyson, Phineas, 3),
    new Connection(Adyson, Ferb, 3),
    new Connection(Adyson, Candace, 3),
    new Connection(Adyson, Stacy, 3),
    new Connection(Adyson, Perry, 1),

    new Connection(Vanessa, Roger, 5.5),

    new Connection(Monogram, Doof, 4),

    new Connection(Beehive, Haney, 6),

    new Connection(Lily, Roger, 3),
    new Connection(Lily, Doof, 3),
    new Connection(Lily, Tilly, 6),

    new Connection(Tilly, Doof, 3),

    new Connection(Bob, DumbassGinger, 1),
    new Connection(Bob, Dimitri, 1),
    new Connection(Bob, Roger, 3),

    new Connection(DumbassGinger, Dimitri, 1),
    new Connection(DumbassGinger, Roger, 3),

    new Connection(Dimitri, Roger, 3),
  ];
  var episode12Bits = [
    wherePerry, whatchaDoin, curseYou
  ];
  var ep12 = new Episode(12, "106b", "Tree to Get Ready", "Treehouse Robots", "Poop-inator [Poop on Roger]", 
    episode12Songs, episode12Characters, episode12Interactions, episode12Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(12, Phineas);
    whatchaDoin.addAppearance(12, Isabella);
    curseYou.addAppearance(12, Doof);
  }
}

{//13
  var episode13Songs = [
    new Song("When We Didn't Get Along", [dannyJacob]),
    new Song("My Nemesis", [dannyJacob, Doof])
  ];
  var episode13Characters = [
    Candace,
    Ferb,
    Phineas,
    Lawrence,
    Linda,
    Perry,
    Dimitri,
    Monogram,
    Carl,
    Doof,
    Isabella,
    Ginger,
    Gretchen,
    Milly,
    Adyson,
    Holly,
    Fribbleton, 
    AgentPanda,
    Jeremy,
    Katie,
    Feelbetter,
    Bob,
    AgentChicken,
    AgentDog,
    AgentDuck,
    AgentFrog,
    AgentKangaroo,
    AgentKitty,
    AgentOwl,
    AgentPig,
    AgentRacoon2
  ];
  var episode13Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Dimitri, 3),
    new Connection(Phineas, Fribbleton, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Dimitri, 3),
    new Connection(Ferb, Fribbleton, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Carl, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, AgentPanda, 6),
    new Connection(Perry, Feelbetter, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Lawrence, 6),
    new Connection(Perry, Candace, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Fribbleton, 6),

    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Candace, 6),
    new Connection(Isabella, Perry, 6),
    new Connection(Isabella, Phineas, 6),
    new Connection(Isabella, Ferb, 6),

    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),
    new Connection(Ginger, Candace, 6),
    new Connection(Ginger, Perry, 2),
    new Connection(Ginger, Phineas, 6),
    new Connection(Ginger, Ferb, 6),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Candace, 6),
    new Connection(Holly, Perry, 2),
    new Connection(Holly, Phineas, 6),
    new Connection(Holly, Ferb, 6),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),
    new Connection(Gretchen, Candace, 6),
    new Connection(Gretchen, Perry, 2),
    new Connection(Gretchen, Phineas, 6),
    new Connection(Gretchen, Ferb, 6),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),
    new Connection(Katie, Candace, 6),
    new Connection(Katie, Perry, 2),
    new Connection(Katie, Phineas, 6),
    new Connection(Katie, Ferb, 6),

    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Candace, 6),
    new Connection(Milly, Perry, 2),
    new Connection(Milly, Phineas, 6),
    new Connection(Milly, Ferb, 6),
    
    new Connection(Adyson, Candace, 6),
    new Connection(Adyson, Perry, 2),
    new Connection(Adyson, Phineas, 6),
    new Connection(Adyson, Ferb, 6),

    new Connection(Carl, Doof, 4),
    new Connection(Carl, Monogram, 6),

    new Connection(Doof, AgentPanda, 6),
    new Connection(Doof, Feelbetter, 6),

    new Connection(AgentPanda, Feelbetter, 6),

    new Connection(AgentChicken, Perry, 3),
    new Connection(AgentChicken, Doof, 3),
    new Connection(AgentChicken, AgentDog, 6),
    new Connection(AgentChicken, Feelbetter, 3),
    new Connection(AgentChicken, AgentPanda, 3),
    new Connection(AgentChicken, AgentDuck, 1),
    new Connection(AgentChicken, AgentFrog, 1),
    new Connection(AgentChicken, AgentKangaroo, 1),
    new Connection(AgentChicken, AgentKitty, 1),
    new Connection(AgentChicken, AgentOwl, 1),
    new Connection(AgentChicken, AgentPig, 1),
    new Connection(AgentChicken, AgentRacoon2, 1),
    new Connection(AgentChicken, Bob, 1),

    new Connection(AgentDog, Perry, 3),
    new Connection(AgentDog, Doof, 3),
    new Connection(AgentDog, Feelbetter, 3),
    new Connection(AgentDog, AgentPanda, 3),
    new Connection(AgentDog, AgentDuck, 1),
    new Connection(AgentDog, AgentFrog, 1),
    new Connection(AgentDog, AgentKangaroo, 1),
    new Connection(AgentDog, AgentKitty, 1),
    new Connection(AgentDog, AgentOwl, 1),
    new Connection(AgentDog, AgentPig, 1),
    new Connection(AgentDog, AgentRacoon2, 1),
    new Connection(AgentDog, Bob, 1),

    new Connection(AgentDuck, Perry, 3),
    new Connection(AgentDuck, Doof, 3),
    new Connection(AgentDuck, Feelbetter, 3),
    new Connection(AgentDuck, AgentPanda, 3),
    new Connection(AgentDuck, AgentFrog, 1),
    new Connection(AgentDuck, AgentKangaroo, 1),
    new Connection(AgentDuck, AgentKitty, 1),
    new Connection(AgentDuck, AgentOwl, 1),
    new Connection(AgentDuck, AgentPig, 6),
    new Connection(AgentDuck, AgentRacoon2, 1),
    new Connection(AgentDuck, Bob, 1),

    new Connection(AgentFrog, Perry, 3),
    new Connection(AgentFrog, Doof, 3),
    new Connection(AgentFrog, Feelbetter, 3),
    new Connection(AgentFrog, AgentPanda, 3),
    new Connection(AgentFrog, AgentKangaroo, 1),
    new Connection(AgentFrog, AgentKitty, 1),
    new Connection(AgentFrog, AgentOwl, 1),
    new Connection(AgentFrog, AgentPig, 6),
    new Connection(AgentFrog, AgentRacoon2, 1),
    new Connection(AgentFrog, Bob, 1),

    new Connection(AgentKangaroo, Perry, 3),
    new Connection(AgentKangaroo, Doof, 3),
    new Connection(AgentKangaroo, Feelbetter, 3),
    new Connection(AgentKangaroo, AgentPanda, 3),
    new Connection(AgentKangaroo, AgentKitty, 1),
    new Connection(AgentKangaroo, AgentOwl, 1),
    new Connection(AgentKangaroo, AgentPig, 6),
    new Connection(AgentKangaroo, AgentRacoon2, 1),
    new Connection(AgentKangaroo, Bob, 6),

    new Connection(AgentKitty, Perry, 3),
    new Connection(AgentKitty, Doof, 3),
    new Connection(AgentKitty, Feelbetter, 3),
    new Connection(AgentKitty, AgentPanda, 3),
    new Connection(AgentKitty, AgentOwl, 1),
    new Connection(AgentKitty, AgentPig, 6),
    new Connection(AgentKitty, AgentRacoon2, 1),
    new Connection(AgentKitty, Bob, 1),

    new Connection(AgentOwl, Perry, 3),
    new Connection(AgentOwl, Doof, 3),
    new Connection(AgentOwl, Feelbetter, 3),
    new Connection(AgentOwl, AgentPanda, 3),
    new Connection(AgentOwl, AgentPig, 6),
    new Connection(AgentOwl, AgentRacoon2, 1),
    new Connection(AgentOwl, Bob, 1),

    new Connection(AgentPig, Perry, 3),
    new Connection(AgentPig, Doof, 3),
    new Connection(AgentPig, Feelbetter, 3),
    new Connection(AgentPig, AgentPanda, 3),
    new Connection(AgentPig, AgentRacoon2, 1),
    new Connection(AgentPig, Bob, 1),

    new Connection(AgentRacoon2, Perry, 3),
    new Connection(AgentRacoon2, Doof, 3),
    new Connection(AgentRacoon2, Feelbetter, 3),
    new Connection(AgentRacoon2, AgentPanda, 3),
    new Connection(AgentRacoon2, Bob, 1),

    new Connection(Bob, Perry, 3),
    new Connection(Bob, Doof, 3),
    new Connection(Bob, Feelbetter, 3),
    new Connection(Bob, AgentPanda, 3),
  ];
  var episode13Bits = [
    wherePerry, whatchaDoin, littleYoung, curseYou, ohTherePerry
  ];
  var ep13 = new Episode(13, "107", "It's About Time!", "Time Machine", "Freeze-inator Ray",
    episode13Songs, episode13Characters, episode13Interactions, episode13Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(13, Phineas);
    whatchaDoin.addAppearance(13, Isabella);
    littleYoung.addAppearance(13, Fribbleton);
    curseYou.addModifiedAppearance(13, Doof);
    wherePerry.addModifiedAppearance(13, Isabella);
    ohTherePerry.addAppearance(13, Phineas);
  }
}

{//14
  var episode14Songs = [
    new Song("E.V.I.L. B.O.Y.S.", [Candace]),
  ];
  var episode14Characters = [
    Baljeet,
    Buford,
    Ferb,
    Phineas,
    Isabella,
    Django,
    Linda,
    Lawrence,
    Candace,
    Perry,
    Jeremy,
    Monogram,
    Doof,
    Carl,
    Johnson,
    Mindy,
    Pedro,
    Logan,
    Sam,
    DumbassGinger,
    Tilly,
    Lily,
    Dimitri,
    Vivian,
    Milly,
    Ginger,
    Gretchen,
    Adyson,
    Holly,
    Katie
  ];
  var episode14Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Buford, 6),
    new Connection(Phineas, Django, 6),
    new Connection(Phineas, Baljeet, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Katie, 6),

    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Buford, 6),
    new Connection(Ferb, Django, 6),
    new Connection(Ferb, Baljeet, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Adyson, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Perry, 6),

    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Linda, 6),
    new Connection(Candace, Mindy, 5.5),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Lawrence, 6),

    new Connection(Isabella, Buford, 6),
    new Connection(Isabella, Django, 6),
    new Connection(Isabella, Baljeet, 6),
    new Connection(Isabella, Lawrence, 6),
    new Connection(Isabella, Linda, 6),
    new Connection(Isabella, Candace, 2),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Perry, 6),

    new Connection(Buford, Django, 6),
    new Connection(Buford, Baljeet, 6),
    new Connection(Buford, Lawrence, 6),
    new Connection(Buford, Linda, 6),
    new Connection(Buford, Candace, 2),
    new Connection(Buford, Milly, 6),
    new Connection(Buford, Gretchen, 6),
    new Connection(Buford, Adyson, 6),
    new Connection(Buford, Holly, 6),
    new Connection(Buford, Ginger, 6),
    new Connection(Buford, Katie, 6),
    new Connection(Buford, Perry, 6),

    new Connection(Django, Baljeet, 6),
    new Connection(Django, Lawrence, 6),
    new Connection(Django, Linda, 6),
    new Connection(Django, Candace, 2),
    new Connection(Django, Milly, 6),
    new Connection(Django, Gretchen, 6),
    new Connection(Django, Adyson, 6),
    new Connection(Django, Holly, 6),
    new Connection(Django, Ginger, 6),
    new Connection(Django, Katie, 6),
    new Connection(Django, Perry, 6),

    new Connection(Baljeet, Lawrence, 6),
    new Connection(Baljeet, Linda, 6),
    new Connection(Baljeet, Candace, 2),
    new Connection(Baljeet, Milly, 6),
    new Connection(Baljeet, Gretchen, 6),
    new Connection(Baljeet, Adyson, 6),
    new Connection(Baljeet, Holly, 6),
    new Connection(Baljeet, Ginger, 6),
    new Connection(Baljeet, Katie, 6),
    new Connection(Baljeet, Perry, 6),

    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),
    new Connection(Ginger, Perry, 6),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Perry, 6),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),
    new Connection(Gretchen, Perry, 6),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),
    new Connection(Katie, Perry, 6),

    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Perry, 6),
    
    new Connection(Adyson, Perry, 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Doof, 6),

    new Connection(Linda, Johnson, 6),
    new Connection(Linda, Vivian, 6),
    new Connection(Linda, Lawrence, 6),

    new Connection(Lawrence, Candace, 6),

    new Connection(Johnson, Vivian, 6),
    new Connection(Johnson, Lawrence, 6),
    new Connection(Johnson, Candace, 6),

    new Connection(Vivian, Lawrence, 6),
    new Connection(Vivian, Candace, 6),

    new Connection(Jeremy, Mindy, 6),
    new Connection(Jeremy, Baljeet, 3),
    new Connection(Jeremy, Phineas, 3),
    new Connection(Jeremy, Ferb, 3),
    new Connection(Jeremy, Perry, 3),
    new Connection(Jeremy, Django, 3),
    new Connection(Jeremy, Isabella, 3),
    new Connection(Jeremy, Katie, 3),
    new Connection(Jeremy, Milly, 3),
    new Connection(Jeremy, Holly, 3),
    new Connection(Jeremy, Ginger, 3),
    new Connection(Jeremy, Adyson, 3),
    new Connection(Jeremy, Gretchen, 3),
    new Connection(Jeremy, Buford, 3),
    new Connection(Jeremy, Pedro, 1),
    new Connection(Jeremy, Logan, 1),
    new Connection(Jeremy, Sam, 1),
    new Connection(Jeremy, DumbassGinger, 1),
    new Connection(Jeremy, Dimitri, 1),
    new Connection(Jeremy, Tilly, 1),
    new Connection(Jeremy, Lily, 1),
    
    new Connection(Pedro, Baljeet, 3),
    new Connection(Pedro, Phineas, 3),
    new Connection(Pedro, Ferb, 3),
    new Connection(Pedro, Perry, 3),
    new Connection(Pedro, Django, 3),
    new Connection(Pedro, Isabella, 3),
    new Connection(Pedro, Katie, 3),
    new Connection(Pedro, Milly, 3),
    new Connection(Pedro, Holly, 3),
    new Connection(Pedro, Ginger, 3),
    new Connection(Pedro, Adyson, 3),
    new Connection(Pedro, Gretchen, 3),
    new Connection(Pedro, Buford, 3),
    new Connection(Pedro, Logan, 6),
    new Connection(Pedro, Sam, 1),
    new Connection(Pedro, DumbassGinger, 1),
    new Connection(Pedro, Dimitri, 1),
    new Connection(Pedro, Tilly, 1),
    new Connection(Pedro, Lily, 1),
    new Connection(Pedro, Mindy, 1),
    
    new Connection(Logan, Baljeet, 3),
    new Connection(Logan, Phineas, 3),
    new Connection(Logan, Ferb, 3),
    new Connection(Logan, Perry, 3),
    new Connection(Logan, Django, 3),
    new Connection(Logan, Isabella, 3),
    new Connection(Logan, Katie, 3),
    new Connection(Logan, Milly, 3),
    new Connection(Logan, Holly, 3),
    new Connection(Logan, Ginger, 3),
    new Connection(Logan, Adyson, 3),
    new Connection(Logan, Gretchen, 3),
    new Connection(Logan, Buford, 3),
    new Connection(Logan, Sam, 1),
    new Connection(Logan, DumbassGinger, 1),
    new Connection(Logan, Dimitri, 1),
    new Connection(Logan, Tilly, 1),
    new Connection(Logan, Lily, 1),
    new Connection(Logan, Mindy, 1),
    
    new Connection(Sam, Baljeet, 3),
    new Connection(Sam, Phineas, 3),
    new Connection(Sam, Ferb, 3),
    new Connection(Sam, Perry, 3),
    new Connection(Sam, Django, 3),
    new Connection(Sam, Isabella, 3),
    new Connection(Sam, Katie, 3),
    new Connection(Sam, Milly, 3),
    new Connection(Sam, Holly, 3),
    new Connection(Sam, Ginger, 3),
    new Connection(Sam, Adyson, 3),
    new Connection(Sam, Gretchen, 3),
    new Connection(Sam, Buford, 3),
    new Connection(Sam, DumbassGinger, 1),
    new Connection(Sam, Dimitri, 1),
    new Connection(Sam, Tilly, 1),
    new Connection(Sam, Lily, 1),
    new Connection(Sam, Mindy, 1),
    
    new Connection(DumbassGinger, Baljeet, 3),
    new Connection(DumbassGinger, Phineas, 3),
    new Connection(DumbassGinger, Ferb, 3),
    new Connection(DumbassGinger, Perry, 3),
    new Connection(DumbassGinger, Django, 3),
    new Connection(DumbassGinger, Isabella, 3),
    new Connection(DumbassGinger, Katie, 3),
    new Connection(DumbassGinger, Milly, 3),
    new Connection(DumbassGinger, Holly, 3),
    new Connection(DumbassGinger, Ginger, 3),
    new Connection(DumbassGinger, Adyson, 3),
    new Connection(DumbassGinger, Gretchen, 3),
    new Connection(DumbassGinger, Buford, 3),
    new Connection(DumbassGinger, Dimitri, 1),
    new Connection(DumbassGinger, Tilly, 1),
    new Connection(DumbassGinger, Lily, 1),
    new Connection(DumbassGinger, Mindy, 1),
    
    new Connection(Dimitri, Baljeet, 3),
    new Connection(Dimitri, Phineas, 3),
    new Connection(Dimitri, Ferb, 3),
    new Connection(Dimitri, Perry, 3),
    new Connection(Dimitri, Django, 3),
    new Connection(Dimitri, Isabella, 3),
    new Connection(Dimitri, Katie, 3),
    new Connection(Dimitri, Milly, 3),
    new Connection(Dimitri, Holly, 3),
    new Connection(Dimitri, Ginger, 3),
    new Connection(Dimitri, Adyson, 3),
    new Connection(Dimitri, Gretchen, 3),
    new Connection(Dimitri, Buford, 3),
    new Connection(Dimitri, Tilly, 1),
    new Connection(Dimitri, Lily, 1),
    new Connection(Dimitri, Mindy, 1),
    
    new Connection(Tilly, Baljeet, 3),
    new Connection(Tilly, Phineas, 3),
    new Connection(Tilly, Ferb, 3),
    new Connection(Tilly, Perry, 3),
    new Connection(Tilly, Django, 3),
    new Connection(Tilly, Isabella, 3),
    new Connection(Tilly, Katie, 3),
    new Connection(Tilly, Milly, 3),
    new Connection(Tilly, Holly, 3),
    new Connection(Tilly, Ginger, 3),
    new Connection(Tilly, Adyson, 3),
    new Connection(Tilly, Gretchen, 3),
    new Connection(Tilly, Buford, 3),
    new Connection(Tilly, Lily, 6),
    new Connection(Tilly, Mindy, 1),
    
    new Connection(Lily, Baljeet, 3),
    new Connection(Lily, Phineas, 3),
    new Connection(Lily, Ferb, 3),
    new Connection(Lily, Perry, 3),
    new Connection(Lily, Django, 3),
    new Connection(Lily, Isabella, 3),
    new Connection(Lily, Katie, 3),
    new Connection(Lily, Milly, 3),
    new Connection(Lily, Holly, 3),
    new Connection(Lily, Ginger, 3),
    new Connection(Lily, Adyson, 3),
    new Connection(Lily, Gretchen, 3),
    new Connection(Lily, Buford, 3),
    new Connection(Lily, Mindy, 1),

    new Connection(Mindy, Baljeet, 3),
    new Connection(Mindy, Phineas, 3),
    new Connection(Mindy, Ferb, 3),
    new Connection(Mindy, Perry, 3),
    new Connection(Mindy, Django, 3),
    new Connection(Mindy, Isabella, 3),
    new Connection(Mindy, Katie, 3),
    new Connection(Mindy, Milly, 3),
    new Connection(Mindy, Holly, 3),
    new Connection(Mindy, Ginger, 3),
    new Connection(Mindy, Adyson, 3),
    new Connection(Mindy, Gretchen, 3),
    new Connection(Mindy, Buford, 3),
  ];
  var episode14Bits = [
    wherePerry, ohTherePerry, curseYou
  ];
  var ep14 = new Episode(14, "108a", "Jerk de Soleil", "Cirque", "Voiceinator [Make everyone else's voice higher]",
    episode14Songs, episode14Characters, episode14Interactions, episode14Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(14, Phineas);
    ohTherePerry.addAppearance(14, Phineas);
    curseYou.addAppearance(14, Doof);
  }
}

{//15
  var episode15Songs = [
    new Song("Shimmy Jimmy", [dannyJacob]),
    new Song("Brick", [swampyMarsh]),
  ];
  var episode15Characters = [
    Candace,
    HDHStoreClerk,
    Stacy,
    Jeremy,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Monogram,
    Doof,
    JB,
    Badinkadink,
    Timmy,
    Balthazar,
    Construction,
    DumbassGinger,
    Dimitri,
    Sally,
    Kris
  ];
  var episode15Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, JB, 6),
    new Connection(Phineas, Badinkadink, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, JB, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(HDHStoreClerk, Candace, 6),
    new Connection(HDHStoreClerk, Timmy, 6),
    new Connection(HDHStoreClerk, Phineas, 6),
    new Connection(HDHStoreClerk, Ferb, 6),
    new Connection(HDHStoreClerk, Balthazar, 6),
    new Connection(HDHStoreClerk, Dimitri, 6),
    new Connection(HDHStoreClerk, Sally, 6),
    new Connection(HDHStoreClerk, Kris, 6),
    new Connection(HDHStoreClerk, DumbassGinger, 6),

    new Connection(Dimitri, DumbassGinger, 6),
    new Connection(Dimitri, Sally, 1),

    new Connection(Sally, Kris, 1),
    new Connection(Sally, DumbassGinger, 1),

    new Connection(Kris, DumbassGinger, 1),

  ];
  var episode15Bits = [
    gonnaDo, ggg, wherePerry, littleYoung, doMuch, quirkyWorky, lindana
  ];
  var ep15 = new Episode(15, "108b", "Toy to the World", "Perry the Inaction Figure", "Tollbooths", 
    episode15Songs, episode15Characters, episode15Interactions, episode15Bits, 2);
  {//bitHandler
    gonnaDo.addAppearance(15, Phineas);
    ggg.addAppearance(15);
    wherePerry.addAppearance(15, Phineas);
    littleYoung.addAppearance(15, JB);
    doMuch.addAppearance(15, Phineas);
    quirkyWorky.addAppearance(15);
    lindana.addAppearance(15);
    curseYou.addAppearance(15, Doof);
  }
}

{//16
  var episode16Songs = [
    new Song("Perry the Platypus", [randyCrenshaw]),
    new Song("It's Candace", [dannyJacob]),
    new Song("One Good Scare", [Phineas]),
  ];
  var episode16Characters = [
    Candace,
    Linda,
    Phineas,
    Perry,
    Ferb,
    Isabella,
    Monogram,
    Doof,
    Destructicon,
    Suzy,
    Baljeet,
    Buford,
    Ginger,
    Adyson,
    Holly,
    Katie,
    Milly,
    Gretchen,
    Django
  ];
  var episode16Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Baljeet, 6),
    new Connection(Phineas, Buford, 6),
    new Connection(Phineas, Suzy, 4),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Adyson, 6),
    new Connection(Ferb, Baljeet, 6),
    new Connection(Ferb, Buford, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Destructicon, 2),

    new Connection(Isabella, Candace, 6),
    new Connection(Isabella, Suzy, 2),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Suzy, 6),
    new Connection(Candace, Milly, 3),
    new Connection(Candace, Katie, 3),
    new Connection(Candace, Ginger, 3),
    new Connection(Candace, Baljeet, 3),

    new Connection(Linda, Milly, 3),
    new Connection(Linda, Katie, 3),
    new Connection(Linda, Ginger, 3),
    new Connection(Linda, Baljeet, 6),

    new Connection(Jeremy, Suzy, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(Doof, Destructicon, 6),

    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),
    new Connection(Ginger, Baljeet, 6),
    new Connection(Ginger, Buford, 6),
    new Connection(Ginger, Isabella, 2),
    new Connection(Ginger, Candace, 5.5),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Baljeet, 6),
    new Connection(Holly, Buford, 6),
    new Connection(Holly, Isabella, 2),
    new Connection(Holly, Candace, 5.5),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),
    new Connection(Gretchen, Baljeet, 6),
    new Connection(Gretchen, Buford, 6),
    new Connection(Gretchen, Isabella, 2),
    new Connection(Gretchen, Candace, 5.5),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),
    new Connection(Katie, Baljeet, 6),
    new Connection(Katie, Buford, 6),
    new Connection(Katie, Isabella, 2),

    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Baljeet, 6),
    new Connection(Milly, Buford, 6),
    new Connection(Milly, Isabella, 2),
    new Connection(Milly, Candace, 5.5),

    new Connection(Adyson, Baljeet, 6),
    new Connection(Adyson, Buford, 6),
    new Connection(Adyson, Isabella, 2),
    new Connection(Adyson, Candace, 5.5),
    
    new Connection(Baljeet, Buford, 6),
    new Connection(Baljeet, Isabella, 6),

    new Connection(Buford, Isabella, 6),
    new Connection(Buford, Suzy, 6),

    new Connection(Django, Buford, 1),
    new Connection(Django, Baljeet, 1),
    new Connection(Django, Isabella, 1),
    new Connection(Django, Milly, 1),
    new Connection(Django, Adyson, 1),
    new Connection(Django, Ferb, 1),
    new Connection(Django, Holly, 1),
  ];
  var episode16Bits = [
    whatchaDoin, wherePerry, ohTherePerry
  ];
  var ep16 = new Episode(16, "109", "One Good Scare Ought To Do It!", "Haunted House", "Disintevaporator [Kevin Land]", 
    episode16Songs, episode16Characters, episode16Interactions, episode16Bits, 1);
  {//bitHandler
    whatchaDoin.addModifiedAppearance(16, Isabella);
    wherePerry.addAppearance(16, Phineas);
    ohTherePerry.addModifiedAppearance(16, Phineas);
  }
}

{//17
  var episode17Songs = [
    new Song("Ballad of the Black Knight", [swampyMarsh]),
  ];
  var episode17Characters = [
    Tilly,
    Lily,
    Phineas,
    Ferb,
    Candace,
    Perry,
    Linda,
    Lawrence,
    Winifred,
    Reginald,
    Stacy, //ON PHONE
    Stubbings,
    Pipping,
    Monogram,
    Doof,
    Wexler

  ];
  var episode17Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Reginald, 6),
    new Connection(Phineas, Winifred, 6),
    new Connection(Phineas, Pipping, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Reginald, 6),
    new Connection(Ferb, Winifred, 6),
    new Connection(Ferb, Pipping, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Lawrence, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Reginald, 6),
    new Connection(Perry, Winifred, 6),
    new Connection(Perry, Wexler, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Reginald, 6),
    new Connection(Candace, Winifred, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Stubbings, 3),
    new Connection(Candace, Pipping, 6),

    new Connection(Lawrence, Linda, 6),
    new Connection(Lawrence, Reginald, 6),
    new Connection(Lawrence, Winifred, 6),

    new Connection(Linda, Reginald, 6),
    new Connection(Linda, Winifred, 6),

    new Connection(Tilly, Lily, 6),

    new Connection(Reginald, Winifred, 6),
    new Connection(Reginald, Pipping, 6),

    new Connection(Winifred, Pipping, 3),

    new Connection(Stubbings, Pipping, 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Wexler, 6),

    new Connection(Doof, Wexler, 3),

  ];
  var episode17Bits = [
    wherePerry, aPlatypus, selfDestruct
  ];
  var ep17 = new Episode(17, "110a", "A Hard Day's Knight", "Fencing", "Evil-Con", 
    episode17Songs, episode17Characters, episode17Interactions, episode17Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(17, Phineas);
    aPlatypus.addAppearance(17, Doof);
    selfDestruct.addModifiedAppearance(17);
  }
}

{//18
  //panic room
  var episode18Songs = [
    new Song("Phinedroids and Ferbots", [Phineas, Ferb]),
  ];
  var episode18Characters = [
    Phineas,
    Ferb,
    Perry,
    Santa,
    Monogram,
    Doof,
    Carl,
    Stacy, //on phone
    Hirano
  ];
  var episode18Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Santa, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Hirano, 6),

    new Connection(Stacy, Hirano, 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Monogram, Santa, 4),

    new Connection(Doof, Monogram, 4),
    new Connection(Doof, Santa, 6),

    new Connection(Carl, Santa, 2),
  ];
  var episode18Bits = [
    wherePerry, ggg,
  ];
  var ep18 = new Episode(18, "110b", "I, Brobot", "Phinedroids and Ferbots", "Giant magnet [erase answering machine]", 
    episode18Songs, episode18Characters, episode18Interactions, episode18Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(18, Phineas);
    ggg.addAppearance(18);
  }
}

{//19
  var episode19Songs = [
    new Song("I Love You Mom", [Candace, Phineas, Ferb]),
  ];
  var episode19Characters = [
    Candace,
    Phineas,
    Ferb,
    Perry,
    Linda,
    Vivian,
    Buford,
    Monogram,
    Doof,
    Baljeet,
    Isabella,
    Ginger,
    Holly,
    Gretchen,
    Adyson,
    Milly,
    Ginger,
    Lily,
    Johnson,
    Dimitri,
    Lawrence
  ];
  var episode19Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Vivian, 6),
    new Connection(Phineas, Buford, 6),
    new Connection(Phineas, Baljeet, 6),

    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Adyson, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Vivian, 6),
    new Connection(Ferb, Buford, 6),
    new Connection(Ferb, Baljeet, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Perry, 6),

    new Connection(Linda, Isabella, 6),
    new Connection(Linda, Ginger, 6),
    new Connection(Linda, Adyson, 6),
    new Connection(Linda, Gretchen, 6),
    new Connection(Linda, Holly, 6),
    new Connection(Linda, Milly, 6),
    new Connection(Linda, Vivian, 6),
    new Connection(Linda, Buford, 6),
    new Connection(Linda, Baljeet, 6),
    new Connection(Linda, Lawrence, 6),

    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Vivian, 6),
    new Connection(Isabella, Baljeet, 6),
    new Connection(Isabella, Buford, 6),
    new Connection(Isabella, Candace, 3),

    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),
    new Connection(Ginger, Vivian, 6),
    new Connection(Ginger, Baljeet, 6),
    new Connection(Ginger, Buford, 6),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Vivian, 6),
    new Connection(Holly, Baljeet, 6),
    new Connection(Holly, Buford, 6),

    // new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),
    new Connection(Gretchen, Vivian, 6),
    new Connection(Gretchen, Baljeet, 6),
    new Connection(Gretchen, Buford, 6),

    new Connection(Katie, Milly, 6),
    // new Connection(Katie, Adyson, 6),
    new Connection(Katie, Baljeet, 1),
    new Connection(Katie, Buford, 1),
    new Connection(Katie, Phineas, 3),
    new Connection(Katie, Ferb, 3),
    new Connection(Katie, Linda, 3),
    new Connection(Katie, Candace, 3),

    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Vivian, 6),
    new Connection(Milly, Baljeet, 6),
    new Connection(Milly, Buford, 6),
    new Connection(Milly, Candace, 3),

    new Connection(Adyson, Vivian, 6),
    new Connection(Adyson, Baljeet, 6),
    new Connection(Adyson, Buford, 6),

    new Connection(Vivian, Baljeet, 6),
    new Connection(Vivian, Buford, 6),
    new Connection(Vivian, Candace, 3),

    new Connection(Baljeet, Buford, 6),
    new Connection(Baljeet, Candace, 3),

    new Connection(Buford, Candace, 3),

    new Connection(Monogram, Doof, 4),

    new Connection(Lily, Ferb, 3),
    new Connection(Lily, Linda, 3),
    new Connection(Lily, Isabella, 3),
    new Connection(Lily, Holly, 3),
    new Connection(Lily, Baljeet, 1),
    new Connection(Lily, Buford, 1),
    new Connection(Lily, Ginger, 1),
    new Connection(Lily, Katie, 1),
    new Connection(Lily, Milly, 1),

    new Connection(Johnson, Isabella, 1),
    new Connection(Johnson, Vivian, 1),
    new Connection(Johnson, Candace, 3),
    new Connection(Johnson, Phineas, 3),
    new Connection(Johnson, Lawrence, 3),
    new Connection(Johnson, Ferb, 3),
    new Connection(Johnson, Linda, 3),
    new Connection(Johnson, Ginger, 1),
    new Connection(Johnson, Milly, 1),
    new Connection(Johnson, Katie, 1),
    new Connection(Johnson, Holly, 1),
    new Connection(Johnson, Baljeet, 1),
    new Connection(Johnson, Buford, 1),

    new Connection(Dimitri, Buford, 1),
    new Connection(Dimitri, Johnson, 1),
    new Connection(Dimitri, Vivian, 1),
    new Connection(Dimitri, Linda, 3),
    new Connection(Dimitri, Phineas, 3),
    new Connection(Dimitri, Ferb, 3),
    new Connection(Dimitri, Candace, 3),
    new Connection(Dimitri, Isabella, 3),
    new Connection(Dimitri, Holly, 3),
    new Connection(Dimitri, Katie, 3),
    new Connection(Dimitri, Ginger, 3),
    new Connection(Dimitri, Adyson, 3),
    new Connection(Dimitri, Milly, 3),
    new Connection(Dimitri, Lawrence, 3),
  ];
  var episode19Bits = [
    wherePerry, curseYou, ohTherePerry
  ];
  var ep19 = new Episode(19, "111a", "Mom's Birthday", "Birthday Stuff", "Shrink-Spheria", 
    episode19Songs, episode19Characters, episode19Interactions, episode19Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(19, Phineas);
    curseYou.addAppearance(19, Doof);
    ohTherePerry.addModifiedAppearance(19, Candace);
  }
}

{//20
  var episode20Songs = [
    new Song("Hemoglobin Highway", [dannyJacob]),
  ];
  var episode20Characters = [
    Linda,
    Phineas,
    Ferb,
    Perry,
    Candace,
    Jeremy,
    Stacy, //on phone [audible]
    Jenny, //on phone [audible]
    Isabella,
    Pinky,
    Monogram,
    Doof,
    UncleJoe
  ];
  var episode20Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Jeremy, 6),
    new Connection(Phineas, Stacy, 3),
    new Connection(Phineas, Jenny, 3),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Pinky, 6),
    new Connection(Phineas, UncleJoe, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Jeremy, 6),
    new Connection(Ferb, Stacy, 3),
    new Connection(Ferb, Jenny, 3),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Pinky, 6),
    new Connection(Ferb, UncleJoe, 6),

    new Connection(Perry, Linda, 6),
    new Connection(Perry, Candace, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jenny, 6),
    new Connection(Candace, UncleJoe, 6),
    new Connection(Candace, Pinky, 6),

    new Connection(Jeremy, UncleJoe, 6),
    new Connection(Jeremy, Isabella, 6),
    new Connection(Jeremy, Linda, 6),
    new Connection(Jeremy, Perry, 6),
    new Connection(Jeremy, Pinky, 6),

    new Connection(Linda, UncleJoe, 6),

    new Connection(Isabella, Pinky, 6),
    new Connection(Isabella, Linda, 6),
    new Connection(Isabella, Jeremy, 6),

    new Connection(Stacy, Jenny, 6),

    new Connection(Monogram, Doof, 6),

    new Connection(Doof, Pinky, 5.5),
  ];
  var episode20Bits = [
    whatchaDoin, wherePerry, littleYoung, ohTherePerry, curseYou
  ];
  var ep20 = new Episode(20, "111b", "Journey to the Center of Candace", "Shrinking Sub", "Make-Up-Your-Mind-Inator", 
    episode20Songs, episode20Characters, episode20Interactions, episode20Bits, 1);
  {//bitHandler
    whatchaDoin.addAppearance(20, Isabella);
    wherePerry.addAppearance(20, Phineas);
    littleYoung.addModifiedAppearance(20, Phineas);
    ohTherePerry.addModifiedAppearance(20, Phineas);
    curseYou.addAppearance(20, Doof);
  }
}

{//21
  var episode21Songs = [
    new Song("Forever Summer", [dannyJacob, swampyMarsh]),
  ];
  var episode21Characters = [
    Candace,
    Phineas,
    Perry,
    Gaston,
    Ferb,
    Stacy,
    Monogram,
    Doof,
    Milly,
    Katie,
    Ginger,
    Adyson,
    Holly,
    BEngineer,
    Pedro,
    Johnson,
    Haney,
    Bob,
    Tilly,
    Lily,
    Sam,
    Timmy
  ];
  var episode21Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Gaston, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Linda, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Adyson, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Gaston, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Perry, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Gaston, 6),
    new Connection(Candace, BEngineer, 3),
    new Connection(Candace, Linda, 6),

    new Connection(Stacy, Gaston, 3),
    new Connection(Stacy, Ferb, 4),

    new Connection(Monogram, Doof, 4),

    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    // new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Gaston, 3),
    new Connection(Isabella, Linda, 6),

    new Connection(Ginger, Holly, 6),
    // new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),

    // new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),

    // new Connection(Gretchen, Katie, 6),
    // new Connection(Gretchen, Milly, 6),
    // new Connection(Gretchen, Adyson, 6),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),

    new Connection(Milly, Adyson, 6),

    new Connection(Gaston, BEngineer, 6),

    new Connection(Pedro, Gaston, 3),
    new Connection(Pedro, Ferb, 3),
    new Connection(Pedro, Phineas, 3),

    new Connection(Johnson, Gaston, 3),
    new Connection(Johnson, Doof, 1),

    new Connection(Haney, Gaston, 3),

    new Connection(Bob, Gaston, 3),

    new Connection(Lily, Tilly, 6),
    new Connection(Lily, Gaston, 3),
    new Connection(Lily, Doof, 3),
    new Connection(Lily, Sam, 1),
    new Connection(Lily, Timmy, 6),

    new Connection(Sam, Timmy, 1),
    new Connection(Sam, Gaston, 3),
    new Connection(Sam, Doof, 3),

    new Connection(Timmy, Gaston, 3),
    new Connection(Timmy, Doof, 3),
  ];
  var episode21Bits = [
    whatchaDoin, gonnaDo, curseYou, pharmacist, ohTherePerry
  ];
  var ep21 = new Episode(21, "112a", "Run Away Runway", "Forever Summer", "Copy-and-past-inator [clones]", 
    episode21Songs, episode21Characters, episode21Interactions, episode21Bits, 1);
  {//bitHandler
    whatchaDoin.addModifiedAppearance(21, Phineas);
    gonnaDo.addAppearance(21, Phineas);
    gonnaDo.addModifiedAppearance(21, Candace);
    whatchaDoin.addAppearance(21, Isabella);
    curseYou.addAppearance(21, Doof);
    pharmacist.addAppearance(21);
    ohTherePerry.addAppearance(21, Phineas);
  }
}

{//22
  var episode22Songs = [
    new Song("Busted", [Candace, Vanessa]),
  ];
  var episode22Characters = [
    Hirano,
    Isabella,
    Phineas,
    Ferb,
    Linda,
    ChefGuy,
    Charlene,
    Vanessa,
    Carl,
    Candace,
    Stacy,
    Jeremy,
    Perry,
    Monogram,
    Doof,
    ChefGuy,
    Beehive,
  ];
  var episode22Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Hirano, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Perry, 4),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Hirano, 6),
    new Connection(Ferb, Vanessa, 6),
    new Connection(Ferb, Candace, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Vanessa, 2),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 5),
    new Connection(Candace, Perry, 2),

    new Connection(Stacy, Jeremy, 2),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),
    new Connection(Monogram, Vanessa, 4),

    new Connection(Isabella, Hirano, 6),

    new Connection(Vanessa, Charlene, 6),
    new Connection(Vanessa, Doof, 6),
    new Connection(Vanessa, Perry, 3),

    new Connection(Charlene, Doof, 6),
    new Connection(Charlene, Candace, 2),
    new Connection(Charlene, Perry, 6),
    new Connection(Charlene, ChefGuy, 3),

    new Connection(Carl, Ferb, 6), //Kinda? Ferb doesn't know what's going on.
    new Connection(Carl, Vanessa, 6), //Same thing here.

    new Connection(Beehive, Linda, 1),
    new Connection(Beehive, Charlene, 1),
    new Connection(Beehive, ChefGuy, 3),

    new Connection(Linda, Charlene, 6),
    new Connection(Linda, ChefGuy, 3),
    new Connection(Linda, Vanessa, 2),

  ];
  var episode22Bits = [
    whatchaDoin, gonnaDo, littleYoung, wellConditionally, wherePerry, ggg, doMuch
  ];
  var ep22 = new Episode(22, "112b", "Toy to the World", "Perry the Inaction Figure", "Tollbooths", 
    episode22Songs, episode22Characters, episode22Interactions, episode22Bits, 2);
  {//bitHandler
    whatchaDoin.addModifiedAppearance(22, Phineas);
    gonnaDo.addAppearance(22, Phineas);
    littleYoung.addAppearance(22); //FAKE GUY. NOT BEING TRACKED.
    wellConditionally.addModifiedAppearance(22, Phineas);
    wherePerry.addModifiedAppearance(22, Phineas);
    ggg.addAppearance(22);
    doMuch.addAppearance(22, Charlene);
  }
}

{//23
  //Candace meap
  var episode23Songs = [
    new Song("Truck Driving Girl", [dannyJacob]),
  ];
  var episode23Characters = [
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
  ];
  var episode23Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Charlene, 2),
    new Connection(Phineas, Construction, 6),
    new Connection(Phineas, Beehive, 6),
    new Connection(Phineas, GFBH, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Buck, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Charlene, 2),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Buck, 6),

    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Lawrence, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Carl, 6),

    new Connection(Linda, Lawrence, 6),
    new Connection(Linda, Charlene, 6),
    
    new Connection(Isabella, Dink, 6),

    new Connection(Stacy, Lawrence, 2),
  
    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),

    new Connection(Carl, Doof, 2),

    new Connection(Beehive, GFBH, 6),

    new Connection(ChefGuy, Linda, 6),
    new Connection(ChefGuy, Charlene, 6),
    new Connection(ChefGuy, Candace, 6),
    
    new Connection(Buck, Dink, 3),
    new Connection(Buck, Isabella, 3),
    new Connection(Buck, Candace, 6),
    new Connection(Buck, Lawrence, 6),

    new Connection(Kris, Candace, 3),
    new Connection(Kris, Lawrence, 3),
 
    new Connection(Tilly, Lily, 6),

    new Connection(Doof, AltDimensionAlien, 6),
  ];
  var episode23Bits = [
    wherePerry, curseYou
  ];
  var ep23 = new Episode(23, "113a", "It's a Mud, Mud, Mud, Mud World", "Monster Truck Rally", "Monster Truck Away-inator / Monster Truck Locatinator", 
    episode23Songs, episode23Characters, episode23Interactions, episode23Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(23, Phineas);
    curseYou.addAppearance(23, Doof);
  }
}

{//24
  var episode24Songs = [
    new Song("The Ballad of Badbeard", [Clyde, Phineas, Ferb, Isabella, Baljeet, Buford, Gretchen, Holly, Ginger, Adyson, Milly]),
  ];
  var episode24Characters = [
    Clyde,
    Phineas,
    Ferb,
    Perry,
    Baljeet,
    Buford,
    Candace,
    BettyJo,
    Isabella,
    AgentEagle,
    TalkingZebra,
    Gretchen,
    Holly,
  ];
  var episode24Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Clyde, 6),
    new Connection(Phineas, Baljeet, 6),
    new Connection(Phineas, Buford, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Adyson, 6),

    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Clyde, 6),
    new Connection(Ferb, Baljeet, 6),
    new Connection(Ferb, Buford, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Adyson, 6),

    new Connection(Perry, Clyde, 6),
    new Connection(Perry, Baljeet, 6),
    new Connection(Perry, Buford, 6),
    new Connection(Perry, Isabella, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Candace, 6),
    new Connection(Perry, BettyJo, 6),

    new Connection(Candace, BettyJo, 6),
    new Connection(Candace, Clyde, 3),
    new Connection(Candace, TalkingZebra, 6),
    // new Connection(Candace, Doof, 6), An argument could be made for this.

    new Connection(Baljeet, Buford, 6),
    new Connection(Baljeet, Isabella, 6),
    new Connection(Baljeet, Gretchen, 6),
    new Connection(Baljeet, Milly, 6),
    new Connection(Baljeet, Ginger, 6),
    new Connection(Baljeet, Adyson, 6),

    new Connection(Buford, Clyde, 6),
    new Connection(Buford, Isabella, 6),
    new Connection(Buford, Gretchen, 6),
    new Connection(Buford, Milly, 6),
    new Connection(Buford, Ginger, 6),
    new Connection(Buford, Adyson, 6),

    new Connection(Isabella, Clyde, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Adyson, 6),

    new Connection(BettyJo, Clyde, 6),

    new Connection(AgentEagle, Monogram, 6),
    new Connection(AgentEagle, Candace, 5.5),
    new Connection(AgentEagle, Doof, 5.5),

    new Connection(Monogram, Doof, 4),

    new Connection(Gretchen, Holly, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Ginger, 6),
    new Connection(Gretchen, Adyson, 6),
    
    new Connection(Milly, Ginger, 6),
    new Connection(Milly, Adyson, 6),

    new Connection(Ginger, Adyson, 6),

  ];
  var episode24Bits = [
    wherePerry, gonnaDo, pharmacist, selfDestruct, curseYou
  ];
  var ep24 = new Episode(24, "113b", "The Ballad of Badbeard", "Badbeard's Treasure", "Sea Cave", 
    episode24Songs, episode24Characters, episode24Interactions, episode24Bits, 1);
  {//bitHandler
    wherePerry.addModifiedAppearance(24, BettyJo);
    gonnaDo.addModifiedAppearance(24, Phineas);
    pharmacist.addAppearance(24);
    selfDestruct.addAppearance(24);
    curseYou.addAppearance(24, Doof);
  }
}

{//25
  var episode25Songs = [
    new Song("History of Rock", [DannyLH, Phineas, Ferb]),
    new Song("Fabulous", [Bobbi, Phineas, Ferb]),
    new Song("Ain't Got Rhythm", [Sherman, Phineas, Ferb]),
    new Song("You Snuck Your Way Right into My Heart", [Bobbi, DannyLH, Sherman]),
  ];
  var episode25Characters = [
    Linda,
    Lawrence,
    Phineas,
    Ferb,
    Candace,
    Jeremy,
    Perry,
    Monogram,
    Doof,
    Bobbi,
    Sherman,
    DannyLH,
    Stacy,
    Hirano,
    Johnson,
    Vivian,
    Bob,
    Vanessa,
    LoveOGram,
    Beehive,
    Isabella,
    Ginger,
    Katie,
    Gretchen,
    Holly,
    Adyson,
    FricknNerd,
    Johnny,
    Baljeet,
    Buford,
    Milly
  ];
  var episode25Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Jeremy, 2),
    new Connection(Phineas, DannyLH, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Bobbi, 6),
    new Connection(Phineas, Sherman, 6),
    new Connection(Phineas, LoveOGram, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Jeremy, 2),
    new Connection(Ferb, DannyLH, 6),
    new Connection(Ferb, Bobbi, 6),
    new Connection(Ferb, Sherman, 6),
    new Connection(Ferb, LoveOGram, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Vanessa, 6),
    new Connection(Perry, DannyLH, 3),
    new Connection(Perry, Bobbi, 3),
    new Connection(Perry, Sherman, 3),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Jeremy, 5),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, DannyLH, 3),
    new Connection(Candace, Bobbi, 6),
    new Connection(Candace, Sherman, 3),
    new Connection(Candace, Beehive, 1),

    new Connection(Linda, Lawrence, 6),
    new Connection(Linda, DannyLH, 3),
    new Connection(Linda, Bobbi, 6),
    new Connection(Linda, Sherman, 3),
    new Connection(Linda, Beehive, 1),

    new Connection(Lawrence, LoveOGram, 6),
    new Connection(Lawrence, DannyLH, 6),
    new Connection(Lawrence, Bobbi, 6),
    new Connection(Lawrence, Sherman, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(Stacy, Bobbi, 2),
    new Connection(Stacy, DannyLH, 2),
    new Connection(Stacy, Sherman, 2),
    new Connection(Stacy, Hirano, 6),

    new Connection(Hirano, Bobbi, 2),
    new Connection(Hirano, DannyLH, 2),
    new Connection(Hirano, Sherman, 2),
    
    new Connection(Vivian, Bobbi, 3),
    new Connection(Vivian, DannyLH, 3),
    new Connection(Vivian, Sherman, 3),
    new Connection(Vivian, Linda, 3),
    new Connection(Vivian, Lawrence, 3),
    new Connection(Vivian, Milly, 3),
    new Connection(Vivian, LoveOGram, 3),
    new Connection(Vivian, Ginger, 3),
    new Connection(Vivian, Ferb, 3),
    new Connection(Vivian, Isabella, 3),
    new Connection(Vivian, Gretchen, 3),
    
    new Connection(Stacy, Bobbi, 2),
    new Connection(Stacy, DannyLH, 2),
    new Connection(Stacy, Sherman, 2),
    
    new Connection(Johnson, Bobbi, 2),
    new Connection(Johnson, DannyLH, 2),
    new Connection(Johnson, Sherman, 2),
    
    new Connection(Bob, Bobbi, 2),
    new Connection(Bob, DannyLH, 2),
    new Connection(Bob, Sherman, 2),

    new Connection(Bobbi, DannyLH, 6),
    new Connection(Bobbi, Sherman, 6),
    new Connection(Bobbi, LoveOGram, 3),

    new Connection(DannyLH, Sherman, 6),
    
    new Connection(Sherman, LoveOGram, 3),

    new Connection(Doof, Vanessa, 6),
    new Connection(Doof, Johnny, 6),
    new Connection(Doof, Bobbi, 3),
    new Connection(Doof, DannyLH, 3),
    new Connection(Doof, Sherman, 3),

    new Connection(Beehive, Bobbi, 3),
    new Connection(Beehive, Phineas, 3),
    new Connection(Beehive, Ferb, 3),
    
    new Connection(Isabella, Bobbi, 3),
    new Connection(Isabella, DannyLH, 3),
    new Connection(Isabella, Sherman, 3),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),

    new Connection(Ginger, Bobbi, 3),
    new Connection(Ginger, DannyLH, 3),
    new Connection(Ginger, Sherman, 3),
    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),

    new Connection(Holly, Bobbi, 2),
    new Connection(Holly, DannyLH, 2),
    new Connection(Holly, Sherman, 2),
    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    // new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),

    new Connection(Gretchen, Bobbi, 3),
    new Connection(Gretchen, DannyLH, 3),
    new Connection(Gretchen, Sherman, 3),
    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),

    new Connection(Katie, Bobbi, 2),
    new Connection(Katie, DannyLH, 2),
    new Connection(Katie, Sherman, 2),
    // new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),

    // new Connection(Milly, Adyson, 6),
    new Connection(Milly, Bobby, 3),
    new Connection(Milly, DannyLH, 3),
    new Connection(Milly, Sherman, 3),

    new Connection(FricknNerd, Sherman, 3),
    new Connection(FricknNerd, Phineas, 3),
    new Connection(FricknNerd, Ferb, 3),

    new Connection(Vanessa, Johnny, 6),
    new Connection(Vanessa, Bobby, 3),
    new Connection(Vanessa, DannyLH, 3),
    new Connection(Vanessa, Sherman, 3),

    new Connection(Johnny, Doof, 2),
    new Connection(Johnny, Perry, 3),
    new Connection(Johnny, Bobby, 3),
    new Connection(Johnny, DannyLH, 3),
    new Connection(Johnny, Sherman, 3),

    new Connection(LoveOGram, DannyLH, 6),
    new Connection(LoveOGram, Bobbi, 3),
    new Connection(LoveOGram, Sherman, 3),
  ];
  var episode25Bits = [
    gonnaDo, wherePerry, littleYoung, lindana, curseYou
  ];
  var ep25 = new Episode(25, "114", "Dude, We're Gettin' the Band Back Together!", "Love Händel", "Vanessa's Birthday", 
    episode25Songs, episode25Characters, episode25Interactions, episode25Bits, 2);
  {//bitHandler
    gonnaDo.addAppearance(25, Phineas);
    wherePerry.addAppearance(25, Phineas);
    littleYoung.addAppearance(25, DannyLH);
    lindana.addAppearance(25);
    curseYou.addModifiedAppearance(25, Vanessa);
  }
}

{//26
  var episode26Songs = [
    new Song("Ready for the Bettys", [Crash, Tink, Missy, Candace, Stacy]),
  ];
  var episode26Characters = [
    Candace,
    Stacy,
    Tink,
    Crash,
    Missy,
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Dennis,
    Monogram,
    Perry,
    Doof,
    Isabella
  ];
  var episode26Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Stacy, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Monogram, 6),
    new Connection(Phineas, Isabella, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Stacy, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Monogram, 6),
    new Connection(Ferb, Isabella, 6),

    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Linda, 6),
    new Connection(Candace, Dennis, 6),
    new Connection(Candace, Tink, 6),
    new Connection(Candace, Tink, 6),
    new Connection(Candace, Missy, 6),

    new Connection(Stacy, Linda, 6),
    new Connection(Stacy, Lawrence, 6),
    new Connection(Stacy, Dennis, 6),
    new Connection(Stacy, Tink, 6),
    new Connection(Stacy, Tink, 6),
    new Connection(Stacy, Missy, 6),

    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Linda, Lawrence, 6),

    new Connection(Monogram, Doof, 4),
    new Connection(Monogram, Carl, 6),

    new Connection(Carl, Phineas, 5.5),
    new Connection(Carl, Ferb, 5.5),

    new Connection(Crash, Tink, 6),
    new Connection(Crash, Missy, 6),
    new Connection(Crash, Dennis, 6),

    new Connection(Tink, Missy, 6),
    new Connection(Tink, Dennis, 6),

    new Connection(Missy, Dennis, 6),
  ];
  var episode26Bits = [
    wherePerry, curseYou, whatchaDoin
  ];
  var ep26 = new Episode(26, "115a", "Ready for the Bettys", "Agent P. Land", "Destruct-inator", 
    episode26Songs, episode26Characters, episode26Interactions, episode26Bits, 6);
  {//bitHandler
    wherePerry.addAppearance(26, Phineas);
    curseYou.addAppearance(26, Doof);
    whatchaDoin.addModifiedAppearance(26, Isabella);
  }
}

{//27
  var episode27Songs = [
    new Song("Flying Fishmonger", [Phineas, Ferb, Isabella, Milly, Gretchen, Holly, Adyson, Milly]),
  ];
  var episode27Characters = [
    Reginald,
    Winifred,
    Phineas,
    Ferb,
    Linda,
    Lawrence,
    Candace,
    Stacy,
    Construction,
    Isabella,
    Perry,
    Carl,
    Monogram,
    Tilly,
    Lily,
    Bob,
    Jeremy,
    Johnson,
    Boris,
    Baljeet,
    Buford,
    FishingHat,
    Milly,
    Gretchen,
    Katie,
    Adyson,
    Holly,
    Dimitri,
    Kris
  ];
  var episode27Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Winifred, 6),
    new Connection(Phineas, Reginald, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Adyson, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Winifred, 6),
    new Connection(Ferb, Reginald, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Gretchen, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Adyson, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Lawrence, 6),
    new Connection(Candace, Winifred, 6),
    new Connection(Candace, Reginald, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Johnson, 2),

    new Connection(Linda, Lawrence, 6),
    new Connection(Linda, Winifred, 6),
    new Connection(Linda, Reginald, 6),
    new Connection(Linda, Stacy, 2),

    new Connection(Lawrence, Reginald, 6),
    new Connection(Lawrence, Winifred, 6),
    new Connection(Lawrence, Stacy, 2),
    
    new Connection(Reginald, Winifred, 6),
    new Connection(Reginald, Milly, 3),
    new Connection(Reginald, Holly, 3),
    new Connection(Reginald, Gretchen, 3),
    new Connection(Reginald, Katie, 3),
    new Connection(Reginald, Adyson, 3),

    new Connection(Winifred, Stacy, 2),

    new Connection(Perry, Carl, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Boris, 2),

    new Connection(Monogram, Doof, 3),
    new Connection(Monogram, Carl, 6),

    new Connection(Carl, Doof, 4),

    new Connection(Doof, Boris, 6),

    new Connection(Isabella, Reginald, 2),
    new Connection(Isabella, Ferb, 4),
    new Connection(Isabella, Perry, 5),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Adyson, 6),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),

    new Connection(Milly, Adyson, 6),

    new Connection(Milly, Gretchen, 6),

    new Connection(Tilly, Lily, 6),
    new Connection(Tilly, Bob, 1),

    new Connection(Lily, Bob, 1),

    new Connection(Jeremy, Johnson, 5),

    new Connection(Baljeet, Buford, 6),

    new Connection(FishingHat, Phineas, 3),
    new Connection(FishingHat, Ferb, 3),
    new Connection(FishingHat, Reginald, 3),
    new Connection(FishingHat, Isabella, 3),
    new Connection(FishingHat, Milly, 3),
    new Connection(FishingHat, Gretchen, 3),
    new Connection(FishingHat, Holly, 3),
    new Connection(FishingHat, Adyson, 3),
    new Connection(FishingHat, Bob, 1),

    new Connection(Bob, Phineas, 3),
    new Connection(Bob, Ferb, 3),
    new Connection(Bob, Reginald, 3),
    new Connection(Bob, Isabella, 3),
    new Connection(Bob, Gretchen, 3),
    new Connection(Bob, Holly, 3),
    new Connection(Bob, Adyson, 3),

    new Connection(Dimitri, Kris, 1),

  ];
  var episode27Bits = [
    gonnaDo, ggg, whatchaDoin, curseYou
  ];
  var ep27 = new Episode(27, "115b", "The Flying Fishmonger", "Leap McGregor's Gorge", "Now Who's Blinded by Sand-inator", 
    episode27Songs, episode27Characters, episode27Interactions, episode27Bits, 2);
  {//bitHandler
    gonnaDo.addAppearance(27, Phineas);
    ggg.addAppearance(27);
    whatchaDoin.addAppearance(27);
    wherePerry.addModifiedAppearance(27, Isabella);
    curseYou.addAppearance(27, Doof);
  }
}
//#endregion

/*Fireside Interactions Free Pasting!
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),

    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),

    new Connection(Milly, Adyson, 6),
*/

//var unpackedEpisodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10, ep11, ep12, ep13, ep14, ep15, ep16, ep17, ep18, ep19, ep20, ep21, ep22, ep23, ep24, ep25];
//#region Packaging
var unpackedEpisodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7];

var packedEpisodes = [];
var packedCharacters = [];
var allConnections = [];
var packedConnections = [];

unpackedEpisodes.forEach(ep => {
    packedEpisodes.push(ep.packEpisode());
    packedCharacters = packedCharacters.concat(ep.packCharacters());
    allConnections = allConnections.concat(ep.returnConnections());
});

function findStrongestConnections(connections, allowFamilial) {
  const used = new Set(); // track processed connection IDs or references
  const strongestList = [];

  for (let i = 0; i < connections.length; i++) {
    const connA = connections[i];
    if (used.has(connA)) continue;

    let strongest = connA;
    used.add(connA);

    for (let j = i + 1; j < connections.length; j++) {
      const connB = connections[j];
      if (used.has(connB)) continue;

      if (connA.checkIdenticality(connB)) {
        strongest = strongest.getStrongestConnection(connB, allowFamilial);
        used.add(connB);
      }
    }

    strongestList.push(strongest);
  }

  return strongestList;
}

allConnections = findStrongestConnections(allConnections, true);

allConnections.forEach(con => {
    packedConnections = packedConnections.concat(con.pack());
});
//#endregion

//#region Map
const episodes = new vis.DataSet();
episodes.update(packedEpisodes);
const characters = new vis.DataSet();
characters.update(packedCharacters);
const connections = new vis.DataSet();
connections.update(packedConnections);

const container = document.getElementById('network');

// const allNodes = new vis.DataSet([
//   ...characters.get(),
//   ...episodes.get()
// ]);

// const allEdges = new vis.DataSet([
//   ...s1CharacterAppearances.get(),
//   ...characterInteractions.get(),
//   ...episodeTimeline.get()
// ])

// const seriesTimeline = {
//   nodes: episodes,
//   edges: episodeTimeline
// };

const characterMap = {
  nodes: characters,
  edges: connections
};

// const charatersByEpisodes = {
//   nodes: allNodes,
//   edges: s1CharacterAppearances
// };

// const fullMap = {
//   nodes: allNodes,
//   edges: allEdges
// };

const options = {
  physics: {
    enabled: true,
    solver: "forceAtlas2Based",
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springLength: 150,
      springConstant: 0.05
    },
    stabilization: {
      iterations: 100
    }
  },
  interaction: {
    dragView: true,
    zoomView: true
  },
  nodes: {
    shape: "dot",
    size: 25,
    font: {
      size: 18
    },
    borderWidth: 2,
    color: {
      background: "#2eb8b8",
      border: "#248f8f"
    }
  },
  edges: {
    smooth: {
      type: "dynamic"
    }
  }
};

// new vis.Network(container, seriesTimeline, options);
// new vis.Network(container, charatersByEpisodes, options);
new vis.Network(container, characterMap, options);
// new vis.Network(container, fullMap, options);

const nodes = characters.get().map(n => ({
  id: n.id,
  label: n.title,
  color: n.graphColor
}));

const links = connections.get().map(e => ({
  source: e.from,
  target: e.to
}));

const Graph = ForceGraph3D()
  (document.getElementById('3d-graph'))
    .graphData({ nodes, links })
    .nodeAutoColorBy('group')
    .nodeLabel(node => node.label);
//#endregion