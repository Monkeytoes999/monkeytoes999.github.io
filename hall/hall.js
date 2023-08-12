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
totAdded = 2;
ibNms = [111, 112, 113, 114, 212, 213, 311, 312, 411, 413];
//SE, 2/17
ibNas = ["TMBG", "Straws", "Pencils", "Swedish", "Calculators", "Cubing", "Temperature", "Eating Paper", "Pockets", "Peanut Butter"];
ibRp = ["NA", "NA"];
ibShD = ["They Might Be Giants - an alt rock band that I grew up listening to quite frequently through my father. I've been to two live shows and they're the main source of my musical taste, with their tracks taking up over 75% of my personal music library last I checked.",
"Straws are an unreasonably high percentage of aquatic litter for being a useless tube. It's not even the turtle thing, it's bigger than that. There's no real reason for us to use straws as much as we do, at least not plastic ones. Use glass if you need to. I've written school reports on straws at least once a year since 10th."];
ibVd = ["https://youtu.be/dW7y-Ao4mSg", "https://youtu.be/hZ9asyBt-04"];

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