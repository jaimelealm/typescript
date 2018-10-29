var ejeX:number=0;
var ejeY:number=0;
class figura{
    x:number;
    y:number;

    mostrarinformacion(){
        console.log("posicion:");
        console.log("X: "+this.x+"   Y: "+this.y);
        }
    dibujar(c:CanvasRenderingContext2D){
        c.rect(this.x,this.y,50,50);
        c.stroke();
    }
    mover(ejeX:number,ejeY:number){
        this.x=this.x+ejeX;
        this.y=this.x+ejeY;
    }
    preguntar(){
        this.x=parseInt(prompt("Ingrese el valor a mover en X: "));
        this.y=parseInt(prompt("Ingrese el valor a mover en Y: "));
    }
}

function pregunta():number{
    return parseInt(prompt("Ingrese la cantidad de cuadros: "));
}

var lienzo:any=document.getElementById("lienzo");

let f:figura; 
f = new figura();
f.x=50;
f.y=50;
f.dibujar(lienzo.getContext("2d"));

var cantidad:number=pregunta();

for (var i=1;i<=cantidad;i++){
    f.mostrarinformacion();
    f.preguntar();
    //f.mover(ejeX,ejeY);
    f.dibujar(lienzo.getContext("2d"));    
}
