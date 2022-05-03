import 'core-js'
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import './assets/css/cadastro.css';

import Login from './modules/Login';
import Index from './modules/Index';
const eventos = new Login();
const ligarCarrossel = new Index();

eventos.init();
ligarCarrossel.init();