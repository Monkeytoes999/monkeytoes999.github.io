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

set = [[ 0, 5 ],  [ 0, 4 ],  [ 0, 3 ],  [ 0, 2 ],[ 0, 1 ],  [ 1, 1 ],  [ 1, 2 ],  [ 2, 2 ],[ 2, 3 ],  [ 2, 4 ],  [ 3, 4 ],  [ 3, 3 ],[ 4, 3 ],  [ 5, 3 ],  [ 5, 4 ],  [ 6, 4 ],[ 6, 5 ],  [ 6, 6 ],  [ 7, 6 ],  [ 8, 6 ],[ 8, 5 ],  [ 8, 4 ],  [ 9, 4 ],  [ 9, 5 ],[ 10, 5 ], [ 10, 6 ], [ 10, 7 ], [ 10, 8 ],[ 11, 8 ], [ 12, 8 ], [ 13, 8 ], [ 14, 8 ],[ 14, 7 ], [ 14, 6 ], [ 15, 6 ], [ 15, 7 ],[ 15, 8 ]]

async function colTest() {
    await fetch("https://mhrduality.vercel.app/p4/survey/bor").then(data => {
        data.json().then(response => {
            r = response["r"];
            for (i = 1; i < 37; i++){
                document.getElementById("b" + i).classList.add("c" + r[i]);
            }
        });
    });
}