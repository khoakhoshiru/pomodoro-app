let playGame = () => {
  let valueChoice = document.getElementById("chonCuoc").value;
  let dice1 = Math.floor(Math.random() * 6 + 1);
  let dice2 = Math.floor(Math.random() * 6 + 1);
  let dice3 = Math.floor(Math.random() * 6 + 1);
  document.getElementById("dice1").textContent = dice1;
  document.getElementById("dice2").textContent = dice2;
  document.getElementById("dice3").textContent = dice3;

  let sumDice = dice1 + dice2 + dice3;
  document.getElementById("tinh").textContent = "ket qua la :" + sumDice;
  if (valueChoice == "tai") {
    sumDice > 9
      ? (document.getElementById("ketQ").textContent = "ban da thang")
      : (document.getElementById("ketQ").textContent = "ban da thua");
  } else {
    sumDice < 10
      ? (document.getElementById("ketQ").textContent = "ban da thang")
      : (document.getElementById("ketQ").textContent = "ban da thua");
  }
  return;
};

export { playGame };
