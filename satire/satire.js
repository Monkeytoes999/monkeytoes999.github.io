active = false;
tick();

function tick() {
    goal = 1701579600000;
    distance = goal - Date.now()
    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days < 10? days = "0" + days : null;
    hours < 10? hours = "0" + hours : null;
    minutes < 10? minutes = "0" + minutes : null;
    seconds < 10? seconds = "0" + seconds : null;


    document.getElementById("clock").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;
    setTimeout(() => {
        tick();
    }, 1000);
}

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
        active = false;
        woop();
    }
}

function turny() {
    if (!active) {
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

function woop() {
    i = -90;
    for (rot = 0; rot < 90; rot++){
        setTimeout(() => {
            document.getElementById('badjoke').style.transform = 'rotateY(' + i + 'deg)';
            i++;
        }, rot*10);
    }
    for (rot = 90; rot > 0; rot--){
        setTimeout(() => {
            document.getElementById('badjoke').style.transform = 'rotateY(' + i + 'deg)';
            i--;
        }, rot*10 + 900);
    }
    setTimeout(() => {
        document.getElementById('badjoke').hidden = true;
        celebrate(1)
    }, 1800);
}

function celebrate(j) {
    document.getElementById("tire").hidden = false;
    if (j == 3) {
        document.getElementById("nope").hidden = false;
    }
    if (j == 6) {
        document.getElementById("clock").hidden = false;
    }
    i = 0
    for (rot = 0; rot < 180; rot++){
    setTimeout(() => {
        document.getElementById('tire').style.transform = 'rotate(' + i + 'deg)';
        i++;
    }, rot*10);
    }
    for (rot = 180; rot > 0; rot--){
        setTimeout(() => {
            document.getElementById('tire').style.transform = 'rotate(' + i + 'deg)';
            i--;
        }, rot*10 + 1800);
    }
    setTimeout(() => {
        celebrate(j + 1)
    }, 3600);
}