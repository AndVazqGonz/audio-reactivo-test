export default class Circle { //export default es para exportar la clase, para que se pueda usar en otros archivos.
    constructor(props = {}){ //inicializa la clase, se definen las propiedades iniciales de la clase.
        //ENCAPSULA A LAS VARIABLES, es decir, las variables solo se pueden usar dentro de la clase, no se pueden usar fuera de la clase.
        //this.color = "#00ff00"; .el color es un string, se puede cambiar a cualquier color que se quiera.
        this.fill = props.fill || null; //Null es un valor que no tiene nada, es como un valor vacío.
        //se puede ocupar null o false, pero null es más específico.
        this.stroke = props.stroke || "#b36d7a";
        this.strokeWeight = props.strokeWeight || 2;
        this.radio = props.radio || 20;
        this.x = props.x || 50;
        this.y = props.y || 40;
        this.alpha = props.alpha || 255;
        this.speed_x= props.speed_x || .1;
        this.speed_y= props.speed_y || .1;

        //estos son valores inciiales, pero se pueden cambiar en cualquier momento.
    }

    resize(){ // estos son en donde se puede modificar los valores al momento de llamarlos 
        this.radio = random(10, 50);
        // si algo no se quiere cambiar, no hay que agregarlo aquí, solo se deja en el constructor.
    }

    move(){
        this.x += this.speed_x;
        this.y += this.speed_y;
    }

    update(p){
        this.move();
        this.checkEdges(p);
        this.draw(p);
       
    }

    draw(p){
        this.move();
        if(this.fill ){
            p.fill(this.fill);
        } else {
            p.noFill();
        }
        if(this.stroke){
            p.stroke(this.stroke);
        } else {
            p.noStroke();
        }
            //si el valor de fill es null, entonces se le asigna un color aleatorio.
        
        p.strokeWeight(this.strokeWeight);
        p.circle(this.x, this.y, this.radio);
        this.checkEdges(p);
    }
    checkEdges(p){
        if(this.x < -this.radio){
            this.x = p.width + this.radio;
        } else if (this.x > p.width + this.radio){
            this.x = -this.radio;
        } else if(this.y < -this.radio ){
            this.y = p.height + this.radio;
        } else if (this.y > p.height + this.radio){
            this.y = -this.radio;
        }
    }
}