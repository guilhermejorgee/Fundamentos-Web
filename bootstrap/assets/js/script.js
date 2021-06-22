

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
let divAssunto = document.querySelector(".asfo")

let nomeOk = false;
let emailOk = false;
let assuntoOk = false

const testeEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validaName(){

    txtNome = document.querySelector("#avisoNome")

    if(nome.value.length < 3 || nome.value.length > 13){
    txtNome.innerHTML = "Nome Inválido"  
    txtNome.style.color = "red"
    }
    else{
    txtNome.innerHTML = "Nome Válido"   
    txtNome.style.color = "green" 
    nomeOk = true;  
    }
}

function validaEmail(){

    txtEmail = document.querySelector("#avisoEmail")


    if(email.value.match(testeEmail)){
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true;
    }
    else{
        txtEmail.innerHTML = "Email Inválido"       
        txtEmail.style.color = "red"
    }
}

function validaAssunto(){

    txtAssunto = document.querySelector("#avisoAssunto")

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Limite máximo de caracteres: 100"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "inline";
        divAssunto.style.height = "114px"
        divAssunto.style.boxSizing = "border-box"
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