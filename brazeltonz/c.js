var ch = false;
var sa = false;
var cc = false;


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

function acDdb() {
    window.location.href = "/brazeltonz/ber/lon/i/terl";
}

function spDdb() {
    window.location.href = "/brazeltonz/ber/lon/i/terl/prof";
}

function ivDdb() {
    window.location.href = "/brazeltonz/ber/lon/i/terl/inv";
}

function chQV(){
    document.getElementById("CHQV").hidden = ch;
    ch = !ch;
}


function saQV(){
    document.getElementById("SAQV").hidden = sa;
    sa = !sa;
}


function ccQV(){
    document.getElementById("CCQV").hidden = cc;
    cc = !cc;
}

function buttonClick() {
    //Bert I know you'll just come looking for this but like, please, just don't.
    //You can get this without looking in the source code.
    const e = document.getElementById("email"); const p = document.getElementById("pass"); if (e.value == "kriffen@gmail.com"){ if (p.value == "L38Snen#$s#ms@ldEan#lwkEmA39fj@mFFe#1"){ success(); } else { failure(); } } else { failure(); }
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

function chPass(){
    document.getElementById("resetP").hidden = false;
}

function chUrm(){
    document.getElementById("resetU").hidden = false;
}

function chEml(){
    document.getElementById("resetE").hidden = false;
}

function chPhm(){
    document.getElementById("resetPh").hidden = false;
}

function chAdr(){
    document.getElementById("resetA").hidden = false;
}
