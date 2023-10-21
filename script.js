function registre() {
let nome = document.getElementById('nome').value 
let cpf = document.getElementById('cpf').value

localStorage.setItem('meuNome' , nome.value)
localStorage.setItem('meuCpf' , cpf.value)

// console.log(`Nome: ${nome}, CPF: ${cpf}`)

// debugger
console.log(localStorage.getItem('meuNome').valueOf)
console.log(localStorage.getItem('meucpf').valueOf)
}