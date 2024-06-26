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

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);