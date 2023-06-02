const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 555555550", "11 4444444440"],
};

cliente.enderecos = [{
    rua: "Rua Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
}];

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessário ter um endereço cadastrado.");
}