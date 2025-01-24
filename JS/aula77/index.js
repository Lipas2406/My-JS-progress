// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente -> R$${this.saldo}`);
        return;
    }

    this.saldo -= valor; 
    this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor; 
    this.verSaldo();
};


Conta.prototype.verSaldo = function() { 
    console.log(`Ag/c: ${this.agencia}/${this.conta} |  ` + `Saldo: R$${this.saldo.toFixed(2)}`);
};

// const conta1 = new Conta ('Banco do Brasil', 'Lipas', 0.25);
// conta1.depositar(10394); 
// conta1.depositar(0.75); 
// conta1.sacar(10398);




function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insuficiente -> R$${this.saldo}`);
        return;
    }

    this.saldo -= valor; 
    this.verSaldo();
};



function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;


const cc = new CC ('01', '02', 10, 100);
cc.sacar(100);
cc.sacar(10);
cc.sacar(1);

console.log();

const cp = new CP(11, 12, 0);
cp.depositar(100);
cp.sacar(100);
cp.sacar(1);