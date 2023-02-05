

 
    window.onload = function() {
        const input = document.getElementById("lapartedelacalculadoraquemuestraloqueescribes");      
        const botonDivision = document.getElementById("botonDivision");
        const botonMultiplicacion = document.getElementById("botonMultiplicacion");
        const botonSuma = document.getElementById("botonSuma");
        const botonResta = document.getElementById("botonResta");
        const boton1 = document.getElementById("boton1");
        const boton2 = document.getElementById("boton2");
        const boton3 = document.getElementById("boton3");
        const boton4 = document.getElementById("boton4");
        const boton5 = document.getElementById("boton5");
        const boton6 = document.getElementById("boton6");
        const boton7 = document.getElementById("boton7");
        const boton8 = document.getElementById("boton8");
        const boton9 = document.getElementById("boton9");
        const boton0 = document.getElementById("boton0");
        const botonRespuesta = document.getElementById("botonRespuesta");
        if (input && botonSuma && botonResta &&botonMultiplicacion && botonDivision && boton1 && boton2 && boton3 && boton4 && boton5 && boton6 && boton7 && boton8 && boton9 && boton0 &&  botonRespuesta && botonBorrar) {
            
            botonSuma.addEventListener("click", function() {
                input.value += "+";
              });
              botonResta.addEventListener("click", function() {
                input.value += "-";
              });
            botonMultiplicacion.addEventListener("click", function() {
                input.value += "*";
              });
            botonDivision.addEventListener("click", function() {
                input.value += "/";
              });
            boton1.addEventListener("click", function() {
            input.value += "1";
          });
          boton2.addEventListener("click", function() {
            input.value += "2";
          });
          boton3.addEventListener("click", function() {
            input.value += "3";
          });
          boton4.addEventListener("click", function() {
            input.value += "4";
          });
          boton5.addEventListener("click", function() {
            input.value += "5";
          });
          boton6.addEventListener("click", function() {
            input.value += "6";
          });
          boton7.addEventListener("click", function() {
            input.value += "7";
          });
          boton8.addEventListener("click", function() {
            input.value += "8";
          });
          boton9.addEventListener("click", function() {
            input.value += "9";
          });
          boton0.addEventListener("click", function() {
            input.value += "0";
          });

          botonRespuesta.addEventListener("click", function() {
            try {
              const resultado = eval(input.value);
              input.value = resultado;
            } catch (error){
              input.value ="que es esto, no no no no  esto no esta bien, no es una operación matematica, sino quieres una operación matamatica, ¿que haces en una calculadora?";};
              botonBorrar.addEventListener("click", function() {
                input.value = "";
              });
              });
        }};