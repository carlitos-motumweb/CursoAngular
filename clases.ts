class Persona{
    nombre:string;
    apellidos:string;

    constructor(nom?:string,ape?:string){
        this.nombre = nom;
        this.apellidos = ape;
    }

    getSaludo():string{
        let carita = 'ojo';
        return `Saludos
        ${this.nombre}, ${this.apellidos}
        Te enviamos saludos desde consola
        ${carita}
        `;
    }
}


let per1 = new Persona();
let per2 = new Persona('carlos');
let per3 = new Persona('carlos','flores');
console.log(per3.getSaludo());
