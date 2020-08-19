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

}

