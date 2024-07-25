//Locomotive
function LocoCode() {
  gsap.registerPlugin(ScrollTrigger);

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  // Update ScrollTrigger when Locomotive Scroll updates
  locoScroll.on("scroll", ScrollTrigger.update);

  // Set up ScrollTrigger to use Locomotive Scroll's methods for the ".main" container
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // Refresh Locomotive Scroll and ScrollTrigger when the window updates
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // Refresh ScrollTrigger after setup
  ScrollTrigger.refresh();
}

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

  //Page 1 Code
  tl.from("#page1", {
    y: 1200,
    delay: 0.5,
    opacity: 0,
    duration: 0.5,
    power: 10,
  });

  // page 1 animation
  tl.from("#hero1 h1,#hero2 h1,#hero3 h1,#hero3 h2,#hero4 h1", {
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

  Shery.makeMagnet("#nav-part2 h4, #svg", {});
}
// Cursor hide code
document.body.style.cursor = "none";

// function Call
Createloader();
MouseCode();
LocoCode();
