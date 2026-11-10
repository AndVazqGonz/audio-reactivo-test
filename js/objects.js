import Circle from './components/Circle.js'; //las clases se escriben con mauyscula la promera y la segunda en minuscula

const CIRCLE_A= new Circle({
    x:100, y:100
}); // cada vez que se genera una instancia se hara con el new y la instancia se guarda en una variable, en este caso CIRCLE.
//Esto es una instancia
const CIRCLE_B= new Circle({
    x:400, y:400
}); // cada vez que se genera una instancia se hara con el new y la instancia se guarda en una variable, en este caso CIRCLE.
//esto es otra instancia 

new p5(p => {
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = () => {
        p.background(0);
        CIRCLE_A.draw(p);
        CIRCLE_B.draw(p);
    }
});
//instancia: es como el hijo de una clase. resultado de la clase.

//Math random: es de javascript, es una funcion que genera un numero aleatorio entre 0 y 1.
//random : es de p5js, es una funcion que genera un numero aleatorio entre los valores que se le indique