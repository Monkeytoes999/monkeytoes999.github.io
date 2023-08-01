function Category(name, color) {
    this.name = name;
    this.color = color;

    this.open = false;

    this.element = document.createElement("div");
    this.element.classList.add("category");

    this.element.id = this.name;

    this.button = document.createElement("button");
    this.button.innerText = this.name;
    this.button.style.backgroundColor = this.color;
    this.element.appendChild(this.button);

    const HERE = this;
    this.button.onclick = function (e) {
        if (HERE.open) {
            HERE.element.style.backgroundColor = color + "00";
            HERE.element.style.width = "104px";
        } else {
            HERE.element.style.backgroundColor = color + "90";
            HERE.element.style.width = HERE.element.childNodes.length*104 + "px"
        }
        HERE.open = !HERE.open;
    }

    document.getElementById("sounds").appendChild(this.element);
}