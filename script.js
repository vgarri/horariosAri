document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let horas = prompt("Introduce el total de horas (La suma total)");
  let minutos = prompt("introduce la suma de minutos por ejemplo:(30...etc )");
  function sumadorHoras(horas, minutos) {

    let suma = 40 - horas + minutos * (1 / 60);
    
    return suma;
  }
  let suma2 = sumadorHoras(horas, minutos);
  //alert(`Te faltan por hacer ${Math.round(suma2)} horas :(`);
    if (suma2 < 0) {
        alert(`Esta semana te pasaste ${Math.abs(suma2)} horas... deberías descansar >:(`);
      }
      else if (suma2 === 0) {
        alert(`Ya llevas 40 horitas siuuuuu ^o^`);
      }
      else if (suma2 > 0) {
        alert(`Todavía te faltan ${Math.trunc(suma2)} horas y ${(60-minutos).toFixed(0)} mins :(`)
      }
      


});
