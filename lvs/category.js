function Category(name, color) {
    this.name = name;
    this.color = color;

    this.element = document.createElement("div");
    const MEOW = this.element;
    this.element.classList.add("category");

    this.element.id = this.name;

    this.button = document.createElement("button");
    this.button.innerText = this.name;
    this.button.style.backgroundColor = this.color;
    this.element.appendChild(this.button);
    this.button.onclick = function (e) {
        var cow = MEOW;
        if (cow.style.width == "fit-content") {
            cow.style.backgroundColor = color + "00";
            cow.style.height = "44px";
            cow.style.width = "104px";
        } else {
            cow.style.backgroundColor = color + "50";
            cow.style.height = "fit-content";
            cow.style.width = "fit-content";
        }
    }

    document.getElementById("sounds").appendChild(this.element);
}