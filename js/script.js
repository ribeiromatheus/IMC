let txtHeight = document.querySelector('#txtHeight'),
    txtWeight = document.querySelector('#txtWeight'),
    res = document.querySelector('#res'),
    btnCalc = document.querySelector('#btnCalc'),
    situacao = document.querySelector('#situacao'),
    rbtnMale = document.querySelector('#rbtnMale'),
    rbtnFemale = document.querySelector('#rbtnFemale');

document.addEventListener('DOMContentLoaded', onFocus);
btnCalc.addEventListener('click', calcular);
txtHeight.addEventListener('keydown', onKeyDown);
txtWeight.addEventListener('keydown', onKeyDown);

function onFocus() {
    txtWeight.focus();
}

function onKeyDown(e) {
    if (e.key === 'e') e.preventDefault();
}
function calcular() {
    if (!validate(txtWeight.value, txtHeight.value)) {
        res.innerHTML = calcImc(txtWeight.value, txtHeight.value).toFixed(2);
        situacao.innerHTML = result();
    }
}

function validate(weight, height) {
    let ret = false;

    if (weight == '' || height == '') ret = true;

    return ret;
}

function calcImc(weight, height) {
    return weight / height ** 2;
}

function result() {
    let sit = "",
        imc = calcImc(txtWeight.value, txtHeight.value);

    if (rbtnMale.checked) {
        if (imc < 20) sit = "Abaixo do peso";
        else if (imc <= 24.9) sit = "Normal";
        else if (imc <= 29.9) sit = "Obesidade Leve";
        else if (imc <= 39.9) sit = "Obesidade Moderada";
        else sit = "Obesidade Mórbida";
    } else {
        if (imc < 19) sit = "Abaixo do peso";
        else if (imc <= 23.9) sit = "Normal";
        else if (imc <= 28.9) sit = "Obesidade Leve";
        else if (imc <= 38.9) sit = "Obesidade Moderada";
        else sit = "Obesidade Mórbida";
    }
    return sit;
}
