const animateButton = document.getElementById("animateButton");
const tail = document.getElementById("tail");


function animateTail() {
  let position = 0;
  const animationInterval = setInterval(function() {
    position += 60;
    tail.style.left = position + "px";
    if (position >= 120) {
      position = 0;
      tail.style.left = position + "px";
    }
  }, 1000); 
}
animateButton.addEventListener("click", function() {
  animateTail();
});


function afiseazaPrompt() {
  var numeUtilizator = prompt("Cum te cheama?");
  if (numeUtilizator != null && numeUtilizator !== "") {
      alert("Bună, " + numeUtilizator + "!");
  } else {
      alert("Bună, utilizator anonim!");
  }
}

const audio = document.querySelector("audio");

// Handle page visibility change:
// - If the page is hidden, pause the video
// - If the page is shown, play the video
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    audio.pause();
  } else {
    audio.play();
  }
});

function handleVisibilityChange() {
  var h1Element = document.getElementById("mesaj");
  if (document.hidden) {
      h1Element.innerText = alert("Se pare că ai plecat...");
  } else {
      h1Element.innerText = alert("Bine ai revenit!");
  }
}
document.addEventListener("visibilitychange", handleVisibilityChange);

const moodInput = document.getElementById("moodInput");
const greeting = document.getElementById("greeting");
const animalImage = document.getElementById("animal-image");

moodInput.addEventListener("input", updateMood);

function updateMood() {
  const moodValue = moodInput.value;
  greeting.textContent = getGreetingMessage(moodValue);
  updateAnimalMood(moodValue);
}

function getGreetingMessage(moodValue) {
  if (moodValue < 5) {
    return "Today I'm Sad...";
  } else if (moodValue > 5) {
    return "So Happy To See You! 😄";
  } else {
    return "Welcome! 🐾";
  }
}

function updateAnimalMood(moodValue) {
  const imageName = getAnimalImageName(moodValue);
  animalImage.src = imageName;
}

function getAnimalImageName(moodValue) {
  if (moodValue < 5) {
    return "sad-modified.png";
  } else if (moodValue > 5) {
    return "happy-modified.png";
  } else {
    return "Empty.png";
  }
}