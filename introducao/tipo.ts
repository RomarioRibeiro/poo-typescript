let estaPago = true;

let idade = 31;

let valor = 20;

let empresa = 'Unopar Arapongas';

let nome = 'Romario Ribeiro';

let notas = [9, 8, 7, 6];

let alunos = ['Romario', 8, 'POO'];

console.log(`Meu Nome é ${nome}, e tenho ${idade}, anos`);


console.log('Meu Nome é ' + nome,' e tenho' + idade +' anos');

console.log()



let cor;
(function(cor: any){
    cor[cor["Azul"] = 50] = "Azul";
    cor[cor["Vermelho"] = 1] = "Vermelho";
    cor[cor["Verde"]= 2] = "Verde";
})
(cor || (cor = {}));

let corFundo = cor.Vermelho;
console.log(corFundo)