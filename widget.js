function Case(widget) {
    this.xpos = 0;
    this.ypos = 0;
    this.txpos = 0;
    this.typos = 0;
    this.base;
    this.draggable = false;
    this.dragging = false;
    widget.build();
    this.widget = widget;
    this.button = false;
    const big = this;

    this.update = function() {
        this.widget.update();
    }
    this.build = function() {
        this.widget.build();
    }

    this.setButton = function() {
        this.button = true;
    }
    this.setPos = function(xpos, ypos) {
        this.xpos = snap*Math.round(xpos/snap);
        this.ypos = snap*Math.round(ypos/snap);
        this.move(this.xpos, this.ypos);
    }
    this.move = function(xpos, ypos) {
        this.base.style.top = ypos + "px";
        this.base.style.left = xpos + "px";
    }

    this.setDrag = function(input) {
        if (this.draggable) {
            this.dragging = input;
        }
    }
    this.getDrag = function() {
        return this.dragging;
    }
    this.drag = function(event) {
        this.setDrag(true);
        this.txpos = event.clientX - this.xpos;
        this.typos = event.clientY - this.ypos;
    }

    this.makeElement = function(event) {
        this.base = document.createElement("div");
        if (this.button) {
            this.base.classList.add("widgetButton");
        } else {
            this.base.classList.add("widget");
        }
        this.base.appendChild(this.widget.base);
        this.base.onmousedown = function(event) {
            if (!big.getDrag()) {
                big.drag(event);
                big.base.style.zIndex = "1";
            }
        };
        this.base.onmousemove = function(event) {
            if (big.getDrag()) {
                big.move(event.clientX - big.txpos, event.clientY - big.typos);
            }
        };
        this.base.onmouseup = function(event) {
            if (big.getDrag()) {
                big.setDrag(false);
                big.setPos(event.clientX - big.txpos, event.clientY - big.typos);
                big.base.style.zIndex = "0";
            }
        };
    }
    this.fixMotion = function() {
        if (this.getDrag()) {
            this.move(globalX - this.txpos, globalY - this.typos);
        }
    }
    this.initialize = function() {
        this.makeElement();
    }
    this.initialize();
}
window.onmousemove = function(event) {
    globalX = event.clientX;
    globalY = event.clientY;
}