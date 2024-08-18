let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

typewriter
    .pauseFor(2500)
    .typeString('BLUE')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('LU')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('B  LU  E')
    .pauseFor(1000)
    .start();


let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterFrase
    .pauseFor(2000)
    .typeString('Not only can we create art')
    .pauseFor(300)
    .deleteAll()
    .typeString('Art creates us')
    .pauseFor(1000)
    .start();





const phoneNumber = "3521470377"; // Reemplaza con tu número en formato internacional

// Función para abrir WhatsApp con un mensaje diferente
function sendWhatsAppMessage(message) {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}

// Eventos para cada botón
document.getElementById("button1").onclick = function () {
    sendWhatsAppMessage("¡Hola! Estoy interesad@ en un boceto");
};

document.getElementById("button2").onclick = function () {
    sendWhatsAppMessage("¡Hola! Estoy interesad@ en un line-art");
};

document.getElementById("button3").onclick = function () {
    sendWhatsAppMessage("¡Hola! Estoy interesad@ en un dibujo con color");
}




let hero = document.getElementById('hero');

let typewriterHero = new Typewriter(hero, {
    loop: true,
    delay: 75,
});

// Usar el punto es para llamar a una propiedad o a una acción del objeto.
// Acciones se distinguen por los paréntesis ()
typewriterHero
    .pauseFor(2000)
    .typeString('¡Conoce tu propio estilo!')
    .pauseFor(300)
    .deleteAll()
    .typeString('Una plantilla personalizada')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Próximamente')
    .pauseFor(1000)
    .start();