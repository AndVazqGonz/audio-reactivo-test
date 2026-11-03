let song;
let amplitude;

async function setup(){
    createCanvas(windowWidth, windowHeight);
    song = await loadSound("./sound/ditf.mp3");
    amplitude = new p5.Amplitude();
    song.connect(amplitude);
}

function mousePressed(){
    song.play();
}

function draw(){
     background(0);
     if (!amplitude) return;
     const level = amplitude.getLevel();
     const size = level *100 +50;
     const color = level * 125 + 125;
     const weight = level * 5 + .5;
     fill(color);
     circle(width / 2, height / 2, size);
}
