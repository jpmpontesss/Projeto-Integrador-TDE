const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');
const LoginSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    adm: { type: Boolean, required: true }
});
const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;   
    }

    async login() {
        this.valida(true);
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({email: this.body.email});

        if (!this.user) {
            this.errors.push('Usuário não encontrado. Cadastre-se');
            return
        }

        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha incorreta.');
            this.user = null;
            return
        };
    }

    async register() {
        
        this.valida();

        await this.userExists();

        if (this.errors.length > 0) return;

        if (this.body.adm == 'sim') {
            this.body.adm = true;
        }else {
            this.body.adm = false;
        }

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await LoginModel.create(this.body);
    }

    async userExists() {
        this.user = await LoginModel.findOne({email: this.body.email});
        if (this.user) this.errors.push('Usuário já existe.');
    }

    valida(login) {
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido.');
        if (this.body.password.length < 2 || this.body.password.length > 49 ) {
            if (login) {
                this.errors.push('Senha incorreta, a sua senha possui entre 3 e 50 caracteres.');
                return
            }
            this.errors.push('Senha inválida (a senha deverá ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }
    }
}

module.exports = Login;