const checkbox = document.querySelector("#checkbox-lg")
const passwd = document.querySelector(".passwd-login")
const errors = document.querySelector(".errors")
const label = document.querySelector(".checkbox-label")

function MostarOcultarSenha () {

if (passwd.type == 'password') {

passwd.setAttribute('type', 'text')
label.innerHTML = "Ocultar senha"

} else if(passwd.type == 'text') {

passwd.setAttribute('type', 'password')
label.innerHTML = "Mostrar senha"
    
}

}

checkbox.addEventListener("click", MostarOcultarSenha)