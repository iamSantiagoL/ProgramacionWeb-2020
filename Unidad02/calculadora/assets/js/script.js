var n1=-1;
var n2=-1;
var op=0;
var second=false;

function change(){
    if(document.getElementById("on").checked){
        document.getElementById('display').style.backgroundColor = "greenyellow";
        document.getElementById('lbl_display').style.color = "gray";
        document.getElementById('lbl_display').textContent = "0";
        let botones =document.getElementsByTagName('button');
        for(i=0;i<botones.length;i++){
            botones[i].disabled=false;
        }
    }else if(document.getElementById("off").checked){
        document.getElementById('display').style.backgroundColor = "gray";
        document.getElementById('lbl_display').textContent = "0";
        document.getElementById('lbl_display').style.color = "gray";
        let botones =document.getElementsByTagName('button');
        for(i=0;i<botones.length;i++){
            botones[i].disabled=true;
        }
    }
}

function calcular(n1,n2,operation){
    switch(operation){
        case 1:
            return parseInt(n1)+parseInt(n2);
        case 2:
            return parseInt(n1)-parseInt(n2);
        case 3:
            return parseInt(n1)*parseInt(n2);
        case 4:
            return parseInt(n1)/parseInt(n2);
    }
}

function clean(){
    var n1=-1;
    var n2=-1;
    var op=0;
    var second=false;
    document.getElementById('lbl_display').textContent = "0";
}

function presionar(btn){
    if(isNaN(btn)){
        document.getElementById('lbl_display').textContent = "0";
        switch(btn){
            case '+':
                op=1;
                second=true;
                break;
            case '-':
                op=2;
                second=true;
                break;
            case 'x':
                op=3;
                second=true;
                break;
            case '/':
                op=4;
                second=true;
                break;
            case '=':
                if(second & n2!=-1){
                    document.getElementById('lbl_display').textContent = calcular(n1,n2,op);
                }else{
                    document.getElementById('lbl_display').textContent = "Math Error";
                }
                op=0;
                break;
        }
    }else{
        if(second==false){
            if(document.getElementById('lbl_display').textContent == "0"){
                document.getElementById('lbl_display').textContent = btn;
            }else{
                document.getElementById('lbl_display').textContent += btn;
            }
            n1=document.getElementById('lbl_display').textContent;
            console.log(n1);
        }else{
            if(document.getElementById('lbl_display').textContent == "0"){
                document.getElementById('lbl_display').textContent = btn;
            }else{
                document.getElementById('lbl_display').textContent += btn;
            }
            n2=document.getElementById('lbl_display').textContent;
            console.log(n2);
        }
    }
}