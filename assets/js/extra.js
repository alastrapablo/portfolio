//* Filtrar

document.addEventListener('DOMContentLoaded', function () {
    const btnPlan = document.getElementById('btnPlan');
    const btnRender = document.getElementById('btnRender');
    const btnModel = document.getElementById('btnModel');
    const btnExterior = document.getElementById('btnExterior');
    const btnInterior = document.getElementById('btnInterior');
    const btnVideo = document.getElementById('btnVideo');
    const btnLumion = document.getElementById('btnLumion');
    const btnVray = document.getElementById('btnVray');
    const galeria = document.getElementById('galeria');
    const btnRestaurar = document.getElementById('btnRestaurar');
    const articles = document.querySelectorAll('article');

    btnPlan.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('type', 'plan');
    });

    btnRender.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('type', 'render');
    });

    btnModel.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('type', 'model');
    });

    btnExterior.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('render', 'exterior');
    });

    btnInterior.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('render', 'interior');
    });

    btnVideo.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('type', 'video');
    });

    btnLumion.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('program', 'lumion');
    });

    btnVray.addEventListener('click', function () {
        ocultarElementos();
        filtrarPorPropiedad('program', 'v-ray');
    });

    btnRestaurar.addEventListener('click', function () {
        galeria.innerHTML = '';
        mostrarElementos();
    });


    function ocultarElementos() {
        articles.forEach(function (article) {
            article.classList.add('hidden');
        });
    }

    function mostrarElementos() {
        articles.forEach(function (article) {
            article.classList.remove('hidden');
        });
    }


    function filtrarPorPropiedad(propiedad, valor) {
        const overlayElement = document.createElement('div');
        overlayElement.className = 'overlay';
        document.body.appendChild(overlayElement);

        // Forzar un reflow (repintado) para que la transición se aplique desde el principio
        void overlayElement.offsetWidth;

        // Agregar la clase .active para mostrar el overlay con transición
        overlayElement.classList.add('active');

        // Mostrar el loader mientras se realiza la búsqueda
        const loaderElement = document.createElement('div');
        loaderElement.className = 'loader';
        document.body.appendChild(loaderElement);

        // Retrasar la búsqueda por 2 segundos
        setTimeout(function () {
            galeria.innerHTML = '';

            imagenes.forEach(function (imagen) {
                if (imagen[propiedad] === valor) {
                    const spanElement = document.createElement('span');
                    spanElement.className = 'image main lamina';

                    const imgElement = document.createElement('img');
                    imgElement.src = imagen.src;
                    imgElement.alt = '';

                    spanElement.appendChild(imgElement);
                    galeria.appendChild(spanElement);
                }
            });

            // Eliminar el loader y el overlay después de mostrar los resultados
            document.body.removeChild(loaderElement);

            // Quitar la clase .active para ocultar el overlay con transición
            overlayElement.classList.remove('active');

            // Eliminar el overlay después de la transición de salida
            overlayElement.addEventListener('transitionend', function () {
                document.body.removeChild(overlayElement);
            });
        }, 2000);
    }
});

//* Btn Dropdown

function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    var contentDiv = document.getElementById("content");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    contentDiv.style.marginTop = dropdownContent.style.display === "block" ? dropdownContent.offsetHeight + "px" : "0";
}


//* Btn Memoria
function toggleDropdownM() {
    var hiddenContent = document.querySelector(".memoria-scroll");

    if (hiddenContent.style.display === "none") {
        hiddenContent.style.display = "block";
    } else {
        hiddenContent.style.display = "none";
    }
}


//* Btn Scroll to Top

// Mostrar u ocultar el botón según el desplazamiento
window.addEventListener('scroll', scrollFunction);

var isAtTop = true; // Variable para controlar si el usuario se encuentra en la parte superior

// Ocultar el botón al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    var btnHouse = document.querySelector(".nav-house");
    var btnArrowUp = document.querySelector(".nav-arrow");
    btnHouse.style.display = "none";
    btnArrowUp.style.display = "none";
});

