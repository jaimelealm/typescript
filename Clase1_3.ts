interface Punto{
    x:number;
    y:number;
}
function calc_distancia(p1:Punto,p2={x:0,y:0}):number{
    return 0
}
var p1:Punto = {x:20,y:2};
var p2:Punto = {x:0,y:0};
var a = calc_distancia(p1,p2);

p2.x = 10;
p2.y = 5;

console.log(p1);
console.log(p2);
console.log(a);