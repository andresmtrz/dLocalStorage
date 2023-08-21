function mostrarInfo(){
    const info = localStorage.getItem('informacion')
    document.getElementById('data').innerHTML = info;
    localStorage.removeItem('informacion')
}
document.addEventListener('DOMContentLoaded', (mostrarInfo()))