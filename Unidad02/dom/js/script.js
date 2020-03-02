

/*let container = document.getElementById("container");

let title1 = document.createElement("H1");
title1.innerText="Universidad Politécnica de Victoria";
title1.classList.add("title");

let paragraph = document.createElement("p");
paragraph.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus et consequuntur obcaecati ipsum voluptatem voluptas atque hic reiciendis commodi cupiditate. Possimus atque suscipit recusandae reprehenderit laborum fuga eos repellendus quos?";

let header = document.createElement("header");
header.appendChild(title1);
header.appendChild(paragraph);
header.classList.add("header");

container.appendChild(header);

let padre = container.parentNode;

let div = document.createElement("div");

let title2 = document.createElement("H1");
title2.innerText="Hola mundo";
title2.classList.add("title2");

div.appendChild(title2);

padre.insertBefore(div, container);*/

let selectOption = document.getElementById("number_table");
for (let i=1;i<=10;i++) {
    let option = document.createElement("option");
    option.innerText=i;
    option.value=i;
    selectOption.appendChild(option);
}




function calculate_table(){
    var number = selectOption.value;
    var max = document.getElementById("input_number").value;
    //alert("You've selected the number "+ number+" with the max number of "+max);
    if(max<1){
        alert("Not valid value");
    }else{
        if(max>19){
            generateTableVertical(number,max);
        }else{
            generateTableHorizontal(number, max);
        }
    }
}

function generateTableVertical(number, max){
    if(document.body.contains(document.getElementById('table_div'))){
        var list = document.getElementById('table_div');
        list.parentNode.removeChild(list);
    }else{
    }
    let container = document.getElementById("container");

    var divTable = document.createElement("div");
    var table = document.createElement("table");
    divTable.id = "table_div";
    table.id = "table_vertical";

    let trh = document.createElement("tr");
    let th = document.createElement("th");
    let th2 = document.createElement("th");
    th.innerHTML = "x";
    trh.appendChild(th);
    th2.innerHTML = number;
    trh.appendChild(th2);
    table.appendChild(trh);
    for (let i=1;i<=max;i++){
        let tr = document.createElement("tr");
        let v_th = document.createElement("th");
        v_th.innerHTML = i;
        let v_td = document.createElement("td");
        v_td.innerHTML = number*i;
        tr.appendChild(v_th);
        tr.appendChild(v_td);
        table.appendChild(tr);
    }

    divTable.appendChild(table);
    container.appendChild(divTable);
}




function generateTableHorizontal(number, max){
    if(document.body.contains(document.getElementById('table_div'))){
        var list = document.getElementById('table_div');
        list.parentNode.removeChild(list);
    }else{
    }
    let container = document.getElementById("container");

    var divTable = document.createElement("div");
    var table = document.createElement("table");
    divTable.id = "table_div";
    table.id = "table_horizontal";

    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerHTML = "x";
    tr.appendChild(th);
    for (let i=1;i<=max;i++){
        let v_th = document.createElement("th");
        v_th.innerHTML = i;
        tr.appendChild(v_th);
    }
    table.appendChild(tr);

    let tr2 = document.createElement("tr");
    let th2 = document.createElement("th");
    th2.innerHTML = number;
    tr2.appendChild(th2);
    for (let i=1;i<=max;i++){
        let v_th = document.createElement("td");
        v_th.innerHTML = i*number;
        tr2.appendChild(v_th);
    }
    table.appendChild(tr2);

    divTable.appendChild(table);
    container.appendChild(divTable);
}




/* Este código es plagiado de Internet, papu.
src: https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input/469362#469362 */
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }