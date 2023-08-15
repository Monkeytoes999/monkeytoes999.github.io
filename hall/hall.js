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
totAdded = 5;
ibNms = [111, 112, 113, 114, 212, 213, 311, 312, 411, 413];
//SE, 2/17
ibNas = ["TMBG", "Straws", "Pencils", "Swedish", "Calculators", "Cubing", "Temperature", "Eating Paper", "Pockets", "Peanut Butter"];
ibRp = ["NA", "NA", "NA", "Martin, Petunia, Aster", "Bert"];
ibShD = ["They Might Be Giants - an alt rock band that I grew up listening to quite frequently through my father. I've been to two live shows and they're the main source of my musical taste, with their tracks taking up over 75% of my personal music library last I checked.",
"Straws are an unreasonably high percentage of aquatic litter for being a useless tube. It's not even the turtle thing, it's bigger than that. There's no real reason for us to use straws as much as we do, at least not plastic ones. Use glass if you need to. I've written school reports on straws at least once a year since 10th.",
"I've been collecting writing utensils for a long time at this point. Any time I see a pen/pencil/whatever that somebody has left on the floor or lost or whatever I will add it to my collection of pocket pencil, which eventually get transferred into the shoebox. I usually have at least one of them on me at any given time, which we'll discuss in a bit with the whole pockets thing. I appreciate pencils more than pens, even though pens are winning.",
"Around February 2017, some of my friends were like 'We should all do Duolingo as a group or something and be like, good at language'. Some of them had been using it for a while beforehand and probably wanted motivation to keep going or something. We all pretty much did different languages (though they all did French for a bit) and I settled on Swedish. Sweden is great and stuff, so that helps.",
"Around September of 2017, Bert got me into TI Basic, the most bestest way to program anything ever, especially if you want it to be super complex. This is pretty much the basis of my friendship with Bert honestly, programming random carps. This one I really have not a ton to say about."];
ibVd = ["https://youtu.be/dW7y-Ao4mSg", "https://youtu.be/hZ9asyBt-04", "https://youtu.be/DKtV2JtViEs", "https://youtu.be/0y5bqyCpNhk", "https://youtu.be/ZCMpe24CdY4"];

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