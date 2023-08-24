const botaoVerificar = document.querySelector("#botao-verificar");
const palavraInput = document.querySelector("#palavra");
const resultado = document.querySelector("#resultado");

function verificarPalindromo () {
    const palavra = palavraInput.value;
    const palavraInvertida = palavra.split("").reverse().join("");

    if (palavra.toLocaleLowerCase() === palavraInvertida.toLocaleLowerCase()) {
        resultado.textContent = `A palavra "${palavra}" é um palindromo.`;
    } else {
        resultado.textContent = `A palavra "${palavra}" não é um palindromo`
    }
}

botaoVerificar.addEventListener("click", verificarPalindromo)

palavraInput.addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        verificarPalindromo();
    }
});