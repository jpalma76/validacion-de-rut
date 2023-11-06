let mensaje = document.getElementById('message');

let botonValidar = document.getElementById('validar')
botonValidar.addEventListener('click', validarFormulario)

let botonLimpiarFormulario = document.getElementById('limpiar')
botonLimpiarFormulario.addEventListener('click', limpiarFormulario)

function limpiarFormulario(e) {
    e.preventDefault();
    rut="";
    location.reload()
}

function validarFormulario(e) {
    e.preventDefault();
    
    // se obtiene el valor del input rut
    let rut = document.getElementById('txt-rut').value;
    // separamos el numero del rut del digito verificador
    let numeros = rut.substring(rut, rut.length - 2)
    let dv = parseInt(rut.substring(rut.length - 1))

    // transformamos el numero en un array
    // Le quitamos los puntos al numero
    let arrayNumeros = numeros.replaceAll(".", "").split('');

    // Invertimos el orden del array para poder utilizarlo
    // en la formula
    let numerosInvertidos = arrayNumeros.reverse();

    // Mapeamos el array y transformamos a enteros los numeros obtenidos
    let numerosInt = numerosInvertidos.map(Number);

    // Formula para verificar el rut
    let suma = 0;
    /* Los factores son los números del 2 al 7 con los que se 
    multiplicarán cada dígito del numero del rut*/
    let factores = 2;
    
    for (let i = 0; i < numerosInt.length; i++) {
        let valor = numerosInt[i] * factores;
        factores++;
        /* cuando factores sea mayor a 7, automáticamente su valor se 
        resetea y vuelve nuevamente a dos */
        if(factores > 7) {
            factores = 2;
        }
        /* se suman los valores obtenidos de la
           multiplicacion de numerosInt y factores 
        */
        suma += valor;
    }

    /* se redondea hacia abajo el resultado de la
       division de suma y el factor 11 */
    let resultado = Math.floor(suma / 11);

    let resultado2 = resultado * 11;

    let resultado3 = suma - resultado2;

    let digitoVerificador = 11 - resultado3;

    if(digitoVerificador == 10) {
        digitoVerificador = k;
    }
    if(digitoVerificador == 11) {
        digitoVerificador = 0
    }
    
    if(numeros == "") {
        let parrafo = document.createElement('p')
        parrafo.innerHTML = "* Este campo no puede quedar vacío";
        parrafo.setAttribute('class', 'error');
        mensaje.appendChild(parrafo);
        document.addEventListener("keydown", reiniciarFormulario);
    }
    
    function reiniciarFormulario() {
        location.reload();
    }

    if(dv == digitoVerificador) {
        //creamos la etiqueta 'p'
        let parrafo = document.createElement('p')
        //instertamos el texto en la etiqueta
        parrafo.innerHTML = "* El rut está correcto";
        // Se le crea una clase con las propiedades verificado y alinear
        parrafo.setAttribute('class', 'verificado alinear');
        // Se borra el texto que hay en el div
        message.innerHTML = "";
        // Se inserta el parrafo con el texto nuevo
        mensaje.appendChild(parrafo);

    } else {
        let parrafo = document.createElement('p')
        parrafo.innerHTML = "* El rut está incorrecto";
        parrafo.setAttribute('class', 'error alinear');
        message.innerHTML = "";
        mensaje.appendChild(parrafo);
    }

}
