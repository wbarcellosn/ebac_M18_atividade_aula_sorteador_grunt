document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-sorteador').addEventListener('submit', (e) => {

        e.preventDefault();

        let numMaximo = document.getElementById('numMaximo').value;
        numMaximo = parseInt(numMaximo);


        let numAleatorio = Math.random() * numMaximo;
        numAleatorio = Math.floor(numAleatorio + 1);

        document.getElementById('valor-resultado').innerText = numAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})