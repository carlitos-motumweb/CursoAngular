var Persona = (function () {
    function Persona(nom, ape) {
        this.nombre = nom;
        this.apellidos = ape;
    }
    Persona.prototype.getSaludo = function () {
        var carita = 'ojo';
        return "Saludos\n        " + this.nombre + ", " + this.apellidos + "\n        Te enviamos saludos desde consola\n        " + carita + "\n        ";
    };
    return Persona;
}());
var per1 = new Persona();
var per2 = new Persona('carlos');
var per3 = new Persona('carlos', 'flores');
console.log(per3.getSaludo());
