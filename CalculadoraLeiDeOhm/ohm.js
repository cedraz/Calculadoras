function selectResistence() {
    const select = document.getElementById("select-resistence");

    const inputReq = document.querySelector(".input-req");
    const spanInputReq = document.querySelector(".span-input-req");
    const resInputBox = document.querySelector(".res-input-box");
    const confirmButton = document.querySelector(".btn3");

    const miniBox = document.querySelector(".mini-box");
    const boxBotoesOhm = document.querySelector(".box-ohm");

    confirmButton.addEventListener("click", () => {

        // console.log(select.selectedIndex);
        // console.log(select.options[select.selectedIndex].value);

        if (select.selectedIndex == 0) {
            alert('Selecione uma opção válida');

            document.querySelectorAll(".fade").forEach(element => {
                element.style.display = 'none'
                element.style.animation = 'fadeIn 1.5s ease'
            });

            inputReq.style.display = "none"
            boxBotoesOhm.style.display = "none"
        } else if (select.selectedIndex == 1){
            spanInputReq.innerHTML = "Preencha exatamente 2 inputs"

            document.querySelectorAll(".fade").forEach(element => {
                element.style.animation = 'fadeIn 1.5s ease'
                element.style.display = 'flex'
            });

            inputReq.style.display = "none"
            resInputBox.style.display = "none"
        } else {
            spanInputReq.innerHTML = "Quantas resistências seu circuito possui?"

            inputReq.style.display = "flex"
            spanInputReq.style.display = "flex"
            miniBox.style.display = "none"
            boxBotoesOhm.style.display = "none"
            resInputBox.style.animation = 'fadeIn 1.5s ease'

            document.querySelectorAll(".fade").forEach(element => {
                element.style.animation = 'fadeIn 1.5s ease'
            });
            
            const inputReqValues = Number(document.querySelector(".input-req").value)

            for (let i = 0; i < inputReqValues; i++) {
                const createInput = document.createElement("input");
                
                createInput.classList.add("input")

                resInputBox.appendChild(createInput);

                const valor = Number(createInput.value)
                console.log(valor);
            }
        }
    });

    
}

function calculate() {
    const ans = document.getElementById('resposta');
    const cons = document.getElementById('consequences');
    const ma = document.getElementById('miliampere');
    const t = document.getElementById('tensao').value;
    const r = document.getElementById('resistencia').value;
    const i = document.getElementById('intensidade').value;

    const resistenceValues = document.querySelector(".input-req").value

    console.log(resistenceValues);

    for (const value of resistenceValues) {
        const resInputs = document.querySelector(".res-inputs");
        const input = document.createElement(input);

        resInputs.appendChild(input)
    }
    // if ()

    ans.style.animation = "fadeIn 1.5s ease"
    ma.style.animation = "fadeIn 1.5s ease"
    cons.style.animation = "fadeIn 1.5s ease"

    const numbers = [t, r, i];

    let count = 0;

    for (const n of numbers) {
		if (n.length === 0) count++; // ou if (!n.length) count++;
		if (n === "0") {
			alert('Maior que 0');
			return;
        }
    }
    
    if (count > 1) {
		alert('Preencha os inputs!');
		return;
    } 
    
    let milamp;
    let medida = 'mA'
    let tab;
    let answer;
    let incog;
    let unidade;

    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j].length === 0) {
			switch(j) {
				case 0:
                    incog = 'Volt'
                    answer = Number(r)*Number(i);
                    unidade = 'V'

                    milamp = i*1000

                    if (milamp < 1) {
                        tab = 'Você sentirá apenas formigamentos'
                    } else if (milamp <= 10) {
                        tab = 'Sensação cada vez mais desagradável à medida que a intensidade aumenta. Contrações musculares.'
                    } else if (milamp <= 20) {
                        tab = 'Sensação dolorosa, contações violentas, perturbações circulatórias.'
                    } else if (milamp < 100) {
                        tab = 'Sensação insuportável, contrações violentas, asfixia, perturbações circulatórias graves inclusive fibrilação ventricular'
                    } else {
                        tab = 'Asfixia imediata, fribilizaçãoo ventricular equeimaduras graves.'
                    }

                    ma.innerHTML = `Corrente Elétrica = ${milamp.toFixed(2)} ${medida} `
                    cons.innerHTML = `${tab}`
                    ans.innerHTML = ` ${incog} = ${answer.toFixed(2)} ${unidade} `
                    break;
                    
                case 1:
                    incog = 'Resistência'
                    answer = Number(t)/Number(i);
                    unidade = 'Ω'

                    milamp = i*1000

                    if (milamp < 1) {
                        tab = 'Você sentirá apenas formigamentos'
                    } else if (milamp <= 10) {
                        tab = 'Sensação cada vez mais desagradável à medida que a intensidade aumenta. Contrações musculares.'
                    } else if (milamp <= 20) {
                        tab = 'Sensação dolorosa, contações violentas, perturbações circulatórias.'
                    } else if (milamp < 100) {
                        tab = 'Sensação insuportável, contrações violentas, asfixia, perturbações circulatórias graves inclusive fibrilação ventricular'
                    } else {
                        tab = 'Asfixia imediata, fribilizaçãoo ventricular equeimaduras graves.'
                    }

                    ma.innerHTML = `Corrente Elétrica = ${milamp.toFixed(2)} ${medida} `
                    cons.innerHTML = `${tab}`
                    ans.innerHTML = ` ${incog} = ${answer.toFixed(2)} ${unidade} `
                    break;

                case 2:
                    incog = 'Corrente Elétrica'
                    answer = Number(t)/Number(r);
                    unidade = 'A'
                    milamp = Number(answer)*1000

                    if (milamp < 1) {
                        tab = 'Você sentirá apenas formigamentos'
                    } else if (milamp <= 10) {
                        tab = 'Sensação cada vez mais desagradável à medida que a intensidade aumenta. Contrações musculares.'
                    } else if (milamp <= 20) {
                        tab = 'Sensação dolorosa, contações violentas, perturbações circulatórias.'
                    } else if (milamp < 100) {
                        tab = 'Sensação insuportável, contrações violentas, asfixia, perturbações circulatórias graves inclusive fibrilação ventricular'
                    } else {
                        tab = 'Asfixia imediata, fribilizaçãoo ventricular equeimaduras graves.'
                    }

                    cons.innerHTML = `${tab}`
                    ans.innerHTML = ` ${incog} = ${answer.toFixed(2)} ${unidade} = ${milamp.toFixed(2)} ${medida} `
                    break;
			}
        }
        if (numbers[0].length !== 0 & numbers[1].length !== 0 & numbers[2].length !== 0) {
            alert('Você deve deixar apenas 1 espaço sem preenchimento!')
            return;
        }
    }
}

function resetOhm() {

    const ans = document.getElementById('resposta');
    const cons = document.getElementById('consequences')
    const ma = document.getElementById('miliampere')
    
    const menu = [ans, cons, ma]

    const values = document.querySelectorAll(".inputs")

    menu.forEach(m => {
        // k.removeChild(k.lastChild)
        m.innerHTML = ''

    });

    values.forEach(valores => {
        valores.value = ''
    });

    ans.style.animation = ""
    ma.style.animation = ""
    cons.style.animation = ""
}

selectResistence()