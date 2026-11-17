import Circle from './components/Circle.js'; //las clases se escriben con mauyscula la promera y la segunda en minuscula

const CIRCLE_A= new Circle({
    x:100, y:100,
    fill: "#0000ff",
    alpha: 20,
    radio: 20,
    strokeweight: 5,
    speed_x: Math.random() - 3, //esto es para que la velocidad sea aleatoria, se puede cambiar el valor de 5 a cualquier otro valor.
    speed_y: Math.random() - 3,
}); // cada vez que se genera una instancia se hara con el new y la instancia se guarda en una variable, en este caso CIRCLE.
//Esto es una instancia
const CIRCLE_B= new Circle({
    x:500, y:500,
    fill: "#ff0000",
    alpha:20,
    radio: 20,
    strokeweight: 5,
    speed_x: Math.random() - 2, //esto es para que la velocidad sea aleatoria, se puede cambiar el valor de 5 a cualquier otro valor.
    speed_y: Math.random() - 2,
}); // cada vez que se genera una instancia se hara con el new y la instancia se guarda en una variable, en este caso CIRCLE.
//esto es otra instancia 

new p5(p => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () => {
        p.background(0);
        CIRCLE_A.update(p);
        CIRCLE_B.update(p);
    }
});
//instancia: es como el hijo de una clase. resultado de la clase.

//Math random: es de javascript, es una funcion que genera un numero aleatorio entre 0 y 1.
//random : es de p5js, es una funcion que genera un numero aleatorio entre los valores que se le indique