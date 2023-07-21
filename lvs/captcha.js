function prepall() {
    for (let i = 0; i < 9; i++) {
        var base = document.getElementById("catPic" + i);
        base.addEventListener("click", function(e) {
            e.target.classList.toggle("silly")
        })
    }
}
prepall();
function makeCaptcha() {
    document.getElementById("captcha").style.display = "block";
    function addCat(position) {
        fetch("https://cataas.com/cat?json=true&width=600&height=600")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            var url = "https://cataas.com" + data.url;
            console.log(url);
            var base = document.getElementById("catPic" + position);
            base.src = url;
            base.classList.remove("silly");
        });
    }
    for (let i = 0; i < 9; i++) {
        addCat(i);
    }
}
function verify() {
    if (document.getElementsByClassName("silly").length == 9) {
        document.getElementById("captcha").style.display = "none";
    } else {
        makeCaptcha();
        document.getElementById("capFail").innerText = "Sorry. There were more silly little guys.";
    }
}