function Category(name, color) {
    this.name = name;
    this.color = color;

    this.element = document.createElement("div");
    this.element.onclick = function (e) {
        var cow = this;
        if (cow.style.width == "fit-content") {
            cow.style.height = "44px";
            cow.style.width = "104px";
        } else {
            cow.style.height = "fit-content";
            cow.style.width = "fit-content";
        }
    }
    this.element.classList.add("category");

    this.element.id = this.name;

    this.button = document.createElement("button");
    this.button.innerText = this.name;
    this.button.style.backgroundColor = this.color;
    this.element.appendChild(this.button);

    document.getElementById("sounds").appendChild(this.element);
}