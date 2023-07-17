function animateButton(e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },300);
}

var effectButtons = document.getElementsByClassName("effectButton");

for (var i = 0; i < effectButtons.length; i++) {
  effectButtons[i].addEventListener('click', animateButton, false);
}