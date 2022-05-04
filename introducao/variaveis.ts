function iniciaTime(iniciJogo){
    let nome ='Messi';
    let cidade = 'São paulo';

    if (iniciJogo){
        cidade = 'Arapongas';
    }

    console.log(nome + ' vai  jogar em ' + cidade);
    console.log(`${nome}, vai jogar em  ${cidade}`);

}
iniciaTime(true)