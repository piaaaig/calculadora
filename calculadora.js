const init = () => {
    const resultado = document.getElementById("resultado");
    let operacion = "";
    let tempResultado = "";
    
    [
        "cero",
        "uno",
        "dos",
        "tres",
        "cuatro",
        "cinco",
        "seis",
        "siete",
        "ocho",
        "nueve",
    ]
    .forEach((número, i) => document.getElementById(número).addEventListener("click", () => resultado.value += `${i}`));
    
    document.getElementById("suma").addEventListener("click", () => {
        operacion = "suma";
        tempResultado = resultado.value;
        resultado.value = "";
    });
    document.getElementById("resta").addEventListener("click", () => {
        operacion = "resta";
        tempResultado = resultado.value;
        resultado.value = "";
    });
    document.getElementById("division").addEventListener("click", () => {
        operacion = "division";
        tempResultado = resultado.value;
        resultado.value = "";
    });
    document.getElementById("multiplicacion").addEventListener("click", () => {
        operacion = "multiplicacion";
        tempResultado = resultado.value;
        resultado.value = "";
    });
    document.getElementById("reset").addEventListener("click", () => {
        operacion = "reset";
        tempResultado = resultado.value;
        resultado.value = "";
    });

    document.getElementById("igual").addEventListener("click", () => {
        if (operacion === "suma") {
            resultado.value = +resultado.value + +tempResultado;
        }
        if (operacion === "resta") {
            resultado.value =  +tempResultado - +resultado.value;
        }
        if (operacion === "division") {
            resultado.value =  +tempResultado / +resultado.value;
        }
        if (operacion === "multiplicacion") {
            resultado.value =  +tempResultado * +resultado.value;
        }
        if (operacion === "reset") {
            resultado.value =  "";
        }
        tempResultado = "";
        operacion = "";
    });

    
}

