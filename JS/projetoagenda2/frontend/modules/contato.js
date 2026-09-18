import validator from 'validator';

export default class Contato {
    constructor(formcontato) {
        this.form = document.querySelector(formcontato);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;

        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        }); 
    }

    validate(e) {
        const el = e.target;
        const nameInput = el.querySelector('input[name="nome"]');
        const emailInput = el.querySelector('input[name="email"]');
        const phoneInput = el.querySelector('input[name="phone"]');
        let error = false;

        if (!nameInput.value) {
            alert('O campo nome é obrigatório');
            error = true;
        }

        if (emailInput.value === '' && phoneInput.value === '') {
            alert('Pelo menos um dos campos e-mail ou telefone deve ser preenchido');
            error = true;
        }

        if (emailInput.value && !validator.isEmail(emailInput.value)) {
            alert('E-mail inválido');
            error = true;
        }

        if (phoneInput.value && !validator.isMobilePhone(phoneInput.value)) {
            alert('Telefone inválido');
            error = true;
        }

        if (!error) {
            el.submit();
        }
    }

}