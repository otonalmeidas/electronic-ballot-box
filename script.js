let seuVotoPara = document.querySelector('.text span');
let cargo = document.querySelector('.candidate span');
let descricao = document.querySelector('.resume');
let aviso = document.querySelector('.second-division');
let lateral = document.querySelector('.right');
let numeros = document.querySelector('.digits');

let eltapaAtual = 0;

function comecarEtapa() {
    let etapa = phases[etapaAtual];

    let numeroHTML = '';

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.title;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

function clicou(n) {
    alert("Clicou em "+n);
}
function branco() {
    alert("Clicou em BRANCO!");
}
function corrige() {
    alert("Clicou em CORRIGE!");
}
function confirma() {
    alert("Clicou em CONFIRMA!");
}

comecarEtapa();