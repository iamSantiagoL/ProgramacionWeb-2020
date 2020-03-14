function validar(tabla, resultados) {
    let ret = 0;
    let err_res = document.getElementById('error_resultados');
    let err_tabla = document.getElementById('error_tabla');

    //validación
    if (resultados < 1 || resultados > 20) {
        err_res.innerText = "Ingrese un valor entre 1 y 20.";
        ret = 1;
    } else {
        err_res.innerText = "";
    }

    if (tabla < 1 || tabla > 50) {
        err_tabla.innerText = "Ingrese un valor entre 1 y 50.";
        ret = 1;
    } else {
        err_tabla.innerText = "";
    }
    return ret;
}



function generar() {
    // variables
    let tabla = document.getElementById('tabla').value;
    let resultados = document.getElementById('resultados').value;

    if (validar(tabla, resultados) == 0) {
        if(document.body.contains(document.getElementById('table_div'))){
            var list = document.getElementById('table_div');
            list.parentNode.removeChild(list);
        }
        let container = document.getElementById('tabla_multiplicar');
        let divTable = document.createElement("div");
        let table = document.createElement("table");
        divTable.id = "table_div";
        table.id = "table_vertical";

        let trh = document.createElement("tr");
        let th = document.createElement("th");
        let th2 = document.createElement("th");
        th.innerHTML = "x";
        trh.appendChild(th);
        th2.innerHTML = tabla;
        trh.appendChild(th2);
        table.appendChild(trh);
        for (let i = 1; i <= resultados; i++) {
            let tr = document.createElement("tr");
            let v_th = document.createElement("th");
            v_th.innerHTML = i;
            let v_td = document.createElement("td");
            v_td.innerHTML = tabla * i;
            tr.appendChild(v_th);
            tr.appendChild(v_td);
            table.appendChild(tr);
        }

        divTable.appendChild(table);
        container.appendChild(divTable);
    }
}