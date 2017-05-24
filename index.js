var _this = this;
console.log("hola mundo");
// Datos primitivos
var nombre = "carlos augusto";
var edad = 39;
var esDesarrollador = true;
// Arreglos
var familia = ['Kenya', 'Kaín', 'Tania'];
var companeros = ['mauricio', 'bernardo', 'alain', 'edith', 'carlos'];
// enumeraciones
var PUESTOS;
(function (PUESTOS) {
    PUESTOS[PUESTOS["ProgramadorSR"] = 0] = "ProgramadorSR";
    PUESTOS[PUESTOS["ProgramadorJR"] = 1] = "ProgramadorJR";
    PUESTOS[PUESTOS["Becario"] = 2] = "Becario";
})(PUESTOS || (PUESTOS = {}));
;
var miPuesto = PUESTOS.ProgramadorSR;
var tipoVariable = "Esto es una cadena";
tipoVariable = 5;
console.log("Puesto:", miPuesto);
function inConsole(porImprimir) {
    console.log(porImprimir);
}
companeros.forEach(function (nombreCompanero) {
    _this.inConsole(nombreCompanero);
});
