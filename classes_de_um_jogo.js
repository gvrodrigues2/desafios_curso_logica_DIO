class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = " magia";
                break;
            case "guerreiro":
                ataque = " espada";
                break;
            case "monge":
                ataque = " artes marciais";
                break;
            case "ninja":
                ataque = " shuriken";
                break;
            default:
                ataque = " um ataque desconhecido";
        }
        
        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        return mensagem;
    }
}

// Exemplo de uso da classe Hero
const heroi1 = new Hero("Aragorn", 35, "guerreiro");
const heroi2 = new Hero("Gandalf", 60, "mago");

console.log(heroi1.atacar()); 
console.log(heroi2.atacar());

