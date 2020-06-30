//bubble variables
var bb;
var bbVel;
var bbSize;
var p,pVel,force,size,heading,boostcolor,playerColor;
var health;


function setup() {
    createCanvas(400, 400);
    p = createVector(width / 2, height / 2)
    pVel = createVector(0, 0);
    force = createVector(0, 0);
    size = 10;
    heading = 0;
    boostColor = color(0, 255, 0);
    playerColor = color(255);
    Score = 0;
    Health = 200;
    bb = [];
    bbVel = [];
    bbSize = 25;

    for (var i = 0; i < 5; i++) {
        bb.push(createVector(random(0, width), random(0, height)));
        bbVel.push(p5.Vector.random2D().mult(random(0.25, 2.25)));
    }
}

function draw() {
    background(271,44,117);

    updatePlayer();
    updateBubbles();
    updateLasers();

}

function updateBubbles() {
    touch = false;
    for (var i = 0; i < bb.length; i++) {
        push();

        //bubble collisions 
        if (dist(bb[i].x, bb[i].y, p.x, p.y) < bbSize / 2) {
            touch = true;
            console.log(touch);
        }
        //update bb locations
        bb[i].add(bbVel[i]);

        //contain bb
        //contain player
        if (bb[i].x > width + bbSize / 2) {
            bb[i].x = 0
        }
        if (bb[i].x < -bbSize / 2) {
            bb[i].x = 400
        }
        if (bb[i].y > height + bbSize / 2) {
            bb[i].y = 0
        }
        if (bb[i].y < -bbSize / 2) {
            bb[i].y = 400
        }

        fill(132, 112, 255, 45)
        stroke(255);
        ellipse(bb[i].x, bb[i].y, bbSize);
        pop();
    }
    if (touch == true) {
        playerColor = color(255, 0, 0);
        Health--;
    } else {
        playerColor = color(255);
    }

}