import * as gp from "./gamePiece.js";
var slots = [[], [], [], [], [], [], [], []];
var player1Bank = [];
var player2Bank = [];
var gameBoard;
var teamColors = ["#194da6", "#b81212"];
var banks = [player1Bank, player2Bank];
var friendlyPieceNames;
var setupTeam;
var setupPieceHolder;
var playerTurn;
var returnPiece = [];
var lastInfo = "No moves yet.";
var specialHighlight = [];
var gameStarted = false;

export function draw(team) {
    setupTeam = team;
    drawGrid();
    makeGamePieces(team);
    return pullData().then(res => {
        if (banks[team].length == 30) {
            setupDefense(team);
        }
        return [slots, player1Bank, player2Bank, playerTurn];
    });
}

function drawGrid() {
    gameBoard = document.getElementById("gameBoard");
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            let space = document.createElement("div");
            space.id = "slot" +  i + "" + j;
            space.style = "position: fixed; width: 4vmin; height: 4vmin; top: " + (25 + i*5) + "vmin; left: " + (25 + j*5) + "vmin; border: 1px solid black";
            let slotButton = document.createElement("button");
            slotButton.id = "SB" + i + "" + j;
            slotButton.disabled = true;
            space.appendChild(slotButton);
            document.getElementById("grid").appendChild(space);
            slots[i][j] = new gp.GamePiece(i, j);       
        }
    }
    if (setupTeam == 0) {
        slots = swapSlots(slots);
    }
    let volcs = [[3, 2], [3, 3], [4, 2], [4, 3], [3, 6], [3, 7], [4, 6], [4, 7]];
    for (let i = 0; i < volcs.length; i++) {
        slots[volcs[i][0]][volcs[i][1]].type = "Volcano";
        if (i%4 != 0) {
            document.getElementById("grid").removeChild(document.getElementById("slot" + volcs[i][0] + "" + volcs[i][1]));
        }
        
    } 
    document.getElementById("slot32").style = "position: fixed; width: 9vmin; height: 9vmin; top: 40vmin; left: 35vmin; border: 1px solid black; background-color: #fc4903";
    document.getElementById("slot36").style = "position: fixed; width: 9vmin; height: 9vmin; top: 40vmin; left: 55vmin; border: 1px solid black; background-color: #fc4903";
}

function makeGamePieces(team) {
    let pieceTypes = [gp.Flag, gp.Trap, gp.Slayer, gp.Scout, gp.Dwarf, gp.Elf, gp.Beast, gp.Sorceress, gp.BeastRider, gp.Knight, gp.Mage, gp.Dragon];
    let pieceCounts = [1, 7, 8, 12, 17, 19, 21, 23, 26, 28, 29, 30];
    let pieceInitials = ["F", "T", "SL", "SC", "DW", "E", "5", "SO", "BR", "K", "M", "DR"];
    friendlyPieceNames = [];
    let j = 0;
    for (let i = 0; i < 30; i++) {
        if (i >= pieceCounts[j]) {
            j++;
        }
        let pieceHolder = document.createElement("div");
        let pieceName = team + ""  + pieceTypes[j].name + "" + (pieceCounts[j]-i);
        friendlyPieceNames.push(pieceName);
        pieceHolder.id = pieceName;
        pieceHolder.style = "position: fixed; width: 4vmin; height: 4vmin; top: " + (70 + Math.floor(i/10)*5) + "vmin; left: " + (25 + (i%10)*5) + "vmin; background-color: " + teamColors[team] + ";";
        let pieceButton = document.createElement("button");
        pieceButton.id = "PB" + pieceName;
        pieceButton.innerText = pieceInitials[j];
        pieceButton.disabled = true;
        pieceHolder.append(pieceButton);
        document.getElementById("FriendlyBase").appendChild(pieceHolder);
        banks[team].push(new pieceTypes[j](team, pieceName));
    }
    let baseButton = document.createElement("button");
    baseButton.id = "BB";
    baseButton.style = "position: fixed; width: 4vmin; height: 4vmin; left: 80vmin; top: 75vmin;"
    baseButton.disabled = true;
    document.getElementById("FriendlyBase").appendChild(baseButton);
    team = !team;
    team = team*1;
    j = 0;
    for (let i = 0; i < 30; i++) {
        if (i >= pieceCounts[j]) {
            j++;
        }
        let pieceHolder = document.createElement("div");
        let pieceName = team + ""  + pieceTypes[j].name + "" + (pieceCounts[j]-i);
        pieceHolder.id = pieceName;
        pieceHolder.style = "position: fixed; width: 4vmin; height: 4vmin; top: " + (5 + Math.floor(i/10)*5) + "vmin; left: " + (25 + (i%10)*5) + "vmin; background-color: " + teamColors[team];
        let pieceButton = document.createElement("button");
        pieceButton.id = "PB" + pieceName;
        pieceButton.disabled = true;
        pieceHolder.append(pieceButton);
        document.getElementById("EnemyBase").appendChild(pieceHolder);
        banks[team].push(new pieceTypes[j](team, pieceName));
    }
}

