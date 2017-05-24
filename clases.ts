class Persona{
    nombre:string;
    apellidos:string;

    constructor(nom?:string,ape?:string){
        console.log(nom);
        console.log(ape);
    }
}

let per1 = new Persona();
let per2 = new Persona('carlos');
let per3 = new Persona('carlos','flores');
