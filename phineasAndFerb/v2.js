import {Connection} from './connection.js';
import {Song} from './song.js';
import {Character} from './character.js';
import {Bit} from './bit.js';
import {Episode} from './episode.js';

{//Characters
    //Flynn-Fletcher
    var Phineas = new Character("Phineas Flynn", "Phineas", "Phineas", "Flynn-Fletcher", "#FF0000");
    var Ferb = new Character("Ferb Fletcher", "Ferb", "Ferb", "Flynn-Fletcher", "#104110");
    var Candace = new Character("Candace Flynn", "Candace", "Candace", "Flynn-Fletcher", "#cb6c00");
    var Linda = new Character("Linda Flynn-Fletcher", "Linda", "Linda", "Flynn-Fletcher", "#FF0000");
    var Lawrence = new Character("Lawrence Fletcher", "Lawrence", "Lawrence", "Flynn-Fletcher", "#FF0000");
    var Perry = new Character("Perry the Platypus", "Perry", "Perry", "Flynn-Fletcher", "#1fd0bb");

    //The Gang
    var Baljeet = new Character("Baljeet Tjinder", "Baljeet", "Baljeet", "Gang", "#FF0000");
    var Buford = new Character("Buford Van Stomm", "Buford", "Buford", "Gang", "#000000");
    var Isabella = new Character("Isabella Garcia-Shapiro", "Isabella", "Isabella", "Gang", "#dc3292");

    //B Plot
    var Carl = new Character("Carl Karl", "Carl", "Carl", "B-Plot", "#FF0000");
    var Doof = new Character("Dr. Heinz Doofensmirtz", "Doof", "Doof", "B-Plot", "#FF0000");
    var Monogram = new Character("Major Francis Monogram", "Monogram", "Monogram", "B-Plot", "#FF0000");
    var Vanessa = new Character("Vanessa Doofensmirtz", "Vanessa", "Vanessa", "B-Plot", "#000000");
    
    //Candace Crew
    var Jenny = new Character("Jenny Brown", "Jenny", "Jenny", "Candace Crew", "#FF0000");
    var Jeremy = new Character("Jeremy Johnson", "Jeremy", "Jeremy", "Candace Crew", "#FF0000");
    var Stacy = new Character("Stacy Hirano", "Stacy", "Stacy", "Candace Crew", "#FF0000");

    //FIRESIDE GIRLS [troop 46231]
    var Adyson = new Character("Adyson Sweetwater", "Adyson", "Adyson", "Fireside", "#FF0000");
    var Ginger = new Character("Ginger Hirano", "Ginger", "Ginger", "Fireside", "#FF0000");
    var Holly = new Character("Holly", "Holly", "Holly", "Fireside", "#FF0000");
    var Gretchen = new Character("Gretchen", "Gretchen", "Gretchen", "Fireside", "#FF0000");
    var Katie = new Character("Katie", "Katie", "Katie", "Fireside", "#FF0000");
    var Milly = new Character("Milly", "Milly", "Milly", "Fireside", "#FF0000");

    //Family
    var Johnson = new Character("Mrs. Johnson", "Johnson", "Mrs. Johnson", "Family", "#FF0000");
    var Hirano = new Character("Margaret Hirano", "Hirano", "Dr. Hirano", "Family", "#FF0000");
    var Suzy = new Character("Suzy Johnson", "Suzy", "Suzy", "Family", "#FF0000");
    var Vivian = new Character("Vivian Garcia-Shapiro", "Vivian", "Mrs. Garcia-Shapiro", "Family", "#FF0000");
    var DoofMom = new Character("Mrs. Doofensmirtz", "DoofMom", "Mrs. Doofensmirtz", "Family", "#FF0000");
    var DoofDad = new Character("Mr. Doofensmirtz", "DoofDad", "Mr. Doofensmirtz", "Family", "#FF0000");
    var Clyde = new Character("Clyde Flynn", "Clyde", "Grandpa Clyde", "Family", "#d84e7c");
    var BettyJo = new Character("Betty Jo Flynn", "BettyJo", "Grandma Betty Jo", "Family", "#e4e15fff");
    var Lorraine = new Character("Lorraine", "Lorraine", "Lorraine", "Family", "#d84e7c");

    //Recurring
    var BEngineer = new Character("Building Engineer", "BEngineer", "Building Engineer", "Recurring", "#FF0000");
    var Construction = new Character("Construction Dude", "Construction", "Construction Dude", "Recurring", "#22559A");
    var Dave = new Character("Dave", "Dave", "Dave", "Recurring", "#55A833");
    var Rick = new Character("Rick", "Rick", "Rick", "Recurring", "#fe4c31");
    var Stanky = new Character("Stanky Dog", "Stanky", "Stanky", "Recurring", "#dacd38");
    var Kenny = new Character("Kenny the Neighbor", "Kenny", "Kenny", "Recurring", "#FF0000")
    var Haney = new Character("Haney", "Haney", "Haney", "Recurring", "#FFFFFF");
    var PhilAnnouncer = new Character("Phil, the Television Announcer", "PhilAnnouncer", "Phil", "Recurring", "#6d100d");
    var Marty = new Character("Marty the Rabbit Boy", "Marty", "Marty", "Recurring", "#833283");
    var OlgaChicago = new Character("Olga and Chicago Jones", "OlgaChicago", "Olga and Chicago", "Recurring", "#acacac")

    //Background Kids
    var Dimitri = new Character("Dimitri Popaunicolas", "Dimitri", "Dimitri", "Background Kids", "#FF0000");
    var Django = new Character("Django Brown", "Django", "Django", "Background Kids", "#FF0000");
    var DumbassGinger = new Character("Stupid Fricking Ginger Kid", "DumbassGinger", "Redhead", "Background Kids", "#FF0000");
    var FricknNerd = new Character("Big Ol' Nerd Stereotype", "FricknNerd", "Nerd", "Background Kids", "#FF0000");
    var Kris = new Character("Kris [NOT CANON]", "Kris", "Kris", "Background Kids", "#FF0000")
    var Logan = new Character("Logan McKeen [NOT CANON]", "Logan", "Logan", "Background Kids", "#0000FF");
    var Pedro = new Character("Pedro", "Pedro", "Pedro", "Background Kids", "#FF0000");
    var Sally = new Character("Sally", "Sally", "Sally", "Background Kids", "#FF0000");
    var Sam = new Character("Sam", "Sam", "Sam", "Background Kids", "#FF0000");
    var Tilly = new Character("Tilly [NOT CANON]", "Tilly", "Tilly", "Background Kids", "#48d4aa");
    var Timmy = new Character("Timmy", "Timmy", "Timmy", "Background Kids", "#7a0b03");
    var BSKid = new Character("Bad Singing Kid", "BSKid", "Bad Singing Kid", "Background Kids", "#dd4e16");

    //Background Not Kids
    var Beehive = new Character("Beehive Haircut", "Beehive", "Beehive", "BackgroundNotKids", "#ff7a22");
    var FishingHat = new Character("Fishing Hat Guy", "FishingHat", "Fishing Hat Guy", "BackgroundNotKids", "#7b6f31");
    var Lily = new Character("Lily [NOT CANON]", "Lily", "Lily", "BackgroundNotKids", "#83d12a");
    var Bob = new Character("Bob", "Bob", "Bob", "BackgroundNotKids", "#941bdaff");
    var TheaterEmployee = new Character("Movie Theater Employee", "TheaterEmployee", "Theater Employee", "BackgroundNotKids", "#d8c414");

    //OWCA
    var AgentChicken = new Character("Agent C. [Chicken]", "AgentChicken", "Agent C.", "OWCA", "#FF0000");
    var AgentDog = new Character("Agent D. [Dog]", "Agent", "Agent D.", "OWCA", "#FF0000");
    var AgentEagle = new Character("Agent E. [Eagle]", "Agent", "Agent E.", "OWCA", "#FF0000");
    var AgentFrog = new Character("Ferdinand the Frog", "Agent", "Agent F.", "OWCA", "#FF0000");
    var AgentKangaroo = new Character("Agent K. [Kangaroo]", "Agent", "Agent K.", "OWCA", "#FF0000");
    var AgentKitty = new Character("Agent K. [Kitty]", "Agent", "Agent K.", "OWCA", "#FF0000");
    var AgentOwl = new Character("Agent O. [Owl]", "Agent", "Agent O.", "OWCA", "#FF0000");
    var AgentPanda = new Character("Peter the Panda", "Agent", "Agent P.", "OWCA", "#FF0000");
    var AgentPig = new Character("Agent P. [Pig]", "Agent", "Agent P.", "OWCA", "#FF0000");
    var Pinky = new Character("Pinky the Chiuahua", "Agent", "Agent P.", "OWCA", "#FF0000");
    var AgentRacoon1 = new Character("Agent R. [Racoon] #1", "Agent", "Agent R.", "OWCA", "#744a36");

    //One-Offs
    var ParkRanger = new Character("Rushmore Park Ranger", "ParkRanger", "Park Ranger", "OneOff", "#514c33");
    var Oga = new Character("Oga", "Oga", "Oga", "OneOff", "#bbec96");
    var Bobby = new Character("Bobby Nelson", "Bobby", "Bobby Nelson", "OneOff", "#b50a93")
    var DD = new Character("Derek Dukensson", "DD", "D.D.", "OneOff", "#FF0000");
    var Baxter = new Character("Ben Baxter of Huge-O-Records", "Baxter", "Ben", "OneOff", "#94690b");
    var ProducerGuy = new Character("Film Producer", "ProducerGuy", "Producer", "OneOff", "#857f35");

    //Random real-world cameo people
    var Evander = new Character("Evander Holyfield", "Evander", "Evander", "Cameos", "#FFFFFF");

    //Song People
    var dannyJacob = new Character("Danny Jacob", "dannyJacob", "THIS IS NOT VALID! I DID A MESS UP!", "SONGWRITERS", "#FFFFFF");
    var robbieWyckoff = new Character("Danny Jacob", "dannyJacob", "THIS IS NOT VALID! I DID A MESS UP!", "SONGWRITERS", "#FFFFFF");
}

