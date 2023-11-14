"use strict"

// call of elements
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const btnEnviar = document.getElementById("btn-enviar");
const resultado = document.querySelector(".res")

// send button
btnEnviar.addEventListener("click",e=>{
    e.preventDefault();
    let error = validarCampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    } 
})

// validation code
const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 5 || nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es invalido";
    return error;
    }
    else if(email.value.length < 5 || 
            email.value.length > 40 || 
            email.value.indexOf("@") == -1 ||
            email.value.indexOf(".") == -1
            ){
                error[0] = true;
                error[1] = "El Email es invalido";
                return error;
    }
    else if (materia.value < 0 || materia.value > 40){
        error[0] = true;
        error[1] = "La materia no existe";
    } 
    error[0] = false;
    return error;
}