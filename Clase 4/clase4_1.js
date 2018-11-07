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
var Colores;
(function (Colores) {
    Colores[Colores["blue"] = 0] = "blue";
    Colores[Colores["yellow"] = 1] = "yellow";
    Colores[Colores["red"] = 2] = "red";
    Colores[Colores["green"] = 3] = "green";
    Colores[Colores["orange"] = 4] = "orange";
})(Colores || (Colores = {}));
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
        set: function (x) {
            this._x = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Figura.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: true,
        configurable: true
    });
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(color, contexto, radio, x, y) {
        var _this = _super.call(this, color, contexto, x, y) || this;
        if (radio == undefined)
            _this._radio = Math.random() * 100;
        else
            _this._radio = radio;
        return _this;
    }
    Object.defineProperty(Circulo.prototype, "radio", {
        get: function () {
            return this._radio;
        },
        set: function (radio) {
            this._radio = radio;
        },
        enumerable: true,
        configurable: true
    });
    Circulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.arc(this.x, this.y, this._radio, 0, Math.PI * 2);
        this.cxt.fillStyle = this._color;
        this.cxt.fill();
        this.cxt.stroke();
        this.cxt.closePath();
    };
    return Circulo;
}(Figura));
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(color, contexto, h) {
        var _this = _super.call(this, color, contexto) || this;
        _this.h = (h == undefined) ? Math.random() * 300 : h;
        return _this;
    }
    Triangulo.prototype.dibujar = function () {
        this.cxt.beginPath();
        this.cxt.moveTo(this.x, this.y);
        this.cxt.lineTo(this.x - this.h / 2, this.y + this.h);
        this.cxt.lineTo(this.x + this.h / 2, this.y + this.h);
        this.cxt.closePath();
        this.cxt.fillStyle = this._color;
        this.cxt.fill();
        this.cxt.stroke();
    };
    return Triangulo;
}(Figura));
var Triangulito = /** @class */ (function (_super) {
    __extends(Triangulito, _super);
    function Triangulito(color, context) {
        return _super.call(this, color, context) || this;
    }
    Triangulito.prototype.dibujar = function () {
        this.cxt.fillText("Triangulito", this.x, this.y);
        _super.prototype.dibujar.call(this);
    };
    return Triangulito;
}(Triangulo));
var canvas = document.getElementById("canvas");
var cx = canvas.getContext("2d");
new Triangulo("green", cx).dibujar();
new Triangulito("yellow", cx).dibujar();
new Circulo("yellow", cx).dibujar();