function scrollFunction() {
    var btnHouse = document.querySelector(".nav-house");
    var btnArrowUp = document.querySelector(".nav-arrow");

    // Verificar la posición del usuario en la página
    var isScrolledPastTop = window.pageYOffset > 0;

    // Si el usuario se desplaza fuera de la parte superior de la página y el estado anterior era estar en la parte superior,
    // actualizar la variable y realizar el efecto de fade in
    if (isScrolledPastTop && isAtTop) {
        fadeIn(btnHouse);
        fadeIn(btnArrowUp);
        isAtTop = false;
    }

    // Si el usuario vuelve a la parte superior de la página y el estado anterior era estar fuera de la parte superior,
    // actualizar la variable y realizar el efecto de fade out
    if (!isScrolledPastTop && !isAtTop) {
        fadeOut(btnHouse);
        fadeOut(btnArrowUp);
        isAtTop = true;
    }
}

// Desplazarse suavemente hacia arriba
function scrollToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;

    function animation(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const currentPosition = startPosition + distance * progress;
        window.scrollTo(0, currentPosition);

        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    }

    const startTime = performance.now();
    requestAnimationFrame(animation);
}

// Función para aplicar un efecto de fade in
function fadeIn(element) {
    element.style.opacity = "0";
    element.style.display = "block";
    var opacity = 0;
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.01;  // Cambia el incremento a 0.01 para un fade in más lento
            element.style.opacity = opacity;
        } else {
            clearInterval(interval);
        }
    }, 10);  // Cambia el intervalo a 20 para un tiempo total de 2 segundos
}

// Función para aplicar un efecto de fade out
function fadeOut(element) {
    var opacity = 1;
    var interval = setInterval(function () {
        if (opacity > 0) {
            opacity -= 0.01;  // Cambia el decremento a 0.01 para un fade out más lento
            element.style.opacity = opacity;
        } else {
            element.style.display = "none";
            clearInterval(interval);
        }
    }, 1);  // Cambia el intervalo a 20 para un tiempo total de 2 segundos
}


//* IMMERSIVE
// document.addEventListener('DOMContentLoaded', function () {
//     const images = document.querySelectorAll('.image');
//     const closeZoomButton = document.getElementById('close-zoom');
//     const zoomInButton = document.getElementById('zoom-in');
//     const zoomOutButton = document.getElementById('zoom-out');
//     const zoomButtons = document.getElementById('zoom-buttons');

//     let currentScale = 1;

//     images.forEach(function (image) {
//         image.addEventListener('click', function () {
//             if (!image.classList.contains('immersive')) {
//                 images.forEach(function (otherImage) {
//                     if (otherImage !== image) {
//                         otherImage.style.visibility = 'hidden';
//                     }
//                 });
//                 image.classList.add('immersive', 'show');
//                 zoomButtons.classList.remove('hidden');
//                 document.body.classList.add('zoom-mode');
//                 currentScale = 1;
//                 updateZoom(image);
//             } else {
//                 images.forEach(function (otherImage) {
//                     otherImage.style.visibility = 'visible';
//                 });
//                 image.classList.remove('immersive', 'show');
//                 zoomButtons.classList.add('hidden');
//                 document.body.classList.remove('zoom-mode');
//                 currentScale = 1;
//                 updateZoom(image);
//             }
//         });
//     });

//     closeZoomButton.addEventListener('click', function () {
//         const immersiveImage = document.querySelector('.image.immersive');
//         if (immersiveImage) {
//             images.forEach(function (otherImage) {
//                 otherImage.style.visibility = 'visible';
//             });
//             immersiveImage.classList.remove('immersive', 'show');
//             zoomButtons.classList.add('hidden');
//             document.body.classList.remove('zoom-mode');
//             currentScale = 1;
//             updateZoom(immersiveImage);
//         }
//     });

//     zoomInButton.addEventListener('click', function () {
//         currentScale += 0.1;
//         const immersiveImage = document.querySelector('.image.immersive');
//         if (immersiveImage) {
//             immersiveImage.style.transform = `scale(${currentScale})`;
//         }
//     });

//     zoomOutButton.addEventListener('click', function () {
//         currentScale -= 0.1;
//         const immersiveImage = document.querySelector('.image.immersive');
//         if (immersiveImage) {
//             immersiveImage.style.transform = `scale(${currentScale})`;
//         }
//     });

//     function updateZoom(image) {
//         if (image.classList.contains('immersive')) {
//             image.style.transform = `scale(${currentScale})`;
//         }
//     }
// });