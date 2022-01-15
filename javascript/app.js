const imagem = document.querySelector('img');
const button = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const Espécie = document.querySelector('espécie');
const Condição = document.querySelector('condição');


pegarPersonagem = () => {

    PegarPersonagem().then((data) => {
        // imagem.src = data.image;
        // imagem.alt = data.name;
        // nomeDoPersonagem.innerHTML = data.name;
        // espécie.innerHTML = data.species;
        // condição.innerHTML = data.status;
        console.table(data);
    });
}

button.onclick = pegarPersonagem;