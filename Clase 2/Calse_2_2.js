var ejeX = 0;
var ejeY = 0;
var figura = /** @class */ (function () {
    function figura() {
    }
    figura.prototype.mostrarinformacion = function () {
        console.log("posicion:");
        console.log("X: " + this.x + "   Y: " + this.y);
    };
    figura.prototype.dibujar = function (c) {
        c.rect(this.x, this.y, 50, 50);
        c.stroke();
    };
    figura.prototype.mover = function (ejeX, ejeY) {
        this.x = this.x + ejeX;
        this.y = this.x + ejeY;
    };
    figura.prototype.preguntar = function () {
        this.x = parseInt(prompt("Ingrese el valor a mover en X: "));
        this.y = parseInt(prompt("Ingrese el valor a mover en Y: "));
    };
    return figura;
}());
function pregunta() {
    return parseInt(prompt("Ingrese la cantidad de cuadros: "));
}
var lienzo = document.getElementById("lienzo");
var f;
f = new figura();
f.x = 50;
f.y = 50;
f.dibujar(lienzo.getContext("2d"));
var cantidad = pregunta();
for (var i = 1; i <= cantidad; i++) {
    f.mostrarinformacion();
    f.preguntar();
    //f.mover(ejeX,ejeY);
    f.dibujar(lienzo.getContext("2d"));
}
