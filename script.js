var botonEncriptar = document.querySelector(".botonEncriptar");
var botonDesencriptar = document.querySelector(".botonDesencriptar");
var contenedorDibujo = document.querySelector(".contenedorDibujo");
var contenedorParrafo = document.querySelector(".contenedorParrafo");
var textoResultado = document.querySelector(".textoResultado");

botonEncriptar.onclick = Encriptar;
botonDesencriptar.onclick = Desencriptar;

function Encriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto()
    textoResultado.textContent = encriptarTexto(cajaTexto);
}

function Desencriptar(){
    ocultarAdelante();
    var cajaTexto = recuperarTexto()
    textoResultado.textContent = desencriptarTexto(cajaTexto);
}

function recuperarTexto(){
    var cajaTexto = document.querySelector(".cajaTexto")
    return cajaTexto.value
}

function ocultarAdelante(){
    contenedorDibujo.classlist.add("ocultar");
    contenedorDibujo.classlist.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const botonCopiar = document.querySelector(".botonCopiar");
    botonCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".textoResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
})
