active = false;
spc = 0;
t = 0;
eid = 0;
ch = [];
bul = [];
movSpeed = 3;
tpSpeed = 2;
facing = "l";
fire = true;
to = 0;
coins = 0;
skins = [0];
availableSkins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
skinPngs = ["gGun.png", "greyP.png", "gTMBG.png", "bTMBG.png", "meats.png", "math.png", "navyP.png", "LTT.png", "yTMBG.png", "hp.png", "history.png", "aquarium.png", "yLatin.png", "moes.png", "rBrusters.png", "seaworld.png", "blueP.png", "bLatin.png", "hitchhikers.png", "LTTp.png", "5k.png", "cloak.png"];
rSymbs = ["cSymb.png", "cSymb.png", "uSymb.png", "uSymb.png", "rSymb.png", "lSymb.png", "cSymb.png", "uSymb.png", "uSymb.png", "rSymb.png", "lSymb.png", "cSymb.png", "uSymb.png", "uSymb.png", "rSymb.png", "lSymb.png", "uSymb.png", "uSymb.png", "uSymb.png", "rSymb.png", "lSymb.png", "mSymb.png"];
defSkin = 0;
skinPointer = 0;
incoming = false;
round = 1;
rActive = false;
completionBonus = 0;
difficulty = 1;
fireSpeed = 5;
bulletDamage = 1;
perfectRound = true;
igcVal = 0;
upgCost = 25;
upgDelay = false;
fireDown = false;
skinSet = 0;
gambCosts = [25, 75, 150, 250, 0];
beaten = [];
enemyKills = [];
logEntry = 0;
upgradeFunctions = [upgFire, upgDmg, upgSpBFreq, upgPierceAmt, upgFreezeDur, upgGemMulti, upgExGold];
upgradePngs = ["fireSpeed.png", "damageUp.png", "spFrequency.png", "pierceUp.png", "freezeDur.png", "gemMulti.png", "extraCoins.png"];
upgradeNames = ["Increase Fire Speed", "Increase Damage", "Increase Special Bullet Frequency", "Increase Pierce Amount", "Increase Freeze Duration", "Increase Gem Multiplier", "Increase Gold Multiplier"];
chUpgrades = [0, 1, 2];
specialFrequency = 0;
bulletsFired = 0;
specialType = "f";
freezeDur = 0;
pierceAmount = 0;
gemMultiplier = 1;
extraGold = 1;
endlessDifficulty = 1;
endlessRunningBonus = 5;
gameOver = false;
winDesc = ["Common Black Polo", "Common Grey Polo", "Uncommon Green TMBG Shirt", "Uncommon Blue TMBG Shirt", "Rare 'The Meats' Shirt", "Legendary Math Competition Shirt", "Common Navy Polo", "Uncommon LTT! Shirt", "Uncommon Yellow TMBG Shirt", "Rare Harry Potter Shirt", "Legendary History Fair Shirt", "Common Aquarium Shirt", "Uncommon Yellow Latin Club Shirt", "Uncommon Moes Shirt", "Rare Brusters Shirt", "Legendary SeaWorld Shirt", "Uncommon Blue Polo", "Uncommon Blue Latin Club Shirt", "Uncommon Hitchhikers Shirt", "Rare LTT! Performance Outfit", "Legendary 5K Shirt", "The Cloak"];
document.getElementById("price").innerHTML = gambCosts[skinSet];
loadFromCookies();

addEventListener("keydown", (event) => {
    if (event.key == "a") {
        document.getElementById("gGunT").style.transform = "rotateY(180deg)";
        facing = "l";
    } else if (event.key == "d") {
        document.getElementById("gGunT").style.transform = "rotateY(0deg)";
        facing = "r";
    }
    if (event.key == " ") {
        fireDown = true;
    }
});
addEventListener("keyup", (event) => {
    if (event.key == " ") {
        fireDown = false;
    }
});

function tick() {
    document.getElementById("coinValue").innerHTML = coins;
    document.getElementById("igcVal").innerHTML = igcVal;
    document.getElementById("upgPrice").innerHTML = upgCost;

    if (t % 3 == 0){
        spawners();

        ch.forEach((b) => {
            if (b != null) {
                b.move();
            }
        });
    }
    if (fire && fireDown) {
        fire = false;
        bulletsFired = bulletsFired + 1;
        if (specialFrequency != 0){
            if (bulletsFired % specialFrequency == 0) {
                new Bullet(facing, specialType);
            } else {
                new Bullet(facing, "n");
            }
        } else {
            new Bullet(facing, "n");
        }
        to = t + fireSpeed;
    }
    if (t >= to) {
        fire = true;
    }
    t++;
    
    bulI = 0;
    remove = [];
    bul.forEach((b) => {
        if (b != null) {
            if (b.move()) {
                var element = document.getElementById(b.id);
                element.parentNode.removeChild(element);
                remove.push(bulI);
            }
        }
        bulI++;
    });
    for (i = remove.length - 1; i >= 0 ; i--) {
        bul.splice(remove[i], 1);
    };


    if (igcVal >= upgCost) {
        document.getElementById("upgPrice").style.color = "white";
        document.getElementById("upg1").disabled = false;
        document.getElementById("upg2").disabled = false;
        document.getElementById("upg3").disabled = false;
        document.getElementById("upg1").classList.remove("upgOff");
        document.getElementById("upg2").classList.remove("upgOff");
        document.getElementById("upg3").classList.remove("upgOff");
        if (chUpgrades[0] == 0) { 
            if (fireSpeed > 1) {
                document.getElementById("upg1").disabled = false;
                document.getElementById("upg1").classList.remove("upgOff");
            } else {
                document.getElementById("upg1").classList.add("upgOff");
                document.getElementById("upg1").disabled = true;
            }
        }
        if (chUpgrades[1] == 0) { 
            if (fireSpeed > 1) {
                document.getElementById("upg2").disabled = false;
                document.getElementById("upg2").classList.remove("upgOff");
            } else {
                document.getElementById("upg2").classList.add("upgOff");
                document.getElementById("upg2").disabled = true;
            }
        }
        if (chUpgrades[1] == 0) { 
            if (fireSpeed > 1) {
                document.getElementById("upg3").disabled = false;
                document.getElementById("upg3").classList.remove("upgOff");
            } else {
                document.getElementById("upg3").classList.add("upgOff");
                document.getElementById("upg3").disabled = true;
            }
        }
        if (chUpgrades[0] == 2) { 
            if (specialFrequency != 1) {
                document.getElementById("upg1").disabled = false;
                document.getElementById("upg1").classList.remove("upgOff");
            } else {
                document.getElementById("upg1").classList.add("upgOff");
                document.getElementById("upg1").disabled = true;
            }
        }
        if (chUpgrades[1] == 2) { 
            if (specialFrequency != 1) {
                document.getElementById("upg2").disabled = false;
                document.getElementById("upg2").classList.remove("upgOff");
            } else {
                document.getElementById("upg2").classList.add("upgOff");
                document.getElementById("upg2").disabled = true;
            }
        }
        if (chUpgrades[2] == 2) { 
            if (specialFrequency != 1) {
                document.getElementById("upg3").disabled = false;
                document.getElementById("upg3").classList.remove("upgOff");
            } else {
                document.getElementById("upg3").classList.add("upgOff");
                document.getElementById("upg3").disabled = true;
            }
        }
    } else {
        document.getElementById("upgPrice").style.color = "red";
        document.getElementById("upg1").classList.add("upgOff");
        document.getElementById("upg1").disabled = true;
        document.getElementById("upg2").classList.add("upgOff");
        document.getElementById("upg2").disabled = true;
        document.getElementById("upg3").classList.add("upgOff");
        document.getElementById("upg3").disabled = true;
    }
    upgDelay = false;

    setTimeout(() => {
        if (rActive) { 
            tick(); 
        }
    }, 50);

    if (ch.length == 0 && !incoming) {
        roundTrigger();
    }
}


