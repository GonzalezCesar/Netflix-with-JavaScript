const fila = document.querySelector('.carousel-cont');
const peliculas = document.querySelectorAll('.pelicula');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// ? ----- ------ Event Listener foe right arrow ------ ----- 

rightArrow.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.nextSibiling) {
        indicadorActivo.nextSibiling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
});

// ? ----- ------ Event Listener for right arrow ------ ----- 
leftArrow.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores .activo');
    if (indicadorActivo.previousSibiling) {
        indicadorActivo.previousSibiling.classList.add('activo');
        indicadorActivo.classList.remove('activo')
    }
});

// ? ------- Hover --------

peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});
