// Hi Bert. Here's the crappy code I used to make the question layout. You're not going to get anything actually helpful from this code (hopefully)
// x = 0;
// y = 0;
// maxy = 8;
// miny = 0;
// i = 0;
// coordsStr = ["0,5"]
// coords = [[0,5]];
// while (i < 35) {
//     tx = coords[i][0];
//     ty = coords[i][1];
//     r = Math.ceil(Math.random()*5);
//     if ((r == 1 || r == 2) && ty != maxy) {
//         if (!coordsStr.includes("" + tx + "," + (ty + 1))) {
//             coords.push([tx, ty + 1]);
//             coordsStr.push("" + tx + "," + (ty + 1))
//             i++;
//         }
//     } else if ((r == 3 || r == 4) && ty != miny) {
//         if (!coordsStr.includes("" + tx + "," + (ty - 1))) {
//             coords.push([tx, ty - 1]);
//             coordsStr.push("" + tx + "," + (ty - 1))
//             i++;
//         }
//     } else {
//         coords.push([tx + 1, ty]);
//         i++;
//         coordsStr.push("" + (tx + 1) + "," + ty)
//     }
// }
// console.log(coords.toString())

var currentData = {};
var currentQ = "";
refresh();
runner();


function runner() {
    setTimeout(() => {
        refresh();
        runner();
    }, 15000);
}

async function refresh() {
    await fetch("https://mhrduality.vercel.app/p4/survey/bor").then(data => {
        data.json().then(response => {
            currentData = response;
            r = response["r"];
            for (i = 1; i < 37; i++){
                document.getElementById("b" + i).classList.add("c" + r[i - 1]);
            }
            document.getElementById("lives").innerHTML = "Failures left in attempt: " + response["fails"];
            document.getElementById("time").innerHTML = "Time left in attempt: " + Math.ceil((response["expiration"] - Date.now())/(1000*60));
            question();
        });
    });
}

async function question() {
    await fetch("https://mhrduality.vercel.app/p4/survey/GQ" + currentData["or"][currentData["on"]]).then(data => {
        data.json().then(response => {
            currentQ = response;
        });
    });
}

async function guess() {
    let ans = prompt(currentQ, "answer");
    if (ans != "" && ans != null) {
        ans = ans.toLowerCase();
        await fetch("https://mhrduality.vercel.app/p4/survey/AC" + currentData["or"][currentData["on"]] + "%60%60" + ans).then(data => {
        data.json().then(response => {
            document.getElementById("res").innerHTML = response["r"];
        });
    });
    }    
}

async function prev(box) {
    bint = parseInt(box.substring(1)) - 1;
    if (bint < currentData["on"]) {
        alert("Q: " + currentData["qah"][bint]["q"] + "\n A: " + currentData["qah"][bint]["a"]);
    } 
}