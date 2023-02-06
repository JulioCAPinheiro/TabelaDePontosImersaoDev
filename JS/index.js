var paulo = {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrotas: 0,
    pontos: 0
}

var Rafa = {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrotas: 0,
    pontos: 0
}

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {

    elementoTabela.innerHTML = `
    <tr>
        <td>${paulo.nome}</td>
        <td>${paulo.vitoria}</td>
        <td>${paulo.empate}</td>
        <td>${paulo.derrotas}</td>
        <td>${paulo.pontos}</td>
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
    </tr>

    <tr>
        <td>${Rafa.nome}</td>
        <td>${Rafa.vitoria}</td>
        <td>${Rafa.empate}</td>
        <td>${Rafa.derrotas}</td>
        <td>${Rafa.pontos}</td>
        <td><button onClick="adicionarVitoria(Rafa)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(Rafa)">Empate</button></td>
        <td><button onClick="adicionarDerrota(Rafa)">Derrota</button></td>
</tr>
`
}


function adicionarVitoria(jogador) {
    var numeroDevitorias = 20;

    if(jogador.vitoria <= numeroDevitorias){
        jogador.pontos = jogador.pontos + 2;
        exibirNaTela();
    }else{
        alert("Você ganhou !!");
    }
    jogador.vitoria++;
  
   
}

function adicionarEmpate(jogador) {

    var numeroDeEmpates = 10;

    if(jogador.empate <= numeroDeEmpates){
        jogador.empate
    }
    else{
        alert("O jogo acabou empatado");
    }
        
    jogador.empate++
    jogador.pontos++
    
    exibirNaTela();
}

function adicionarDerrota(jogador) {

    var numeroDeDerrotas = 10;

    jogador.derrotas++;
    if(jogador.derrotas <= numeroDeDerrotas){
        jogador.derrotas
    }
    else{
        alert("Você Perdeu");
    }
    
    exibirNaTela();
}

