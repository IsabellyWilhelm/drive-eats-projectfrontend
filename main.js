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


function confirmePedido() {
    const botaoFecharPedido = document.querySelector(".barra-base .fecharPedido");
    const containerOpaco = document.querySelector(".container-opaco");

    if (botaoFecharPedido !== null){
        containerOpaco.classList.remove("escondido");

        //comida selecionada 
        const tituloComida = document.querySelector(".prato .borda .info h2").innerHTML; 
        document.querySelector(".box-comida .item-escolhido").innerHTML = `${tituloComida}`;
        const precoComida = document.querySelector(".prato .borda .info p").innerHTML;
        document.querySelector(".box-comida .preco").innerHTML = `${precoComida}`;

        //bebida selecionada 
        const tituloBebida = document.querySelector(".bebida .borda .info h2").innerHTML; 
        document.querySelector(".box-bebida .item-escolhido").innerHTML = `${tituloBebida}`;
        const precoBebida = document.querySelector(".bebida .borda .info p").innerHTML;
        document.querySelector(".box-bebida .preco").innerHTML = `${precoBebida}`;

        //sobremesa selecionada 
        const tituloSobremesa = document.querySelector(".sobremesa .borda .info h2").innerHTML; 
        document.querySelector(".box-sobremesa .item-escolhido").innerHTML = `${tituloSobremesa}`;
        const precoSobremesa = document.querySelector(".sobremesa .borda .info p").innerHTML;
        document.querySelector(".box-sobremesa .preco").innerHTML = `${precoSobremesa}`;

        //total
        const valorComida = Number((precoComida).replace("R$","").replace(",","."));
        const valorBebida = Number((precoBebida).replace("R$","").replace(",","."));
        const valorSobremesa = Number((precoSobremesa).replace("R$","").replace(",","."));
        const total = (valorComida + valorBebida + valorSobremesa).toFixed(2).replace(".",",");
        document.querySelector(".box-total .preco-total").innerHTML = `R$ ${total}`;
    }
}