{//Family Handler
  Phineas.addFamily(Ferb);
  Phineas.addFamily(Candace);
  Phineas.addFamily(Linda);
  Phineas.addFamily(Lawrence);
  Phineas.addFamily(Perry);
  Phineas.addFamily(Clyde);
  Phineas.addFamily(BettyJo);
  Phineas.addFamily(Lorraine);

  Ferb.addFamily(Candace);
  Ferb.addFamily(Linda);
  Ferb.addFamily(Lawrence);
  Ferb.addFamily(Perry);
  Ferb.addFamily(Clyde);
  Ferb.addFamily(BettyJo);
  Ferb.addFamily(Lorraine);

  Candace.addFamily(Linda);
  Candace.addFamily(Lawrence);
  Candace.addFamily(Perry);
  Candace.addFamily(Clyde);
  Candace.addFamily(BettyJo);
  Candace.addFamily(Lorraine);

  Linda.addFamily(Lawrence);
  Linda.addFamily(Perry);
  Linda.addFamily(Clyde);
  Linda.addFamily(BettyJo);
  Linda.addFamily(Lorraine);

  Lawrence.addFamily(Perry);
  Lawrence.addFamily(Clyde);
  Lawrence.addFamily(BettyJo);
  Lawrence.addFamily(Lorraine);

  Perry.addFamily(Clyde);
  Perry.addFamily(BettyJo);
  Perry.addFamily(Lorraine);

  Clyde.addFamily(BettyJo);
  Clyde.addFamily(Lorraine);

  BettyJo.addFamily(Lorraine);

  Isabella.addFamily(Vivian);

  Stacy.addFamily(Ginger);
  Stacy.addFamily(Hirano);

  Ginger.addFamily(Hirano);

  Jeremy.addFamily(Johnson);
  Jeremy.addFamily(Suzy);

  Doof.addFamily(DoofDad);
  Doof.addFamily(DoofMom);
  Doof.addFamily(Vanessa);

  DoofDad.addFamily(DoofMom);

  Lily.addFamily(Tilly);
}

