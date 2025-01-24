// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo ao array e atualizar a lista na tela
function adicionarAmigo() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome) {
        amigos.push(nome);
        atualizarListaAmigos();
        input.value = '';
    } else {
        alert('Por favor, Digite um nome.');
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let listItem = document.createElement('li');
        listItem.textContent = amigo;

        lista.appendChild(listItem);
    });
}

// Função para sortear um amigo por vez
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia. Adicione amigos para realizar o sorteio.');
        return;
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let sorteadoIndex = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[sorteadoIndex];

    let item = document.createElement('li');
    item.textContent = `O amigo sorteado é ${sorteado}`;
    resultado.appendChild(item);
}

function reiniciarSorteio() {
    amigos = [];
    atualizarListaAmigos();
    let lista = document.getElementById('listaAmigos');
    lista.classList.remove('hidden');
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}