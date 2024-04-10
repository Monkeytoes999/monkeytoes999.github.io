import * as gp from "./gamePiece.js"
import * as st from "./board.js"

//Specials accounted for: Movement Specials | Scout, Beast Rider, Knight | Capture specials: Slayer, Dwarf
//Elf, Beast, Sorceress, Mage, Dragon -> Special Button


//TODO: Fix movement options - Create functioning combat - Last 5 specials
//ESTM: 30 min                 2 hr                        3 hr
//ACTU:    min                   hr                          hr


var playerTeam = Math.floor(document.getElementById("playerTeam").innerHTML);
var gameBoard = document.getElementById("gameBoard");
var movingFrom;
var slots;
var player1Bank;
var player2Bank;
var waitingOn;
var lastInfo = "Waiting for Setup";
var specialType = -1;
var specialHighlight = [];
var intentToBeastSpecial = false;

document.getElementById("ConfirmSetupButton").onclick = internalConfirmSetup;

st.draw(playerTeam).then(data => {
    [slots, player1Bank, player2Bank, waitingOn] = data;
    if (waitingOn != -1) {
        setTimeout(() => {
            queryTurn();
        }, 5000);
    }
});


export function playerTurn() {
    intentToBeastSpecial = false;
    document.getElementById("SUB").disabled = true;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            if (slots[i][j].type != "Volcano") {
                let elementButton = document.getElementById("SB" + i + "" + j);
                elementButton.disabled = true;
            }
        }
    }
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null && ((checkSameTeam({"team": playerTeam}, el.occupant) == 1))) { 
                let elementButton = document.getElementById("PB" + el.occupant.id);
                elementButton.disabled = el.occupant.speed == 0;
                elementButton.onclick = pieceAction;
            } else {
                if (el.occupant != null) {
                    let elementButton = document.getElementById("PB" + el.occupant.id);
                    elementButton.disabled = true;
                }
            }
        });
    });
}

