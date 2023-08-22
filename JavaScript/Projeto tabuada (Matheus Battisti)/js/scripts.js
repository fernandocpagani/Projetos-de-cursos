// selecção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationImput = document.querySelector ("#multiplicator");

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector(
    "#multiplication-operations" );



// funções

const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;


        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

        const parser = new DOMParser ();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);

        multiplicationTitle.innerText = number;
    }
};

// eventos

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationImput.value

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});