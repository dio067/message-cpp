const result = document.querySelector('#result');
const guess = document.querySelector('#guessInput');

Module.onRuntimeInitialized = function() {
    const initGame   = Module.cwrap('initGame', 'void', []);
    const checkGuess = Module.cwarp('checkGuess', 'string', ['number']);

    initGame();

    window.makeGuess = () => {
        let currGuess = parseInt(guess.value);
        result.innerText = check(guess);
    };
};