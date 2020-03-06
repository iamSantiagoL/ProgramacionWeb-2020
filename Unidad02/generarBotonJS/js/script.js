function wave(){
    alert("Ya gay");
}

let container = document.getElementById('container');

let btn = document.createElement('button');
btn.innerText = 'Primary';
btn.addEventListener('click',wave);
container.appendChild(btn);