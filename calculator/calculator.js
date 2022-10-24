const numero = document.querySelectorAll(".num");
const operation = document.querySelectorAll(".opr");
const dec = document.querySelector(".dec");
const panel = document.querySelector(".viewer");

let strg = '';
let strg2 = '';

let deci = 0

const num = function() {
    return
}

numero.forEach( (num) => {
    num.addEventListener("click", () => {
        dec.addEventListener("click", () => {
            deci++
        })

        strg += num.innerHTML;
        number = parseInt(strg);

        if (deci = 1) {
            panel.innerHTML = `${number}.`
        } else {
            panel.innerHTML = number
        }
       
        return(number)
    });   
    
});

operation.forEach( (num) => {
    num.addEventListener("click", () => {
        console.log(num.innerHTML);

        

    });
});
