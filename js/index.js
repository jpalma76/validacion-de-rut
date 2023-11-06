let votar = document.getElementById('votar');
votar.addEventListener('click', ValidarFormulario )

let divMensajeRut = document.getElementById('mensaje-rut');

function ValidarFormulario(e) {
    e.preventDefault()
    let txt_rut = document.getElementById('txtRut').value;
    let numeros = txt_rut.substring(txt_rut, txt_rut.length - 2)
    let dv = parseInt(txt_rut.substring(txt_rut.length - 1))

    console.log(numeros);
    console.log("Dígito verificador: " + dv);
    
    let arrayNumeros = numeros.split('');
    console.log(arrayNumeros);

    let numerosInvertidos = arrayNumeros.reverse();
    console.log(numerosInvertidos);

    let numerosInt = numerosInvertidos.map(Number);
    console.log(numerosInt);

    /* aqui va la formula para calcular la serie de sumas de el map de numerosInt */
    
    let suma = 0;
    let factores = 2;
    for (let i = 0; i < numerosInt.length; i++) {
        let valor = numerosInt[i] * factores;
        console.log(valor)
        factores++
        if(factores > 7) {
            factores = 2;
        }
        suma += valor;
    }
    
   console.log(suma);
    let resultado = Math.floor(suma / 11)
    console.log(resultado);
    
    let resultado2 = resultado * 11;
    console.log(resultado2);
    
    let resultado3 = suma - resultado2
    console.log(resultado3);
    
    let digito = 11 - resultado3;
    if (digito == 10) {
        digito = k;
    }
    if (digito == 11) {
        digito = 0;
    }
    console.log("El dígito verificador es: " + digito);
    if(dv == digito) {
        console.log("el rut está correcto");
        divMensajeRut.innerHTML = "El rut es válido";
    } else {
        console.log("el rut no está correcto");
        divMensajeRut.innerHTML = "El rut no es válido";
    }
}