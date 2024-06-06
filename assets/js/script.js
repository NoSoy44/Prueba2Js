//Funcion 1

//Obtener elementos del Dom
const miAlerta = document.getElementById('funka?');
const contenedor = document.getElementById('micontenedor');


miAlerta.addEventListener('click', function () {
  alert('Esto esta funcionando?');
  const nuevoP = document.createElement('p'); 
  nuevoP.textContent = 'Hola, este texto es nuevo :)'

  contenedor.appendChild(nuevoP);
  
  contenedor.style.backgroundColor = 'lightblue';
});


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
  miPopover.setAttribute('data-bs-original-title', 'Nuevo titulo del Popover'); 
  miPopover.setAttribute('data-bs-content', 'Texto interno del Popover'); 

  // Destruir instancia anterior y crear una nueva
  popoverInstance.dispose();
  popoverInstance = new bootstrap.Popover(miPopover);


  // Alternar la visibilidad del popover
  if (miPopover.getAttribute('aria-describedby')) {
    popoverInstance.hide(); 
  } else {
    popoverInstance.show(); 
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
  const toastBody = toastLiveExample.querySelector('.toast-body'); 
  const newMessage = toastBody.getAttribute('data-titulo'); 

  const toastTitle = toastLiveExample.querySelector('.me-auto');  
  const newTitle = toastTitle.getAttribute('data-titles');

  toastBody.textContent = newMessage; ; 
  toastTitle.textContent = newTitle; ; 

    // Cambiar el color de fondo del contenedor
    toastBody.style.backgroundColor = 'lightblue';

});

//Funcion 4

// Obtener elementos del DOM
const btnCanvas = document.getElementById('offcanvas');
const offCanvasElement = document.getElementById('demo');

btnCanvas.addEventListener('click', function () {
    const newBodyMessage = btnCanvas.getAttribute('data-body'); 
    const offCanvasBody = offCanvasElement.querySelector('.offcanvas-body p');

    const newHeading = offCanvasElement.querySelector('.offcanvas-title').getAttribute('data-title');
    const offTitle = offCanvasElement.querySelector('.offcanvas-title');

    offCanvasBody.textContent = newBodyMessage; 
    offTitle.textContent = newHeading; 

    // Cambiar el color de fondo del contenedor
    offCanvasElement.style.backgroundColor = 'lightblue';
});
