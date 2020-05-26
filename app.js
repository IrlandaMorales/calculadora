const botonNumero = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');
var opeactual = '';
var opeanterior = '';
var operacion = undefined;

botonNumero.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click',function(){
        selectOperacion(boton.innerText);
        
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
});

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay(); 
});

function selectOperacion(op){
    if (opeactual === '') return;
    if (opeanterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeanterior = opeactual;
    opeactual = '';
}

function calcular (){
    var calculo;
    const anterior = parseFloat(opeanterior);
    const actual = parseFloat(opeactual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeactual =calculo;
    operacion = undefined;
    opeanterior = '';
}

function agregarNumero(num){
    opeactual = opeactual.toString() + num.toString();
    actualizarDisplay()
}

function clear(){
    opeactual = '';
    opeanterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = opeactual;
}

clear();