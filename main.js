//const botaopedido = document.querySelector(".botao2");
//botaopedido.innerHTML= "Fechar Pedido";
//botaopedido.classList.add("verde");
//botaopedido.classList.add("botao3");

function checkBoxP (elemento) {
    const objetoclicado= document.querySelector(".pratos .borda");
    if (objetoclicado !== null) {
        objetoclicado.classList.remove("borda");
    }

    elemento.classList.add("borda");
}


function ionCheckP (elemento){    
    const iconeCheck = elemento.querySelector(".pratos .icone-ionicon");
    const check = document.querySelector(".pratos .ionicon-check");
    
    if (check !== null){
        check.classList.remove("ionicon-check");
    }
    iconeCheck.classList.add("ionicon-check");
}


function checkBoxB (elemento) {
    const bebidaClicado = document.querySelector(".bebida .borda");

    if (bebidaClicado !== null) {
        bebidaClicado.classList.remove("borda");
    }

    elemento.classList.add("borda");

    pedido();
} 


function ionCheckB (elemento){    
    const iconeCheck = elemento.querySelector(".bebida .icone-ionicon");
    const check = document.querySelector(".bebida .ionicon-check");
    
    if (check !== null){
        check.classList.remove("ionicon-check");
    }
    iconeCheck.classList.add("ionicon-check");
}


function checkBoxS (elemento) {
    const bebidaClicado = document.querySelector(".sobremesa .borda");

    if (bebidaClicado !== null) {
        bebidaClicado.classList.remove("borda");
    }

    elemento.classList.add("borda");

    pedido();
} 

function ionCheckS(elemento){    
    const iconeCheck = elemento.querySelector(".sobremesa .icone-ionicon");
    const check = document.querySelector(".sobremesa .ionicon-check");
    
    if (check !== null){
        check.classList.remove("ionicon-check");
    }
    iconeCheck.classList.add("ionicon-check");
} 

function pedido() {
    const pratoEscolhido = document.querySelector(".pratos .borda");
    const bebidaEscolhida = document.querySelector(".bebida .borda");
    const sobremesaEscolhida = document.querySelector(".sobremesa .borda");

    const botao3itens = document.querySelector(".barra-base .botao-3itens");
    const botaoFecharPedido = document.querySelector(".barra-base .fecharPedido");

    if (pratoEscolhido && bebidaEscolhida && sobremesaEscolhida) { 
        botaoFecharPedido.classList.remove("escondido");
        botao3itens.classList.add("escondido");
    }
}




