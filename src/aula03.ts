//trabalhando com class e usando o constructor
class Curso{
  canal=null
  curso=null
constructor(canal:any,curso:any){
  this.canal=canal;
  this.curso=curso;
}
}
//definindo o valor dos parametros do constructor
let c1=new Curso("Cfb cursos", "Typescript")
console.log(c1.canal)
console.log(c1.curso)

//tsc aula03.ts --target "ESNEXT" comando para gerar o arquivo javascript com a ultima versão do javascript.