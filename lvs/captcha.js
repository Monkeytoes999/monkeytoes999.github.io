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
    for (let i = 0; i < 9; i++) {
        var base = document.getElementById("catPic" + i);
        base.src = "https://icon-library.com/images/loading-gif-icon/loading-gif-icon-9.jpg";
        base.classList.remove("silly");
    }
    var catPics = [];
    document.getElementById("captcha").style.display = "block";
    function addCat() {
        fetch("https://cataas.com/cat?json=true&width=600&height=600")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            var url = "https://cataas.com" + data.url;
            catPics[catPics.length] = url;
            if (catPics.length == 9) {
                for (let i = 0; i < 9; i++) {
                    var base = document.getElementById("catPic" + i);
                    base.src = catPics[i];
                }
            }
        });
    }
    for (let i = 0; i < 9; i++) {
        addCat();
    }
}
function verify() {
    if (document.getElementsByClassName("silly").length == 9) {
        document.getElementById("captcha").style.display = "none";
    } else {
        alert("There were more silly little guys. Try again to confirm your identity as human.");
        makeCaptcha();
    }
}