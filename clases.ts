class PersonaClass{
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

let perClass1 = new PersonaClass();
let perClass2 = new PersonaClass('carlos');
let perClass3 = new PersonaClass('carlos','flores');
console.log(perClass3.getSaludo());
