
function promedioTresNotas(a,b,c){
    let promedio = (a+b+c)/3
    return promedio;
}
// Leer notas


//  calcular promedio
function calcularPromedio(){
    let Nota1 = parseFloat(document.getElementById("Nota1").value);
    let Nota2 = parseFloat(document.getElementById("Nota2").value);
    let Nota3 = parseFloat(document.getElementById("Nota3").value);

    let promedio = promedioTresNotas(Nota1,Nota2,Nota3);

    let resultado = document.getElementById("resultado");
    resultado.textContent = "El promedio de las tres notas es :  " + promedio.toFixed(2);
}

let btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcularPromedio);