import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from './modules/login';
import Contato from './modules/contato';

const login = new Login('.form-login');
const register = new Login('.form-register');
login.init();
register.init();

const contato = new Contato('.form-contato');
contato.init();

console.log('Olá mundo 3');
