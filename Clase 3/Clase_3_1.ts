class Figura{
    protected _color:string;
    private _x:number;
    private _y:number;
    protected cxt:CanvasRenderingContext2D;

    constructor(color:string,contexto:CanvasRenderingContext2D,x?:number,y?:number){
        this._x = (x==undefined) ? Math.random()*300 : x;
        this._y = (y==undefined) ? Math.random()*300 : y;
        this._color = color;
        this.cxt = contexto;
    }
    public get x(){
        return this._x;
    }
    public get y(){
        return this._y;
    }
    public set x(){
        this._x=x;
    }
    public set y(){
        this._y=y;
    }
}
class circulo{
    private radio:number = 100;
    private elcolor:string;
    private _x:number;
    private _y:number;

    public getRadio():number{
        return this.radio;
    }
    public setRadio(radio:number){
        this.radio = radio;
    }
    public get color():string{
        return this.elcolor;    
    }
    public set color(color:string){
        this.elcolor = color;    
    }
    constructor(x?:number,y?:number){
        this._x = (x==undefined) ? Math.random()*1000 : x;
        this._y = (y==undefined) ? Math.random()*400 : y;
    }
    public dibujar(contexto:CanvasRenderingContext2D){
        contexto.beginPath();
        contexto.fillStyle=this.elcolor;
        contexto.arc(this._x,this._y,this.radio,0,Math.PI*2);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    }
}
class Triangulo extends Figura{
        private h:number;
        public dibujar(){
            this.cxt.beginPath();
            this.cxt.moveTo(this.x,this.y);
            this.cxt.lineTo(this.x-this.h*Math.cos(30),this.y+this.h);
            this.cxt.lineTo(this.x+this.h*Math.cos(30),this.y+this.h);
            this.cxt.lineTo(this.x,this.y);
            this.cxt.stroke()
            this.cxt.closePath()            
        }
        constructor(color:string,h?:number){
            super(color,contexto);
            this.h=(h==undefined) ? Math.random()*100:h;
        }
}
var c:circulo = new circulo();
c.setRadio(50);
c.color = "yellow";
console.log("El color del circulo es ",c.color)
console.log("El radio del circulo es ",c.getRadio())

var canvas:any=document.getElementById("canvas");
var ctx=canvas.getContext("2d");
c.dibujar(ctx);
new circulo().dibujar(ctx);
c.dibujar(ctx);
