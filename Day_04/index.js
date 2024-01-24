function guessTheNumberGame(playerGuess) {
  const result = Math.floor(Math.random() * (10 - 0 + 1) + 0);

  for (let i = 1; i <= 3; i++) {
    if (playerGuess == result) {
      alert("Resposta: " + result + " Parabéns, você acertou!");
      return;
    }
    if (playerGuess != result && i > 2) {
      alert("Falha! valor inicial: " + result);
      return;
    }

    if (playerGuess != result) {
      alert("Ops... Numero incorreto, tente novamente");
      playerGuess = prompt("Adivinhe o numero de 1 a 10");
    }
  }
}

let playyer = prompt("Adivinhe o numero de 1 a 10");
guessTheNumberGame(playyer);
