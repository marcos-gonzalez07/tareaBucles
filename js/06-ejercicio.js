let numero = 1;

while (numero <= 30) {
  let contador = 1;
  let linea = "";
  while (contador <= numero) {
    linea += numero;
    contador++;
  }
  document.writeln(` <p> ${linea}</p>`);
  numero++;
}
