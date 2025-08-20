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