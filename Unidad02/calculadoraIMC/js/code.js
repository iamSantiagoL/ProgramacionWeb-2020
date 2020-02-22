function imc(){
	let weight = document.getElementById("peso").value;
	let height = document.getElementById("altura").value;
	let position = document.getElementById("position");
	var rango;

	if(weight && height){
		height = height/100;
		var imc = weight/(height*height);
		document.getElementById("imc").value = imc.toFixed(2);


		if (imc<18.5){
			rango = "peso insuficiente";
		}else if(imc>=18.5 && imc<=24.9){
			rango = "normopeso";
		}else if(imc>=25 && imc<=26.9){
			rango = "sobrepeso grado I";
		}else if(imc>=27 && imc<=29.9){
			rango = "sobrepeso grado II (preobesidad)";
		}else if(imc>=30 && imc<=34.9){
			rango = "obesidad de tipo I";
		}else if(imc>=35 && imc<=39.9){
			rango = "obesidad de tipo II";
		}else if(imc>=40 && imc<=49.9){
			rango = "obesidad de tipo III (mórbida)";
		}else{
			rango = "obesidad de tipo IV (extrema)";
		}
		position.innerText = "Usted se encuentra en el rango de: " + rango;
	}else{
		alert("Faltan campos");
	}
}
