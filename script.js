


document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    let horas=prompt("Introduce el total de horas (La suma total)");
    let minutos=prompt("introduce la suma de minutos por ejemplo:(30+41...etc )");
function sumadorHoras(horas, minutos){
    let suma = 40 - horas + (minutos*(1/60));
    return suma;
}
alert(`Te faltan por hacer ${sumadorHoras(horas, minutos)} horas :(`);
});