let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};


document.addEventListener("DOMContentLoaded", function () {

  const words = [
    "Front-End",
    " Work with the Bootstrap",
    " Professional in HTML,CSS,JS",
    " Learn React.Js",
  ];


  const typingTextElement = document.getElementById("typing-text");


  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.slice(0, charIndex);
    typingTextElement.textContent = displayedText;

    if (!isDeleting) {
      charIndex++;
    } else {
      charIndex--;
    }


    if (charIndex === currentWord.length + 1) {

      isDeleting = true;
      setTimeout(type, 2000); 
      return;
    }

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length; 
      setTimeout(type, 500); 
      return;
    }

    const typingSpeed = isDeleting ? 75 : 150;
    setTimeout(type, typingSpeed);
  }

  type();
});
