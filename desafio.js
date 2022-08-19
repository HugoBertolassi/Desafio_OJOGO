/*Variaveis globais*/
let tentativas=3;
let numero=1;
let min,max;
let nick=document.querySelector("#input-nick");
let btn_jogar=document.querySelector('#JOGAR');
let btn_comecar=document.querySelector("#COMECAR");
let texto_resposta=document.querySelector("#texto-resposta");
let valor=document.querySelector("#input-numero");    
       

/*Funcao de gerar o numero aleatorio */
function numeroAleatorio(min,max){
    numero=parseInt(Math.random() * (max - min) + min) //(max - min) + min
    console.log("o numero eh: "+numero)
}

/*Funcao de habilitar botao jogar*/
nick.addEventListener('input',()=>{
    if(nick.value==""){
        btn_comecar.disabled=true;    
        btn_comecar.style.backgroundColor = "#B0A3A2";
        btn_jogar.disabled=true;
        btn_jogar.style.backgroundColor = "#B0A3A2";
    }
    else{
        btn_comecar.disabled=false;    
        btn_comecar.style.backgroundColor = "#1180E6";
        
    }
})


/*Funcao de inicio do jogo e */
function comecarJogo(){
     /*Declaracao das variaveis*/
   let texto_nick=document.querySelector("#span-nick");
    let tipoJogo=document.querySelector("#select-option").options;
    let texto_tentativa_span=document.querySelector("#texto_tentativa_span");
   
    /*Inicio e atualizacao das tentativas iniciais */
    tentativas=3;
    texto_tentativa_span.textContent=tentativas;
    btn_jogar.disabled=false;
    btn_jogar.style.backgroundColor = "#F2890D";
    
    if(nick.value!=""){//validacao se o input tem texto
        /*Ativar botao de jogo e estilo*/ 
        btn_comecar.disabled=false;
        texto_nick.innerHTML=nick.value;      
        btn_jogar.disabled=false;
        btn_jogar.style.backgroundColor = "#F2890D";
    
        /*Selecao do tipo de jogo*/
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
        else{//tratamento erro do input do nick
            alert("Tipo de jogo nao encontrado")
        }
    }
    else{//tratamento erro do input do nick
        alert("Nao foi digitado o nick")
    }
}

/*Jogo e  validacao dos valores do jogo*/
function jogar(){
    /*Declaracao das variaveis*/ 
    let texto_tentativa_span=document.querySelector("#texto_tentativa_span");
  
  
   
   if(valor.value!=0){//validacao se existe valor no input
        /*Validacao do resultado do jogo*/
       
        if(valor.value==numero){
            texto_resposta.textContent="Parabéns,você conseguiu acertar!";   
        }
        else if(valor.value>numero && valor.value<=max){
            texto_resposta.textContent="Digite um número menor!";
            tentativas--;
            texto_tentativa_span.textContent=tentativas;
        }
        else if(valor.value<numero && valor.value>=min){
            texto_resposta.textContent="Digite um número é maior!";
            tentativas--;
            texto_tentativa_span.textContent=tentativas;  
        }
        else{
            alert("Numero fora do intervalo,digite novamente.")
        }
    }
    else{//validacao do numero
        alert("Numero invalido,digite novamente")
    }
    
    /*Reinicio rapido do jogo*/ 
    if(tentativas==0){
        texto_resposta.textContent=" "
        alert(`Voce não acertou o número correto que era : ${numero}. 
        OJOGO será reiniciado!!!!` )
        comecarJogo()
    }
}