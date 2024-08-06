/*
function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }

                if (e.keyCode === 8) {
                    this.clearOne();
                }
            })
        },

        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },

        clearDisplay() {
            this.display.value = '';
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida.');
                    return;
                }

            this.display.value = String(conta);
            } catch (e) {
                alert('Conta inválida.');
                return;
            }
        },


        cliqueBotoes() {
            // this-> calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
*/




/*
// Funções normais:
function Calculadora () {
    this.display = document.querySelector('.display');



    
    this.inicia = function() {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.pressionaEnter = function() {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }

            if (e.keyCode === 8) {
                this.clearOne();
            }
        })
    };

    this.clearOne = function() {
        this.display.value = this.display.value.slice(0, -1);
    };

    this.clearDisplay = function() {
        this.display.value = '';
    };

    this.realizaConta = function() {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta) {
                alert('Conta inválida.');
                return;
            }

        this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida.');
            return;
        }
    };


    this.cliqueBotoes = function() {
        // this-> calculadora
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.clearOne();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = function(valor) {
        this.display.value += valor;
    };
}

const calculadora = new Calculadora();
calculadora.inicia();
*/



// Arrow fnctions:
function Calculadora () {
    this.display = document.querySelector('.display');

    
    this.inicia = () => {
        this.capturaCliques();
        this.pressionaEnter();
    }

    this.pressionaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
                this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        this.display.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.delOne();
            if (el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    
    this.clearDisplay = () => this.display.value = '';
    this.delOne = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida.');
                this.clearDisplay();
                return;
            }

        this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida.');
            this.clearDisplay();
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();