{//BITS
  var notMuch = new Bit("They don't do much.");
  var gonnaDo = new Bit("I know what we're gonna do today");
  var wellConditionally = new Bit("This time I'm gonna be in charge");
  var whatchaDoin = new Bit("Whatcha doin'");
  var wherePerry = new Bit("Where's Perry?");
  var lindana = new Bit("I'm Lindana [Background music]", false);
  var littleYoung = new Bit("Aren't you a little young to be _");
  var andBy = new Bit("I MEAN COMPLETELY _");
  var bird = new Bit("I'm not convinced this is a thing.", false);
  var curseYou = new Bit("CURSE YOU PERRY THE PLATYPUS");
  var aPlatypus = new Bit("PERRY THE PLATYPUS?!");
  var ohTherePerry = new Bit("Oh, there you are");
  var selfDestruct = new Bit("NO NOT THAT BUTTON", false);
  var ggg = new Bit("Gitchee Gitchee Goo [Background music]", false);
}

//EPISODES
{//1
    var episode1Songs = [];
    var episode1Characters = [
      Phineas,
      Ferb,
      Perry,
      Linda,
      Candace,
      Stacy,
      Isabella,
      Monogram,
      Doof,
      BEngineer,
      Pedro,
      DumbassGinger,
      Sam,
      Logan,
      Ginger,
      Katie,
      Suzy
    ];
    var episode1Interactions = [
      new Connection(Phineas, Ferb, 6),
      new Connection(Phineas, Perry, 6),
      new Connection(Phineas, Linda, 6),
      new Connection(Phineas, Candace, 6),
      new Connection(Phineas, Isabella, 6),
      new Connection(Phineas, BEngineer, 6),
      new Connection(Phineas, DumbassGinger, 6),
      new Connection(Phineas, Pedro, 6),
      new Connection(Phineas, Sam, 6),

      new Connection(Ferb, Perry, 6),
      new Connection(Ferb, Isabella, 6),
      new Connection(Ferb, Linda, 6),
      new Connection(Ferb, Isabella, 6),
      new Connection(Ferb, BEngineer, 1),
      new Connection(Ferb, DumbassGinger, 6),
      new Connection(Ferb, Pedro, 6),
      new Connection(Ferb, Sam, 6),

      new Connection(Perry, Linda, 1),
      new Connection(Perry, Candace, 1),
      new Connection(Perry, Monogram, 6),
      new Connection(Perry, Doof, 6),
      new Connection(Perry, DumbassGinger, 1),
      new Connection(Perry, Pedro, 1),
      new Connection(Perry, Sam, 1),
      new Connection(Perry, Isabella, 6),

      new Connection(Linda, Candace, 6),
      
      new Connection(Candace, Stacy, 6),
      new Connection(Candace, Jeremy, 5),

      new Connection(Stacy, Jeremy, 2),

      new Connection(Isabella, Pedro, 1),
      new Connection(Isabella, Dimitri, 1),
      new Connection(Isabella, Sam, 1),
      new Connection(Isabella, Katie, 1),
      new Connection(Isabella, Ginger, 1),
      new Connection(Isabella, Logan, 1),
      new Connection(Isabella, DumbassGinger, 1),
      new Connection(Isabella, Candace, 2),

      new Connection(Monogram, Doof, 4),

      new Connection(Pedro, Dimitri, 6),
      new Connection(Pedro, Sam, 1),
      new Connection(Pedro, Katie, 1),
      new Connection(Pedro, Ginger, 1),
      new Connection(Pedro, Logan, 1),
      new Connection(Pedro, DumbassGinger, 6),
      new Connection(Pedro, Candace, 2),
      
      new Connection(Dimitri, DumbassGinger, 6),
      new Connection(Dimitri, Sam, 1),
      new Connection(Dimitri, Katie, 1),
      new Connection(Dimitri, Ginger, 1),
      new Connection(Dimitri, Logan, 1),
      new Connection(Dimitri, Candace, 2),
      new Connection(Dimitri, Phineas, 3),
      new Connection(Dimitri, Ferb, 3),

      new Connection(DumbassGinger, Katie, 1),
      new Connection(DumbassGinger, Ginger, 1),
      new Connection(DumbassGinger, Logan, 1),
      new Connection(DumbassGinger, Candace, 2),

      new Connection(Sam, Katie, 1),
      new Connection(Sam, Ginger, 1),
      new Connection(Sam, Logan, 1),
      new Connection(Sam, Candace, 2),

      new Connection(Logan, Katie, 1),
      new Connection(Logan, Ginger, 1),
      new Connection(Logan, Candace, 2),
      new Connection(Logan, Phineas, 3),
      new Connection(Logan, Ferb, 3),

      new Connection(Katie, Ginger, 1),
      new Connection(Katie, Phineas, 3),
      new Connection(Katie, Ferb, 3),

      new Connection(Ginger, Phineas, 3),
      new Connection(Ginger, Ferb, 3),

    ];
    var episode1Bits = [
      notMuch, gonnaDo, wellConditionally, whatchaDoin, wherePerry, lindana, littleYoung, andBy, bird, curseYou
    ];
    var ep1 = new Episode(1, "101a", "Rollercoaster", "Rollercoaster", "Magnitism Magnifier [reverse rotation of Earth]", 
      episode1Songs, episode1Characters, episode1Interactions, episode1Bits, 1);
    {//bitHandler
      notMuch.addAppearance(ep1, Phineas);
      gonnaDo.addAppearance(ep1, Phineas);
      wellConditionally.addAppearance(ep1, Candace);
      whatchaDoin.addAppearance(ep1, Isabella);
      wherePerry.addAppearance(ep1, Phineas);
      lindana.addAppearance(ep1);
      littleYoung.addAppearance(ep1, BEngineer);
      andBy.addAppearance(ep1, Doof);
      bird.addAppearance(ep1);
      curseYou.addAppearance(ep1, Doof);
    }
}

