async function callDadJokesAPI() {
    let response = await fetch("https://icanhazdadjoke.com/slack");
    let data = await response.json();
    return data;
}

async function dadJokesJson() {
    return await callDadJokesAPI().then(data => {return changeHtml(data["attachments"]["0"]["text"])});
}