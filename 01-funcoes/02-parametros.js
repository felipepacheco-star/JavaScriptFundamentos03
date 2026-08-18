// function apresentar(nome){
//     console.log(`ola, ${nome}`)
// }

// apresentar("Trigresa vip");

function soma(a , b){
    console.log(`${a} + ${b} = ${a+b}`)
}

soma(8,15);

function apresentar(nome = "visitante"){
    console.log(`ola, ${nome}`)
}

apresentar();
apresentar("grm")