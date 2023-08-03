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
        var list = document.getElementsByClassName(HERE.name.replaceAll(" ","-"));
        for (let i = 0; i < list.length; i++) {
            if (HERE.open) {
                list[i].style.display = "none";
            } else {
                list[i].style.display = "block";
            }
        }
        HERE.open = !HERE.open;
    }

    document.getElementById("sounds").appendChild(this.element);
}