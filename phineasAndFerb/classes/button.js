import { PackNMap } from "../v2.js";

//#region Episodes
import {ep1} from "../graph/seasonOne/ep1.js";
import {ep2} from "../graph/seasonOne/ep2.js";
import {ep3} from "../graph/seasonOne/ep3.js";
import {ep4} from "../graph/seasonOne/ep4.js";
import {ep5} from "../graph/seasonOne/ep5.js";
import {ep6} from "../graph/seasonOne/ep6.js";
import {ep7} from "../graph/seasonOne/ep7.js";
import {ep8} from "../graph/seasonOne/ep8.js";
import {ep9} from "../graph/seasonOne/ep9.js";
import {ep10} from "../graph/seasonOne/ep10.js";
import {ep11} from "../graph/seasonOne/ep11.js";
import {ep12} from "../graph/seasonOne/ep12.js";
import {ep13} from "../graph/seasonOne/ep13.js";
import {ep14} from "../graph/seasonOne/ep14.js";
import {ep15} from "../graph/seasonOne/ep15.js";
import {ep16} from "../graph/seasonOne/ep16.js";
import {ep17} from "../graph/seasonOne/ep17.js";
import {ep18} from "../graph/seasonOne/ep18.js";
import {ep19} from "../graph/seasonOne/ep19.js";
import {ep20} from "../graph/seasonOne/ep20.js";
import {ep21} from "../graph/seasonOne/ep21.js";
import {ep22} from "../graph/seasonOne/ep22.js";
import {ep23} from "../graph/seasonOne/ep23.js";
import {ep24} from "../graph/seasonOne/ep24.js";
import {ep25} from "../graph/seasonOne/ep25.js";
import {ep26} from "../graph/seasonOne/ep26.js";
import {ep27} from "../graph/seasonOne/ep27.js";
import {ep28} from "../graph/seasonOne/ep28.js";
import {ep29} from "../graph/seasonOne/ep29.js";
import {ep30} from "../graph/seasonOne/ep30.js";
import {ep31} from "../graph/seasonOne/ep31.js";
import {ep32} from "../graph/seasonOne/ep32.js";
import {ep33} from "../graph/seasonOne/ep33.js";
import {ep34} from "../graph/seasonOne/ep34.js";
import {ep35} from "../graph/seasonOne/ep35.js";
import {ep36} from "../graph/seasonOne/ep36.js";
import {ep37} from "../graph/seasonOne/ep37.js";
import {ep38} from "../graph/seasonOne/ep38.js";
import {ep39} from "../graph/seasonOne/ep39.js";
import {ep40} from "../graph/seasonOne/ep40.js";
import {ep41} from "../graph/seasonOne/ep41.js";
import {ep42} from "../graph/seasonOne/ep42.js";
import {ep43} from "../graph/seasonOne/ep43.js";
import {ep44} from "../graph/seasonOne/ep44.js";
import {ep45} from "../graph/seasonOne/ep45.js";
import {ep46} from "../graph/seasonOne/ep46.js";
import {ep47} from "../graph/seasonOne/ep47.js";
//#endregion

document.addEventListener('DOMContentLoaded', () => {
    const swapButton = document.getElementById('toggle-button');
    const directButton = document.getElementById('direct-button');

    if (swapButton) {
        swapButton.addEventListener('click', swapVisual);
    }

    if (directButton) {
        directButton.addEventListener('click', direct);
    }
});

function swapVisual() {
    const graph = document.getElementById("3d-graph");
    const network = document.getElementById("network");

    if (graph.style.visibility === "hidden") {
        graph.style.visibility = "visible";
        network.style.visibility = "hidden";
    } else {
        graph.style.visibility = "hidden";
        network.style.visibility = "visible";
    }
}

function direct() {
    if (document.getElementById("direct-button").innerHTML == "Only Direct"){
        PackNMap(undefined, undefined, true);
        document.getElementById("direct-button").innerHTML = "All Connections";
    } else {
        PackNMap(undefined, undefined, false);
        document.getElementById("direct-button").innerHTML = "Only Direct";
    }
}
