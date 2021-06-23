// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function Shape(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
}

function Ball(x, y, velX, velY, color, size, exist) {
    Shape.call(this, x, y, velX, velY)
    this.color = color;
    this.size = size;
    this.exist = exist;
}

function EvilCircle(x, y, velX, velY, color = 'white', size = 10, exist = true) {
    Shape.call(this, x, y, 20, 20)
    this.color = color;
    this.size = size;
    this.exist = exist;
}

EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    //-- set the color of shape
    ctx.strokeStyle = this.color;
    //-- trace an arc shape on the paper
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //-- state finish
    ctx.stroke();
}
EvilCircle.prototype.checkBounds = function () {
    if ((this.x + this.size) >= width) {
        this.x = this.x - this.size;
    }

    if ((this.x - this.size) <= 0) {
        this.x = this.x + this.size;
    }

    if ((this.y + this.size) >= height) {
        this.y = this.y - this.size;
    }

    if ((this.y - this.size) <= 0) {
        this.y = this.y + this.size;
    }
}

EvilCircle.prototype.setControls = function () {
    let _this = this;
    window.onkeypress = function (e) {
        if (e.key === 'a') {
            _this.x -= _this.velX;
        } else if (e.key === 'd') {
            _this.x += _this.velX;
        } else if (e.key === 'w') {
            _this.y -= _this.velY;
        } else if (e.key === 's') {
            _this.y += _this.velY;
        }
    }
}

let count = 0;
EvilCircle.prototype.collisionDetection = function () {
    for (let j = 0; j < balls.length; j++) {
        //-- check all exist balls
        if (balls[j].exist) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            //-- if there is a collision
            if (distance < this.size + balls[j].size) {
                balls[j].exist = false;
                count++;
            }
        }
    }
}

Ball.prototype.draw = function () {
    if (this.exist) {
        //-- state want ot draw
        ctx.lineWidth = 3;
        //-- set the color of shape
        ctx.fillStyle = this.color;
        //-- trace an arc shape on the paper
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        //-- state finish
        ctx.fill();
    }
}

Ball.prototype.update = function () {
    if (this.exist) {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }
}

Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        //-- check all other balls
        if (!(this === balls[j]) && balls[j].exist) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            //-- if there is a collision
            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
}
let balls = [];

while (balls.length < 25) {
    let size = random(10, 20);
    let ball = new Ball(
        // ball position always drawn at least one ball width
        // away from the edge of the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
        size
        , true);

    balls.push(ball);
}
let evilCircle = new EvilCircle(100, 100, 20, 20);
evilCircle.setControls();

function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();

        evilCircle.draw();
        evilCircle.checkBounds();
        evilCircle.collisionDetection();

        let countText = document.getElementById('count');
        countText.textContent = count.toString();
    }
     requestAnimationFrame(loop);
}

loop();