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
totAdded = 1;
ibNms = [111, 112, 113, 114, 212, 213, 311, 312, 411, 413];
//SE, 2/17
ibNas = ["TMBG", "Straws", "Pencils", "Swedish", "Calculators", "Cubing", "Temperature", "Eating Paper", "Pockets", "Peanut Butter"];
ibRp = ["NA"];
ibShD = ["They Might Be Giants - an alt rock band that I grew up listening to quite frequently through my father. I've been to two live shows and they're the main source of my musical taste, with their tracks taking up over 75% of my personal music library last I checked."];
ibVd = ["https://youtu.be/dW7y-Ao4mSg"];

function hall() {
    document.getElementById("mnWcl").hidden = true;
    document.getElementById("ibs").hidden = false;
    udt();
}


function ibL() {
    console.log("IBL")
}

function ibR() {
    console.log("IBR")
}

function udt() {
    document.getElementById("hdi").innerHTML = "Iceberg "  + ibNms[ibNum - 1];
    document.getElementById("ibR").innerHTML = ibNas[ibNum - 1];
    document.getElementById("iSD").innerHTML = "Short Description: " + ibShD[ibNum - 1];
    document.getElementById("iRP").innerHTML = "Relevant People: " + ibRp[ibNum - 1];
    document.getElementById("ibV").innerHTML = "Relevant Video: " + ibVd[ibNum - 1];
}