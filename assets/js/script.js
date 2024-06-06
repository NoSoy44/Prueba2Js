//Funcion 1

// Función Modal para manipular los eventos
const miVentanaEmergente = document.getElementById('ventanaEmergente')

//Agregar un observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function (event) {

    //reconoces el elemento que habilita el evento modal
    let boton = event.relatedTarget //eitiquetado relacionado al evento

    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje;//Usando un id
    document.querySelector('.modal-body').innerText = contenido;//Usando una clase
})


//Funcion 2

//Inicializar el Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


// Obtener elementos del Dom
const miPopover = document.getElementById('popover');
let popoverInstance = new bootstrap.Popover(miPopover);

//Crear instancia
miPopover.addEventListener('click', function () {
  miPopover.setAttribute('data-bs-original-title', 'Nuevo titulo del Popover'); // Actualizar título
  miPopover.setAttribute('data-bs-content', 'Texto interno del Popover'); // Actualizar contenido

  // Destruir instancia anterior y crear una nueva
  popoverInstance.dispose();
  popoverInstance = new bootstrap.Popover(miPopover);


  // Alternar la visibilidad del popover
  if (miPopover.getAttribute('aria-describedby')) {
    popoverInstance.hide(); // Cerrar el popover si está visible
  } else {
    popoverInstance.show(); // Mostrar el popover si no está visible
  }
});


// Funcion 3

// Inicializar Toast
const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show();
  });
}

// Obtener elemento del Dom
const liveToastBtn = document.getElementById('liveToastBtn');

liveToastBtn.addEventListener('click', function () {
  const toastBody = toastLiveExample.querySelector('.toast-body'); // Obtener cuerpo 
  const newMessage = toastBody.getAttribute('data-titulo'); // Obtener nuevo mensaje

  const toastTitle = toastLiveExample.querySelector('.me-auto');  // Obtener título 
  const newTitle = toastTitle.getAttribute('data-titles');

  toastBody.textContent = newMessage; ; // Actualizar cuerpo
  toastTitle.textContent = newTitle; ; 

    // Cambiar el color de fondo del contenedor
    toastBody.style.backgroundColor = 'lightblue';

});

//Funcion 4

// Obtener elementos del DOM
const btnCanvas = document.getElementById('offcanvas');
const offCanvasElement = document.getElementById('demo');

btnCanvas.addEventListener('click', function () {
    const newBodyMessage = btnCanvas.getAttribute('data-body'); // Obtener nuevo mensaje del cuerpo
    const offCanvasBody = offCanvasElement.querySelector('.offcanvas-body p');

    const newHeading = offCanvasElement.querySelector('.offcanvas-title').getAttribute('data-title');// Obtener nuevo título
    const offTitle = offCanvasElement.querySelector('.offcanvas-title');// Obtener elemento del título

    offCanvasBody.textContent = newBodyMessage; //Actualizar cuerpo
    offTitle.textContent = newHeading; // Actualizar título

    // Cambiar el color de fondo del contenedor
    offCanvasElement.style.backgroundColor = 'lightblue';
});
