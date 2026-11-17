import Circle from './components/Circle.js'; //las clases se escriben con mauyscula la promera y la segunda en minuscula

const STARS_COUNTER = 32;
let stars = [];

/*const CIRCLE_A= new Circle({
    x:100, y:100,
    fill: "#0000ff",
    alpha: 20,
    radio: 20,
    strokeweight: 5,
    speed_x: Math.random() * 6 - 3, //esto es para que la velocidad sea aleatoria, se puede cambiar el valor de 5 a cualquier otro valor.
    speed_y: Math.random() * 6 - 3,
}); // cada vez que se genera una instancia se hara con el new y la instancia se guarda en una variable, en este caso CIRCLE.
//Esto es una instancia // cada vez que se genera una instancia se hara con el new y la instancia se guarda en una variable, en este caso CIRCLE.
//esto es otra instancia */

new p5(p => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        for (let i = 0; i < STARS_COUNTER; i++){
            const _circle = new Circle({
                x: Math.random() * p.width,
                y: Math.random() * p.height,
                fill: "white",
                alpha: 20,
                speed_x: Math.random() - .5,
                speed_y: Math.random() - .5,
            });
            stars.push(_circle);
        }
    }

    p.draw = () => {
        p.background(0);
        for (const star of stars){
            star.update(p);
        }
    }
});
//instancia: es como el hijo de una clase. resultado de la clase.

//Math random: es de javascript, es una funcion que genera un numero aleatorio entre 0 y 1.
//random : es de p5js, es una funcion que genera un numero aleatorio entre los valores que se le indique