{//2
  var episode2Songs = [
    new Song("She's Candace", [dannyJacob])
  ];
  var episode2Characters = [
    Phineas,
    Ferb,
    Candace,
    Perry,
    Linda,
    Lawrence,
    Jeremy,
    Isabella,
    Milly,
    Ginger,
    Holly,
    Gretchen,
    Katie,
    AgentRacoon1,
    Monogram,
    Doof,
    FishingHat,
    Beehive,
    ParkRanger,
    Adyson
  ];
  var episode2Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, ParkRanger, 6),

    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, ParkRanger, 6),
    new Connection(Ferb, Isabella, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Lawrence, 6),
    new Connection(Perry, AgentRacoon1, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Linda, Candace, 6),
    new Connection(Linda, Lawrence, 6),
    new Connection(Linda, Isabella, 6),
    new Connection(Linda, Milly, 1),
    new Connection(Linda, Ginger, 1),
    new Connection(Linda, Holly, 1),
    new Connection(Linda, Gretchen, 1),
    new Connection(Linda, Katie, 1),

    new Connection(Lawrence, Candace, 6),

    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, FishingHat, 6),

    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Candace, 5.5),
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

    new Connection(Monogram, Doof, 4),

    new Connection(FishingHat, Beehive, 6),

    new Connection(Beehive, Candace, 3),
  ];
  var episode2Bits = [
    wherePerry, andBy, whatchaDoin, littleYoung, bird, curseYou
  ];
  var ep2 = new Episode(2, "101b", "Candace Loses Her Head", "Candace's face on Mount Rushmore", "Drill-inator [Monopoly on 'Flation' ]", 
    episode2Songs, episode2Characters, episode2Interactions, episode2Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(2, Phineas);
    andBy.addAppearance(2, Doof);
    whatchaDoin.addAppearance(2, Isabella);
    littleYoung.addAppearance(2, ParkRanger);
    bird.addAppearance(2);
    curseYou.addModifiedAppearance(2, Doof);
  }
}

{//3
  //Candace Meap
  var episode3Songs = [
    new Song("Go, Go, Phineas", [Phineas, Ferb, Isabella, Holly, Ginger, Gretchen])
  ];
  var episode3Characters = [
    Phineas,
    Ferb,
    Candace,
    Perry,
    Vivian,
    Linda,
    Johnson,
    Isabella,
    Monogram,
    Doof,
    Adyson,
    Milly,
    Ginger,
    Gretchen,
    Holly,
    Katie,
    Dave,
    Rick,
  ];
  var episode3Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Gretchen, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Adyson, 6),
    new Connection(Phineas, Dave, 6),
    new Connection(Phineas, Rick, 6),

    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Dave, 3),
    new Connection(Ferb, Rick, 3),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Vivian, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Dave, 3),
    new Connection(Candace, Rick, 3),

    new Connection(Linda, Candace, 6),
    new Connection(Linda, Vivian, 6),
    new Connection(Linda, Johnson, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Dave, 3),
    new Connection(Isabella, Rick, 3),

    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Adyson, 6),
    new Connection(Ginger, Dave, 3),
    new Connection(Ginger, Rick, 3),

    new Connection(Holly, Gretchen, 6),
    new Connection(Holly, Katie, 6),
    new Connection(Holly, Milly, 6),
    new Connection(Holly, Adyson, 6),
    new Connection(Holly, Dave, 3),
    new Connection(Holly, Rick, 3),

    new Connection(Gretchen, Katie, 6),
    new Connection(Gretchen, Milly, 6),
    new Connection(Gretchen, Adyson, 6),
    new Connection(Gretchen, Dave, 3),
    new Connection(Gretchen, Rick, 3),

    new Connection(Katie, Milly, 6),
    new Connection(Katie, Adyson, 6),
    new Connection(Katie, Dave, 3),
    new Connection(Katie, Rick, 3),

    new Connection(Milly, Adyson, 6),
    new Connection(Milly, Dave, 3),
    new Connection(Milly, Rick, 3),

    new Connection(Adyson, Dave, 3),
    new Connection(Adyson, Rick, 3),

    new Connection(Jeremy, Dave, 3),
    new Connection(Jeremy, Rick, 3), 
  ];
  var episode3Bits = [
    gonnaDo, whatchaDoin, wherePerry, littleYoung
  ];
  var ep3 = new Episode(3, "102a", "The Fast and the Phineas", "Swamp Oil 500", "Deflate-inator Ray", 
    episode3Songs, episode3Characters, episode3Interactions, episode3Bits, 0);
  {//bitHandler
    gonnaDo.addAppearance(3, Phineas);
    whatchaDoin.addAppearance(3, Isabella);
    wherePerry.addAppearance(3, Phineas);
    littleYoung.addAppearance(3, Rick);
  }
}

