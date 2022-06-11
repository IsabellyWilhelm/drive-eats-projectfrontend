//const botaopedido = document.querySelector(".botao2");
//botaopedido.innerHTML= "Fechar Pedido";
//botaopedido.classList.add("verde");
//botaopedido.classList.add("botao3");

function selecionarcomida (elemento) {
    const botaoclicado = document.querySelector(".borda");
    if (botaoclicado !== null) {
        botaoclicado.classList.remove(".borda");
    }

    elemento.classList.add(".borda");
}