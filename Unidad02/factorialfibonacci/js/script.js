var lista = [0,1];



function factorial(n){
    resultado=1;
    for (let i =n; i>1; i--){
        resultado=i*resultado;
    }
    return resultado;
}

function fibonacci(n){
    var numero = n;
    var a=1, b=0, temp;
    var tem = "";

    while(n>=0){
        temp=a;
        tem +=" "+b;
        a = a + b;
        b = temp;
        n--;
    }

    return tem;
}

function calcular(){
    let number = document.getElementById("valor").value;
    if(document.getElementById("factorial").checked){
        //alert("Usted a elegido factorial");
        document.getElementById("resultado").value = factorial(number);
    }else if(document.getElementById("fibonacci").checked){
        //alert("Usted a elegido fibonacci");
        document.getElementById("resultado").value = fibonacci(number);
    }else{
        //alert("Usted no ha elegido nada");
    }
}