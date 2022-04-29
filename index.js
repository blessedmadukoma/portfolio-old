var button = document.getElementById("navbar-toggle");

function classToggle() {
  const atags = document.querySelectorAll(".nav-links");
  const ul = document.querySelector(".mobile-nav");

  console.log(ul.style[0]);
  atags.forEach((a) => {
    a.classList.toggle("nav-links");
    console.log("Style: ", a.style.display);
    if (a.style.display == "") {
     a.style.display = "none";
   } else {
     li.style.display = "initial";
   }
  });
}

// button.addEventListener("click", classToggle);
document.querySelector(".navbar-toggle").addEventListener("click", classToggle);


// set active
// Get the container element
var btnContainer = document.getElementById("myDIV");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-links");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}