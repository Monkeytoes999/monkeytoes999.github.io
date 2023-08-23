function help() {
    document.getElementById("mnWcl").hidden = true;
    document.getElementById("help").hidden = false;
}

function home() {
    document.getElementById("mnWcl").hidden = false;
    document.getElementById("help").hidden = true;
    document.getElementById("ibs").hidden = true;
}

ibNum = 1;
totAdded = 10;
ibNms = [111, 112, 113, 114, 212, 213, 311, 312, 411, 413];
//SE, 2/17
ibNas = ["TMBG", "Straws", "Pencils", "Swedish", "Calculators", "Cubing", "Temperature", "Eating Paper", "Pockets", "Peanut Butter"];
ibRp = ["NA", "NA", "NA", "Martin, Petunia, Aster", "Bert", "Clive", "NA", "NA", "NA", "NA"];
ibShD = ["They Might Be Giants - an alt rock band that I grew up listening to quite frequently through my father. I've been to two live shows and they're the main source of my musical taste, with their tracks taking up over 75% of my personal music library last I checked.",
"Straws are an unreasonably high percentage of aquatic litter for being a useless tube. It's not even the turtle thing, it's bigger than that. There's no real reason for us to use straws as much as we do, at least not plastic ones. Use glass if you need to. I've written school reports on straws at least once a year since 10th.",
"I've been collecting writing utensils for a long time at this point. Any time I see a pen/pencil/whatever that somebody has left on the floor or lost or whatever I will add it to my collection of pocket pencil, which eventually get transferred into the shoebox. I usually have at least one of them on me at any given time, which we'll discuss in a bit with the whole pockets thing. I appreciate pencils more than pens, even though pens are winning.",
"Around February 2017, some of my friends were like 'We should all do Duolingo as a group or something and be like, good at language'. Some of them had been using it for a while beforehand and probably wanted motivation to keep going or something. We all pretty much did different languages (though they all did French for a bit) and I settled on Swedish. Sweden is great and stuff, so that helps.",
"Around September of 2017, Bert got me into TI Basic, the most bestest way to program anything ever, especially if you want it to be super complex. This is pretty much the basis of my friendship with Bert honestly, programming random carps. This one I really have not a ton to say about.",
"My father taught me how to solve a 3x3 back in like, 2012. In middle school, through 'friendly' competition with Clive, I got a lot faster and learned how to do a variety of different types, although really the one cube that I've had to look up actual algorithms for besides like, parody algorithms, is the Square One. Everything else I logiced out based on my 3x3 knowledge.",
"So I've never really felt the effects of temperature in nearly the same way as anybody else. I usually go wandering around outside in shorts no matter what temperature it is outside. I've previously credited this to mostly the fact that I have parents from Florida and Boston, although that's not really how it works. I have no real explanation for this.",
"So paper. I think the paper eating really started in like, 1st grade at the latest. I remember just deciding one day that I was going to eat the muffin/cupcake liners because they tasted good, and it really wasn't that far of a stretch. I've frequently just eaten any bits of paper that I want to get rid of (like ticket stubs, in a few cases a note or two, stuff like that). Paper is tasty.",
"Ever since I started wearing the khaki shorts (I don't really care if they're all exactly khaki that's what they are in my head), I've started carrying around a whole bunch of stuff in my pockets. I don't really descriminate about what goes into the pocket or what gets trasferred each day, so there's usually a nice variety of stuff in there. I've gotten up to like, 30 writing utensils at some point; I like to claim that I always have writing utensils, but it's really just a 95% of the time thing.",
"Look so, peanut butter. I don't appreciate peanut butter. I think I probably can trace it back but it would take a while to type out so listen to the rambling I make for this one if you care. The Garm Canon explanation for this one is that peanut butter is not natural. I don't remember the exact name of the planet that I would use in my little speech for this one, but there was a well-used explanation I would give if asked."];
ibVd = ["https://youtu.be/dW7y-Ao4mSg", "https://youtu.be/hZ9asyBt-04", "https://youtu.be/DKtV2JtViEs", "https://youtu.be/0y5bqyCpNhk", "https://youtu.be/ZCMpe24CdY4", "https://youtu.be/m9OCrQXa4IA", "https://youtu.be/F0bjSw8tYqM", "https://youtu.be/s_OGf5tc1EE", "https://youtu.be/xKiB4gFsxO4", "https://youtu.be/Bdkn-2TaGNs"];

function hall() {
    document.getElementById("mnWcl").hidden = true;
    document.getElementById("ibs").hidden = false;
    udt();
}


function ibL() {
    if (ibNum > 1){
        ibNum--;
        udt();
    }
}

function ibR() {
    if (ibNum < totAdded) {
        ibNum++;
        udt();
    }
}

function udt() {
    document.getElementById("hdi").innerHTML = "Iceberg "  + ibNms[ibNum - 1];
    document.getElementById("ibR").innerHTML = ibNas[ibNum - 1];
    document.getElementById("iSD").innerHTML = ibShD[ibNum - 1];
    document.getElementById("iRP").innerHTML = "Relevant People: " + ibRp[ibNum - 1];
    document.getElementById("ibV").innerHTML = "Relevant Video: " + ibVd[ibNum - 1];
}