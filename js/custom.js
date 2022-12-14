/*
  * @package 
  * @subpackage template name HTML
  * 
  * Template Scripts
  * Created by themeturn
  
  1. Fixed header
  2. Site search
  3. Main slideshow
  4. Owl Carousel
      a. Testimonial
      b. Clients
      c. Team
  5. Back to top
  6. Skills
  7. BX slider
      a. Blog Slider
      b. Portfolio item slider
  8. Isotope
  9. Animation (wow)
  10. Flickr
  
*/

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come back 🫠";
});

window.addEventListener("focus", () => {
  document.title = docTitle;
});

jQuery(function ($) {
  "use strict";

  $(".navigation").singlePageNav({
    currentClass: "active",
    changeHash: true,
    scrollSpeed: 750,
    offset: 0,
    filter: ":not(.external)",
    easing: "swing",
  });

  $.noConflict();
  $(".nav a").on("click", function () {
    if ($(".navbar-toggle").css("display") != "none") {
      $(".navbar-toggle").trigger("click");
    }
  });

  // prettyphoto

  $("a[data-rel^='prettyPhoto']").prettyPhoto();
});

var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
  if (click) {
    if (curpage == 1) curpage = 5;
    console.log("woek");
    sliding = true;
    curpage--;
    svg = true;
    click = false;
    for (k = 1; k <= 4; k++) {
      var a1 = document.getElementById(pagePrefix + k);
      a1.className += " tran";
    }
    setTimeout(() => {
      move();
    }, 200);
    setTimeout(() => {
      for (k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove("tran");
      }
    }, 1400);
  }
}

function rightSlide() {
  if (click) {
    if (curpage == 4) curpage = 0;
    console.log("woek");
    sliding = true;
    curpage++;
    svg = false;
    click = false;
    for (k = 1; k <= 4; k++) {
      var a1 = document.getElementById(pagePrefix + k);
      a1.className += " tran";
    }
    setTimeout(() => {
      move();
    }, 200);
    setTimeout(() => {
      for (k = 1; k <= 4; k++) {
        var a1 = document.getElementById(pagePrefix + k);
        a1.classList.remove("tran");
      }
    }, 1400);
  }
}

function move() {
  if (sliding) {
    sliding = false;
    if (svg) {
      for (j = 1; j <= 9; j++) {
        var c = document.getElementById(transitionPrefix + j);
        c.classList.remove("steap");
        c.setAttribute("class", transitionPrefix + j + " streak");
        console.log("streak");
      }
    } else {
      for (j = 10; j <= 18; j++) {
        var c = document.getElementById(transitionPrefix + j);
        c.classList.remove("steap");
        c.setAttribute("class", transitionPrefix + j + " streak");
        console.log("streak");
      }
    }
    setTimeout(() => {
      for (i = 1; i <= 4; i++) {
        if (i == curpage) {
          var a = document.getElementById(pagePrefix + i);
          a.className += " up1";
        } else {
          var b = document.getElementById(pagePrefix + i);
          b.classList.remove("up1");
        }
      }
      sliding = true;
    }, 600);
    setTimeout(() => {
      click = true;
    }, 1700);

    setTimeout(() => {
      if (svg) {
        for (j = 1; j <= 9; j++) {
          var c = document.getElementById(transitionPrefix + j);
          c.classList.remove("streak");
          c.setAttribute("class", transitionPrefix + j + " steap");
        }
      } else {
        for (j = 10; j <= 18; j++) {
          var c = document.getElementById(transitionPrefix + j);
          c.classList.remove("streak");
          c.setAttribute("class", transitionPrefix + j + " steap");
        }
        sliding = true;
      }
    }, 850);
    setTimeout(() => {
      click = true;
    }, 1700);
  }
}

left.onmousedown = () => {
  leftSlide();
};

right.onmousedown = () => {
  rightSlide();
};

document.onkeydown = (e) => {
  if (e.keyCode == 37) {
    leftSlide();
  } else if (e.keyCode == 39) {
    rightSlide();
  }
};

//for codepen header
// setTimeout(() => {
// 	rightSlide();
// }, 500);

function submitted() {
  const Toast = Swal.mixin({
    toast: true,
    position: "center",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Sent successfully",
  });
}
// window.addEventListener("mouseover", function () {
//   document.querySelector(".innerwidth").textContent = window.innerWidth;
//   document.querySelector(".innerheight").innerHTML = window.innerHeight;
// });
// window.addEventListener("resize", function () {
//   document.getElementById("innerwidth").innerHTML = window.innerWidth;
//   document.getElementById("innerheight").innerHTML = window.innerHeight;
//   showWidth;
// });

// document.querySelector(".innerwidth").style.color = "red";
// document.querySelector(".innerheight").style.color = "red";
// document.querySelector(".innerwidth").style.position = "fixed";
// document.querySelector(".innerheight").style.position = "fixed";

const unsplashUrl = "https://api.unsplash.com/photos/random";
const accessKey = "B-ijsCQO0HpeXkQYIBb4v4Bi8EbKgC1eRsvNI_AKF6c";

function getRandomImage() {
  // Fetch a random image from the Unsplash API
  fetch(`${unsplashUrl}?client_id=${accessKey}`)
    .then((response) => response.json())
    .then((json) => {
      // Get the URL of the image
      const imageUrl = json.urls.regular;

      // Update the src attribute of the <img> element to display the image
      document.getElementById("unsplash-image").src = imageUrl;
    });
}

// Call the getRandomImage() function when the page loads
window.onload = getRandomImage;
