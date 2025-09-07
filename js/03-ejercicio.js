let resultado = "";
let continuar;

do {
  const texto = prompt("ingrese una cadena de texto:");

  if (texto !== null ) {
    if (resultado === "") {
      resultado = texto;
    } else {
      resultado = resultado + "-" + texto;
    }
  }
  continuar = confirm("¿desea ingresar otra cadena?");
} while (continuar);
document.writeln("resultado final: " + resultado);
