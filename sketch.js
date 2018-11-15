let canvas;
let img;
let size = 300;

let rotationAngle = 0;
let r = 0;
let g = 0;
let b = 0;
let rx = 1;
let gx = 1;
let bx = 1;



function setup() {

    img = loadImage( "McLuhan01.png" );
    canvas = createCanvas( windowWidth, windowHeight, WEBGL);
    r = random(255);
    g = random(255);
    b = random(255);

    rx = random(0., 0.1);
    gx = random(0., 0.1);
    bx = random(0., 0.1);

}

function draw() {

    background( r, g, b );

    size = width/2.5;

    rotateY( rotationAngle );
    texture( img );
    plane( size, size );

    rotationAngle += 0.0125;
    if ( rotationAngle  > TWO_PI ) {

        rotationAngle = 0;

    }

    if (r > 255 || r < 0)
    {
        rx*=-1;
    }
    if (g > 255 || g < 0)
    {
        gx*=-1;
    }
    if (b > 255 || b < 0)
    {
        bx*=-1;
    }

    if(rx > 0)
    {
        rx+=.00025;
    }
    else
    {
        rx-=.00025;
    }
    if(gx > 0)
    {
        gx+=.00025;
    }
    else
    {
        gx-=.00025;
    }
    if(bx > 0)
    {
        bx+=.00025;
    }
    else
    {
        bx-=.00025;
    }

    r+=rx;
    g+=gx;
    b+=bx;

}

function windowResized() {

    resizeCanvas( windowWidth, windowHeight );

}
