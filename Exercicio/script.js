function soma() {
    let n1 = number(document.getElementById("num1").value);
    let n2 = number(document.getElementById("num2").value);


let resultado = n1 + n2
    console.log("Clicou soma", resultado);

    let strong = document.createElement("strong");
    strong.innerHTML = "Resultado:" + resultado;
}

