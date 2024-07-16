let calcular = document.querySelector('#calcular');

function calcularImc() {
    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let resulado = document.querySelector('#resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorImc = peso / (altura ** 2)

        let classificacaoImc = '';

        if(valorImc < 17) {
            classificacaoImc = 'Muito abaixo do peso ideal.'
        } else if(valorImc >= 17 && valorImc <= 18.49) {
            classificacaoImc = 'Abaixo do peso'
        } else if(valorImc >= 18.5 && valorImc <= 24.99) {
            classificacaoImc = 'com o Peso normal'
        } else if(valorImc >= 25 && valorImc <= 29.99) {
            classificacaoImc = 'Acima do peso'
        } else if(valorImc >= 30 && valorImc <= 34.99) {
            classificacaoImc = 'com Obesidade grau 1'
        } else if(valorImc >= 35 && valorImc <= 39.99) {
            classificacaoImc = 'com Obesidade grau 2'
        } else if (valorImc >= 40) {
            classificacaoImc = 'com Obesidade grau 3(mórbida)'
        }
 
        resulado.innerHTML = `${nome}, seu IMC é ${valorImc.toFixed(2)} e você está ${classificacaoImc}`;
    } else {
        resulado.innerHTML = 'Preencha todos os campos'
    }
}
calcular.addEventListener('click', calcularImc)