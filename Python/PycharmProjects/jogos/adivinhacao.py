print("********************************")
print("Bem vindo no jogo de Advinhação!")
print("********************************")

numero_secreto = 42
total_de_tentaivas = 3
rodada = 1

for rodada in range(1, total_de_tentaivas + 1):
    print("Tentativa {} de {}".format(rodada, total_de_tentaivas))
    chute_str = input("Digite um número entre 1 e 100: ")

    print("Você digitou", chute_str)

    chute = int(chute_str)

    if (chute < 1 or chute > 100):
        print("Você deve digitar um número entre 1 e 100!")

    acertou = chute == numero_secreto
    maior   = chute > numero_secreto
    menor   = chute < numero_secreto



    if(acertou):
        print("Você acertou!")
        break
    else:
        if(maior):
            print("Você errou! O seu chute foi maior do que o número secreto.")
        elif(menor):
            print("Você errou! O seu chute foi menor do que o número secreto.")

    print("Fim do jogo")