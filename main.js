var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Data Engineer')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('Analyst')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>Scientist!</strong>')
    .pauseFor(2500)
    .start();