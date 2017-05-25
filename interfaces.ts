interface PersonaInterface{
    nombre:string;
    apellido:string;
    email?:string;
}

let persona1:PersonaInterface = {nombre:'carlos augusto', apellido:'flores valerio', email:'carlosflores@motumweb.com'};
let persona2:PersonaInterface = {nombre:'tania',apellido:'jimenez dominguez'};

console.log(persona1);
console.log(persona2);
