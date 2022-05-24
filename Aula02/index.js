let introducao = alert(`
Vamos jogar JO - KEN - PO!? 
Clique em OK!`);

var pontosUsuario = 0;
var pontosMaquina = 0;


function capturaMaoUsuario() {

    let maoUsuario = parseInt(prompt("Pedra (1), Papel(2) ou Tesoura(3)?"));

    return maoUsuario;
}

function capturaMaoMaquina() {

    let random = parseInt(Math.random() * 3 + 1);

    return random
}


function jogar() {


    let maoMaquina = capturaMaoMaquina();
    let maoUsuario = capturaMaoUsuario();


    console.log("Sua mão foi:" + maoUsuario);
    console.log("A mão da máquina foi:" + maoMaquina);

    console.log("\n");

    switch (maoUsuario) {


        case maoMaquina:

            alert("RODADA: Empatou! ambos jogadores jogaram a mesma mão. \n Ninguém pontuou!");

            break;


        case 1: // Pedra

            if (maoMaquina == 2) {

                pontosMaquina++

                alert("RODADA: A maquina ganhou com: Papel! ( Você: Pedra)");
            } else {

                pontosUsuario++
                alert("RODADA: O usuario ganhou com: Pedra! ( Você: Tesoura)");
            }

            break;

        case 2: //Papel


            if (maoMaquina == 1) {
                pontosUsuario++
                alert("RODADA: O usuario ganhou com: Papel! ( Você: Pedra)");
            } else {


                pontosMaquina++
                alert("RODADA: A maquina ganhou com: Tesoura! ( Você: Papel)");
            }

            break;


        case 3: //Tesoura

            if (maoMaquina == 1) {

                pontosMaquina++
                alert("RODADA: A maquina ganhou com: Pedra! ( Você: Tesoura)");

            } else {

                pontosUsuario++
                alert("RODADA: O usuario ganhou com: Tesoura! ( Você: Papel)")
            }

        }

        console.log(" Pontos do Usuario:" + pontosUsuario);
        console.log("Pontos da maquina:" + pontosMaquina);
        console.log("\n");

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
    }