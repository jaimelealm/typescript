function calc_distance(x1, y1, x2, y2) {
    if (x2 === void 0) { x2 = 0; }
    if (y2 === void 0) { y2 = 0; }
    var a = Math.pow(x2 - x1, 2);
    var b = Math.pow(y2 - y1, 2);
    return Math.sqrt(a + b);
}
var d = calc_distance(0, 20, 0, 10);
console.log("La distancia es ", d);
var e = calc_distance(10, 10, 0, 0);
console.log("La distancia es ", e);
var f = calc_distance(-10, -10, 0, 0);
console.log("La distancia es ", f);
