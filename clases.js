var PersonaClass = (function () {
    function PersonaClass(nom, ape) {
        this.nombre = nom;
        this.apellidos = ape;
    }
    PersonaClass.prototype.getSaludo = function () {
        var carita = 'ojo';
        return "Saludos\n        " + this.nombre + ", " + this.apellidos + "\n        Te enviamos saludos desde consola\n        " + carita + "\n        ";
    };
    return PersonaClass;
}());
var perClass1 = new PersonaClass();
var perClass2 = new PersonaClass('carlos');
var perClass3 = new PersonaClass('carlos', 'flores');
console.log(perClass3.getSaludo());
