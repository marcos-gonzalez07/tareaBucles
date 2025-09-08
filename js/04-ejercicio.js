//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;
let continuar;

do {
  const entrada = parseInt(prompt("ingresa un número: "));
  if (isNaN(entrada)) {
    alert("el valor ingresado no es un numero");
  } else {
    suma = suma + entrada;
  }
  continuar = confirm("¿desea agregar otro número?");
} while (continuar);
document.writeln("la suma total es " + suma);
