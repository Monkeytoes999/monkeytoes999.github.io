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
            if (el.occupant != null && ((el.occupant.team == playerTeam && el.occupant.enchanted == false) || (el.occupant.team != playerTeam && el.occupant.enchanted == true))) { 
                let elementButton = document.getElementById("PB" + el.occupant.id);
                elementButton.disabled = el.occupant.speed == 0;
                elementButton.onclick = pieceAction;
            }
        });
    });
}

function pieceAction(id) {
    let valids = [];
    let source = id.srcElement.id.substring(2);
    if (playerTeam == 0) {
        slots = st.swapSlots(slots);
    }
    slots.forEach((element) => {
        element.forEach((el) => {
            if (el.occupant != null) {
                let piece = el.occupant;
                if (!(valids.includes("" + el.y + "" + el.x))) document.getElementById("PB" + piece.id).disabled = true;
                if (piece.id == source) {
                    console.log(el.x, el.y);
                    movingFrom = el;
                    let unselectButton = document.getElementById("PB" + el.occupant.id);
                    unselectButton.disabled = false;
                    unselectButton.onclick = moveHandler;
                    for (let i = 0; i < 8; i++) {
                        for (let j = 0; j < 10; j++) {
                            let el2 = slots[i][j];
                            let xDifference = Math.abs(el.x - el2.x);
                            let yDifference = Math.abs(el.y - el2.y);
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
                                    let startingY = Math.round(el.y);
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
                                    let startingX = Math.round(el.x);
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
                                    let xVal = Math.round(el.x);
                                    let yVal = Math.round(el.y);  
                                    if (slots[yVal][el2.x].type == "Volcano" || slots[yVal][el2.x].occupant != null) {
                                        if (slots[el2.y][xVal].type == "Volcano" || slots[el2.y][xVal].occupant != null) {
                                            validPath = false;
                                        }
                                    }
                                }
                            }
                            if (validPath) {
                                let elementButton = document.getElementById("SB" + el2.y + "" + el2.x);
                                elementButton.disabled = false;
                                elementButton.onclick = moveHandler;
                                if (el2.occupant != null) {
                                    let combatButton = document.getElementById("PB" + el2.occupant.id);
                                    document.getElementById("PB" + el2.occupant.id).disabled = false;
                                    combatButton.onclick = moveHandler;
                                }
                                valids.push("" + el2.y + "" + el2.x);
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
                }
            });
        });
    }
    let to = slots[source.substring(0, 1)][source.substring(1, 2)];
    let xDifference = Math.abs(movingFrom.x - to.x);
    let yDifference = Math.abs(movingFrom.y - to.y);
    if (xDifference + yDifference == 0){
        playerTurn();
    } else if (to.occupant != null) {
        let combatVictory = pieceCombat(movingFrom.occupant, to.occupant);
        console.log(combatVictory);
        turnOver();
    } else {
        let pieceMoved = movePiece(to, movingFrom);
        if (pieceMoved) {
            st.redraw(slots);
            turnOver();
        }
    }
        
}

function specialHandler() {

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
    if (to.occupant.team == piece.team) {
        return false;
    } else {
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
        [slots, player1Bank, player2Bank, waitingOn] = res;
        if (waitingOn == playerTeam) {
            playerTurn();
        } else {
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
                console.log("SB" + i + "" + j);
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

    st.endTurn([slots, player1Bank, player2Bank, playerTeam]);
    setTimeout(() => {
        queryTurn();
    }, 10000);
}