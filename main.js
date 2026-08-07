contador = document.getElementById("contador")
btn = document.getElementById("btn")
valor = 0

btn.addEventListener('click', ()=>{
    valor++
    contador.textContent = valor;
})