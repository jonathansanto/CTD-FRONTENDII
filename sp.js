let introducao = alert(`
Vamos jogar JO - KEN - PO!? 
Clique em OK!`);

//Criando os jogadores e suas escolhas
let jogar = () => {
    let humano = prompt(
        `Escolha um número:
        1 = 🖐Papel
        2 = ✊Pedra
        3 = ✌Tesoura`
    );

    let computador = Math.floor(Math.random() * (3 - 1 + 1)) + 1; 
    return [humano, computador];
};

// Criação um placar "vencedor" com array zerado para inicializar o placar determinado na partida 
let vencedor = [0, 0];

// Criação da estrutura do jogo com switch
let partida = (jogada1, jogada2) => {
    switch (true) {
        case jogada1 == 1 && jogada2 == 2:
            vencedor[0]++;
            return alert(`0889
            Eu escolhi: ✊
            Você escolheu: 🖐
            ...
            🖐 cobre ✊
            ...
            Você ganhou... teve sorte 🍀...`);

        case jogada1 == 2 && jogada2 == 3:
            vencedor[0]++;
            return alert(`
            Eu escolhi: ✌
            Você escolheu: ✊
            ...
            ✊ quebra ✌
            ...
            Você ganhou... teve sorte 🍀...`);

        case jogada1 == 3 && jogada2 == 1:
            vencedor[0]++;
            return alert(`
            Eu escolhi: 🖐
            Você escolheu: ✌
            ...
            ✌ corta 🖐
            ...
            Você ganhou... teve sorte 🍀...`);

        case jogada2 == 1 && jogada1 == 2:
            vencedor[1]++;
            return alert(`
            Eu escolhi: 🖐
            Você escolheu: ✊
            ...
            🖐 cobre ✊
            ...
            Uhuul! Ganhei 🙂!`);

        case jogada2 == 2 && jogada1 == 3:
            vencedor[1]++;
            return alert(`
            Eu escolhi: ✊
            Você escolheu: ✌
            ...
            ✊ quebra ✌
            ...
            Uhuul! Ganhei 🙂! `);

        case jogada2 == 3 && jogada1 == 1:
            vencedor[1]++;
            return alert(`
            Eu escolhi: ✌
            Você escolheu: 🖐
            ...
            ✌ corta 🖐
            ...
            Uhuul! Ganhei 🙂!`);

        case jogada1 == jogada2:
            return alert(`Afss.. Empatou... 😐`);

        default:
            return alert(`
            Ops, errrro no sissttee maa...
            Allgueemm mee dessconfiguurou u 🤡...
            Vamos jogar essa jogada novamente!`)
    }

};

// Função iniciar executa o inicio do jogo
let iniciar = () => {
    let exec = jogar();
    resultadoJogo = partida(exec[0], exec[1]);
    ganhador()
};

// Função ganhador verifica se temos um vencedor, caso não ela inicia o jogo novamente
let ganhador = () => {
    if (vencedor[0] == 2) {
        return alert(
        `...Parabéns 🥇
        ... Você ganhou de mim 😱
        ... Bora jogar mais uma?`);
    } else if (vencedor[1] == 2) {
        return alert(`
        Eu GANHEI 🏆🏆🏆😎‼
        Vamos jogar novamente?`);
    } else if (vencedor[0] < 2 || vencedor[1] < 2) {
        iniciar();
    }
}

iniciar();

// console.log(alert(vencedor[0]))
// console.log(alert(vencedor[1]))