const nota = parseInt(prompt("Ingrese una  nota del 1 al 10:"));
if (isNaN(nota)) {
  document.writeln("introduce un número válido");
} else {
  switch (nota) {
    case 0:
      alert("muy deficiente");
      break;
    case 1:
      alert("muy deficiente");
      break;
    case 2:
      alert("muy deficiente");
      break;
    case 3:
      alert("insuficiente");
      break;
    case 4:
      alert("insuficiente");
      break;
    case 5:
      alert("suficiente");
      break;
    case 6:
      alert("suficiente");
      break;
    case 7:
      alert("bien");
      break;
    case 8:
      alert("notable");
      break;
    case 9:
      alert("notable");
      break;
    case 10:
      alert("sobresaliente");
      break;
    default:
      document.writeln("número erróneo");
  }
}
