// Variável global para armazenar os nomes dos amigos
let amigos = [];

// Função para renderizar a lista de amigos na tela
function renderAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

// Função para adicionar um novo amigo
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome !== "") {
        amigos.push(nome);
        renderAmigos();
        input.value = "";
        input.focus();
    } else {
        alert("Por favor, digite um nome de amigo!");
    }
}

// Função para sortear um amigo (garante que haja pelo menos 2 amigos)
function sortearAmigo() {
    if (amigos.length <2) {
        alert("Por favor, adicione pelo menos 2 amigos para realizar o sorteio!");
        return;
    }
    
    // Exemplo de implementação do sorteio (você pode adaptar conforme sua lógica)
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na área de resultado
    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = "O amigo secreto sorteado é: " + amigoSorteado;
    resultadoUl.appendChild(li);
}

// Renderiza os nomes iniciais ao carregar a página
window.addEventListener("DOMContentLoaded", () => {
    renderAmigos();
});



//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
