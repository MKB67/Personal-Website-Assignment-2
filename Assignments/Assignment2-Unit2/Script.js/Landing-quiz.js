document.addEventListener("DOMContentLoaded", () => {

  const quizData = [
    { question: "Which body part pumps blood?", options:["Lungs","Heart","Brain"], answer:"Heart" },
    { question: "Which helps you breathe?", options:["Stomach","Lungs","Liver"], answer:"Lungs" },
    { question: "What organ controls thinking?", options:["Heart","Brain","Kidneys"], answer:"Brain" },
    { question: "Which part allows you to see?", options:["Ears","Eyes","Nose"], answer:"Eyes" },
    { question: "What do plants need to make food?", options:["Sunlight","Sound","Wind"], answer:"Sunlight" }
  ];

  const questionEl = document.getElementById("quizQuestion");
  const optionsEl = document.getElementById("quizOptions");
  const feedbackEl = document.getElementById("quizFeedback");
  const postChoices = document.getElementById("postQuizChoices");
  const stickerContainer = document.getElementById("stickerContainer");

  const homeLink = document.getElementById("homeLink");
  const playBeerGameBtn = document.getElementById("playBeerGame");

 
  const skipBtn = document.createElement("button");
  skipBtn.textContent = "⏭ Skip Question";
  skipBtn.className = "choice-btn";
  skipBtn.style.display = "inline-block";
  optionsEl.parentElement.appendChild(skipBtn);

  skipBtn.addEventListener("click", () => {
    feedbackEl.textContent = "";
    showRandomQuestion();
  });

  
  function showSticker() {
    const sticker = document.createElement("div");
    sticker.className = "sticker";
    const emojis = ["🌟","🎉","🏆","✨","🥳"];
    sticker.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    stickerContainer.appendChild(sticker);
    setTimeout(() => sticker.remove(), 1000);
  }

 
  function showRandomQuestion() {
    postChoices.style.display = "none";
    optionsEl.style.display = "block";
    skipBtn.style.display = "inline-block"; 

    const quiz = quizData[Math.floor(Math.random() * quizData.length)];
    questionEl.textContent = quiz.question;
    optionsEl.innerHTML = "";

    quiz.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.className = "choice-btn";

      btn.addEventListener("click", () => {
        if (opt === quiz.answer) {
          feedbackEl.textContent = "✅ Correct!";
          showSticker();

         
          localStorage.setItem("quizPassed", "true");

          postChoices.style.display = "block";
          optionsEl.style.display = "none";
          skipBtn.style.display = "none";
        } else {
          feedbackEl.textContent = "❌ Try again!";
        }
      });

      optionsEl.appendChild(btn);
    });
  }

  showRandomQuestion(); 

  
  homeLink.addEventListener("click", () => {
    document.getElementById("landing").style.display = "none";

    homeLink.addEventListener("click", () => {
  
  localStorage.setItem("quizPassed", "true");

 
  document.getElementById("landing").style.display = "none";

});


  
    let userName = prompt("👋 Hello! What's your name?");
    if (!userName || userName.trim() === "") userName = "Guest";

   
    alert(`Good day, ${userName}! Welcome to my webpage 🎉`);
  });

  
  const beerContainer = document.getElementById("beerGameContainer");
  const beerStats = document.getElementById("beerStats");
  const beerRow = document.getElementById("beerRow");
  const brewMessage = document.getElementById("brewMessage");
  const brewBtn = document.getElementById("brewBtn");
  const resetBtn = document.getElementById("resetBeerGame");

  let brewCount = 0;

  playBeerGameBtn.addEventListener("click", () => {
    beerContainer.style.display = "block";
    playBeerGameBtn.disabled = true;
  });

  brewBtn.addEventListener("click", () => {
    brewCount++;
    beerRow.textContent += "🍺";
    beerStats.textContent = `Beers brewed today: ${brewCount}`;

    if(brewCount === 5) {
      brewMessage.textContent = "🍺 You’ve mastered brewing! What do you want to do next?";
      resetBtn.style.display = "inline-block";
    }
  });

  resetBtn.addEventListener("click", () => {
    brewCount = 0;
    beerRow.textContent = "";
    beerStats.textContent = "Beers brewed today: 0";
    brewMessage.textContent = "";
    resetBtn.style.display = "none";
    playBeerGameBtn.disabled = false;
  });
});
