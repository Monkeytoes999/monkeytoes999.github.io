var login = require('./eggwhites.json');

function clickBody() {
    window.location.href = "/brazeltonz/";
}

function success() {
    setTimeout(() => {
        window.location.href = "ber/lon/i/terl"
    }, 500);
}

function failure() {
    document.getElementById("registerFail").hidden = true;
    document.getElementById("incorrect").hidden = false;
}

function buttonClick() {
    const e = document.getElementById("email")
    const p = document.getElementById("pass")
    if (e.value == login["email"]){
        if (p.value == login["password"]){
            success();
        } else {
            failure();
        }
    } else {
        failure();
    }
}

function registerButton(){
    document.getElementById("incorrect").hidden = true;
    document.getElementById("registerFail").hidden = false;
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