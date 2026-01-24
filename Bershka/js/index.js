
const nombreUsuario = "Henry";
const elementoMensaje = document.getElementById('mensaje-dinamico');

const generarSaludo = (nombre) => `¡Bienvenido a Bershka, ${nombre}!`;


window.addEventListener('load', () => {
    const saludoFinal = generarSaludo(nombreUsuario);
    elementoMensaje.innerText = saludoFinal;
    console.log(saludoFinal); 
});

const colorRebajas = "#a9f5ef"; 
const estaEnOferta = true;


const actualizarTemporada = (oferta) => {
    if (oferta) {

        document.documentElement.style.setProperty('--primario', colorRebajas);
        console.log("Modo Rebajas activado");
    }
};

actualizarTemporada(estaEnOferta);

const mensajeColeccion = "Explorando lo último de 2026";
const descuentoEspecial = 15;

const mostrarAviso = (texto) => alert(`Bershka dice: ${texto}`);


const enlaceNueva = document.getElementById('btn-nueva');
const enlaceOfertas = document.getElementById('btn-ofertas');


enlaceNueva.addEventListener('click', () => {
    mostrarAviso(mensajeColeccion);
});

enlaceOfertas.addEventListener('click', (e) => {
    e.preventDefault();

    
    alert(`¡Aprovecha! Tienes un ${descuentoEspecial}% extra`);


    window.location.href = "pages/productos.html";
    
});

const mensajeElemento = document.getElementById('mensaje-dinamico');

const obtenerSaludo = () => {
    const hora = new Date().getHours(); 
    let saludo;

    if (hora < 12) {
        saludo = "¡Buenos días! Nueva Colección de Mañana";
    } else if (hora < 18) {
        saludo = "¡Buenas tardes! Descubre el Estilo de Hoy";
    } else {
        saludo = "¡Buenas noches! Inspiración para Mañana";
    }
    return saludo;
};


window.addEventListener('load', () => {
    if (mensajeElemento) {
        mensajeElemento.innerText = obtenerSaludo();
    }
});

const videoFondo = document.querySelector('video');

window.addEventListener('scroll', () => {
    let valorScroll = window.scrollY; 
    
    
    if (valorScroll > 100) {
        videoFondo.style.opacity = "0.7";
        videoFondo.style.transition = "0.5s";
    } else {
        videoFondo.style.opacity = "1";
    }
});


