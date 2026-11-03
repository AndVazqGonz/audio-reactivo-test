let mic, song;
let fft; //fft: es un objeto que se encarga de analizar la señal de audio y generar un espectro de frecuencias.
//fast fourier transform: es un algoritmo que permite transformar una señal de audio en un espectro de frecuencias. fft: es un objeto que se encarga de analizar la señal de audio y generar un espectro de frecuencias.
let amplitude;

async function setup() {
    createCanvas(windowWidth, windowHeight);
    mic = new p5.AudioIn();
     song = await loadSound("./sound/ditf.mp3");
    fft = new p5.FFT(32); 
    amplitude = new p5.Amplitude();
    //el valor base 2: A mayor. numero de muestras, mayor precision en el analisis de la señal de audio.
    //A menor numero de muestras, menor precision en el analisis de la señal de audio.
    fft.setInput(song);
    song.connect(amplitude);
}

async function mousePressed() {
    await userStartAudio(); //userStartAudio: es una funcion que permite iniciar el audio del navegador. en este caso, se espera a que el usuario haga click en la ventana para iniciar el audio.
    //mic.start();
    song.play();
    //await: es una palabra clave que se utiliza para esperar a que una promesa se resuelva. en este caso, se espera a que el micrófono se inicie.
}

function draw() {
    background(9, 43, 40);
    let level = amplitude.getLevel();
    const waveform = fft.waveform();
    noFill();
     strokeWeight(level*10);
    stroke(92, 255, 222);
    beginShape();
    for (let i = 0; i < waveform.length; i++) {
        let x = map(i, 0, waveform.length - 1, 0, width); //map: es una funcion que permite mapear un rango de valores a otro rango de valores. en este caso, se mapea el rango de valores del arreglo waveform al rango de valores del ancho de la ventana.
        let y = map(waveform[i], -1, 1, height, 0);
        vertex(x, y);
    }
    endShape();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

