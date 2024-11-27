document.addEventListener('DOMContentLoaded', function() {

const form = document.getElementById('form-comparação');

function valor2(numeroA, numeroB) {
    const numA = parseFloat(numeroA);
    const numB = parseFloat(numeroB);
    return numA > numB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById("CampoA").value;
    const numeroB = document.getElementById("CampoB").value;
    const mensagemA = 'A <b>áreaA</b> é maior que a <b>areaB</b>.';
    const mensagemB = 'A <b>áreaB</b> é maior ou igual a <b>áreaA</b>.';
    const containeráreaB = document.querySelector('.áreaB');
    const containeráreaA = document.querySelector('.áreaA');

    if (valor2(numeroA, numeroB)) {
        containeráreaA.innerHTML = mensagemA;
        containeráreaA.style.display = 'block';

        containeráreaB.style.display= 'none';
        
        numeroA.value = "";
        numeroB.value = "";
    } else {
        containeráreaB.innerHTML = mensagemB;
        containeráreaB.style.display= 'block';

        containeráreaA.style.display= 'none';

    }
})


console.log(form);

})