{//4
  var episode4Songs = [
    new Song("If Summer Only Lasted a Day", [dannyJacob]),
    new Song("Backyard Beach", [Ferb])
  ];
  var episode4Characters = [
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
  ];
  var episode4Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Stanky, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Lawrence, 2),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Construction, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Holly, 6),
    new Connection(Phineas, Buford, 6),

    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Stanky, 6),
    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Lawrence, 2),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Holly, 6),
    new Connection(Ferb, Jeremy, 1),

    new Connection(Perry, Stanky, 3),
    new Connection(Perry, Candace, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, DoofDad, 2),
    new Connection(Perry, DoofMom, 2),
    new Connection(Perry, Kenny, 2),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Lawrence, 2),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Jenny, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, Buford, 4),

    new Connection(Linda, Lawrence, 4),
    new Connection(Linda, Oga, 6),
    new Connection(Linda, Jeremy, 2),
    new Connection(Linda, Buford, 2),

    new Connection(Oga, Candace, 2),

    new Connection(Monogram, Doof, 4),

    new Connection(Doof, DoofMom, 6),
    new Connection(Doof, DoofDad, 6),
    new Connection(Doof, Kenny, 6),
    
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Candace, 3),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Linda, 6),

    new Connection(Ginger, Candace, 3),
    new Connection(Ginger, Katie, 6),
    new Connection(Ginger, Milly, 6),
    new Connection(Ginger, Holly, 6),
    new Connection(Ginger, Gretchen, 6),
    new Connection(Ginger, Adyson, 6),

    new Connection(Katie, Candace, 3),
    new Connection(Katie, Milly, 6),
    new Connection(Katie, Holly, 6),
    new Connection(Katie, Adyson, 6),

    new Connection(Milly, Candace, 3),
    new Connection(Milly, Holly, 6),
    new Connection(Milly, Adyson, 6),

    new Connection(Holly, Candace, 3),
    new Connection(Holly, Adyson, 6),

    new Connection(Adyson, Candace, 3),

    new Connection(Stacy, Jenny, 6),
    new Connection(Stacy, Jeremy, 4),
    new Connection(Stacy, Buford, 1),
    new Connection(Stacy, Django, 1),
    new Connection(Stacy, Kris, 1),
    new Connection(Stacy, Sally, 1),
    new Connection(Stacy, Katie, 1),
    new Connection(Stacy, Ginger, 1),
    new Connection(Stacy, Milly, 1),
    new Connection(Stacy, FricknNerd, 1),
    new Connection(Stacy, Sam, 1),
    new Connection(Stacy, Holly, 1),
    new Connection(Stacy, Logan, 1),
    new Connection(Stacy, Adyson, 1),
    new Connection(Stacy, Pedro, 1),
    new Connection(Stacy, DumbassGinger, 1),
    new Connection(Stacy, Ferb, 3),
    new Connection(Stacy, Phineas, 3),
    new Connection(Stacy, Stanky, 3),

    new Connection(Jenny, Jeremy, 2),
    new Connection(Jenny, Buford, 1),
    new Connection(Jenny, Django, 1),
    new Connection(Jenny, Kris, 1),
    new Connection(Jenny, Sally, 1),
    new Connection(Jenny, Katie, 1),
    new Connection(Jenny, Ginger, 1),
    new Connection(Jenny, Milly, 1),
    new Connection(Jenny, FricknNerd, 1),
    new Connection(Jenny, Sam, 1),
    new Connection(Jenny, Holly, 1),
    new Connection(Jenny, Logan, 1),
    new Connection(Jenny, Adyson, 1),
    new Connection(Jenny, Pedro, 1),
    new Connection(Jenny, DumbassGinger, 1),
    new Connection(Jenny, FishingHat, 1),
    new Connection(Jenny, Ferb, 3),

    new Connection(Kris, Pedro, 6),
    new Connection(Kris, Sally, 6),
    new Connection(Kris, Buford, 1),
    new Connection(Kris, Django, 1),
    new Connection(Kris, Katie, 1),
    new Connection(Kris, Ginger, 1),
    new Connection(Kris, Milly, 1),
    new Connection(Kris, FricknNerd, 1),
    new Connection(Kris, Sam, 1),
    new Connection(Kris, Holly, 1),
    new Connection(Kris, Logan, 1),
    new Connection(Kris, Adyson, 1),
    new Connection(Kris, DumbassGinger, 1),
    new Connection(Kris, Candace, 3),
    new Connection(Kris, Ferb, 3),
    new Connection(Kris, Phineas, 3),
    new Connection(Kris, Stanky, 3),

    new Connection(Sally, Buford, 1),
    new Connection(Sally, Django, 1),
    new Connection(Sally, Katie, 1),
    new Connection(Sally, Ginger, 1),
    new Connection(Sally, Milly, 1),
    new Connection(Sally, FricknNerd, 1),
    new Connection(Sally, Sam, 1),
    new Connection(Sally, Holly, 1),
    new Connection(Sally, Logan, 1),
    new Connection(Sally, Adyson, 1),
    new Connection(Sally, Pedro, 1),
    new Connection(Sally, DumbassGinger, 1),
    new Connection(Sally, Candace, 3),

    new Connection(Buford, Django, 6),
    new Connection(Buford, Katie, 1),
    new Connection(Buford, Ginger, 1),
    new Connection(Buford, Milly, 1),
    new Connection(Buford, Sam, 1),
    new Connection(Buford, Holly, 1),
    new Connection(Buford, Logan, 1),
    new Connection(Buford, Adyson, 1),
    new Connection(Buford, Pedro, 1),
    new Connection(Buford, DumbassGinger, 1),
    new Connection(Buford, Candace, 3),
    new Connection(Buford, Bobby, 6),
    new Connection(Buford, Stanky, 6),

    new Connection(Django, Katie, 1),
    new Connection(Django, Ginger, 1),
    new Connection(Django, Milly, 1),
    new Connection(Django, FricknNerd, 1),
    new Connection(Django, Sam, 1),
    new Connection(Django, Holly, 1),
    new Connection(Django, Logan, 1),
    new Connection(Django, Adyson, 1),
    new Connection(Django, Pedro, 1),
    new Connection(Django, DumbassGinger, 1),
    new Connection(Django, Candace, 3),
    new Connection(Django, Jeremy, 1),
    new Connection(Django, Stanky, 6),
    new Connection(Django, Bobby, 6),

    new Connection(FricknNerd, Buford, 6),
    new Connection(FricknNerd, Katie, 1),
    new Connection(FricknNerd, Ginger, 1),
    new Connection(FricknNerd, Milly, 1),
    new Connection(FricknNerd, Sam, 1),
    new Connection(FricknNerd, Holly, 1),
    new Connection(FricknNerd, Logan, 1),
    new Connection(FricknNerd, Adyson, 1),
    new Connection(FricknNerd, Pedro, 1),
    new Connection(FricknNerd, DumbassGinger, 1),
    new Connection(FricknNerd, Candace, 3),
    new Connection(FricknNerd, FishingHat, 1),
    new Connection(FricknNerd, Jeremy, 1), 

    new Connection(Sam, Katie, 1),
    new Connection(Sam, Ginger, 1),
    new Connection(Sam, Milly, 1),
    new Connection(Sam, Holly, 1),
    new Connection(Sam, Logan, 1),
    new Connection(Sam, Adyson, 1),
    new Connection(Sam, Pedro, 1),
    new Connection(Sam, DumbassGinger, 1),
    new Connection(Sam, Candace, 3),
    new Connection(Sam, FishingHat, 1),

    new Connection(Logan, Katie, 1),
    new Connection(Logan, Ginger, 1),
    new Connection(Logan, Milly, 1),
    new Connection(Logan, Holly, 1),
    new Connection(Logan, Adyson, 1),
    new Connection(Logan, Pedro, 1),
    new Connection(Logan, DumbassGinger, 1),
    new Connection(Logan, Candace, 3),

    new Connection(Pedro, Katie, 1),
    new Connection(Pedro, Ginger, 1),
    new Connection(Pedro, Milly, 1),
    new Connection(Pedro, Holly, 1),
    new Connection(Pedro, Adyson, 1),
    new Connection(Pedro, DumbassGinger, 1),
    new Connection(Pedro, Candace, 3),
    new Connection(Pedro, FishingHat, 1),
    new Connection(Pedro, Ferb, 3),
    new Connection(Pedro, Phineas, 6),
    new Connection(Pedro, Stanky, 3),
    new Connection(Pedro, Perry, 3),
    new Connection(Pedro, Isabella, 3),

    new Connection(DumbassGinger, Katie, 1),
    new Connection(DumbassGinger, Ginger, 1),
    new Connection(DumbassGinger, Milly, 1),
    new Connection(DumbassGinger, Holly, 1),
    new Connection(DumbassGinger, Adyson, 1),
    new Connection(DumbassGinger, Candace, 3),
    new Connection(DumbassGinger, Perry, 3),
    new Connection(DumbassGinger, Isabella, 3),

    new Connection(Stanky, Bobby, 6),
    new Connection(Stanky, Pedro, 4),
    new Connection(Stanky, Stacy, 4),
    new Connection(Stanky, Kris, 4),

  ];
  var episode4Bits = [
    bird, wherePerry, littleYoung, aPlatypus, ohTherePerry
  ];
  var ep4 = new Episode(4, "102b", "Lawn Gnome Beach Party of Terror", "Backyard Beach", "Destruct-inator [Gnomes]", 
    episode4Songs, episode4Characters, episode4Interactions, episode4Bits, 1);
  {//bitHandler
    bird.addAppearance(4);
    wherePerry.addAppearance(4, Phineas);
    littleYoung.addAppearance(4, Construction);
    aPlatypus.addAppearance(4, Doof);
    ohTherePerry.addAppearance(4, Phineas);
  }
}

