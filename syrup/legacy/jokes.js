/**
 * Queries a dad joke API and returns a random joke
 * @returns a JSON structure that holds a dad joke
 */
async function callDadJokesAPI() {
    let response = await fetch(process.env.DAD_API);
    let data = await response.json();
    return data;
}

/**
 * Processes API data to extract the dad joke
 * @returns the dad joke
 */
async function dadJokesJson() {
    return await callDadJokesAPI().then(data => {return changeDadHtml(data["attachments"]["0"]["text"])});
}

/**
 * Creates HTML data that will display the dad joke in a readable way
 * with an option to refresh the displayed joke
 * @param {Joke} content 
 * @returns a HTML widget
 */
function changeDadHtml(content) {
    var par = content.split("\n");
    var base = document.createElement("div");
    base.classList.add("widget");

    var head = document.createElement("h3");
    head.innerHTML = "Jokes";
    base.appendChild(head);

    for (let i = 0; i < par.length; i++){
        var text = document.createElement("p");
        text.innerHTML = par[i];
        base.appendChild(text);
    }
    var button = document.createElement("button");
    button.innerHTML = "New Joke";
    button.onclick = async function() {
        console.log("cheese")
        data = await callDadJokesAPI();
        var par = data["attachments"]["0"]["text"].split("\n")
        while (base.childElementCount > 1){
            base.removeChild(base.firstChild);
        }
        temp = base.firstChild;
        base.removeChild(base.firstChild);

        var head = document.createElement("h3");
        head.innerHTML = "Jokes";
        base.appendChild(head); 

        for (let i = 0; i < par.length; i++){
            var text = document.createElement("p");
            text.innerHTML = par[i];
            base.appendChild(text);
        }

        base.appendChild(temp);

    }
    base.appendChild(button);

    return base;
}