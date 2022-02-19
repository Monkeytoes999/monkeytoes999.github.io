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

async function newsJson() {
    return await callNewsAPI().then(data => { return changeHtml(data["0"]["name"])});
}

function changeHtml(content) {
    var base = document.createElement("div");
    base.classList.add("widget");
    var text = document.createElement("p");
    text.innerHTML = content;
    base.appendChild(text);
    return base;
}