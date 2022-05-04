const valores = [10, 20, 30];





const maiorVinte = valores.filter(preco => preco >= 10).map(preco => 'Maior do que  : ' + 'R$' + preco + ',00')
const menor = valores.filter(preco => preco <= 30).map(preco => 'Menor do que  : ' +  'R$' + preco + ',00')
console.log(maiorVinte);
console.log(menor);