{//5
  var episode5Songs = [
    new Song("In The Mall", [Phineas, Ferb, Isabella])
  ];
  var episode5Characters = [
    Phineas,
    Ferb,
    Candace,
    Linda,
    Isabella,
    Perry,
    Monogram,
    Doof,
    Vanessa,
    Tilly,
    Lily,
    Haney,
  ];
  var episode5Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Linda, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Isabella, 6),

    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Isabella, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Linda, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),
    new Connection(Perry, Vanessa, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Stacy, 6),
    new Connection(Candace, Haney, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(Doof, Vanessa, 6),

    new Connection(Isabella, Candace, 2),
    new Connection(Isabella, Linda, 6),

    new Connection(Tilly, Lily, 6),

  ];
  var episode5Bits = [
    whatchaDoin, wherePerry, andBy, lindana, selfDestruct, curseYou
  ];
  var ep5 = new Episode(5, "103a", "The Magnificent Few", "Driving Cattle", "Termite Controlling Helmet", 
    episode5Songs, episode5Characters, episode5Interactions, episode5Bits, 1);
  {//bitHandler
    whatchaDoin.addAppearance(5, Isabella);
    wherePerry.addAppearance(5, Phineas);
    andBy.addAppearance(5, Doof);
    lindana.addAppearance(5);
    selfDestruct.addAppearance(5);
    curseYou.addAppearance(5, Doof);
  }
}

