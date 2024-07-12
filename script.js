// Loader Code
function Createloader() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.3,
  });

  // Loader Counting Code
  tl.from("#line-part1, .line h2", {
    opacity: 0,
    onstart: function () {
      var h5timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5timer.innerHTML = grow++;
        } else {
          h5timer.innerHTML = grow;
        }
      }, 15);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2,
  });
  tl.to("#loader", {
    display: "none",
  });

  // Page 1 Code


  // page 1 animation
  tl.from("#hero3 h2", {
    y: 120,
    stagger: 0.1,
  });

  tl.from("#hero1 h1,#hero2 h1, #hero4 h1", {
    y: 120,
    stagger: 0.1,
  });
}

// Mouse Code And page1 Element Magnet code
function MouseCode() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".crsr", {
      left: dets.x,
      top: dets.y,
    });
  });

  Shery.makeMagnet("#nav-part2 h4, #svg, #hero3 h2", {});
}
// function Call
Createloader();
MouseCode();
