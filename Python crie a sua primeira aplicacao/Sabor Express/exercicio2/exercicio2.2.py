# 2 - Pergunte ao usuário sua idade e, com base nisso, use uma estrutura if elif else para classificar a idade em categorias de acordo com as seguintes condições:

#     Criança: 0 a 12 anos;
#     Adolescente: 13 a 18 anos;
#     Adulto: acima de 18 anos.

idade = int(input('Digite a sua idade: '))

if idade > 0 and idade <= 12:
    print(f'A idade {idade} é de uma criança')

elif idade == 13 or idade <= 18:
    print(f'A idade {idade} é de um adolescente')
    
else:
    print(f'A idade é de um adulto')