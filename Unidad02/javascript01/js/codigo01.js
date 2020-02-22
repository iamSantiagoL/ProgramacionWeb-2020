var a;
let b;
const pi = 3.1416;

a = 10;
b = "upv";
c = true;

var colores = ["verde", "blanco", "rojo"];
colores.push("naranja");
document.writeln("Longitud colores: " + colores.length);

document.write("variable a: " + a + " variable b: " + b + " variable c:" + c);
let nombre = window.prompt("¿Cuál es tu nombre?");
if (nombre == null) {

}else{
	alert("Hola " + nombre);
	let txtNombre = document.getElementById("nombre");
}
txtNombre.value = nombre;
//txtNombre.type = "email";