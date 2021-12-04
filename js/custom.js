/* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function () {
  $(".preloader").fadeOut(1000); // set duration in brackets
});

$(document).ready(function () {
  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function () {
    $("body").vegas({
      slides: [{ src: "images/slide-1.jpg" }, { src: "images/slide-2.jpg" }],
      timer: false,
      transition: ["zoomOut"],
    });
  });

  /* Back top
  -----------------------------------------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".go-top").fadeIn(200);
    } else {
      $(".go-top").fadeOut(200);
    }
  });
  // Animate the scroll to top
  $(".go-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();
});

var ourStatus = "online";
var current_status = "online";

function check_internet_connection() {
  if (navigator.onLine) {
    ourStatus = "online";
  } else {
    ourStatus = "offline";
  }

  if (current_status != ourStatus) {
    if (ourStatus == "online") {
      document.getElementById("ans").innerHTML = "Let's begin";
    } else {
      document.getElementById("ans").innerHTML = "Your Answer is.........";
    }

    current_status = ourStatus;
  }
}

check_internet_connection();

setInterval(function () {
  check_internet_connection();
}, 1000);
