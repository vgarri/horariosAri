document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  let horas = prompt("Introduce el total de horas (La suma total)");
  let minutos = prompt("introduce la suma de minutos por ejemplo:(30...etc )");
  function sumadorHoras(horas, minutos) {

    let suma = (40 - horas + minutos * (1 / 60)).toFixed(2);
    
    return suma;
  }
  let sumaseparada = [];
  let suma2 = sumadorHoras(horas, minutos);
  sumaseparada.push(suma2.toString().split("."));
  
    if (suma2 < 0) {
        alert(`Esta semana te pasaste ${(Math.abs(sumaseparada[0]))} horas...deberías descansar >:(`);
      }
      else if (suma2==0) {
        alert(`Ya llevas 40 horitas siuuuuu ^o^`);
      }
      else if (suma2 > 0) {
        alert(`Todavía te faltan ${sumaseparada[0]} horas :(`)
      }
      


});
