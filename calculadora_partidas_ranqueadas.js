
function calcularrank(vitorias, derrotas) {
    const saldoRankeadas = vitorias - derrotas;
    let rank;

    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else {
        rank = "Imortal";
    }

    return `O jogador está no nível ${rank} com saldo de Ranqueadas: ${saldoRankeadas}`;
}

const resultado = calcularrank(100, 25);
console.log(resultado)
