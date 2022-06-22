if (document.cookie.includes("login=")) {
    cookies = document.cookie.split("; ");
    let i = 0;
    for (i = 0; !cookies[i].includes("login="); i++);
    la = cookies[i].substring(6)
    if (la == "kriffen"){
        success();
    }
}

function clickBody() {
    window.location.href = "/brazeltonz/";
}

function success() {
    document.cookie = "login=jeff;";
    setTimeout(() => {
        window.location.href = "ber/lon/i/terl"
    }, 500);
}

function buttonClick() {
    const e = document.getElementById("email")
    const p = document.getElementById("pass")
    if (e.value == "kriffen@gmail.com"){
        if (p.value == "L38Snen#$s#ms@ldEan#lwkEmA39fj@mFFe#1"){
            document.cookie = "login=kriffen; expires=Thu, 7 Dec 2056 12:00:00 UTC;"
        }
    } 
}

function resetPassword() {
    var URL = `https://discord.com/api/webhooks/988985468353912832/rvTkVc7bekRaNcoC72biErymB6NWnGs1zy2MVASOEXXTdX7Y4hDblVKQ7dJ0wsiY2rh_`;
    const e = document.getElementById("email")
    document.getElementById("reset").hidden = false;
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