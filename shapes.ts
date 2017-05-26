class Persona{
    nombre:string;
    apellidos:string;
    email:string;

    constructor(){
        this.nombre="carlos";
        this.apellidos="flores"
        this.email="carlosflores@motumweb.com";
    }

    setNombre(nombre:string){
        this.nombre=nombre;
    }
    setApellidos(apellidos:string){
        this.apellidos=apellidos;
    }
}

let miMapa : [string, number];
miMapa=["carlos",39];
console.log("miMapa[1]: ", miMapa[1]);



var per1 = new Persona();
console.log(per1);
let per2 = new Persona();
console.log(per2);
per1.setApellidos("Flores V.");
per1.nombre="Carlos A."
console.log(per1);
per2.setApellidos("Flores Valerio");
per2.nombre="Carlos Augusto"
console.log(per2);
