function Widget() {
    this.xpos = 0;
    this.ypos = 0;
    this.txpos = 0;
    this.typos = 0;
    this.base;
    const big = this;
    this.setPos = function(xpos, ypos) {
        this.xpos = snap*Math.round(xpos/snap);
        this.ypos = snap*Math.round(ypos/snap);
        this.move(this.xpos, this.ypos);
    }
    this.move = function(xpos, ypos) {
        this.base.style.top = ypos + "px";
        this.base.style.left = xpos + "px";
    }
    this.drag = function(event) {
        this.txpos = event.clientX - this.xpos;
        this.typos = event.clientY - this.ypos;
    }
    this.makeElement = function() {
        this.base = document.createElement("div");
        this.base.classList.add("widget");
        this.base.ondragstart = function(event) {
            big.drag(event);
        }
        this.base.ondrag = function(event) {
            big.move(event.clientX - big.txpos, event.clientY - big.typos);
        }
        this.base.ondragend = function(event) {
            big.setPos(event.clientX, event.clientY);
        }
    }
    this.initialize = function() {
        this.makeElement();
        this.setPos(0, 0);
    }
    this.initialize();
}