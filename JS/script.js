
//creamos una funcion para mostrar una alerta al hacer click en un boton
function showAlert() {
    alert ('Hola, esta es una alerta desde JavaScript!');
}

//creamos la constante para llamar al evento del formulario
const form = document.getElementById('myForm');

//validamos los datos del email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
    return regex.test(email);
}

//validamos la informacion del formulario
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
   
    //creamos alertas para datos invalidos o correctos si lo son
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        alert('Correo electrónico enviado correctamente.');
    }
}

//generamos un boolean para el boton de formulario
if (form){
    //con submit enviamos los datos cargados
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
        
    });
}

//le damos funcionamiento al boton del menu desplegable responsivo
document.querySelector("button.button-menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
});