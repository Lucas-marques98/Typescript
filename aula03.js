//trabalhando com class e usando o constructor
var Curso = /** @class */ (function () {
    function Curso(canal, curso) {
        this.canal = null;
        this.curso = null;
        this.canal = canal;
        this.curso = curso;
    }
    return Curso;
}());
//definindo o valor dos parametros do constructor
var c1 = new Curso("Cfb cursos", "Typescript");
console.log(c1.canal);
console.log(c1.curso);
