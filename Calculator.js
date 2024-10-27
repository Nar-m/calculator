
let inputs = document.getElementById('result');
let numbers = document.querySelectorAll('.conteiner-body .numbers')
let signoperand = document.querySelectorAll('.sign');
let equals = document.querySelector('.result');
let clear = document.getElementById('clear');
let primes = document.querySelector('.primes');
let negative = document.querySelector('.negative');
let firstvalue = "";
let isFirstvalue = false;
let secundvalue = "";
let issecundsvalue = false;
let sign = "";
let results;

numbers.forEach((button) => {
    button.addEventListener("click", (ev) => {
        let atr = ev.target.getAttribute('data-type');
        if (isFirstvalue === false) {
            appendFirsvalue(atr)
        }
        else if (issecundsvalue === false) {
            appendSecundavalue(atr)
        }
    })
})

function appendFirsvalue(type) {
    if (firstvalue === "" && type === "0") return;
    inputs.innerHTML = "";
    firstvalue += type;
    inputs.innerHTML = firstvalue;
    firstvalue = +firstvalue;
}


function appendSecundavalue(type) {
    if (firstvalue !== "" && sign !== "") {
        secundvalue += type;
        inputs.innerHTML = secundvalue;
        secundvalue = +secundvalue;
    }
}

signoperand.forEach((butt) => {
    butt.addEventListener("click", (ev) => {
        sign = ev.target.getAttribute('data-type');
        isFirstvalue = true;
    })
})

equals.addEventListener("click", () => {
    Calculate()
})

function Calculate() {
    if (sign === "+") {
        results = firstvalue + secundvalue
    }
    else if (sign === "-") {
        results = firstvalue - secundvalue
    }
    else if (sign === "/") {
        results = firstvalue / secundvalue
    }
    else if (sign === "*") {
        results = firstvalue * secundvalue
    }
    inputs.innerHTML = results;
    firstvalue = results;
    secundvalue = "";
}

clear.addEventListener("click", () => {
    inputs.innerHTML = "0";
    firstvalue = "";
    isFirstvalue = false;
    secundvalue = "";
    issecundsvalue = false;
    sign = "";
    results = 0;
})

negative.addEventListener("click", () => {
    if (firstvalue !== "") {
        results = -firstvalue;
        firstvalue = results;
    }
    if (firstvalue !== "" && secundvalue !== "" && sign !== "") {
        results = -results;
    }
    inputs.innerHTML = results
})

primes.addEventListener("click", () => {
    if (firstvalue !== "") {
        results = firstvalue / 100;
        firstvalue = results;
    }
    inputs.innerHTML = results
})

