var n = 1;


function generateTable(product, price, units){
    let number_td = document.createElement("td");
    let product_td = document.createElement("td");
    let price_td = document.createElement("td");
    let units_td = document.createElement("td");
    let tp = document.createElement("td");

    number_td.innerText = n;
    product_td.innerText = product;
    price_td.innerText = price;
    units_td.innerText = units;
    tp.innerText = price * units;

    let tr = document.createElement("tr");
    tr.appendChild(number_td);
    tr.appendChild(product_td);
    tr.appendChild(price_td);
    tr.appendChild(units_td);
    tr.appendChild(tp);

    var parentElement = document.getElementById("preproducts").parentElement;
    var pre = document.getElementById("preproducts");
    parentElement.insertBefore(tr,pre);

    var subtotal = document.getElementById("subtotal");
    subtotal.innerText = parseInt(subtotal.innerText) + parseInt(tp.innerText);

    document.getElementById("iva").innerText = parseInt(subtotal.innerText) * .16;
    document.getElementById("total").innerText = parseInt(subtotal.innerText) + parseInt(iva.innerText);

    if(n%2==0){
        tr.style.backgroundColor = "#e8dada";
    }else{
        tr.style.backgroundColor = "#dae3e8";
    }

    n++;
}


function add(){
    let product = document.getElementById("product").value;
    let price = document.getElementById("price").value;
    let units = document.getElementById("units").value;

    if(product==""){
        alert("Ingrese un producto");
    }else if(price == 0 || units == 0){
        alert("Ingrese un precio o unidad válida");
    }
    else{
        generateTable(product, price, units);
    }
}