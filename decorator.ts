class Saludo {
    mensaje: string;

    constructor(cadenaSaludo: string) {
        this.mensaje = cadenaSaludo;
    }

    @enumerable(false)
    saludar() {
        enum PUESTOS2 { ProgramadorSR, ProgramadorJR, Becario };
        var miPuesto2: PUESTOS2 = PUESTOS2.ProgramadorSR;
        return PUESTOS2;
    }

}

function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}


let saludoVar = new Saludo("hola carlos");
console.log(saludoVar.saludar());
