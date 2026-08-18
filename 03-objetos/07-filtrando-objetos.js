const alunos = [
     {nome: "pacheco", nota:10},
     {nome: "duraes", nota:7},
     {nome: "carlao", nota:1},
];

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados)