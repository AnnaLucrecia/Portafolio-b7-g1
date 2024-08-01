var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
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


// let frase = document.getElementById('frase');
// let typewriter = new Typewriter(frase, {
//     loop: true,
//     delay: 75,
// });
// // Usar el punto es para llamar a una propiedad o a una acción del objeto.
// // Acciones se distinguen por los paréntesis ()
// typewriter
//     .pauseFor(2500)
//     .typeString('Malinali Becerril')
//     .pauseFor(300)
//     .deleteAll()
//     .typeString('Desarrolladora Frontend JR')
//     .pauseFor(1000)
//     .start();