function pieceAction(id) {
    let valids = [];
    let source = id.srcElement.id.substring(2);
    let specialPowers = [4, 5, 6, 9, 10];
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) {
                let piece = el.occupant;
                if (!(valids.includes("" + el.y + "" + el.x))) document.getElementById("PB" + piece.id).disabled = true;
                if (piece.id == source) {
                    movingFrom = el;
                    if (specialPowers.includes(el.occupant.power)) {
                        specialType = el.occupant.power;
                        document.getElementById("SUB").disabled = false;
                        document.getElementById("SUB").onclick = specialHandler;
                    }
                    let unselectButton = document.getElementById("PB" + el.occupant.id);
                    unselectButton.disabled = false;
                    unselectButton.onclick = moveHandler;
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 10; j++) {
                            let k = Math.round(el.x);
                            let l = Math.round(el.y);
                            let el2 = slots[i][j];
                            let xDifference = Math.abs(k - el2.x);
                            let yDifference = Math.abs(l - el2.y);
                            let validPath = true;
                            if ((xDifference + yDifference > piece.speed) || (xDifference + yDifference == 0)) {
                                validPath = false;
                            }
                            if (el2.type == "Volcano") {
                                validPath = false;
                            }
                            //2, 7, 8
                            if (piece.speed > 1 && (xDifference + yDifference > 1)) {
                                if (xDifference == 0) {
                                    let startingY = Math.round(l);
                                    let endingY = el2.y;
                                    let diff = 1;
                                    if (startingY > endingY) diff = -1;
                                    startingY = startingY + diff;
                                    while (startingY != endingY && validPath) {
                                        if (slots[startingY][j].type == "Volcano" || slots[startingY][j].occupant != null) {
                                            validPath = false;
                                        }
                                        startingY = startingY + diff;
                                    }
                                } else if (yDifference == 0) {
                                    let startingX = Math.round(k);
                                    let endingX = el2.x;
                                    let diff = 1;
                                    if (startingX > endingX) diff = -1;
                                    startingX = startingX + diff;
                                    while (startingX != endingX && validPath) {
                                        if (slots[i][startingX].type == "Volcano" || slots[i][startingX].occupant != null) {
                                            validPath = false;
                                        }
                                        startingX = startingX + diff;
                                    }
                                } else if (piece.speed == 10) {
                                    validPath = false;
                                } else {
                                    let xVal = Math.round(k);
                                    let yVal = Math.round(l);
                                    if (slots[yVal][el2.x].type == "Volcano" || slots[yVal][el2.x].occupant != null) {
                                        if (slots[el2.y][xVal].type == "Volcano" || slots[el2.y][xVal].occupant != null) {
                                            validPath = false;
                                        }
                                    }
                                }
                            }
                            if (validPath) {
                                let elementButton = document.getElementById("SB" + el2.y + "" + el2.x);
                                if (playerTeam == 0) {
                                    elementButton = document.getElementById("SB" + (7 - el2.y) + "" + (9 - el2.x));   
                                }
                                elementButton.disabled = false;
                                elementButton.onclick = moveHandler;
                                if (el2.occupant != null) {
                                    if(!checkSameTeam(piece, el2.occupant)){
                                        let combatButton = document.getElementById("PB" + el2.occupant.id);
                                        document.getElementById("PB" + el2.occupant.id).disabled = false;
                                        combatButton.onclick = moveHandler;
                                        valids.push("" + el2.y + "" + el2.x);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
}

function moveHandler(id) {
    let source = id.srcElement.id.substring(2); 
    if (id.srcElement.id.substring(0, 2) == "PB") {
        slots.forEach((element) => {
            element.forEach((el) => {
                if (el.occupant != null && el.occupant.id == source) {
                    source = "" + el.y + "" + el.x;
                    if (playerTeam == 0) {
                        source = "" + (7 - Math.round(el.y)) + "" + (9 - Math.round(el.x));
                    }
                }
            });
        });
    }
    let to = slots[source.substring(0, 1)][source.substring(1, 2)];
    let xDifference = Math.abs(movingFrom.x - to.x);
    let yDifference = Math.abs(movingFrom.y - to.y);
    if (xDifference + yDifference == 0) {
        playerTurn();
    } else if (to.occupant != null) {
        let combatVictory = pieceCombat(movingFrom.occupant, to.occupant);
        lastInfo = movingFrom.occupant.name + ": " + combatVictory + " against " + to.occupant.name;
        switch (combatVictory) {
            case "WIN":
                [player1Bank, player2Bank] = st.returnBank(to.occupant);
                st.addRetP(to.occupant);
                to.occupant = movingFrom.occupant;
                movingFrom.occupant = null;
                break;
            case "LOSS":
                [player1Bank, player2Bank] = st.returnBank(movingFrom.occupant);
                st.addRetP(movingFrom.occupant);
                movingFrom.occupant = null;
                break;
            case "DRAW":
                st.returnBank(movingFrom.occupant);
                [player1Bank, player2Bank] = st.returnBank(to.occupant);
                st.addRetP(movingFrom.occupant);
                st.addRetP(to.occupant);
                to.occupant = null;
                movingFrom.occupant = null;
                break;
        }
        st.redraw(slots);
        turnOver();
    } else {
        let pieceCaller = "???";
        specialHighlight.push(movingFrom.occupant);
        if (xDifference + yDifference > 1) {
            pieceCaller = movingFrom.occupant.name;
        }
        let pieceMoved = movePiece(to, movingFrom);
        lastInfo = pieceCaller + " moved " + (xDifference + yDifference) + " spaces."
        if (pieceMoved) {
            st.redraw(slots);
            if (intentToBeastSpecial) {
                specialBeast(to);
            }
            intentToBeastSpecial = false;
            turnOver();
        }
    }
        
}

function specialHandler() {
    document.getElementById("SUB").disabled = true;
    if (specialType == 5) {
        intentToBeastSpecial = true;
    } else {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 10; j++) {
                if (slots[i][j].type != "Volcano") {
                    let elementButton = document.getElementById("SB" + i + "" + j);
                    elementButton.disabled = true;
                }
            }
        }
        slots.forEach((element) => {
            element.forEach((el) => {
                if (el.occupant != null && (!(checkSameTeam({"team": playerTeam}, el.occupant) == 1))) { 
                    let elementButton = document.getElementById("PB" + el.occupant.id);
                    elementButton.disabled = true;
                }
            });
        });
    
        console.log(specialType);
        if (specialType == 4 || specialType == 6 || specialType == 9) {
            specialTwoSpaces();
        }
        
        if (specialType == 10) {
            specialDragon();
        }
    }
}

function movePiece(to, from) {
    let piece = from.occupant;
    if (to.occupant == null) {
        piece.x = to.x;
        piece.y = to.y;
        from.occupant = null;
        to.occupant = piece;
        return true;
    }
    if (checkSameTeam(to.occupant, piece) == 1) {
        return false;
    } else {
        specialHighlight.push(piece);
        specialHighlight.push(to.occupant);
        return pieceCombat(piece, to.occupant);
    }
}


function pieceCombat(piece1, piece2) {
    if (piece2.name == "Trap") {
        if (piece1.name == "Dwarf") { 
            return "WIN";
        } 
        return "LOSS";
    } 
    if (piece2.name == "Flag") {
        return "VICTORY";
    }
    if (piece1.name == "Slayer") {
        if (piece2.name == "Dragon") {
            return "WIN";
        }
        return "LOSS";
    }
    if (piece1.power > piece2.power) {
        return "WIN";
    } else if (piece1.power == piece2.power) {
        return "DRAW";
    } else {
        return "LOSS";
    }
}

function internalConfirmSetup() {
    st.ConfirmSetup(playerTeam).then(data => {
        [slots, player1Bank, player2Bank] = data;
        setTimeout(() => {
            queryTurn();
        }, 5000);
    });
}

function queryTurn() {
    st.awaitTurn(playerTeam).then(res => {
        [slots, player1Bank, player2Bank, waitingOn, lastInfo] = res;
        if (waitingOn == playerTeam) {
            specialType = -1;
            specialHighlight = [];
            playerTurn();
            document.getElementById("TurnNotice").innerHTML = "Your Turn - " + lastInfo;
        } else {
            document.getElementById("TurnNotice").innerHTML = "Waiting - " + lastInfo;
            setTimeout(() => {
                queryTurn();
            }, 5000);
        }
    });
}

function turnOver() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            if (slots[i][j].type != "Volcano") {
                let elementButton = document.getElementById("SB" + i + "" + j);
                elementButton.disabled = true;
            }
        }
    }
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) { 
                let elementButton = document.getElementById("PB" + el.occupant.id);
                elementButton.disabled = true;
            }
        });
    });
    document.getElementById("SUB").disabled = true;
    st.endTurn([slots, player1Bank, player2Bank, playerTeam, lastInfo, specialHighlight]);
    setTimeout(() => {
        queryTurn();
    }, 10000);
}

