let canvas;
let img;
let size = 300;

let rotationAngle = 0;

function setup() {

    img = loadImage( "nic_bees1.jpg" );
    canvas = createCanvas( windowWidth, windowHeight, WEBGL);

}

function draw() {

    background( random(255), random(255), random(255) );
    size = width/2.5;

    rotateY( rotationAngle );
    texture( img );
    plane( size, size );

    rotationAngle += 0.025;
    if ( rotationAngle  > TWO_PI ) {

        rotationAngle = 0;

    }

}

function windowResized() {

    resizeCanvas( windowWidth, windowHeight );

}
