// When the DOM is loaded, initialize saved joke and particles effect
document.addEventListener('DOMContentLoaded', () => {
  loadSavedJoke();
  initParticles();
});

// Initialize particles.js background
function initParticles() {
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#007bff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#007bff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
}

// Fetch a random joke from the Joke API
async function getJoke() {
  const loadingElem = document.getElementById("loading");
  loadingElem.style.display = "block";
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    let jokeText = "";
    if (data.type === "single") {
      jokeText = `😄 ${data.joke}`;
    } else {
      jokeText = `😂 ${data.setup} \n\n ${data.delivery}`;
    }
    document.getElementById("joke").innerText = jokeText;
  } catch (error) {
    document.getElementById("joke").innerText = "Oops! Something went wrong. Please try again.";
  }
  loadingElem.style.display = "none";
}

// Toggle between dark and light modes
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Save the current joke to localStorage
function saveJoke() {
  const jokeText = document.getElementById("joke").innerText;
  if (jokeText && jokeText !== "Click the button to get a joke!") {
    localStorage.setItem("savedJoke", jokeText);
    alert("Joke saved!");
  } else {
    alert("No joke to save!");
  }
}

// Load a saved joke from localStorage (if any)
function loadSavedJoke() {
  const savedJoke = localStorage.getItem("savedJoke");
  if (savedJoke) {
    document.getElementById("joke").innerText = savedJoke;
  }
}
