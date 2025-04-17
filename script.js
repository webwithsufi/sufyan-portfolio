function LoaderAnimation() {
  document.addEventListener("DOMContentLoaded", function () {
    const letters = document.querySelectorAll(".text span");
    const tl = gsap.timeline();
    tl.to(letters, {
      duration: 0.6,
      y: 0,
      stagger: 0.05,
      ease: "power2.out",
    })
      .to(letters, {
        "--clipPath": "inset(0% 0 0 0)",
        duration: 0.8,
        delay: 0.3,
        ease: "power1.inOut",
      })
      .to(letters, {
        duration: 0.6,
        y: 100,
        stagger: 0.05,
        delay: 0.5,
      })
      .to(".loader", {
        display: "none",
      });
  });
}


function AboutAnimation() {
  const container = document.querySelector(".container");
  const sections = gsap.utils.toArray(".container section");
  const texts = gsap.utils.toArray(".anim");
  const mask = document.querySelector(".mask");

  let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 1,
      end: "+=3000",
      //snap: 1 / (sections.length - 1),
      // markers: true,
    },
  });

  console.log(1 / (sections.length - 1));

  //Progress bar animation

  gsap.to(mask, {
    width: "100%",
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top left",
      scrub: 1,
    },
  });

  // whizz around the sections
  sections.forEach((section) => {
    // grab the scoped text
    let text = section.querySelectorAll(".anim");

    // bump out if there's no items to animate
    if (text.length === 0) return;

    // do a little stagger
    gsap.from(text, {
      y: -130,
      opacity: 0,
      duration: 2,
      ease: "elastic",
      stagger: 0.1,
      scrollTrigger: {
        trigger: section,
        containerAnimation: scrollTween,
        start: "left center",
        // markers: true
      },
    });
  });
}

function MouseEffects() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

LoaderAnimation();
AboutAnimation();
MouseEffects();
