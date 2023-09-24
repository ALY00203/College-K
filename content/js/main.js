
// section achieves stare
// Callback function to handle intersection changes
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          startCounting(entry.target);
          observer.unobserve(entry.target);
      }
  });
}

// Create an intersection observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Select all counter containers and observe each
const numbersContainers = document.querySelectorAll('.counterContainer h1');
numbersContainers.forEach(item => {
  observer.observe(item.parentNode); // Observe the parent container
});

// Function to start counting
function startCounting(container) {
  const numberElement = container.querySelector('h1');
  const number = +numberElement.textContent;
  const increaseNumber = (5 / 100) * number;
  let currentValue = 0;

  const counter = setInterval(() => {
      currentValue += increaseNumber;
      numberElement.textContent = Math.min(Math.round(currentValue), number);
      
      if (currentValue >= number) {
          clearInterval(counter);
      }
  }, 80);
}

// section achieves end
// start section slider-2
document.addEventListener("DOMContentLoaded", function() {
    var sliderContainer = document.querySelector(".slider-container");
    var cardWidth = sliderContainer.offsetWidth / 1.6;
    var currentPosition = 0;
    function moveSlider() {
      currentPosition -= cardWidth;
      sliderContainer.style.transform = "translateX(" + currentPosition + "px)";
      if (currentPosition <= -(sliderContainer.scrollWidth - sliderContainer.offsetWidth)) {
        currentPosition = 0;
        sliderContainer.style.transform = "translateX(" + currentPosition + "px)";
      }
    }
    setInterval(moveSlider, 3000); // Adjust the interval duration as needed
  });
// end section slider-2
  