export function redraw(upd) {
    slots = upd;
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            if (slots[i][j].occupant != null) {
                let tileElement = document.getElementById("slot" +  i + "" + j);
                moveChild(tileElement);
                let playerTile = document.getElementById("" + slots[i][j].occupant.id);
                playerTile.style = "position: fixed; width: 4vmin; height: 4vmin; top: " + (25 + i*5) + "vmin; left: " + (25 + j*5) + "vmin; background-color: " + teamColors[slots[i][j].occupant.team] + "; border: 1px solid black;";
                tileElement.appendChild(playerTile);
            } else {
                let tileElement = document.getElementById("slot" +  i + "" + j);
                moveChild(tileElement);
            }
        }
    }
}

function moveChild(el) {
    if (el == null) {
        return;
    }
    let tempParent = document.getElementById("TempParent");
    while (el.children.length > 1) {
        tempParent.appendChild(el.lastChild);
    }
}

function pullData() {
    return readData().then(data => {
        if (data.slots.length > 0){
            slots = data.slots;
            if (setupTeam == 0) {
                slots = swapSlots(slots);
            }
            player1Bank = data.player1;
            player2Bank = data.player2;
            playerTurn = data.playerTurn;
            banks = [player1Bank, player2Bank];
            redraw(slots);
        } else {
            playerTurn = -1;
        }
        return;
    });
    
}

function setupDefense(team) {
    if (banks[team].length == 0) {
        document.getElementById("ConfirmSetup").hidden = false;
    }

    for (let i = 5; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            document.getElementById("SB" + i + "" + j).disabled = true;
        }
    }
    document.getElementById("BB").disabled = true;
    for (let i = 0; i < friendlyPieceNames.length; i++) {
        document.getElementById("PB" + friendlyPieceNames[i]).disabled = false;
        document.getElementById("PB" + friendlyPieceNames[i]).onclick = moveForSetup;
    }
}

function moveForSetup(id) {
    let source = id.srcElement.id.substring(2);
    let sourceInBank = false;
    let temp = 0
    banks[setupTeam].forEach(el => {
        if (el.id == source) {
            sourceInBank = true;
            setupPieceHolder = el;
            banks[setupTeam].splice(temp, 1);
        }
        temp++;
    });
    if (!sourceInBank) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 10; j++) {
                if (!(slots[i][j].occupant == null) && slots[i][j].occupant.id == source) {
                    setupPieceHolder = slots[i][j].occupant;
                    slots[i][j].occupant = null;
                }
            }
        }
        document.getElementById("BB").disabled = false;
        document.getElementById("BB").onclick = setupReturnBank;
    }
    for (let i = 5; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            if (slots[i][j].occupant == null) {
                document.getElementById("SB" + i + "" + j).disabled = false;
                document.getElementById("SB" + i + "" + j).onclick = selectForSetup;
            }
        }
    }
    for (let i = 0; i < friendlyPieceNames.length; i++) {
        document.getElementById("PB" + friendlyPieceNames[i]).disabled = true;
    }
}

