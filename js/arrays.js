const PALETTE =  ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33', '#FF33A1', '#A133FF', '#33FFA1', '#FFA133'];
//const: son los mismos valores y no van a cambiar a lo largo del programa.
const RADIO= 300;
let half_height = window.innerHeight / 2; //half_height: es un valor que se puede cambiar a lo largo del programa. hace que la onda se mueva a lo largo del tiempo.
let offset = 0; //offset: es un valor que se puede cambiar a lo largo del programa. hace que la onda se mueva a lo largo del tiempo.
let frequency = 0.02;


function setup() {
    createCanvas(windowWidth, windowHeight);
    //window height: lo calcula p5 y lo asigna a la variable half_height. windowHeight: es una variable que contiene el alto de la ventana del navegador.
}

function draw() {
    background(PALETTE[7]);
    noFill();
    strokeWeight(5);
    stroke(PALETTE[4]);
    for (let x = 0; x < width; x++){ //ciclos for: iteran sobre un rango de valores. en este caso, desde 0 hasta el ancho de la ventana.
        let angle = (x * frequency) + offset;
        //TAU = 2PI
        let y = sin(angle) * RADIO + half_height;
        rect(x, y, 1, 1);

    }
    offset += 0.03; //offset: es un valor que se puede cambiar a lo largo del programa. hace que la onda se mueva a lo largo del tiempo.
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    half_height = window.innerHeight / 2; //half_height: es un valor que se puede cambiar a lo largo del programa. hace que la onda se mueva a lo largo del tiempo.
}