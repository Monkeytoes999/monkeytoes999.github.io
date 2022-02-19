async function callNewsAPI() {
    let response = await fetch("https://content.guardianapis.com/search?api-key=b86d1bc0-85fb-44ea-ad0c-7f58e8991ec0");
    let data = await response.json()
    return data;
}

async function newsJson() {
    return await callNewsAPI().then(data => {return changeNewsHtml(data["response"]["results"]["0"]["webTitle"] + "\n" + data["response"]["results"]["0"]["webUrl"]
        + "\n" + data["response"]["results"]["1"]["webTitle"] + "\n" + data["response"]["results"]["1"]["webUrl"]
        + "\n" + data["response"]["results"]["2"]["webTitle"] + "\n" + data["response"]["results"]["2"]["webUrl"])});
}

function changeNewsHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");
    base.style.lineHeight = 1.25;

    var head = document.createElement("h3");
    head.innerHTML = "The Guardian News";
    base.appendChild(head);

    for (let i = 0; i < par.length; i++){
        var text = document.createElement("a");
        text.innerHTML = par[i];
        text.href = par[i+1];
        i++;
        base.appendChild(text);
        var lineBreak = document.createElement("br");
        base.appendChild(lineBreak);
    }

    return base;
}