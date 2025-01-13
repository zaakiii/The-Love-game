function setWinner(winner) {
  const today = new Date().toLocaleDateString();
  const historyList = document.getElementById("history-list");
  const newEntry = document.createElement("li");

  if (winner === "Zaki") {
    document.body.style.backgroundColor = "navy";
    document.body.style.backgroundImage = "url('blue-navy-photo.jpg')";
    newEntry.textContent = `${today}: Zaki wins!`;
    newEntry.style.color = "navy";
  } else {
    document.body.style.backgroundColor = "pink";
    document.body.style.backgroundImage = "url('pink-cool-photo.jpg')";
    newEntry.textContent = `${today}: Your wife wins!`;
    newEntry.style.color = "pink";
  }

  historyList.appendChild(newEntry);
}
