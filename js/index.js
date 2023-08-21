const boton = document.getElementById('buttonText');

boton.addEventListener('click', ()=>{
    const info = document.getElementById('inputText').value;
    localStorage.setItem('informacion', info);
})