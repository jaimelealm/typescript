var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura = /** @class */ (function () {
    function Figura(color, contexto, x, y) {
        this._x = (x == undefined) ? Math.random() * 300 : x;
        this._y = (y == undefined) ? Math.random() * 300 : y;
        this._color = color;
        this.cxt = contexto;
    }
    Object.defineProperty(Figura.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function () {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function () {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Figura;
}());
var circulo = /** @class */ (function () {
    function circulo(x, y) {
        this.radio = 100;
        this._x = (x == undefined) ? Math.random() * 1000 : x;
        this._y = (y == undefined) ? Math.random() * 400 : y;
    }
    circulo.prototype.getRadio = function () {
        return this.radio;
    };
    circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Object.defineProperty(circulo.prototype, "color", {
        get: function () {
            return this.elcolor;
        },
        set: function (color) {
            this.elcolor = color;
        },
        enumerable: true,
        configurable: true
    });
    circulo.prototype.dibujar = function (contexto) {
        contexto.beginPath();
        contexto.fillStyle = this.elcolor;
        contexto.arc(this._x, this._y, this.radio, 0, Math.PI * 2);
        contexto.fill();
        contexto.stroke();
        contexto.closePath();
    };
    return circulo;
}());
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(color, h) {
        var _this = _super.call(this, color, contexto) || this;
        _this.h = (h == undefined) ? Math.random() * 100 : h;
        return _this;
    }
    Triangulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.moveTo(this.x, this.y);
        this.cxt.lineTo(this.x - this.h * Math.cos(30), this.y + this.h);
        this.cxt.lineTo(this.x + this.h * Math.cos(30), this.y + this.h);
        this.cxt.lineTo(this.x, this.y);
        this.cxt.stroke();
        this.cxt.closePath();
    };
    return Triangulo;
}(Figura));
var c = new circulo();
c.setRadio(50);
c.color = "yellow";
console.log("El color del circulo es ", c.color);
console.log("El radio del circulo es ", c.getRadio());
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
c.dibujar(ctx);
new circulo().dibujar(ctx);
c.dibujar(ctx);
