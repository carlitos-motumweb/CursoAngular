var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Saludo = (function () {
    function Saludo(cadenaSaludo) {
        this.mensaje = cadenaSaludo;
    }
    Saludo.prototype.saludar = function () {
        var PUESTOS2;
        (function (PUESTOS2) {
            PUESTOS2[PUESTOS2["ProgramadorSR"] = 0] = "ProgramadorSR";
            PUESTOS2[PUESTOS2["ProgramadorJR"] = 1] = "ProgramadorJR";
            PUESTOS2[PUESTOS2["Becario"] = 2] = "Becario";
        })(PUESTOS2 || (PUESTOS2 = {}));
        ;
        var miPuesto2 = PUESTOS2.ProgramadorSR;
        return PUESTOS2;
    };
    return Saludo;
}());
__decorate([
    enumerable(false)
], Saludo.prototype, "saludar", null);
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
var saludoVar = new Saludo("hola carlos");
console.log(saludoVar.saludar());