function selectForSetup(id) {
    let source = id.srcElement.id.substring(2);
    let y = source.substring(0, 1);
    let x = source.substring(1, 2);
    setupPieceHolder.x = x;
    setupPieceHolder.y = y;
    slots[y][x].occupant = setupPieceHolder;
    redraw(slots);
    setupDefense(setupTeam);
}

function setupReturnBank(id) {
    let source = setupPieceHolder.id;
    banks[setupTeam].push(setupPieceHolder);
    let j = 0;
    let pieceTypes = [gp.Flag, gp.Trap, gp.Slayer, gp.Scout, gp.Dwarf, gp.Elf, gp.Beast, gp.Sorceress, gp.BeastRider, gp.Knight, gp.Mage, gp.Dragon];
    let pieceCounts = [1, 7, 8, 12, 17, 19, 21, 23, 26, 28, 29, 30];
    for (let i = 0; i < 30; i++) {
        if (i >= pieceCounts[j]) {
            j++;
        }
        let tester = setupTeam + ""  + pieceTypes[j].name + "" + (pieceCounts[j]-i);
        if (tester == source) {
            document.getElementById("FriendlyBase").appendChild(document.getElementById(source));
            document.getElementById(source).style = "position: fixed; width: 4vmin; height: 4vmin; top: " + (70 + Math.floor(i/10)*5) + "vmin; left: " + (25 + (i%10)*5) + "vmin; background-color: " + teamColors[setupTeam] + ";";
        }
    }
    redraw(slots);
    setupDefense(setupTeam);
}

export function returnBank(piece) {
    let source = piece.id;
    let team = piece.team;
    banks[team].push(piece);
    let j = 0;
    let pieceTypes = [gp.Flag, gp.Trap, gp.Slayer, gp.Scout, gp.Dwarf, gp.Elf, gp.Beast, gp.Sorceress, gp.BeastRider, gp.Knight, gp.Mage, gp.Dragon];
    let pieceCounts = [1, 7, 8, 12, 17, 19, 21, 23, 26, 28, 29, 30];
    for (let i = 0; i < 30; i++) {
        if (i >= pieceCounts[j]) {
            j++;
        }
        let tester = team + ""  + pieceTypes[j].name + "" + (pieceCounts[j]-i);
        let baseName = "EnemyBase";
        let yOffset = 5;
        if (team == setupTeam) {
            baseName = "FriendlyBase";
            yOffset = 70;
        } 
        if (tester == source) {
            document.getElementById(baseName).appendChild(document.getElementById(source));
            document.getElementById(source).style = "position: fixed; width: 4vmin; height: 4vmin; top: " + (yOffset + Math.floor(i/10)*5) + "vmin; left: " + (25 + (i%10)*5) + "vmin; background-color: " + teamColors[team] + ";";
            document.getElementById("PB" + source).disabled = true;
        }
    }
    player1Bank = banks[0];
    player2Bank = banks[1];
    return [banks[0], banks[1]];
}

export function ConfirmSetup(team) {
    setupTeam = team;
    document.getElementById("ConfirmSetup").hidden = true;
    document.getElementById("TurnNotice").hidden = false;

    for (let i = 5; i < 8; i++) {
        for (let j = 0; j < 10; j++) {
            document.getElementById("SB" + i + "" + j).disabled = true;
        }
    }
    document.getElementById("BB").disabled = true;
    for (let i = 0; i < friendlyPieceNames.length; i++) {
        document.getElementById("PB" + friendlyPieceNames[i]).disabled = true;
    }
    return readData().then((data) => {
        if (data.slots.length > 0) {
            player1Bank = [];
            player2Bank = [];
            banks = [[], []];
        }
        if (setupTeam == 0) {
            slots = swapSlots(slots);
            if (data.slots.length > 0) {
                slots[5] = data.slots[5];
                slots[6] = data.slots[6];
                slots[7] = data.slots[7];
            }
            console.log("SETUP BLUE");
            console.log(slots);
            writeData();
            slots = swapSlots(slots);
        } else {
            slots[0] = data.slots[0];
            slots[1] = data.slots[1];
            slots[2] = data.slots[2];
            writeData();
        }
        return [slots, player1Bank, player2Bank];
    });
}

