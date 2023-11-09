$(()=> {
    console.log("JQuery is Working");
    
    let mensaje = "";
    $('#borrar').click(()=> {
        location.reload();
    });
    
    $('#formulario').submit(function (e) { 
        e.preventDefault();
        
        let rut = $('#txtRut').val();

        let dv = rut.substring(rut.length-1);

        let numero = rut.substr(0, rut.length-1).replace(/\D/g, "").split("");

        let numeroInvertido = numero.reverse();

        let acumulador = 0;
        let multiplicador = 2;

        for(numeroRut of numeroInvertido) {
            acumulador += parseInt(numeroRut) * multiplicador;
            multiplicador++;
            if(multiplicador == 8) {
                multiplicador = 2;
            }
        }

        let resultado = Math.floor(acumulador / 11); // 15

        let resultado2 = resultado * 11; // 165 

        let resultado3 = acumulador - resultado2;
    
        let digitoVerificado = 11 - resultado3;

        if(digitoVerificado == 11) {
            digitoVerificado = '0';
        }
        if(digitoVerificado == 10) {
            digitoVerificado = 'k';
        }
       
        if(digitoVerificado == dv) {
            $('#message').html("El rut es válido!!!");
            $('#message').attr("class","success");
        } else {
            $('#message').html("El rut es inválido!!!");
            $('#message').attr("class","error");
        }

    });

    
})