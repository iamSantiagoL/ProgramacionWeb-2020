//Arreglo con todas las cartas
const cards = document.querySelectorAll('.card');
let flipped = false;
let lock = false;
let first, second;
let ended = false;
let counter = 0;
let timeLeft = 60;
let timer;
let gameEnded;

let start = document.getElementById('start');
let reset = document.getElementById('restart');

let pairs = document.getElementById('pairs');

start.style.visibility = 'hidden';
reset.style.visibility = 'hidden';

$(document).ready(startGame());

//Iniciar juego
function startGame(){
Swal.fire({
    title: '¿Deseas iniciar el juego?',
    text: 'Tienes que encontrar los 6 pares de cartas en menos de 60 segundos',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#69b9c9',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí!',
    cancelButtonText: 'No'
}).then((result => {
    if (result.value) {
        shuffle();
        counter = 0;
        pairs.innerText = 'Pares encontrados: '+counter;
        gameEnded = setTimeout(endgame, 60000);
        start.style.visibility = 'hidden';
        reset.style.visibility = 'visible';
        reset.addEventListener('click', resetGame);
        timer = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timer);
            }
            document.getElementById('timer').innerText = 'Tiempo: ' + timeLeft + ' seg';
            timeLeft -= 1;
        }, 1000);

        //Asignamos el eventListener a cada una de las cartas
        cards.forEach(function (card) {
            card.addEventListener('click', flip);
        });
    } else {
        start.style.visibility = 'visible';
        start.addEventListener('click', startGame);
    }
}));
}


function resetGame(){
    Swal.fire({
        title: '¿Deseas reiniciar el juego?',
        text: 'Tienes que encontrar los 6 pares de cartas en menos de 60 segundos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#69b9c9',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí :$...',
        cancelButtonText: '¡No!'
    }).then((result => {
        if (result.value) {
            shuffle();
            counter = 0;
            pairs.innerText = 'Pares encontrados: '+ counter;
            resetCards();
            clearInterval(timer);
            clearTimeout(gameEnded);
            newTurn();
            timeLeft = 60;
            gameEnded = setTimeout(endgame, 60000);
            timer = setInterval(function () {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                }
                document.getElementById('timer').innerText = 'Tiempo: ' + timeLeft + ' seg';
                timeLeft -= 1;
            }, 1000);
            //Asignamos el eventListener a cada una de las cartas
            cards.forEach(function (card) {
                card.addEventListener('click', flip);
            });
        }
    }));
}

function resetCards(){
    cards.forEach(function (card) {
        card.classList.remove('flip');
    });
}


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
    clearTimeout(gameEnded);
    Swal.fire({
        title: 'Sweet!',
        text: 'Has ganado el juego',
        icon: 'success'
    })
}

//Función con alert cuando se pierde el juego
function endgame() {
    cards.forEach(function (card) {
        card.removeEventListener('click', flip);
    });
    Swal.fire({
        title: 'Chale :(',
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
        pairs.innerText = 'Pares encontrados: '+counter;
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
    var m_cards = $('.card');
    for(var i = 0; i < cards.length; i++){
        var target = Math.floor(Math.random() * m_cards.length -1) + 1;
        var target2 = Math.floor(Math.random() * m_cards.length -1) +1;
        m_cards.eq(target).before(m_cards.eq(target2));
    }
}