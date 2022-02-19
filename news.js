async function callNewsAPI() {
    let response = await fetch("https://content.guardianapis.com/search?api-key=b86d1bc0-85fb-44ea-ad0c-7f58e8991ec0");
    let data = await response.json()
    return data;
}

async function newsJson() {
    return await callNewsAPI().then(data => {return changeNewsHtml(data["response"]["results"]["0"]["webTitle"] + "\n" + data["response"]["results"]["0"]["webUrl"])});
}

function changeNewsHtml(content) {
    var par = content.split("\n")
    var base = document.createElement("div");
    base.classList.add("widget");

    for (let i = 0; i < par.length; i++){
        var text = document.createElement("a");
        text.innerHTML = par[i];
        text.href = par[i+1];
        i++;
        base.appendChild(text);
    }

    return base;
}