

/*
por tag: getEelementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector() -> melhor pratica, junta todos
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false;
let emailOk = false;
let assuntoOk = false

let mapa = document.querySelector("#mapa")
let java = document.querySelector("#java")
let spring = document.querySelector("#spring")
let javascript = document.querySelector("#javascript")
let angular = document.querySelector("#angular")

const testeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

nome.style.width = '100%'
email.style.width = '100%'

function validaName(){

    txtNome = document.querySelector("#avisoNome")

    if(nome.value.length < 3 || nome.value.length > 13){
    txtNome.innerHTML = "Inválido"  
    txtNome.style.color = "red"
    }
    else{
    txtNome.innerHTML = "Válido"   
    txtNome.style.color = "green" 
    nomeOk = true;  
    }
}

function validaEmail(){

    txtEmail = document.querySelector("#avisoEmail")


    if(email.value.match(testeEmail)){
        txtEmail.innerHTML = "Válido"
        txtEmail.style.color = "green"
        emailOk = true;
    }
    else{
        txtEmail.innerHTML = "Inválido"       
        txtEmail.style.color = "red"
    }
}

function validaAssunto(){

    txtAssunto = document.querySelector("#avisoAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Inválido"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "inline";
        txtAssunto.style.marginLeft = "53%"
    }
    else{
       /* txtAssunto.innerHTML = "Válido"
        txtAssunto.style.color = "green"*/
        txtAssunto.style.display = "none";
        assuntoOk = true;
        
    }
}

function validaGeral(){

    txtAssunto = document.querySelector("#avisoAssunto")

    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado")
    }
    else{
        alert("Preencha as informações corretamente")
    }
}

function mapaZoom(){

    //mapa.style.width = "800px"
    //mapa.style.height = "600px"
    //mapa.style.position = "absolute"
    mapa.style.top = "0%"
    mapa.style.left = "0%"
    mapa.style.transform = "scale(2.0)";
    mapa.style.border = "2px solid black"


}

function mapaNormal(){

    mapa.style.width = "400px"
    mapa.style.height = "250px"
    mapa.style.position = "relative";
    mapa.style.transform = "scale(1.0)";
    mapa.style.border = "none"

}



function infoJavaShow(){

    java.style.display = "block"

}

function infoJavaHide(){

    java.style.display = "none"

}

function infoSpringShow(){

    spring.style.display = "block"

}

function infoSpringHide(){

    spring.style.display = "none"

}

function infoJavascriptShow(){

    javascript.style.display = "block"

}

function infoJavascriptHide(){

    javascript.style.display = "none"

}

function infoAngularShow(){
   

    angular.style.display = "block"

}

function infoAngularHide(){

    angular.style.display = "none"

}
