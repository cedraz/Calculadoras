function logaritmo() {
    const base = document.getElementById('input-base').value
    const logaritmando = document.getElementById('input-logaritmando').value
    let expoente = document.getElementById('input-expoente').value
    const resposta = document.getElementById('resposta-log')

    resposta.style.animation = "fadeIn 2s ease"

    const valores = [logaritmando, base, expoente];

    for (let j = 0; j < valores.length; j++) {
        if (valores[j].length === 0) {
            switch(j) {
                case 0:
                    alert('Você precisa atribuir um valor ao logaritmando!')
                    break;
                case 1:
                    alert('Você precisa atribuir um valor a base!')
                    break;
                case 2:
                    expoente = 1
                    break;
            }
        }
    }
    let logaritmo;

    if (logaritmando < 0) {
        alert('Logaritmos com logaritmandos <= 0 não existem')
    } else if (!(base > 0 && base != 1)) {
        alert('Caso a base não seja > 0 ou diferente de 1 não existe logaritmo')
    } else {
        logaritmo = expoente*log(base, logaritmando).toFixed(2)
        resposta.innerHTML = `Log ${base}(${logaritmando}**${expoente}) = ${logaritmo}`
    }
}

function log(base, logaritmando) {
    return Math.log(logaritmando)/Math.log(base)
}

function resetLog() {
    const resposta = document.getElementById('resposta-log')
    const valores = document.querySelectorAll(".valores")
    
    valores.forEach(p => {
        p.value = ''
    });
    resposta.style.animation = ""

    resposta.innerHTML = ''
}