export function swapSlots(inp) {
    let out = [];
    for (let i = 7; i > -1; i--) {
        let outRow = [];
        for (let j = 9; j > -1; j--) {
            outRow.push(inp[i][j]);
        }
        out.push(outRow);
    }
    return out;
}

export function awaitTurn(team) {
    console.log("waitingForTurn")
    gameStarted = true;
    return readData().then(data => {
        slots = data.slots;
        console.log(slots);
        if (team == 0) {
            slots = swapSlots(slots);
        }
        player1Bank = data.player1;
        player2Bank = data.player2;
        playerTurn = data.playerTurn;
        lastInfo = data.lastMove;
        banks = [player1Bank, player2Bank];
        returnPiece = data.returnPiece;
        if (returnPiece != null && returnPiece.length > 0) {
            returnPiece.forEach(retP => {
                returnBank(retP);
            });
        }
        returnPiece = [];
        redraw(slots);
        specialHighlight = data.specialHighlight;
        while (document.getElementById("specialHighlights").hasChildNodes()) {
            document.getElementById("specialHighlights").removeChild(document.getElementById("specialHighlights").firstChild);
        }
        if (specialHighlight != null && specialHighlight.length > 0) {
            specialHighlight.forEach(spot => {
                let tempChild = document.createElement("div");
                tempChild.style = "position: fixed; width: 4vmin; height: 4vmin; background-color: yellow; opacity: 0.7; clip-path: circle(25% at 50% 50%);";
                tempChild.style.left = document.getElementById(spot.id).style.left;
                tempChild.style.top = document.getElementById(spot.id).style.top;

                document.getElementById("specialHighlights").appendChild(tempChild);
            });
        }
        specialHighlight = [];
        return [slots, player1Bank, player2Bank, playerTurn, lastInfo];
    });
}

export function endTurn(upd) {
    [slots, player1Bank, player2Bank, setupTeam, lastInfo, specialHighlight] = upd;
    while (document.getElementById("specialHighlights").hasChildNodes()) {
        document.getElementById("specialHighlights").removeChild(document.getElementById("specialHighlights").firstChild);
    }
    if (specialHighlight != null && specialHighlight.length > 0) {
        specialHighlight.forEach(spot => {
            let tempChild = document.createElement("div");
            tempChild.style = "position: fixed; width: 4vmin; height: 4vmin; background-color: yellow; opacity: 0.7; clip-path: circle(25% at 50% 50%);";
            tempChild.style.left = document.getElementById(spot.id).style.left;
            tempChild.style.top = document.getElementById(spot.id).style.top;

            document.getElementById("specialHighlights").appendChild(tempChild);
        });
    }
    if (setupTeam == 0) {   
        slots = swapSlots(slots);
        writeData();
        slots = swapSlots(slots);
    } else {
        writeData();
    }
}

function readData() {
    return fetch('https://hack-box.vercel.app/stratego').then(res => {
        return res.json().then(data => {
            return data;
        });
    });
}

function writeData() {
    if ((player1Bank.length == 30 || player2Bank.length == 30) && (!gameStarted)) {
        playerTurn = -1;
        gameStarted = true;
    } else {
        console.log("SHOULD NEVER BE -1");
        if (playerTurn == -1) {
            playerTurn = Math.round(Math.random());
        }
        if (playerTurn == 0) {
            playerTurn = 1;
        } else if (playerTurn == 1) {
            playerTurn = 0;
        }
    }
    document.getElementById("TurnNotice").innerHTML = "Waiting - " + lastInfo;
    fetch("https://hack-box.vercel.app/stratego", {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify({"slots": slots, "player1": player1Bank, "player2": player2Bank, "playerTurn": playerTurn, "returnPiece": returnPiece, "lastMove": lastInfo, "specialHighlight": specialHighlight})});
}

export function addRetP(p) {
    returnPiece.push(p);
}