{//6
  var episode6Songs = [
    new Song("S'Winter", [Adyson, Gretchen, Isabella, Phineas, Ferb])
  ];
  var episode6Characters = [
    Phineas,
    Ferb,
    Lawrence,
    Linda,
    Candace,
    Isabella,
    Milly,
    Katie,
    Ginger,
    Holly,
    Timmy,
    Sam,
    Gretchen,
    Jeremy,
    DD,
    Stacy,
    Django,
    Dimitri,
    Buford,
    FishingHat,
    Baljeet,
    Logan,
    Kris,
    DumbassGinger,
    Pedro,
    Tilly,
    Lily,
    Bob
  ];
  var episode6Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, Isabella, 6),
    new Connection(Phineas, Milly, 6),
    new Connection(Phineas, Katie, 6),
    new Connection(Phineas, Ginger, 6),
    new Connection(Phineas, Holly, 6),
    
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Linda, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, Isabella, 6),
    new Connection(Ferb, Milly, 6),
    new Connection(Ferb, Katie, 6),
    new Connection(Ferb, Ginger, 6),
    new Connection(Ferb, Holly, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Linda, 6),
    new Connection(Candace, Jeremy, 6),
    new Connection(Candace, DD, 6),
    new Connection(Candace, Vanessa, 6),
    new Connection(Candace, Dimitri, 3), //There's no shot this is a two-way interaction and 3 seems like the best descriptor
    new Connection(Candace, Buford, 6),

    new Connection(Lawrence, Candace, 6),
    new Connection(Lawrence, Linda, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(Isabella, Milly, 6),
    new Connection(Isabella, Katie, 6),
    new Connection(Isabella, Ginger, 6),
    new Connection(Isabella, Holly, 6),
    new Connection(Isabella, Gretchen, 6),
    new Connection(Isabella, Adyson, 6),
    new Connection(Isabella, Pedro, 6),
    
    new Connection(Milly, Katie, 6),
    new Connection(Milly, Ginger, 6),
    new Connection(Milly, Holly, 6),

    new Connection(Katie, Ginger, 6),
    new Connection(Katie, Holly, 6),

    new Connection(Ginger, Holly, 6),

    new Connection(Timmy, Gretchen, 3),
    new Connection(Timmy, Adyson, 3),
    new Connection(Timmy, Isabella, 3),
    new Connection(Timmy, Django, 1),
    new Connection(Timmy, Phineas, 3),
    new Connection(Timmy, Ferb, 3),
    new Connection(Timmy, Candace, 3),

    new Connection(Jeremy, DD, 6),
    new Connection(Jeremy, Phineas, 3),
    new Connection(Jeremy, Ferb, 3),
    new Connection(Jeremy, Timmy, 3),
    new Connection(Jeremy, Kris, 1),
    new Connection(Jeremy, Logan, 1),
    new Connection(Jeremy, Baljeet, 1),
    new Connection(Jeremy, DumbassGinger, 1),
    new Connection(Jeremy, Pedro, 1),
    new Connection(Jeremy, Django, 1),
    new Connection(Jeremy, Stacy, 1),
    new Connection(Jeremy, Buford, 1),
    new Connection(Jeremy, Dimitri, 1),

    new Connection(Stacy, DD, 4),
    new Connection(Stacy, Django, 1),
    new Connection(Stacy, Buford, 1),
    new Connection(Stacy, Dimitri, 1),
    new Connection(Stacy, Phineas, 3),
    new Connection(Stacy, Ferb, 3),

    new Connection(Sam, Vanessa, 3),
    new Connection(Sam, Candace, 3),
    new Connection(Sam, Jeremy, 3),
    new Connection(Sam, Phineas, 3),
    new Connection(Sam, Ferb, 3),
    new Connection(Sam, Timmy, 3),
    new Connection(Sam, Kris, 1),
    new Connection(Sam, Logan, 1),
    new Connection(Sam, Baljeet, 1),
    new Connection(Sam, Jeremy, 1),
    new Connection(Sam, DumbassGinger, 1),
    new Connection(Sam, Pedro, 1),
    new Connection(Sam, Django, 1),
    new Connection(Sam, Stacy, 1),
    new Connection(Sam, Buford, 1),
    new Connection(Sam, Dimitri, 1),

    new Connection(Django, Vanessa, 3),
    new Connection(Django, Candace, 3),
    new Connection(Django, Sam, 3),
    new Connection(Django, Buford, 1),
    new Connection(Django, Dimitri, 1),
    new Connection(Django, Phineas, 3),
    new Connection(Django, Ferb, 3),

    new Connection(Vanessa, Jeremy, 3),
    new Connection(Vanessa, DD, 3), //This is kinda a stretch but

    new Connection(FishingHat, Dimitri, 1),
    new Connection(FishingHat, Candace, 6),
    new Connection(FishingHat, Tilly, 1),
    new Connection(FishingHat, Lily, 1),

    new Connection(Kris, Phineas, 3),
    new Connection(Kris, Ferb, 3),
    new Connection(Kris, Candace, 3),
    new Connection(Kris, Timmy, 3),
    new Connection(Kris, Logan, 1),
    new Connection(Kris, Baljeet, 1),
    new Connection(Kris, DumbassGinger, 1),
    new Connection(Kris, Pedro, 1),

    new Connection(Logan, Phineas, 3),
    new Connection(Logan, Ferb, 3),
    new Connection(Logan, Candace, 3),
    new Connection(Logan, Jeremy, 3),
    new Connection(Logan, Timmy, 3),
    new Connection(Logan, Baljeet, 1),
    new Connection(Logan, DumbassGinger, 1),
    new Connection(Logan, Pedro, 1),
    new Connection(Logan, Django, 1),
    new Connection(Logan, Stacy, 1),
    new Connection(Logan, Buford, 1),
    new Connection(Logan, Dimitri, 1),

    new Connection(Baljeet, Phineas, 3),
    new Connection(Baljeet, Ferb, 3),
    new Connection(Baljeet, Candace, 3),
    new Connection(Baljeet, Timmy, 3),
    new Connection(Baljeet, DumbassGinger, 1),
    new Connection(Baljeet, Pedro, 1),
    new Connection(Baljeet, Django, 1),
    new Connection(Baljeet, Stacy, 1),
    new Connection(Baljeet, Buford, 1),
    new Connection(Baljeet, Dimitri, 1),

    new Connection(DumbassGinger, Phineas, 3),
    new Connection(DumbassGinger, Ferb, 3),
    new Connection(DumbassGinger, Candace, 3),
    new Connection(DumbassGinger, Jeremy, 3),
    new Connection(DumbassGinger, Timmy, 3),
    new Connection(DumbassGinger, Pedro, 1),

    new Connection(Pedro, Phineas, 3),
    new Connection(Pedro, Ferb, 3),
    new Connection(Pedro, Candace, 3),
    new Connection(Pedro, Timmy, 3),
    new Connection(Pedro, Django, 1),
    new Connection(Pedro, Stacy, 1),
    new Connection(Pedro, Buford, 1),
    new Connection(Pedro, Dimitri, 1),

    new Connection(Dimitri, Buford, 1),
    new Connection(Dimitri, Candace, 3),
    new Connection(Dimitri, Phineas, 3),
    new Connection(Dimitri, Ferb, 3),
    new Connection(Dimitri, Jeremy, 3),

    new Connection(Buford, Phineas, 3),
    new Connection(Buford, Ferb, 3),

    new Connection(Tilly, Lily, 6),
  ];
  var episode6Bits = [
    gonnaDo, wherePerry, whatchaDoin, ohTherePerry
  ];
  var ep6 = new Episode(6, "103b", "S'Winter", "S'Winter", "Melt-inator 6-5000 [Chocolate Doofs]", 
    episode6Songs, episode6Characters, episode6Interactions, episode6Bits, 1);
  {//bitHandler
    gonnaDo.addAppearance(6, Phineas);
    wherePerry.addAppearance(6, Phineas);
    whatchaDoin.addAppearance(6, Isabella);
    ohTherePerry.addAppearance(6, Phineas);
  }
}

