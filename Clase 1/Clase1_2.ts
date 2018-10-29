function calc_distance(x1:number,y1:number,x2=0,y2=0):number{
    var a = Math.pow(x2-x1,2);
    var b = Math.pow(y2-y1,2);
    return Math.sqrt(a+b)
}
var d:number = calc_distance(0,20,0,10);
console.log("La distancia es ",d);
var e:number = calc_distance(10,10);
console.log("La distancia es ",e);
var f:number = calc_distance(-10,-10);
console.log("La distancia es ",f);