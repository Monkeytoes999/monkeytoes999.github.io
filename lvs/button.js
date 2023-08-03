function Button(name, type, link, categories) {
    if (type == "sound") {
        for (let i = 0; i < categories.length; i++) {
            var base = document.createElement("button");
            base.classList.add("effectButton");
            base.classList.add(categories[i].replaceAll(" ","-"));
            base.innerText = name;
            base.style.display = "none";
            base.onclick = async function() {
                await fetch(link);
            }
            document.getElementById(categories[i]).parentElement.insertBefore(base, document.getElementById(categories[i]).nextSibling);
        }
    }
}