function checkSameTeam(p1, p2) {
    let team1 = p1.team;
    if (p1.enchanted) {
        team1 = !team1;
        team1 = team1*1;
    }
    let team2 = p2.team;
    if (p2.enchanted) {
        team2 = !team2;
        team2 = team2*1;
    }
    return team1 == team2;
}

function specialTwoSpaces() {
    console.log(movingFrom);
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) {
                let piece = el.occupant;
                if (piece.id == movingFrom.occupant.id) {
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 10; j++) {
                            let k = Math.round(el.x);
                            console.log(k);
                            let l = Math.round(el.y);
                            let el2 = slots[i][j];
                            let xDifference = Math.abs(k - el2.x);
                            let yDifference = Math.abs(l - el2.y);
                            let validPath = true;
                            if ((xDifference + yDifference > 3) || (xDifference + yDifference == 0)) {
                                validPath = false;
                            }
                            if (el2.type == "Volcano") {
                                validPath = false;
                            }
                            if (xDifference + yDifference == 2) {
                                validPath = true;
                            }
                            if (xDifference + yDifference == 3) {
                                if (xDifference <= 2 && yDifference <= 2) {
                                    validPath = true;
                                } else {
                                    validPath = false;
                                }
                                if (yDifference == 3 && (k == 2 || k == 3 || k == 6 || k == 7)) {
                                    validPath = true;
                                }
                                if (xDifference == 3 && (l == 3 || l == 4)) {
                                    validPath = true;
                                }
                            }
                            if (xDifference + yDifference == 4) {
                                if (xDifference == 2 && yDifference == 2){
                                    validPath = true;
                                }
                            }
                            if (validPath) {
                                if (el2.occupant != null) {
                                    if(!checkSameTeam(piece, el2.occupant)){
                                        if (!(specialType == 6 && el2.occupant.enchanted)) {
                                            let combatButton = document.getElementById("PB" + el2.occupant.id);
                                            document.getElementById("PB" + el2.occupant.id).disabled = false;
                                            combatButton.onclick = stsHandler;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
}

function stsHandler(id) {
    let source = id.srcElement.id.substring(2); 
    if (id.srcElement.id.substring(0, 2) == "PB") {
        slots.forEach((element) => {
            element.forEach((el) => {
                if (el.occupant != null && el.occupant.id == source) {
                    source = "" + el.y + "" + el.x;
                    if (playerTeam == 0) {
                        source = "" + (7 - Math.round(el.y)) + "" + (9 - Math.round(el.x));
                    }


                    specialHighlight.push(movingFrom.occupant);
                    specialHighlight.push(el.occupant);
                    if (specialType == 9) {
                        lastInfo = "Mage revealed " + el.occupant.name;
                    }

                    if (specialType == 6) {
                        if (el.occupant.power < 6 && el.occupant.power > 0) {
                            el.occupant.enchanted = true;
                            lastInfo = "Sorceress enchanted " + el.occupant.name;
                        } else {
                            lastInfo = "Sorceress failed to enchant.";
                        }
                    }

                    if (specialType == 4) {
                        if (el.occupant.power < 4 && el.occupant.power > 0) {
                            lastInfo = "Elf killed " + el.occupant.name;
                            [player1Bank, player2Bank] = st.returnBank(el.occupant);
                            st.addRetP(el.occupant);
                            el.occupant = null;
                        } else {
                            lastInfo = "Elf was ineffetive.";
                        }

                    }


                }
            });
        });
    }
    st.redraw(slots);
    turnOver();
}

function specialBeast(tile) {
    let piecesToAttack = [];
    let numKills = 0;
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    let attacker = null;
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) {
                let piece = el.occupant;
                if (piece.id == tile.occupant.id) {
                    attacker = piece;
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 10; j++) {
                            let k = Math.round(el.x);
                            let l = Math.round(el.y);
                            let el2 = slots[i][j];
                            let xDifference = Math.abs(k - el2.x);
                            let yDifference = Math.abs(l - el2.y);
                            if (xDifference <= 1 && yDifference <= 1) {
                                if (el2.occupant != null && el2.id != piece.id) {
                                    if (el2.occupant.power > 0) {
                                        piecesToAttack.push(el2);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    let hasLost = false;
    piecesToAttack.forEach(enmy => {
        specialHighlight.push(enmy.occupant);
        let battleOutcome = pieceCombat(attacker, enmy.occupant);
        if (battleOutcome == "LOSS" || "DRAW") {
            hasLost = true;
        }
        if (battleOutcome == "WIN" || battleOutcome == "DRAW") {
            [player1Bank, player2Bank] = st.returnBank(enmy.occupant);
            st.addRetP(enmy.occupant);
            enmy.occupant = null;
            numKills++;
        }
    })
    if (hasLost) {
        [player1Bank, player2Bank] = st.returnBank(attacker);
        st.addRetP(attacker);
        attacker = null;
    }
    lastInfo = "Beast killed " + numKills + " pieces";
}

function specialDragon() {
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) {
                let piece = el.occupant;
                if (piece.id == movingFrom.occupant.id) {
                    movingFrom = el;
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 10; j++) {
                            let k = Math.round(el.x);
                            let l = Math.round(el.y);
                            let el2 = slots[i][j];
                            let xDifference = Math.abs(k - el2.x);
                            let yDifference = Math.abs(l - el2.y);
                            let validPath = true;
                            if (xDifference == 0 && yDifference > 1) {
                                let startingY = Math.round(l);
                                let endingY = el2.y;
                                let diff = 1;
                                if (startingY > endingY) diff = -1;
                                startingY = startingY + diff;
                                while (startingY != endingY && validPath) {
                                    if (slots[startingY][j].type == "Volcano" || slots[startingY][j].occupant == null) {
                                        validPath = false;
                                    }
                                    startingY = startingY + diff;
                                }
                            } else if (yDifference == 0 && xDifference > 1) {
                                let startingX = Math.round(k);
                                let endingX = el2.x;
                                let diff = 1;
                                if (startingX > endingX) diff = -1;
                                startingX = startingX + diff;
                                while (startingX != endingX && validPath) {
                                    if (slots[i][startingX].type == "Volcano" || slots[i][startingX].occupant == null) {
                                        validPath = false;
                                    }
                                    startingX = startingX + diff;
                                }
                            } else {
                                validPath = false;
                            }
                            if (validPath) {
                                if (el2.occupant == null) {
                                    let elementButton = document.getElementById("SB" + el2.y + "" + el2.x);
                                    if (playerTeam == 0) {
                                        elementButton = document.getElementById("SB" + (7 - el2.y) + "" + (9 - el2.x));   
                                    }
                                    elementButton.disabled = false;
                                    elementButton.onclick = dragonHandler;
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
}

function dragonHandler(id) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            if (slots[i][j].type != "Volcano") {
                let elementButton = document.getElementById("SB" + i + "" + j);
                elementButton.disabled = true;
            }
        }
    }
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) { 
                let elementButton = document.getElementById("PB" + el.occupant.id);
                elementButton.disabled = true;
            }
        });
    });
    let source = id.srcElement.id.substring(2);
    let to = slots[source.substring(0, 1)][source.substring(1, 2)];
    movePiece(to, movingFrom);
    st.redraw(slots);
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    let numValids = 0
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) {
                let piece = el.occupant;
                if (piece.id == to.occupant.id) {
                    let unselectButton = document.getElementById("PB" + el.occupant.id);
                    unselectButton.disabled = false;
                    unselectButton.onclick = dragonDone;
                    movingFrom = el;
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 10; j++) {
                            let k = Math.round(el.x);
                            let l = Math.round(el.y);
                            let el2 = slots[i][j];
                            let xDifference = Math.abs(k - el2.x);
                            let yDifference = Math.abs(l - el2.y);
                            let validPath = true;
                            if ((xDifference + yDifference > 1) || (xDifference + yDifference == 0)) {
                                validPath = false;
                            }
                            if (xDifference == 1 && yDifference == 1) {
                                validPath = true;
                            }
                            if (el2.type == "Volcano") {
                                validPath = false;
                            }
                            if (validPath) {
                                if (el2.occupant != null) {
                                    if(!checkSameTeam(piece, el2.occupant)){
                                        numValids++;
                                        let combatButton = document.getElementById("PB" + el2.occupant.id);
                                        document.getElementById("PB" + el2.occupant.id).disabled = false;
                                        combatButton.onclick = dragonFire;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    });
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    specialHighlight.push(to.occupant);
    lastInfo = "Dragon flew over pieces.";
    if (numValids == 0) {
        turnOver();
    }
}

function dragonFire(id) {
    let source = id.srcElement.id.substring(2);
    if (id.srcElement.id.substring(0, 2) == "PB") {
        slots.forEach((element) => {
            element.forEach((el) => {
                if (el.occupant != null && el.occupant.id == source) {
                    specialHighlight.push(el.occupant);
                    if (el.occupant.power > 0 && el.occupant.power < 10) {
                        [player1Bank, player2Bank] = st.returnBank(el.occupant);
                        st.addRetP(el.occupant);
                        el.occupant = null;   
                    }
                    lastInfo = "Dragon attacked a piece after flying.";
                    dragonDone();
                }
            });
        });
    }
}

function dragonDone() {
    turnOver();
}