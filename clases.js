var Persona = (function () {
    function Persona(nom, ape) {
        console.log(nom);
        console.log(ape);
    }
    return Persona;
}());
var per1 = new Persona();
var per2 = new Persona('carlos');
var per3 = new Persona('carlos', 'flores');
