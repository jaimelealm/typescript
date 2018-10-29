var lienzo:any=document.getElementById("lienzo");
var ancho:number=lienzo.width;
var alto:number=lienzo.height;
console.log("El alto es "+alto);
console.log("El ancho es "+ancho);
if (lienzo.getContext){
    var ctx1:CanvasRenderingContext2D;
    ctx1 = lienzo.getContext("2d");
    
    //lineas
    
    //triangulos
    ctx1.beginPath();
    ctx1.moveTo(ancho,0);
    ctx1.lineTo(ancho-50,0);
    ctx1.lineTo(ancho,50);
    ctx1.lineTo(ancho,-50);
    ctx1.closePath();
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(ancho,alto);
    ctx1.lineTo(ancho-50,alto);
    ctx1.lineTo(ancho,alto-50);
    ctx1.lineTo(ancho,alto);
    ctx1.closePath();
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(0,alto);
    ctx1.lineTo(50,alto);
    ctx1.lineTo(0,alto-50);
    ctx1.lineTo(0,alto);
    ctx1.closePath();
    ctx1.stroke();

    ctx1.beginPath();
    ctx1.moveTo(0,0);
    ctx1.lineTo(50,0);
    ctx1.lineTo(0,50);
    ctx1.lineTo(0,0);
    ctx1.closePath();
    ctx1.stroke();

    //circulo
    ctx1.beginPath();
    ctx1.arc(150,150,100,0,Math.PI*2);
    ctx1.stroke();

    //cuadro
    ctx1.fillStyle="green";
    ctx1.fillRect(80,80,140,140);
}