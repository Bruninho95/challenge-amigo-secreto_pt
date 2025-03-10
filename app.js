//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((nome) => {
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio.");
        return;
    }

    const sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("resultado").innerHTML = `<p>O amigo secreto sorteado é: <strong>${sorteado}</strong></p>`;
}
