function newsWidget() {
    // Base creation
    
    
    newsJson();

    // Add base to list of widgets
}

async function callNewsAPI() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json()
    return data;
}

function newsJson() {
    callNewsAPI().then(data => changeHtml(data["0"]["name"]));
}

function changeHtml(content) {
    console.log(content)
    var base = document.createElement("div");
    base.classList.add("widget");
    var text = document.createElement("p");
    text.innerHTML = content;
    base.appendChild(text);
    document.getElementById("widgetList").appendChild(base);
}