# 5) Crie uma classe chamada `Cliente` e pense em 4 atributos. Em seguida, instancie 3 objetos desta classe e atribua valores aos seus atributos através de um método construtor.

class Cliente:
    def __init__(self, nome='', idade=0, email='', telefone=''):
        self.nome = nome
        self.idade = idade
        self.email = email
        self.telefone = telefone
        
cliente1 = Cliente('Alice', 25, 'alice@gamil.com', '123-456-7890')
cliente2 = Cliente('Bob', 30, 'bob@gamil.com', '023-456-7891')
cliente3 = Cliente('Charlie', 22, 'charlie@gamil.com', '103-456-7892')

print(vars(cliente1))
print(vars(cliente2))
print(vars(cliente3))