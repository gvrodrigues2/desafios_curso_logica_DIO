let nomeHeroi = "Kratos";
let xpHeroi = 10000000;
let nivesDeHeroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if (xpHeroi < 1000)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[0]);
else if (1001 <= xpHeroi && xpHeroi <= 2000)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[1]);
else if (2001 <= xpHeroi && xpHeroi <= 5000)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[2]);
else if (5001 <= xpHeroi && xpHeroi <= 7000)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[3]);
else if (7001 <= xpHeroi && xpHeroi <= 8000)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[4]);
else if (8001 <= xpHeroi && xpHeroi <= 9000)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[5]);
else if (9001 <= xpHeroi && xpHeroi <= 10000)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[6]);
else if (xpHeroi >= 10001)
    console.log("O Héroi de nome " + nomeHeroi + " está no nível de " + nivesDeHeroi[7]);



