# 3 - Solicite um nome de usuário e uma senha e use uma estrutura if else para verificar se o nome de usuário e a senha fornecidos correspondem aos valores esperados determinados por você.

usuario = input('Digite o nome do usuário: ')


if usuario == 'admin':
    senha = int(input('Digite o nome da senha: '))
    if senha == 1234:
        print('O usuário e senha estão corretos')
    else:
        print('O usuário ou senha estão incorretos')
else:
    print('Usuário incorreto')        