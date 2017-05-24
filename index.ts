console.log("hola mundo");

// Datos primitivos
var nombre:string = "carlos augusto";
var edad:number = 39;
var esDesarrollador:boolean = true;

// Arreglos
var familia:Array<string> = ['Kenya','Kaín','Tania'];
var companeros:string[] = ['mauricio','bernardo','alain','edith','carlos'];

// enumeraciones
enum PUESTOS {ProgramadorSR, ProgramadorJR, Becario};
var miPuesto:PUESTOS = PUESTOS.ProgramadorSR;

var tipoVariable:any = "Esto es una cadena";
tipoVariable=5;

console.log("Puesto:", miPuesto);


function inConsole(porImprimir:any):void{
    console.log(porImprimir);
}

companeros.forEach((nombreCompanero)=>{
    this.inConsole(nombreCompanero);
})
