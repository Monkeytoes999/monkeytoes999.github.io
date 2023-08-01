function Button(name, type, link, categories) {
    if (type == "sound") {
        for (let i = 0; i < categories.length; i++) {
            var base = document.createElement("button");
            base.classList.add("effectButton");
            base.innerText = name;
            base.onclick = async function() {
                await fetch(link);
            }
            document.getElementById(categories[i]).appendChild(base);
        }
    }
}