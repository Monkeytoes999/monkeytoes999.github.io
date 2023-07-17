function Button(name, type, link) {
    console.log("cow")
    var base = document.createElement("button");
    base.classList.add("effectButton");
    base.innerText = name;
    base.onclick = async function() {
        await fetch(link);
    }
    if (type == "sound") {
        document.getElementById("sounds").appendChild(base);
    }
}