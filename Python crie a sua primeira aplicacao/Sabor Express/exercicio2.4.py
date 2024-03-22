# 4 - Solicite ao usuário as coordenadas (x, y) de um ponto qualquer e utilize uma estrutura if elif else para determinar em qual quadrante do plano cartesiano o ponto se encontra de acordo com as seguintes condições:

#     Primeiro Quadrante: os valores de x e y devem ser maiores que zero;
#     Segundo Quadrante: o valor de x é menor que zero e o valor de y é maior que zero;
#     Terceiro Quadrante: os valores de x e y devem ser menores que zero;
#     Quarto Quadrante: o valor de x é maior que zero e o valor de y é menor que zero;
#     Caso contrário: o ponto está localizado no eixo ou origem.

x = int(input('Digite a coordenada x: '))
y = int(input('Digite a coordenada y: '))

if x > 0 and y > 0:
    print(f'Os valores {x} e {y} se encontrão no primeiro quadrante')
elif x < 0 and y > 0:
    print(f'Os valores {x} e {y} se encontrão no segundo quadrante')
elif x < 0 and y < 0:
    print(f'Os valores {x} e {y} se encontrão no terceiro quadrante')
elif x > 0 and y < 0:
    print(f'Os valores {x} e {y} se encontrão no quarto quadrante')
else:
    print('O ponto está localizado no eixo ou origem')