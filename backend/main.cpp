#include<iostream>
#include<ctime>
#include<cstdlib>
#include<emscripten.h> // library to export functions to JS

int secretNum = 0;

extern "C" { // using extern keyword to prevent mangled name

    EMSCRIPTEN_KEEPALIVE // avoid the removal from EMSCRIPTEN 
    void initGame() {
        srand(time(NULL));
        secretNum = rand() % 100 + 1;
    }

    EMSCRIPTEN_KEEPALIVE
    const char* checkGuess(int guess){
        if(guess == secretNum) return "Correct! You guessed the number!";
        else if (guess < secretNum) return "Too low! Try again!";
        else return "Too high! Try again.";
    }
}
