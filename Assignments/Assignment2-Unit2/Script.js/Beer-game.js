document.addEventListener("DOMContentLoaded", () => {
  const brewBtn = document.getElementById("brewBtn");
  const beerRow = document.getElementById("beerRow");
  const gameMessage = document.getElementById("gameMessage");
  let brewCount = 0;

  brewBtn.addEventListener("click", () => {
    brewCount++;
    beerRow.textContent += "🍺"; 
    gameMessage.textContent = `You brewed ${brewCount} beer${brewCount > 1 ? "s" : ""}! 🍻`;
  });
});
