var Persona = (function () {
    function Persona() {
        this.nombre = "carlos";
        this.apellidos = "flores";
        this.email = "carlosflores@motumweb.com";
    }
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    return Persona;
}());
var per1 = new Persona();
console.log(per1);
var per2 = new Persona();
console.log(per2);
per1.setApellidos("Flores V.");
per1.nombre = "Carlos A.";
console.log(per1);
per2.setApellidos("Flores Valerio");
per2.nombre = "Carlos Augusto";
console.log(per2);
