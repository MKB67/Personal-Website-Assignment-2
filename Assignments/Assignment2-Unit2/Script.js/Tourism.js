document.addEventListener("DOMContentLoaded", () => {
  
  const quizPassed = localStorage.getItem("quizPassed");

  if (quizPassed !== "true") {
    alert("❌ You must pass the quiz first!");

    
    window.location.href = "../Pages.html/Assgn2-landing.html"; 
    return; 
  }

 
  const tourismContainer = document.getElementById("tourismContainer");

  const citiesVisited = [
    {
      name: "Birmingham, UK",
      funFact: "Birmingham has more canals than Venice!",
      food: "Balti curry and fish & chips",
      points: ["Bullring Shopping Centre", "Jewellery Quarter", "Birmingham Museum & Art Gallery"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.934169854013!2d-1.8990346841897468!3d52.478056779806045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc6dc8724b7b%3A0xf09cfed0ecb2fa6d!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sus!4v1694492418537!5m2!1sen!2sus"
    },
    {
      name: "London, UK",
      funFact: "London has more than 170 museums!",
      food: "Fish & chips, afternoon tea",
      points: ["Tower of London", "Buckingham Palace", "British Museum"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19891.05371728551!2d-0.1358082845243787!3d51.50721763626945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cbf7f6c20ab%3A0x408ab2ae4b8e2d0!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1694492612348!5m2!1sen!2sus"
    },
    {
      name: "Singapore",
      funFact: "Singapore has the world’s first night zoo!",
      food: "Chili Crab, Hainanese Chicken Rice, Laksa",
      points: ["Marina Bay Sands", "Gardens by the Bay", "Sentosa Island"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.929600708616!2d103.85195941528906!3d1.283865999109791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a1d9f1463f%3A0x76b06d6f9a3491f4!2sSingapore!5e0!3m2!1sen!2sus!4v1694492711111!5m2!1sen!2sus"
    },
    {
      name: "Kuala Lumpur, Malaysia",
      funFact: "KL’s Batu Caves feature a giant golden statue of Lord Murugan!",
      food: "Nasi Lemak, Satay, Roti Canai",
      points: ["Petronas Twin Towers", "Batu Caves", "Bukit Bintang Shopping District"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.436192257264!2d101.6868557152811!3d3.1390038991734496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c3a7d6163b%3A0xb7b0c16948551a5b!2sKuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1694492812345!5m2!1sen!2sus"
    },
    {
      name: "Bangkok, Thailand",
      funFact: "Bangkok was once called 'City of Angels'!",
      food: "Pad Thai, Tom Yum Goong",
      points: ["Grand Palace", "Wat Arun", "Floating Markets"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.122994926479!2d100.48889181529077!3d13.756330990362447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29938ef3d68fb%3A0xf04f3c3769c3f7a6!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1694492912345!5m2!1sen!2sus"
    },
    {
      name: "Krakow, Poland",
      funFact: "Krakow’s Wawel Castle is over 1,000 years old!",
      food: "Pierogi, Zapiekanka",
      points: ["Wawel Castle", "Main Market Square", "St. Mary’s Basilica"],
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.236794008542!2d19.944979315874066!3d50.06194737942414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165d9f39c3a373%3A0x4c86f0b2ed8d60b2!2sKrak%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sus!4v1694493012345!5m2!1sen!2sus"
    }
  ];


  citiesVisited.forEach(city => {
    const card = document.createElement("div");
    card.className = "city-card";
    card.dataset.map = city.map;
    card.dataset.name = city.name;

    const title = document.createElement("h2");
    title.textContent = city.name;
    card.appendChild(title);

    const funFact = document.createElement("p");
    funFact.innerHTML = `<strong>Fun Fact:</strong> ${city.funFact}`;
    card.appendChild(funFact);

    const food = document.createElement("p");
    food.innerHTML = `<strong>Famous Food:</strong> ${city.food}`;
    card.appendChild(food);

    const points = document.createElement("p");
    points.innerHTML = `<strong>Points of Interest:</strong> ${city.points.join(", ")}`;
    card.appendChild(points);

    tourismContainer.appendChild(card);
  });

 
  const mapModal = new bootstrap.Modal(document.getElementById('mapModal'));
  const mapFrame = document.getElementById('mapFrame');

  tourismContainer.addEventListener('click', e => {
    const card = e.target.closest('.city-card');
    if (!card) return;

    mapFrame.src = card.dataset.map;
    document.getElementById('mapModalLabel').textContent = card.dataset.name;
    mapModal.show();
  });

 
  document.getElementById('mapModal').addEventListener('hidden.bs.modal', () => {
    mapFrame.src = "";
    document.body.classList.remove('modal-open');
    const backdrops = document.querySelectorAll('.modal-backdrop');
    backdrops.forEach(b => b.remove());
  });
});