function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            document.addEventListener('keypress', function(e) {
                if (e.keyCode === 13) {
                    e.preventDefault()
                    this.realizaConta();
                }

                this.checkChar(e)

            }.bind(this))
        },

        checkChar(e) {
            const char = String.fromCharCode(e.keyCode);
            const pattern = '[a-zA-Z!@#$%¨&;^´`|"?:{}=]'
            let caracteres = char.match(pattern)

            if (caracteres) {
                e.preventDefault();
            }
        },

        realizaConta() {
            this.display.value = this.display.value.replaceAll(',', '.')
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta inválida');
                    this.display.value = ''
                    return;
                }

                this.display.value = conta
            } catch(e) {
                alert('Conta inválida');
                this.display.value = ''
                return;
            }
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }.bind(this)); // ! Ou utilizar o bind(this) ou utilizar uma arrow function para não alterar o referencial do this
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia();