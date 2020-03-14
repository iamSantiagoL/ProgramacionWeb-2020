//Arreglo con todas las cartas
const cards = document.querySelectorAll('.card');
let flipped = false;
let lock = false;
let first, second;
let ended = false;
let counter = 0;
let timeLeft = 90;
let timer;


//Iniciar juego
Swal.fire({
    title: '¿Deseas iniciar el juego?',
    text: 'Tienes que encontrar los 6 pares de cartas en menos de 120 segundos',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#69b9c9',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí! >:D',
    cancelButtonText: 'No :('
}).then((result => {
    if (result.value) {
        //Asignamos el eventListener a cada una de las cartas
        cards.forEach(function (card) {
            card.addEventListener('click', flip);
        });
        setTimeout(endgame,90000);

        timer = setInterval(function(){
            if(timeLeft<=0){
                clearInterval(timer);
            }
            document.getElementById('timer').innerText = 'Tiempo: ' + timeLeft+' seg';
            timeLeft-=1;
        },1000);
    }
}))


//función para voltear las cartas
function flip() {
    if (lock) { return };
    if (this === first) { return };
    //console.log('clicked');
    this.classList.add('flip');

    if (!flipped) {
        flipped = true;
        first = this;
        return;
    }
    second = this;
    check();
}


function game() {
    clearInterval(timer);
    Swal.fire({
        title: 'Sweet!',
        text: 'Has ganado el juego',
        icon: 'success'
    })
}


function endgame(){
    cards.forEach(function (card) {
        card.removeEventListener('click', flip);
    });
    Swal.fire({
        title: 'Dang!',
        text: 'No has alcanzado a encontrar todos los pares',
        icon: 'error'
    })
}

//Checar si las cartas son pares
function check() {
    if (first.dataset.card === second.dataset.card) {
        //console.log('Son iguales');
        disableCards();
        counter++;
        console.log(counter);
        if (counter == 6) {
            game();
        }
        return;
    }
    //console.log('no son iguales');
    unflip();
}

//Deshabilitamos las cartas pares
function disableCards() {
    //Desaparecer las cartas
    /*$(first).invisible();
    $(second).invisible();*/
    first.removeEventListener('click', flip);
    second.removeEventListener('click', flip);
    setTimeout(() => {
        newTurn();
    });
}

//Volver a voltear la carta
function unflip() {
    //mantenemos el tablero bloqueado
    lock = true;
    setTimeout(() => {
        first.classList.remove('flip');
        second.classList.remove('flip');
        newTurn();
    }, 1500);
}

//Preparamos el tablero para un nuevo turno
function newTurn() {
    flipped = false;
    lock = false;
    first = null;
    second = null;
}

//Función para ocultar/mostrar las cartas
(function ($) {
    $.fn.invisible = function () {
        return this.each(function () {
            $(this).css("visibility", "hidden");
        });
    };
    $.fn.visible = function () {
        return this.each(function () {
            $(this).css("visibility", "visible");
        });
    };
}(jQuery));

//Shuffle cards

function shuffle() {

}