function spawners() {
    switch (spc){
        case 0:
            document.getElementById("s12").hidden = false;
            document.getElementById("s13").hidden = false;
            document.getElementById("s14").hidden = false;
            document.getElementById("s15").hidden = false;
            document.getElementById("s22").hidden = false;
            document.getElementById("s23").hidden = false;
            document.getElementById("s24").hidden = false;
            document.getElementById("s25").hidden = false;
            break;
        case 1:
            document.getElementById("s11").hidden = true;
            document.getElementById("s21").hidden = true;
            break;
        case 2:
            document.getElementById("s12").hidden = true;
            document.getElementById("s13").hidden = true;
            document.getElementById("s14").hidden = true;
            document.getElementById("s15").hidden = true;
            document.getElementById("s22").hidden = true;
            document.getElementById("s23").hidden = true;
            document.getElementById("s24").hidden = true;
            document.getElementById("s25").hidden = true;
            break;
        case 3:
            document.getElementById("s11").hidden = false;
            document.getElementById("s21").hidden = false;
            break;
    }
    spc = (spc + 1) % 4;
}

//Round
function roundTrigger() {
    coins = coins + completionBonus*extraGold;
    if (perfectRound && round > 1) {
        coins = coins + 3;
    }
    perfectRound = true;
    document.getElementById("perfRound").style.color = "black";
    incoming = true;
    maxRounds = [6, 8, 11, 16, Infinity];
    if (round < maxRounds[difficulty]) {
        document.getElementById("roundAlert").innerHTML = "Round " + round;
        document.getElementById("roundAlert").hidden = false;
        setTimeout(() => {
            document.getElementById("roundAlert").hidden = true;
        }, 5000);
    }
    if (difficulty == 0) {
        switch(round) {
            case 1:
                enemies = [{"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}];
                delays = [5000, 5000, 5000, 2000, 2000, 2000, 0, 2000, 0];
                completionBonus = 3;
                break;
            case 2:
                enemies = [{"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 1}, {"side": "r", "health": 1}];
                delays = [1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 0];
                completionBonus = 3;
                break;
            case 3:
                enemies = [{"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}];
                delays = [0, 5000, 0, 5000, 0, 2000, 0, 2000, 0]
                completionBonus = 5;
                break;
            case 4:
                enemies = [{"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}, {"side": "r", "health": 1}, {"side": "r", "health": 1}, {"side": "l", "health": 3}];
                delays = [1000, 2000, 1000, 1000, 2000, 1000, 1000, 2000, 1000, 1000, 2000, 1000];
                completionBonus = 5;
                break;
            case 5:
                enemies = [{"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}, {"side": "l", "health": 3}, {"side": "r", "health": 3}];
                delays = [1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 1000, 0, 1000, 0];
                completionBonus = 7;
                break;
            default:
                enemies = [];
                delays = [];
                completionBonus = 0;
                win();
        } 
        j = 0;
        cmD = 5000;
        for (i = 0; i < delays.length; i++) {
            setTimeout(() => {
                if (rActive) {
                    new Bert(enemies[j].side, enemies[j].health);
                }
                j++;
            }, cmD);
            cmD = cmD + delays[i];
        }
        setTimeout(() => {
            incoming = false;
            if (rActive) {
                new Bert(enemies[j].side, enemies[j].health);
            }
        }, cmD);
        round = round + 1;
    } else if (difficulty == 1) {
        switch(round) {
            case 1:
                setTimeout(() => {
                    rngSpawner(3000, 1, 5, 4000);
                }, 5000);
                break;
            case 2:
                setTimeout(() => {
                    rngSpawner(3000, 1, 5, 1000);
                }, 5000);
                break;
            case 3:
                setTimeout(() => {
                    rngSpawner(5000, 2, 7, 2000);
                }, 5000);
                break;
            case 4:
                setTimeout(() => {
                    rngSpawner(6000, 2, 10, 1500);
                }, 5000);
                break;
            case 5:
                setTimeout(() => {
                    rngSpawner(6000, 3, 10, 1000);
                }, 5000);
                break;
            case 6:
                setTimeout(() => {
                    rngSpawner(10000, 3, 20, 500);
                }, 5000);
                break
            case 7:
                setTimeout(() => {
                    rngSpawner(8500, "boss1", 22, 100);
                }, 5000);
                break;
            default:
                win();
                incoming = false;
                break;
        }
        round = round + 1;
    } else if (difficulty == 2){
        switch(round) {
            case 1:
                setTimeout(() => {
                    rngSpawner(5000, 3, 8, 2000);
                }, 5000);
                break;
            case 2:
                setTimeout(() => {
                    rngSpawner(8800, "slowI", 12, 5000);
                }, 5000);
                break;
            case 3:
                setTimeout(() => {
                    rngSpawner(8000, 4, 15, 2000);
                }, 5000);
                break;
            case 4:
                setTimeout(() => {
                    rngSpawner(4000, "fastI", 12, 5000);
                }, 5000);
                break;
            case 5:
                setTimeout(() => {
                    rngSpawner(9000, 5, 20, 2000);
                }, 5000);
                break;
            case 6: 
                setTimeout(() => {
                    rngSpawner(9000, 6, 22, 1250);
                }, 5000);
                break;
            case 7:
                setTimeout(() => {
                    rngSpawner(11600, "boss2", 30, 100);
                }, 5000);
                break;
            case 8:
                setTimeout(() => {
                    rngSpawner(12000, "onlyFast", 25, 1000);
                }, 5000);
                break;
            case 9:
                setTimeout(() => {
                    rngSpawner(15000, 7, 30, 1000);
                }, 5000);
                break;
            case 10:
                setTimeout(() => {
                    rngSpawner(20100, "b12", 30, 100);
                }, 5000);
                break;
            default:
                win();
                incoming = false;
                break;
        }
        round = round + 1;
    } else if (difficulty == 3) {
        switch(round) {
            case 1:
                setTimeout(() => {
                    rngSpawner(5600, "tpI", 10, 5000);
                }, 5000);
                break;
            case 2:
                setTimeout(() => {
                    rngSpawner(7000, 7, 12, 1000);
                }, 5000);
                break;
            case 3:
                setTimeout(() => {
                    rngSpawner(8000, 8, 15, 500);
                }, 5000);
                break;
            case 4:
                setTimeout(() => {
                    rngSpawner(9000, "robI", 20, 5000);
                }, 5000);
                break;
            case 5:
                tpSpeed = tpSpeed + 1;
                setTimeout(() => {
                    rngSpawner(15000, 9, 20, 2000);
                }, 5000);
                break;
            case 6:
                setTimeout(() => {
                    rngSpawner(15500, 10, 25, 2500);
                }, 5000);
                break;
            case 7:
                setTimeout(() => {
                    rngSpawner(6000, "spI", 20, 3000);
                }, 5000);
                break;
            case 8:
                setTimeout(() => {
                    rngSpawner(16000, 10, 30, 2500);
                }, 5000);
                break;
            case 9:
                tpSpeed = tpSpeed + 1;
                setTimeout(() => {
                    rngSpawner(20000, 15, 35, 2500);
                }, 5000);
                break;
            case 10:
                setTimeout(() => {
                    rngSpawner(30000, 15, 35, 2000);
                }, 5000);
                break;
            case 11:
                setTimeout(() => {
                    rngSpawner(40000, 15, 35, 1500);
                }, 5000);
                break;
            case 12:
                setTimeout(() => {
                    rngSpawner(50000, 20, 35, 2500);
                }, 5000);
                break;
            case 13:
                setTimeout(() => {
                    rngSpawner(60000, 20, 35, 2000);
                }, 5000);
                break;
            case 14:
                tpSpeed = tpSpeed + 1;
                setTimeout(() => {
                    rngSpawner(70000, 20, 35, 1500);
                }, 5000);
                break;
            case 15:
                setTimeout(() => {
                    rngSpawner(49900, "boss3", 50, 0);
                }, 5000);
                break;
            default:
                win();
                incoming = false;
                break;
        }
        round = round + 1;
    } else if (difficulty == 4) {
        bossNames = ["boss1", "boss2", "b12"];
        setTimeout(() => {
            if (round % 7 == 0) {
                if (round == 7) {
                    rngSpawner(8500, "boss1", 22, 100);
                } else {
                    bossHealths = [8500, 11600, 20100];
                    EBMulti = Math.floor(Math.random()*3);
                    rngSpawner(bossHealths[EBMulti]*Math.ceil(endlessDifficulty/3.5), bossNames[EBMulti], endlessRunningBonus, 2000 + 10000/endlessDifficulty);
                }
            } else if (round % 5 == 0 && Math.random() > .8) {
                rngSpawner(endlessDifficulty*Math.ceil(Math.random()*5)*800, "onlyFast", endlessRunningBonus, 1000);
            } else if (round % 5 == 0 && Math.random() > .8) {
                rngSpawner(Math.round(endlessDifficulty/2)*Math.ceil(Math.random()*2)*1500, "tpI", endlessRunningBonus, 1500);
            } else if (round % 5 == 0 && Math.random() > .8) {
                rngSpawner(Math.round(endlessDifficulty/2)*Math.ceil(Math.random()*2)*2000, "spI", endlessRunningBonus, 1500);
            } else if (round % 5 == 0 && Math.random() > .8) {
                rngSpawner(Math.round(endlessDifficulty/4)*9000, "robI", endlessRunningBonus, 1500);
            } else {
                rngSpawner(endlessDifficulty*Math.ceil(Math.random()*5)*1200, endlessDifficulty, endlessRunningBonus, Math.random()*2000 + 5000/endlessDifficulty);
            }
        }, 5000);
        round = round + 1;
        endlessRunningBonus = Math.min(Math.round(endlessRunningBonus*.5) + Math.round(endlessDifficulty/2) + round, 50);
        if (round % 2 == 0) {
            endlessDifficulty = endlessDifficulty + Math.ceil(Math.random()*2);
        }
        if (round % 10 == 0) {
            if (Math.random() > .5) {
                movSpeed = movSpeed + 2;
            } else {
                tpSpeed = tpSpeed + 1;
            }
        }
        if (round == 14) {
            bossNames.push("boss3")
        }
    } else if (difficulty == 5) {
        rngSpawner(0, "test", 0, 0);
    }
}

function rngSpawner(credits, difficulty, bonus, maxDelay) {
    completionBonus = bonus;
    if (gameOver) {
      incoming = false;
    } else if (difficulty == "boss1" && credits > 0) {
        new Bert(Math.random() > .5? "l" : "r", 85);
        setTimeout(() => {
            rngSpawner(credits - 8500, "boss1", bonus, maxDelay);
        }, Math.random()*(maxDelay-100) + 100);
    } else if (difficulty == "boss2" && credits > 0) {
        let b2side = Math.random();
        new Bert(b2side > .5? "l" : "r", 16);
        new Bert(b2side > .5? "r" : "l", 100);
        setTimeout(() => {
            rngSpawner(credits - 11600, "boss2", bonus, maxDelay);
        }, Math.random()*(maxDelay - 100) + 100);
    } else if (difficulty == "b12" && credits > 0) {
        new Bert(Math.random() > .5? "l" : "r", 85);
        let b2side = Math.random();
        new Bert(b2side > .5? "l" : "r", 16);
        new Bert(b2side > .5? "r" : "l", 100);
        setTimeout(() => {
            rngSpawner(credits - 20100, "b12", bonus, maxDelay);
        }, Math.random()*(maxDelay - 100) + 100);
    } else if (difficulty == "boss3" && credits > 0) {
        new Bert(Math.random() > .5? "l" : "r", 184);
        setTimeout(() => {
            rngSpawner(credits - 49900, "boss3", bonus, maxDelay);
        }, Math.random()*(maxDelay - 500) + 500);
    } else if (difficulty == "test") {
        new Bert("r", 90);
        setTimeout(() => {
            rngSpawner(0, 1, bonus, maxDelay);
        }, 10000);
    } else if (difficulty == "spI" && credits > 0) {
        new Bert(Math.random() > .5? "l" : "r", 20);
        setTimeout(() => {
            rngSpawner(credits - 2000, "spI", bonus, maxDelay);
        }, Math.random()*(maxDelay - 500) + 500);
    } else if (difficulty == "robI" && credits > 0) {
        new Bert(Math.random() > .5? "l" : "r", 35);
        setTimeout(() => {
            new Bert(Math.random() > .5? "l" : "r", 35);
        }, 5500);
        setTimeout(() => {
            rngSpawner(credits - 9000, "tpI", bonus, maxDelay);
        }, Math.random()*(maxDelay - 100) + 100);
    } else if (difficulty == "tpI" && credits > 0) {
        new Bert(Math.random() > .5? "l" : "r", 14);
        setTimeout(() => {
            rngSpawner(credits - 1400, "tpI", bonus, maxDelay);
        }, Math.random()*(maxDelay - 500) + 500);
    } else if (difficulty == "slowI" && credits > 0) {
        new Bert("r", 10);
        new Bert("l", 1);
        setTimeout(() => {
            rngSpawner(credits - 1100, "slowI", bonus, maxDelay);
        }, Math.random()*(maxDelay - 100) + 100);
    } else if (difficulty == "fastI" && credits > 0) {
        new Bert("r", 1);
        new Bert("l", 4);
        setTimeout(() => {
            rngSpawner(credits - 500, "fastI", bonus, maxDelay);
        }, Math.random()*(maxDelay - 100) + 100);
    } else if (difficulty == "onlyFast" && credits > 0) {
        new Bert(Math.random() > .5? "l" : "r", 4);
        setTimeout(() => {
            rngSpawner(credits - 400, "onlyFast", bonus, maxDelay);
        }, Math.random()*(maxDelay-100) + 100);
    } else if (credits >= 100) {
        canSpawn = [0];
        cost = [100, 300, 500, 1000, 400, 5000, 6000, 0, 1400, 3500, 2000, 7000];
        health = [1, 3, 5, 10, 4, 85, 100, 16, 14, 35, 20, 184];
        if (credits > 300 && difficulty < 8) {
            canSpawn.push(1);
        }
        if (credits > 500 && difficulty > 1 && difficulty < 15) {
            canSpawn.push(2);
        }
        if (difficulty > 2 && difficulty < 6) {
            if (credits > 300) {
                canSpawn.push(1);
            }
            if (credits > 500) {
                canSpawn.push(2);
            }
        }
        if (difficulty > 3) {
            if (credits > 1000) {
                canSpawn.push(3);
            }
        }
        if (difficulty > 4) {
            if (credits > 400) {
                canSpawn.push(4);
            }
        }
        if (difficulty > 5 && difficulty < 8) {
            if (credits > 1000) {
                canSpawn.push(3);
            }
            if (credits > 400) {
                canSpawn.push(4);
            }
        }
        if (difficulty > 7) {
            if (credits > 1400) {
                canSpawn.push(8);
            }
        }
        if (difficulty > 9) {
            if (credits > 3500) {
                canSpawn.push(9);
            }
        }
        if (difficulty > 11) {
            if (credits > 2000){
                canSpawn.push(10);
            }
        }
        if (difficulty > 15 && credits > 5000) {
            canSpawn.push(5);
        }
        if (difficulty > 20 && credits > 6000) {
            canSpawn.push(6);
        }
        choice = canSpawn[Math.floor(Math.random()*canSpawn.length)];
        credits = credits - cost[choice];
        if (choice == 6) {
            let b2side = Math.random();
            new Bert(b2side > .5? "l" : "r", 16);
            new Bert(b2side > .5? "r" : "l", 100);
        } else {
            new Bert(Math.random() > .5? "l" : "r", health[choice]);
        }
        setTimeout(() => {
            rngSpawner(credits, difficulty, bonus, maxDelay);
        }, Math.random()*(maxDelay - 100) + 100);
    } else {
        incoming = false;
    }
}

//Gatcha
function spinny(j) {
    speed = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3]
    if (j < 9) {
        i = 0;
        for (x = 0; x < 361; x++){
            setTimeout(() => {
                document.getElementById('gambler_f').style.transform = 'rotate(' + i + 'deg)';
                i++;
                if (i == 361){
                    spinny(j+1);
                }
            }, speed[j]*x);
        }
    } else {
        document.getElementById("balld").hidden = false;
        woop(35.5);
    }
}

function turny() {
    haveMoney = true
    if (coins < gambCosts[skinSet]) {
        haveMoney = false;
    }
    if (!active && haveMoney) {
        coins = coins - gambCosts[skinSet];
        document.getElementById("coinValue").innerHTML = coins;
        document.getElementById("cost").hidden = true;;
        active = true;
        i = 0
        for (rot = 0; rot < 180; rot++){
            setTimeout(() => {
                document.getElementById('g_arm').style.transform = 'rotateX(' + i + 'deg)';
                i++;
            }, rot*10);
        }
        for (rot = 180; rot > 0; rot--){
            setTimeout(() => {
                document.getElementById('g_arm').style.transform = 'rotateX(' + i + 'deg)';
                i--;
            }, rot*10 + 1800);
        }
        setTimeout(() => {
            spinny(1)
        }, 3600);
    }
}

function woop(j) {
    document.getElementById("balld").style.left = j + "vmin";
    if (j < 70){
        setTimeout(() => {
            woop(j + .1);
        }, 5);
    } else if (j < 90) {
        document.getElementById("balld").hidden = true;
        document.getElementById("ballt").hidden = false;
        document.getElementById("ballt").style.top = (40.75 - j + 70) + "vmin";
        document.getElementById("ballb").hidden = false;
        document.getElementById("ballb").style.top = (43.25 + j - 70) + "vmin";
        setTimeout(() => {
            woop(j + .1);
        }, 5);
    } else {
        document.getElementById("ballt").hidden = true;
        document.getElementById("ballb").hidden = true;
        prize();
    }
}

function prize() {
    chances = [.35, .533, .716, .9, 1];
    if (skinSet == 3) {
        chances = [.25, .5, .75, .9, 1];
    }
    if (skinSet == 4) {
        chances = [1];
    }
    chance = Math.random();
    pzWin = 0;
    while (chance > chances[pzWin]){
        pzWin++;
    }
    pzWin = pzWin + 5*skinSet;
    if (!skins.includes(pzWin + 1)) {
        skins.push(pzWin + 1);
    }
    document.getElementById("gGun").hidden = false;
    document.getElementById("gGun").src = "shirts/" + skinPngs[pzWin + 1];
    document.getElementById("youWon").innerHTML = winDesc[pzWin + 1];
    document.getElementById("youWon").hidden = false;
    svToCookies();
    if (availableSkins.length == skins.length) {
        document.getElementById("validation").hidden = false;
    }
    setTimeout(() => {
        document.getElementById("gGun").hidden = true;
        document.getElementById("youWon").hidden = true;
        document.getElementById("cost").hidden = false;
        active = false;
        if (coins >= gambCosts[skinSet]) {
            document.getElementById("price").style.color = "black";
        } else {
            document.getElementById("price").style.color = "red";
        }
    }, 5000);
}

function gambUp() {
    changeGamb(skinSet - 1);
    document.getElementById("arrowD").hidden = false;
    document.getElementById("gambDownB").hidden = false;
}

function gambDown() {
    changeGamb(skinSet + 1);
    document.getElementById("arrowU").hidden = false;
    document.getElementById("gambUpB").hidden = false;
}

function changeGamb(id) {
    skinSet = id;
    windColors = ["rgb(255, 0, 217)", "rgb(22, 102, 214)", "rgb(227, 151, 50)", "rgb(231, 163, 54)", "white"];
    bodyColors = ["rgb(175, 238, 190)", "rgb(113, 18, 207)", "rgb(7, 217, 200)", "rgb(176, 148, 233)", "white"];
    document.getElementById("ball6").hidden = !(id == 0);
    document.getElementById("nBall1").hidden = skinSet == 4;
    document.getElementById("gambBody").style.backgroundColor = bodyColors[id];
    document.getElementById("gambDisk").style.backgroundColor = windColors[id];
    document.getElementById("gambWindow").style.backgroundColor = windColors[id];
    gambCosts[4] = coins;
    document.getElementById("price").innerHTML = gambCosts[skinSet];
    if (coins >= gambCosts[skinSet]) {
        document.getElementById("price").style.color = "black";
    } else {
        document.getElementById("price").style.color = "red";
    }
    if ((skinSet == 1 && !beaten.includes(2)) || (skinSet == 2 && !beaten.includes(3)) || (skinSet == 3 && (skins.length < (availableSkins.length - 1))) || skinSet == 4) {
        document.getElementById("arrowD").hidden = true;
        document.getElementById("gambDownB").hidden = true;
    }
    if (skinSet == 0) {
        document.getElementById("arrowU").hidden = true;
        document.getElementById("gambUpB").hidden = true;
    }
}

//Classes
class Bert {
    constructor(side, health, atx) {
        if (side == "l") {
            this.x = atx || 365;
            this.dir = 1;
        } else {
            this.x = atx || 985;
            this.dir = -1;
        }
        this.id = "ch" + eid;
        eid++;
        this.div = document.createElement("img");
        this.div.style = "position: absolute; width: 50px; height: 50px; top: 399px; left: " + this.x + "px;";
        this.div.id = this.id;
        this.movSpeed = movSpeed;
        this.frozen = 0;
        this.tp = false;
        this.faster = false;
        this.health = health;
        this.max = health;
        this.recharge = 20;
        this.shield = -1;
        this.summon = -1;
        switch (health) {
            case 1:
                this.worth = 1;
                this.type = 0;
                this.div.src = "b1.png";
                break;
            case 3:
                this.worth = 2;
                this.type = 1;
                this.div.src = "b2.png";
                break;
            case 4:
                this.worth = 5;
                this.type = 5;
                this.div.src = "b6.png";
                this.movSpeed = movSpeed + 4;
                break;
            case 5:
                this.worth = 3;
                this.type = 2;
                this.div.src = "b3.png";
                break;
            case 10:
                this.worth = 5;
                this.type = 4;
                this.div.src = "b5.png";
                this.movSpeed = movSpeed - 1;
                break;
            case 14:
                this.worth = 10;
                this.type = 8;
                this.div.src = "b9.png";
                this.movSpeed = tpSpeed;
                this.tp = true;
                break;
            case 16:
                this.worth = 20;
                this.type = 6;
                this.div.src = "b7.png";
                this.movSpeed = movSpeed + 3;
                break;
            case 20:
                this.worth = 15;
                this.type = 10;
                this.div.src = "b11_1.png";
                this.movSpeed = movSpeed + 1;
                this.shield = 3;
                break;
            case 35:
                this.worth = 30;
                this.type = 9;
                this.div.src = "b10.png";
                this.movSpeed = movSpeed - 1;
                this.faster = true;
                break;
            case 85:
                this.worth = 15;
                this.type = 3;
                this.div.src = "b4.png";
                break;
            case 100:
                this.worth = 25;
                this.type = 7;
                this.div.src = "b8.png"
                this.movSpeed = movSpeed - 1;
                break;
            case 184:
                this.worth = 30;
                this.type = 11;
                this.div.src = "b1.png";
                this.faster = true;
                this.movSpeed = movSpeed - 1;
                this.summon = 4;
                break;
            default:
                this.worth = 0;
                this.type = -1;
                break;
        }
        document.getElementById("children").appendChild(this.div);
        this.step = 0;
        this.y = 400;
        ch.push(this);
    }

    move() {
        if (this.shield == 0 && this.recharge > 0) {
            this.recharge = this.recharge - 1;
            if (this.recharge == 0) {
                this.shield = 3;
                this.recharge = 20;
                this.div.src = "b11_1.png";
            }
        }
        if (this.faster) {
            this.movSpeed = Math.min(3*(this.max/this.health), 11);
        }
        if (this.frozen > 0) {
            this.frozen = this.frozen - 1;
        } else {
            this.x = this.x + this.dir*this.movSpeed;
            this.y = this.y - (this.movSpeed > 3 ? 3 : this.movSpeed);
            if (this.step > 2) {
                this.y = this.y + 2*(this.movSpeed > 3 ? 3 : this.movSpeed);
            }
            this.step = (this.step + 1) % 6;
            if (document.getElementById(this.id) != null) {
                document.getElementById(this.id).style = "position: absolute; width: 50px; height: 50px; top: " + this.y + "px; left: " + this.x + "px;";
            }
            if ((this.x < 749 && this.dir == -1) || (this.x > 600 && this.dir == 1)) {
                lose();
            }
        }
    }

    hit(idx, typ) {
        if (this.shield > 0){
            this.shield = this.shield - 1;
            if (this.shield == 0) {
                this.div.src = "b11_2.png";
            }
        } else {
            this.health = this.health - bulletDamage;
        }
        if (this.summon > 0) {
            if (this.health/this.max <.75 && this.summon == 4) {
                this.summon = this.summon - 1;
                this.spawner(4);
                this.div.src = "b12.png";
            }
            if (this.health/this.max <.5 && this.summon == 3) {
                this.summon = this.summon - 1;
                this.spawner(3);
            }
            if (this.health/this.max <.25 && this.summon == 2) {
                this.summon = this.summon - 1;
                this.spawner(2);
                this.div.src = "b10.png";
            }
        }

        if (this.health <= 0) {
            if (this.summon == 1) {
                this.spawner(1);
            }
            idx = 0;
            ch.forEach((bt) => {
                if (bt.id == this.id){
                    ch.splice(idx, 1);
                }
                idx++;
            });
            var element = document.getElementById(this.id);
            element.parentNode.removeChild(element);
            igcVal = igcVal + Math.floor(this.worth*gemMultiplier);
            if (!enemyKills.includes(this.type)) {
                enemyKills.push(this.type);
            }
        } else if (this.tp) {
            let calcDist = 0;
            if (this.dir == 1){
                calcDist = 600 - this.x;
            } else {
                calcDist = this.x - 749;
            }
            this.teleport(calcDist);
        }
        if (typ == "f") {
            this.frozen = freezeDur;
        }
    }

    spawner(lvl) {
        switch (lvl) {
            case 4:
                new Bert(this.side, 35, this.x + 30*this.dir);
                new Bert(this.side, 20, this.x + 35*this.dir);
                break;
            case 3:
                new Bert(this.side, 14, this.x + 30*this.dir);
                new Bert(this.side, 14, this.x + 35*this.dir);
                new Bert(this.side, 14, this.x + 40*this.dir);
                break;
            case 2:
                new Bert(this.side, 14, this.x + 30*this.dir);
                new Bert(this.side, 20, this.x - 33*this.dir);
                new Bert(this.side, 14, this.x + 25*this.dir);
                new Bert(this.side, 20, this.x - 30*this.dir);
                break;
            case 1:
                new Bert(this.side, 35, this.x - 30*this.dir);
                new Bert(this.side, 35, this.x - 35*this.dir);
                new Bert(this.side, 35, this.x - 40*this.dir);
                break;
        }
    }

    teleport(dist) {
        let newDir = Math.round(Math.random());
        if (newDir == 0){
            this.dir = 1;
            this.x = 600 - dist + Math.round(Math.random()*tpSpeed*2) - 1;
        } else {
            this.dir = -1;
            this.x = 749 + dist - Math.round(Math.random()*tpSpeed*2) - 1;
        }
        document.getElementById(this.id).style = "position: absolute; width: 50px; height: 50px; top: " + this.y + "px; left: " + this.x + "px;";
    } 
}

class Bullet {
    constructor(side, type){
        if (side == "l") {
            this.x = 643;
            this.dir = -1;
        } else {
            this.x = 749;
            this.dir = 1;
        }
        this.id = "bu" + eid;
        eid++;
        this.div = document.createElement("div");
        this.div.style = "position: absolute; width: 7px; height: 5px; top: 411px; left: " + this.x + "px; background-color: red;";
        this.div.id = this.id;
        this.health = 1;
        this.type = type;
        this.hitIdxs = [];
        if (type == "p") {
            this.health = this.health + pierceAmount;
            this.color = "black";
        } else if (type == "f") {
            this.color = "lightblue";
        } else {
            switch (bulletDamage) {
                case 2:
                    this.color = "blue";
                    break;
                case 3:
                    this.color = "green";
                    break;
                case 4:
                    this.color = "yellow";
                    break;
                case 5:
                    this.color = "pink";
                    break;
                case 6:
                    this.color = "white";
                    break;
                default:
                    this.color = "red";
            }
        }
        this.max = this.health;
        this.div.style.backgroundColor = this.color;
        document.getElementById("bullets").appendChild(this.div);
        this.step = 0;
        bul.push(this);
    }

    move() {
        this.x = this.x + this.dir*7;
        this.step = (this.step + 1) % 6;
        document.getElementById(this.id).style = "position: absolute; width: 7px; height: 5px; top: 411px; left: " + this.x + "px; background-color: " + this.color + ";";
        let btI = 0;
        ch.forEach((bt) => {
            if (this.health > 0 && !this.hitIdxs.includes(bt.id)) {
                if (document.getElementById(bt.id) != null) {
                    let el1 = document.getElementById(this.id).getBoundingClientRect();
                    let el2 = document.getElementById(bt.id).getBoundingClientRect();
                    if (el1.right >= el2.left && el1.left <= el2.right) {
                        this.hitIdxs.push(bt.id);
                        bt.hit(btI, this.type);
                        this.health = this.health - 1;
                    };
                }
                btI++;
            }
        });
        if (this.x <= 350 || this.x >= 1050 || this.health == 0) {
            if ((this.x <= 350 || this.x >= 1050) && this.max == this.health) {
                //coins = coins - 1;
                perfectRound = false;
                document.getElementById("perfRound").style.color = "red";
            }
            return 1;
        }
    }
}


//Round Start / Stop
function start(dff) {
    ch = [];
    bul = [];
    el = document.getElementById("children");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    el = document.getElementById("bullets");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    document.getElementById("loss").hidden = true;
    document.getElementById("win").hidden = true;
    document.getElementById("starter").hidden = true;
    document.getElementById("gambB").hidden = true;
    document.getElementById("igc").hidden = false;
    document.getElementById("gunStats").hidden = false;
    document.getElementById("upgrades").hidden = false;
    document.getElementById("gtg").hidden = true;
    document.getElementById("gtu").hidden = true;
    document.getElementById("upgB").hidden = true;
    let timgId = 'url(upgs/' + upgradePngs[chUpgrades[0]] + ')';
    document.getElementById("upg1").style.backgroundImage = timgId;
    document.getElementById("upg1").onclick = upgradeFunctions[chUpgrades[0]];
    document.getElementById("upg1").title = upgradeNames[chUpgrades[0]];
    timgId = 'url(upgs/' + upgradePngs[chUpgrades[1]] + ')';
    document.getElementById("upg2").style.backgroundImage = timgId;
    document.getElementById("upg2").onclick = upgradeFunctions[chUpgrades[1]];
    document.getElementById("upg2").title = upgradeNames[chUpgrades[1]];
    timgId = 'url(upgs/' + upgradePngs[chUpgrades[2]] + ')';
    document.getElementById("upg3").style.backgroundImage = timgId;
    document.getElementById("upg3").onclick = upgradeFunctions[chUpgrades[2]];
    document.getElementById("upg3").title = upgradeNames[chUpgrades[2]];
    round = 1;
    rActive = true;
    completionBonus = 0;
    igcVal = 0;
    fireSpeed = 5;
    bulletDamage = 1;
    upgCost = 25;
    difficulty = dff;
    freezeDur = 0;
    pierceAmount = 0;
    specialFrequency = 0;
    bulletsFired = 0;
    gemMultiplier = 1;
    extraGold = 1;
    movSpeed = 3;
    tpSpeed = 2;
    document.getElementById("fireSpeed").innerHTML = "Fire Speed: " + fireSpeed*50 + "ms";
    document.getElementById("dmgPerBul").innerHTML = "Bullet Damage: " + bulletDamage;
    switch (specialType) {
        case "n":
            document.getElementById("spBulTyp").innerHTML = "Special Bullet Type: NA";
            document.getElementById("spBulFrq").innerHTML = "Special Bullet Frequency: NA";
            break;
        case "p":
            document.getElementById("spBulTyp").innerHTML = "Special Bullet Type: Piercing";
            document.getElementById("spBulFrq").innerHTML = "Special Bullet Frequency: 0 Bullets";
            break;
        case "f":
            document.getElementById("spBulTyp").innerHTML = "Special Bullet Type: Freezing";
            document.getElementById("spBulFrq").innerHTML = "Special Bullet Frequency: 0 Bullets";
            break;
    }
    document.getElementById("dmgPerBul").innerHTML = "Bullet Damage: " + bulletDamage;
    document.getElementById("freezeDur").innerHTML = "Freeze Duration: 0ms";
    document.getElementById("gemMulti").innerHTML = "Gem Multiplier: " + gemMultiplier + "x";
    document.getElementById("extraCoins").innerHTML = "Gold Multiplier: " + extraGold + "x";
    document.getElementById("perfRound").style.color = "black";
    tick();
}

function win() {
    if (!beaten.includes(difficulty)) {
        beaten.push(difficulty);
    }
    if (beaten.includes(0)) {
        document.getElementById("lv1").innerHTML = "Drizzle";
        document.getElementById("lv1").disabled = false;
    } else {
        document.getElementById("lv1").innerHTML = "Locked";
        document.getElementById("lv1").disabled = true;
    }
    if (beaten.includes(1)) {
        document.getElementById("lv2").innerHTML = "Mild";
        document.getElementById("lv2").disabled = false;
    } else {
        document.getElementById("lv2").innerHTML = "Locked";
        document.getElementById("lv2").disabled = true;
    }
    if (beaten.includes(2)) {
        document.getElementById("lv3").innerHTML = "Holy Carp";
        document.getElementById("lv3").disabled = false;
        document.getElementById("endless").innerHTML = "Endless";
        document.getElementById("endless").disabled = false;
    } else {
        document.getElementById("endless").innerHTML = "Locked";
        document.getElementById("endless").disabled = true;
        document.getElementById("lv3").innerHTML = "Locked";
        document.getElementById("lv3").disabled = true;
    }
    document.getElementById("gunStats").hidden = true;
    document.getElementById("upgrades").hidden = true;
    document.getElementById("coinValue").innerHTML = coins;
    rActive = false;
    document.getElementById("win").hidden = false;
    document.getElementById("wait").hidden = true;
    document.getElementById("starter").hidden = false;
    document.getElementById("gambB").hidden = false;
    document.getElementById("igc").hidden = true;
    document.getElementById("gtg").hidden = false;
    document.getElementById("gtu").hidden = false;
    document.getElementById("upgB").hidden = false;
    svToCookies();
}

function lose() {
    document.getElementById("gunStats").hidden = true;
    document.getElementById("upgrades").hidden = true;
    rActive = false;
    document.getElementById("loss").hidden = false;
    if (incoming) {
      document.getElementById("wait").hidden = false;
      setTimeout(() => {
        lose();
      }, 1000);
    } else {
        document.getElementById("wait").hidden = true;
        document.getElementById("starter").hidden = false;
        document.getElementById("gambB").hidden = false;
        document.getElementById("igc").hidden = true;
        document.getElementById("gtg").hidden = false;
        document.getElementById("gtu").hidden = false;
        document.getElementById("upgB").hidden = false;
        svToCookies();
    }
}

//Transition
function toGamb() {
    el = document.getElementById("children");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    el = document.getElementById("bullets");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    if (coins >= gambCosts[skinSet]) {
        document.getElementById("price").style.color = "black";
    } else {
        document.getElementById("price").style.color = "red";
    }
    document.getElementById("gatcha").hidden = false;
    document.getElementById("stage").hidden = true;
    document.getElementById("collection").hidden = true;
    document.getElementById("logbook").hidden = true;
    if (beaten.includes(1) && skinSet == 0) {
        document.getElementById("arrowD").hidden = false;
        document.getElementById("gambDownB").hidden = false;
    }
}

function toStg() {
    document.getElementById("stage").hidden = false;
    document.getElementById("gatcha").hidden = true;
    document.getElementById("collection").hidden = true;
    document.getElementById("upgradeBook").hidden = true;
    document.getElementById("gGunT").src = "shirts/" + skinPngs[defSkin];
    if (beaten.includes(0)) {
        document.getElementById("lv1").innerHTML = "Drizzle";
        document.getElementById("lv1").disabled = false;
    } else {
        document.getElementById("lv1").innerHTML = "Locked";
        document.getElementById("lv1").disabled = true;
    }
    if (beaten.includes(1)) {
        document.getElementById("lv2").innerHTML = "Mild";
        document.getElementById("lv2").disabled = false;
    } else {
        document.getElementById("lv2").innerHTML = "Locked";
        document.getElementById("lv2").disabled = true;
    }
    if (beaten.includes(2)) {
        document.getElementById("lv3").innerHTML = "Holy Carp";
        document.getElementById("lv3").disabled = false;
        document.getElementById("endless").innerHTML = "Endless";
        document.getElementById("endless").disabled = false;
    } else {
        document.getElementById("endless").innerHTML = "Locked";
        document.getElementById("endless").disabled = true;
        document.getElementById("lv3").innerHTML = "Locked";
        document.getElementById("lv3").disabled = true;
    }
}

function toCol() {
    document.getElementById("gatcha").hidden = true;
    document.getElementById("logbook").hidden = true;
    document.getElementById("collection").hidden = false;
    skinPointer = defSkin;
    document.getElementById("colSkin").src = "shirts/" + skinPngs[defSkin];
    document.getElementById("cRarity").src = "decor/" + rSymbs[defSkin];
    document.getElementById("shirtName").innerHTML = winDesc[defSkin];
}

function toLog() {
    logSrcs = ["b1.png", "b2.png", "b3.png", "b4.png", "b5.png", "b6.png", "b7.png", "b8.png", "b9.png", "b10.png", "b11_1.png", "b12.png"];
    logNames = ["Common Bert", "Lovestruck Bert", "Smug Bert", "Emotionally Confused Bert", "Slightly Nausious Bert", "Rebellious Bert", "Fedora Twin: Speedy", "Fedora Twin: Beefy", "Teleporting Bert", "Robotic Bert", "Spiritual Bert", "Cyborg Bert"];
    logHealths = [1, 3, 5, 85, 10, 4, 16, 100, 14, 35, 20, 184];
    logIgcs = [1, 2, 3, 15, 5, 5, 20, 25, 10, 30, 15, 30];
    logDscs = ["This Bert has only two things on his mind: salt and mints. Unfortunately you smell like salt after falling into that pit, and he's a bit peckish.", "You seem to remind this Bert of someone from his past, and apparently it was someone who really meant a lot to him.", "This Bert recently got a bad grade on an exam, but insists it wasn't his fault. The professor seemed to have wanted him to show his work, but he just did it all in his head.", "This Bert isn't quite sure how to feel about everything that's been happening to him recently, but he does know that it's a good idea to take that out on somebody else, so he's coming for your attention and validation.", "This Bert just had to deal with a banana that his roommate left in the freezer in his fridge. He hopes that licking your arm will make him feel better.", "This Bert felt the need to show everyone that he's the one in control of his life choices, but kinda regrets the decision after the fact. He'll never admit it though.", "This alternate reality Bert and his identical twin found magical fedoras in their backyard. His provides him with the gift of speed.", "This alternate reality Bert and his identical twin found magical fedoras in their backyard. His greatly boosts his endurance, but at the price of his walk speed.", "This Bert has been the subject of a number of experiments, most significantly causing him to have an extreme and uncontrollable nerve response. Some believe that his metabolism is externally regulated.", "This heavy machine is built to last, but its motors can barely handle its weight. It thanks you for helping it shed some extraneous mass.", "This Bert discovered a diety while meditating one day. Not any well known diety though, specifically the diety of blocking three heavy impacts per spiritually fueled adrenaline rush.", "This Bert is responsible for the state of many of the more irregular Berts and shares many traits with the robots he created. "];
    document.getElementById("gatcha").hidden = true;
    document.getElementById("collection").hidden = true;
    document.getElementById("logbook").hidden = false;
    if (enemyKills.includes(logEntry)) {
        document.getElementById("blPlaceholder").hidden = true;
        document.getElementById("blImg").hidden = false;
        document.getElementById("blImg").src = logSrcs[logEntry];
        document.getElementById("blName").innerHTML = logNames[logEntry];
        document.getElementById("blHlth").innerHTML = logHealths[logEntry];
        document.getElementById("blIgc").innerHTML = logIgcs[logEntry];
        document.getElementById("blDsc").innerHTML = logDscs[logEntry];
    }
}

function toUpg() {
    el = document.getElementById("children");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    el = document.getElementById("bullets");
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
    if (chUpgrades[2] == null) {
        chUpgrades = [0, 1, 2];
    }
    document.getElementById("stage").hidden = true;
    document.getElementById("upgradeBook").hidden = false;
    document.getElementById("upgSel1").src = "upgs/" + upgradePngs[chUpgrades[0]];
    document.getElementById("upgSel2").src = "upgs/" + upgradePngs[chUpgrades[1]];
    document.getElementById("upgSel3").src = "upgs/" + upgradePngs[chUpgrades[2]];
    document.getElementById("upgPB").style.backgroundColor = specialType == "p" ? "lightgreen" : "pink";
    document.getElementById("upgFB").style.backgroundColor = specialType == "f" ? "lightgreen" : "pink";
    if (chUpgrades[0] == -1) {
        document.getElementById("upgSel1").src = "";
        document.getElementById("upgSel1B").disabled = true;
    } else {
        document.getElementById("up" + chUpgrades[0] + "i").hidden = true;
        document.getElementById("up" + chUpgrades[0] + "b").hidden = true;
    }
    if (chUpgrades[1] == -1) {
        document.getElementById("upgSel2").src = "";
        document.getElementById("upgSel2B").disabled = true;
    } else {
        document.getElementById("up" + chUpgrades[1] + "i").hidden = true;
        document.getElementById("up" + chUpgrades[1] + "b").hidden = true;
    }
    if (chUpgrades[2] == -1 || chUpgrades[2] == null) {
        document.getElementById("upgSel3").src = "";
        document.getElementById("upgSel3B").disabled = true;
    } else {
        document.getElementById("up" + chUpgrades[2] + "i").hidden = true;
        document.getElementById("up" + chUpgrades[2] + "b").hidden = true;
    }
}

//Cookies
function svToCookies() {
    document.cookie = "coins=" + coins + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;";
    document.cookie = "skins=" + skins + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;";
    document.cookie = "defSk=" + defSkin + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;";
    document.cookie = "sWins=" + beaten + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;";
    document.cookie = "kills=" + enemyKills + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;";
    document.cookie = "cUpgs=" + chUpgrades + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;";
    document.cookie = "spBul=" + specialType + "; expires=Thu, 7 Dec 2056 12:00:00 UTC;";
}

function loadFromCookies() {
    cookies = document.cookie.split("; ");
    cookies.forEach((cookie) => {
        if (cookie.startsWith("coins=")) {
            coins = parseInt(cookie.substring(6));
        } else if (cookie.startsWith("skins=")) {
            skins = cookie.substring(6).split(",");
            for (i = 0; i < skins.length; i++) {
                skins[i] = parseInt(skins[i]);
            }
        } else if (cookie.startsWith("defSk=")) {
            defSkin = parseInt(cookie.substring(6));
            skinPointer = defSkin;
        } else if (cookie.startsWith("sWins=")) {
            beaten = cookie.substring(6).split(",");
            for (i = 0; i < beaten.length; i++) {
                beaten[i] = parseInt(beaten[i]);
            }
        } else if (cookie.startsWith("kills=")) {
            enemyKills = cookie.substring(6).split(",");
            for (i = 0; i < enemyKills.length; i++) {
                enemyKills[i] = parseInt(enemyKills[i]);
            }
        } else if (cookie.startsWith("cUpgs=")) {
            chUpgrades = cookie.substring(6).split(",");
            for (i = 0; i < chUpgrades.length; i++) {
                chUpgrades[i] = parseInt(chUpgrades[i]);
            }
        } else if (cookie.startsWith("spBul=")) {
            specialType = cookie.substring(6);
        }
    });
    document.getElementById("coinValue").innerHTML = coins;
    if (coins >= gambCosts[skinSet]) {
        document.getElementById("price").style.color = "black";
    } else {
        document.getElementById("price").style.color = "red";
    }
    if (beaten.includes(1)) {
        document.getElementById("arrowD").hidden = false;
        document.getElementById("gambDownB").hidden = false;
    }
    if (availableSkins.length == skins.length) {
        document.getElementById("validation").hidden = false;
    }
}


//Collection
function colSkin(dir) {
    if (dir == "R") {
        skinPointer = skinPointer + 1;
    } else {
        skinPointer = skinPointer - 1;
        if (skinPointer < 0) {
            skinPointer = availableSkins.length + skinPointer;
        }
    }
    skinPointer = skinPointer % availableSkins.length;
    if (skins.includes(skinPointer)) { 
        document.getElementById("colSkin").src = "shirts/" + skinPngs[skinPointer];
        if (skinPointer == defSkin) {
            document.getElementById("skChs").innerHTML = "Selected";
            document.getElementById("skChs").disabled = true;
        } else {
            document.getElementById("skChs").innerHTML = "Select";
            document.getElementById("skChs").disabled = false;
        }
        document.getElementById("shirtName").innerHTML = winDesc[skinPointer];
    } else {
        document.getElementById("colSkin").src = "decor/skPlaceholder.png";
        document.getElementById("skChs").innerHTML = "Hidden";
        document.getElementById("skChs").disabled = true;
        document.getElementById("shirtName").innerHTML = "???";
    }
    document.getElementById("cRarity").src = "decor/" + rSymbs[skinPointer];
}

function chooseSkin() {
    defSkin = skinPointer;
    document.getElementById("skChs").innerHTML = "Selected";
    document.getElementById("skChs").disabled = true;
    svToCookies();
}

//Logbook
function moveLog(dir) {
    logSrcs = ["b1.png", "b2.png", "b3.png", "b4.png", "b5.png", "b6.png", "b7.png", "b8.png", "b9.png", "b10.png", "b11_1.png", "b12.png"];
    logNames = ["Common Bert", "Lovestruck Bert", "Smug Bert", "Emotionally Confused Bert", "Slightly Nausious Bert", "Rebellious Bert", "Fedora Twin: Speedy", "Fedora Twin: Beefy", "Teleporting Bert", "Robotic Bert", "Spiritual Bert", "Cyborg Bert"];
    logHealths = [1, 3, 5, 85, 10, 4, 16, 100, 14, 35, 20, 184];
    logIgcs = [1, 2, 3, 15, 5, 5, 20, 25, 10, 30, 15, 30];
    logDscs = ["This Bert has only two things on his mind: salt and mints. Unfortunately you smell like salt after falling into that pit, and he's a bit peckish.", "You seem to remind this Bert of someone from his past, and apparently it was someone who really meant a lot to him.", "This Bert recently got a bad grade on an exam, but insists it wasn't his fault. The professor seemed to have wanted him to show his work, but he just did it all in his head.", "This Bert isn't quite sure how to feel about everything that's been happening to him recently, but he does know that it's a good idea to take that out on somebody else, so he's coming for your attention and validation.", "This Bert just had to deal with a banana that his roommate left in the freezer in his fridge. He hopes that licking your arm will make him feel better.", "This Bert felt the need to show everyone that he's the one in control of his life choices, but kinda regrets the decision after the fact. He'll never admit it though.", "This alternate reality Bert and his identical twin found magical fedoras in their backyard. His provides him with the gift of speed.", "This alternate reality Bert and his identical twin found magical fedoras in their backyard. His greatly boosts his endurance, but at the price of his walk speed.", "This Bert has been the subject of a number of experiments, most significantly causing him to have an extreme and uncontrollable nerve response. Some believe that his metabolism is externally regulated.", "This heavy machine is built to last, but its motors can barely handle its weight. It thanks you for helping it shed some extraneous mass.", "This Bert discovered a diety while meditating one day. Not any well known diety though, specifically the diety of blocking three heavy impacts per spiritually fueled adrenaline rush.", "This Bert is responsible for the state of many of the more irregular Berts and shares many traits with the robots he created. "];
    if (dir == "R") { 
        logEntry = logEntry + 1;
    } else {
        logEntry = logEntry - 1;
    }
    if (logEntry == 11) {
        document.getElementById("lArrowR").hidden = true;
        document.getElementById("lArRB").hidden = true;
    } else if (logEntry == 0) {
        document.getElementById("lArrowL").hidden = true;
        document.getElementById("lArLB").hidden = true;
    } else {
        document.getElementById("lArrowR").hidden = false;
        document.getElementById("lArRB").hidden = false;
        document.getElementById("lArrowL").hidden = false;
        document.getElementById("lArLB").hidden = false;
    }
    if (enemyKills.includes(logEntry)) {
        document.getElementById("blPlaceholder").hidden = true;
        document.getElementById("blImg").hidden = false;
        document.getElementById("blImg").src = logSrcs[logEntry];
        document.getElementById("blName").innerHTML = logNames[logEntry];
        document.getElementById("blHlth").innerHTML = logHealths[logEntry];
        document.getElementById("blIgc").innerHTML = logIgcs[logEntry];
        document.getElementById("blDsc").innerHTML = logDscs[logEntry];
        if (logEntry == 10) {
            setTimeout(() => {
                eleven(1);
            }, 1500)
        } else if (logEntry == 11) {
            setTimeout(() => {
                twelve(1);
            }, 1500)
        }
    } else {
        document.getElementById("blPlaceholder").hidden = false;
        document.getElementById("blImg").hidden = true;
        document.getElementById("blImg").src = logSrcs[logEntry];
        document.getElementById("blName").innerHTML = "???";
        document.getElementById("blHlth").innerHTML = "?";
        document.getElementById("blIgc").innerHTML = "?";
        document.getElementById("blDsc").innerHTML = "You have not killed this enemy yet!";
    }
}

function eleven(ver) {
    if (logEntry == 10) {
        if (ver == 0) {
            document.getElementById("blImg").src = "b11_1.png";
            setTimeout(() => {
                eleven(1);
            }, 1500);
        } else {
            document.getElementById("blImg").src = "b11_2.png";
            setTimeout(() => {
                eleven(0);
            }, 1500);
        }
    }
}

function twelve(ver) {
    if (logEntry == 11) {
        if (ver == 0) {
            document.getElementById("blImg").src = "b1.png";
            setTimeout(() => {
                twelve(1);
            }, 1500);
        } else if (ver == 1){
            document.getElementById("blImg").src = "b12.png";
            setTimeout(() => {
                twelve(2);
            }, 1500);
        } else {
            document.getElementById("blImg").src = "b10.png";
            setTimeout(() => {
                twelve(0);
            }, 1500);
        }
    }
}

//Menus
function notes() {
    document.getElementById("notes").hidden = !document.getElementById("notes").hidden;
    document.getElementById("HTP").hidden = true;
}

function HTP() {
    document.getElementById("HTP").hidden = !document.getElementById("HTP").hidden;
    document.getElementById("notes").hidden = true;
}

//Upgrades
function upgFire() {
    if (!upgDelay) { 
        igcVal = igcVal - upgCost;
        fireSpeed = fireSpeed - 1;
        upgCost = upgCost + 25;
    }
    if (fireSpeed < 1) {
        fireSpeed = 1;
    }
    document.getElementById("fireSpeed").innerHTML = "Fire Speed: " + fireSpeed*50 + "ms";
}

function upgDmg() {
    if (!upgDelay) {
        igcVal = igcVal - upgCost;
        bulletDamage = bulletDamage + 1;
        upgCost = upgCost + 25;
        fireSpeed = fireSpeed + 1;
    }
    document.getElementById("fireSpeed").innerHTML = "Fire Speed: " + fireSpeed*50 + "ms";
    document.getElementById("dmgPerBul").innerHTML = "Bullet Damage: " + bulletDamage;
}

function upgSpBFreq() {
    if (!upgDelay) {
        igcVal = igcVal - upgCost;
        upgCost = upgCost + 25;
        specialFrequency = specialFrequency - 1;
        bulletsFired = 0;
        switch (specialType) {
            case "p":
                if (pierceAmount == 0) {
                    pierceAmount = 1;
                    document.getElementById("bulPierceCnt").innerHTML = "Bullet Pierce: 1";
                }
                if (specialFrequency == -1) {
                    specialFrequency = 5;
                }
                break;
            case "f":
                if (freezeDur == 0) {
                    freezeDur = 4;
                    document.getElementById("freezeDur").innerHTML = "Freeze Duration: 1050ms";
                }
                if (specialFrequency == -1) {
                    specialFrequency = 6;
                }
                break;
        }
        document.getElementById("spBulFrq").innerHTML = "Special Bullet Frequency: " + specialFrequency + " Bullets";
    }
}

function upgPierceAmt() {
    if (!upgDelay) {
        igcVal = igcVal - upgCost;
        upgCost = upgCost + 25;
        if (pierceAmount == 0) {
            pierceAmount = 1;
            specialFrequency = 5;
            bulletsFired = 0;
            document.getElementById("spBulFrq").innerHTML = "Special Bullet Frequency: " + specialFrequency + " Bullets";
        } else {
            pierceAmount = pierceAmount + 1;
        }
    }
    document.getElementById("bulPierceCnt").innerHTML = "Bullet Pierce: " + pierceAmount;
}

function upgFreezeDur() {
    if (!upgDelay) {
        igcVal = igcVal - upgCost;
        upgCost = upgCost + 25;
        if (freezeDur == 0) {
            freezeDur = 4;
            specialFrequency = 6;
            bulletsFired = 0;
            document.getElementById("spBulFrq").innerHTML = "Special Bullet Frequency: " + specialFrequency + " Bullets";
        } else {
            freezeDur = freezeDur + 2;
        }
    }
    document.getElementById("freezeDur").innerHTML = "Freeze Duration: " + freezeDur*150 + "ms";
}

function upgGemMulti() {
    if (!upgDelay) {
        igcVal = igcVal - upgCost;
        upgCost = upgCost + 25;
        gemMultiplier = gemMultiplier + .5;
    }
    document.getElementById("gemMulti").innerHTML = "Gem Multiplier: " + gemMultiplier + "x";
}

function upgExGold() {
    if (!upgDelay) {
        igcVal = igcVal - upgCost;
        upgCost = upgCost + 25;
        extraGold = extraGold + .2;
    }
    document.getElementById("extraCoins").innerHTML = "Gold Multiplier: " + extraGold + "x";
}

function chooseUpg(upId) {
    if (chUpgrades[0] == -1) {
        if (!document.getElementById("up" + upId + "i").hidden) {
            chUpgrades[0] = upId;
            document.getElementById("upgSel1").src = "upgs/" + upgradePngs[upId];
            document.getElementById("upgSel1B").disabled = false;
            document.getElementById("up" + upId + "i").hidden = true;
            document.getElementById("up" + upId + "b").hidden = true;
        }
    } else if (chUpgrades[1] == -1) {
        if (!document.getElementById("up" + upId + "i").hidden) {
            chUpgrades[1] = upId;
            document.getElementById("upgSel2").src = "upgs/" + upgradePngs[upId];
            document.getElementById("upgSel2B").disabled = false;
            document.getElementById("up" + upId + "i").hidden = true;
            document.getElementById("up" + upId + "b").hidden = true;
        }
    } else if (chUpgrades[2] == -1 || chUpgrades[2] == null) {
        if (!document.getElementById("up" + upId + "i").hidden) {
            chUpgrades[2] = upId;
            document.getElementById("upgSel3").src = "upgs/" + upgradePngs[upId];
            document.getElementById("upgSel3B").disabled = false;
            document.getElementById("up" + upId + "i").hidden = true;
            document.getElementById("up" + upId + "b").hidden = true;
        }
    }
    svToCookies();
}

function deselectUpg(selN) {
    document.getElementById("up" + chUpgrades[selN] + "i").hidden = false;
    document.getElementById("up" + chUpgrades[selN] + "b").hidden = false;
    chUpgrades[selN] = -1;
    document.getElementById("upgSel" + (selN+1)).src = "";
    document.getElementById("upgSel" + (selN+1) + "B").disabled = true;
}

function spType(which) {
    switch (which) {
        case 0:
            specialType = "p";
            break;
        case 1:
            specialType = "f";
            break;
    }
    document.getElementById("upgPB").style.backgroundColor = (specialType == "p" ? "lightgreen" : "pink");
    document.getElementById("upgFB").style.backgroundColor = (specialType == "f" ? "lightgreen" : "pink");
    svToCookies();
}

//End
function validation() {
    pass = prompt("Please enter the message I sent you on 8/30/22 10:13 PM. If you didn't recieve one, scream at me.");
    fetch("https://mhrduality.vercel.app/str/val/" + pass)
    .then(data => data.json()
    .then(d => window.open(d['u'], '_blank').focus()));
}