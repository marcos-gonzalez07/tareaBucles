const edad = parseInt(prompt("Ingrese su edad:"));
if(isNaN(edad)){
    document.writeln("el dato que ingresaste es erroneo");
} else if (edad >= 18) {
    document.writeln("podes manejar");
}else if(edad < 18){
    document.writeln("no podes manejar");
}

