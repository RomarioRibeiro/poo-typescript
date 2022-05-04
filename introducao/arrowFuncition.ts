const precos = [10, 20, 30];

const valoresReais = precos.map(function(preco){
    //return 'R$' + preco + ',00';
    return `R$ ${preco},00`;
})

const precoReais = precos.map(preco => 
    ` R$ ${preco},00`);



const menorVinte = precos.filter(preco => preco < 20).map(preco => 'R$' + preco + ',00')
console.log(menorVinte);