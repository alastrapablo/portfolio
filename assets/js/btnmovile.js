const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    const links = document.querySelectorAll('.btnInicio');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            if (link.classList.contains('disable-hover')) {
                // El enlace ya ha sido activado, permitir el acceso
                return;
            }

            event.preventDefault();
            link.classList.add('disable-hover');

            setTimeout(function () {
                link.classList.remove('disable-hover');
            }, 500);
        });
    });
}