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
        document.addEventListener('click', event => {
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