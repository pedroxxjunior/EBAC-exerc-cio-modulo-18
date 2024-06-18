const form = document.getElementById('form-comparação');

function valor2(numeroA, numeroB) {
    const numA = parseFloat(numeroA);
    const numB = parseFloat(numeroB);
    return numB > numA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById("CampoA").value;
    const numeroB = document.getElementById("CampoB").value;
    const mensagemSucesso = 'ok Valido!,o <b>NumeroB</> e maior que o <b>numeroA</b>.';
    const mensagemErro = 'Invalido!,o <b>NumeroA</b> e maior ou igual ao <b>numeroB</b>.';
    const containerMensagemErro = document.querySelector('.Message-erro');
    const containerMensagemSucesso = document.querySelector('.Success-message');

    if (valor2(numeroA, numeroB)) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        containerMensagemErro.style.display= 'none';
        numeroA.value = '';
        numeroB.value = '';
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display= 'block';

        containerMensagemSucesso.style.display= 'none';
    }
})


console.log(form);
