let tentativas=3;
let numero=1;
let min,max;

function numeroAleatorio(){
    numero=parseInt(Math.random() * (max - min) + min) //(max - min) + min
    console.log("o numero eh: "+numero)
}


function comecarJogo(){
    let nick=document.querySelector("#input-nick").value;
    let btn_comecar=document.querySelector("#COMECAR");
    let texto_nick=document.querySelector("#span-nick");
    let tipoJogo=document.querySelector("#select-option").options//[tipoJogo.selectedIndex].value;
    
    let texto_tentativa_span=document.querySelector("#texto_tentativa_span");
    tentativas=3;
    texto_tentativa_span.textContent=tentativas;

    if(nick!=""){
        btn_comecar.disabled=false;
        texto_nick.innerHTML=nick;
        //console.log(tipoJogo)
        //console.log(tipoJogo[tipoJogo.selectedIndex].value)
        if(tipoJogo[tipoJogo.selectedIndex].value==1){//VALOR DAS OPCOES DO SELECT
            min=1;
            max=10;
            numeroAleatorio(min,max);
        }
        else if(tipoJogo[tipoJogo.selectedIndex].value==2){
            min=1;
            max=100;
            numeroAleatorio(min,max);
        }
        else if(tipoJogo[tipoJogo.selectedIndex].value==3){
            min=1;
            max=200;
            numeroAleatorio(min,max);
        }
        else{
            alert("Tipo de jogo nao encontrado")
        }

    }
    else{
       // btn_comecar.disabled=true;
        alert("Nao foi digitado o nick")
    }
}

function jogar(){
    let valor=document.querySelector("#input-numero").value;
    let texto_resposta=document.querySelector("#texto-resposta");
    let texto_tentativa_span=document.querySelector("#texto_tentativa_span");
    
    if(valor!=0){
        if(valor==numero){
            texto_resposta.textContent="Parabéns,você conseguiu acertar!"

        }
        else if(valor>numero && valor<=max){
            texto_resposta.textContent="O número é maior!"
            tentativas--;
            texto_tentativa_span.textContent=tentativas;
        }
        else if(valor<numero && valor>=min){
            texto_resposta.textContent="O número é menor!"
            tentativas--;
            texto_tentativa_span.textContent=tentativas;
            
        }
        else{
            alert("Numero fora do intervalo,digite novamente.")
        }

    }
    else{
        alert("Numero invalido,digite novamente")
    }
    
    if(tentativas==0){
        texto_resposta.textContent=" "
        alert(`Voce não acertou o número correto que era :${numero}. 
        OJOGO será reiniciado!!!!` )
        
        comecarJogo()
    }

}