{//7
  //Space Adventure
  var episode7Songs = [
    new Song("My Undead Mummy", [dannyJacob])
  ];
  var episode7Characters = [
    Candace,
    Ferb,
    Perry,
    Lawrence,
    Logan,
    FishingHat,
    Dimitri,
    Bob,
    Pedro,
    Phineas,
    Monogram,
    Doof,
    TheaterEmployee
  ];
  var episode7Interactions = [
    new Connection(Phineas, Ferb, 6),
    new Connection(Phineas, Lawrence, 6),
    new Connection(Phineas, Perry, 6),
    new Connection(Phineas, Candace, 6),
    new Connection(Phineas, TheaterEmployee, 6),

    new Connection(Ferb, Lawrence, 6),
    new Connection(Ferb, Perry, 6),
    new Connection(Ferb, Candace, 6),
    new Connection(Ferb, TheaterEmployee, 6),

    new Connection(Perry, Candace, 6),
    new Connection(Perry, Lawrence, 6),
    new Connection(Perry, Monogram, 6),
    new Connection(Perry, Doof, 6),

    new Connection(Candace, Lawrence, 6),

    new Connection(Monogram, Doof, 4),

    new Connection(Logan, Pedro, 6),
    new Connection(Logan, FishingHat, 1),
    new Connection(Logan, Bob, 1),

    new Connection(Pedro, Bob, 1),
    new Connection(Pedro, FishingHat, 1),
    new Connection(Pedro, Lawrence, 1),
    
    new Connection(Bob, Ferb, 1),
    new Connection(Bob, Candace, 1),
    new Connection(Bob, Lawrence, 1),
    new Connection(Bob, Perry, 1),

    new Connection(FishingHat, Phineas, 1),
    new Connection(FishingHat, Ferb, 1),
    new Connection(FishingHat, Perry, 1),
    new Connection(FishingHat, Lawrence, 1),
    new Connection(FishingHat, Candace, 1),

  ];
  var episode7Bits = [
    wherePerry, lindana, andBy, ohTherePerry
  ];
  var ep7 = new Episode(7, "104a", "Are You My Mummy", "Explore the Basement of the Movie Theatre [wooo]", "Woodenator", 
    episode7Songs, episode7Characters, episode7Interactions, episode7Bits, 1);
  {//bitHandler
    wherePerry.addAppearance(7, Phineas);
    lindana.addAppearance(7);
    andBy.addAppearance(7, Doof);
    ohTherePerry.addAppearance(7, Phineas);
  }
}

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

var unpackedEpisodes = [ep1, ep2, ep3, ep4, ep5, ep6, ep7, ep8, ep9, ep10, ep11];

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