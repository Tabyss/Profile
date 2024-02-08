import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

export const preLoad = () => {
  tl.to("body", {
    duration: 0.1,
    css: { overflowY: "hidden" },
    ease: "power3.in",
  })
    .from(".preload__logo_1", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: Expo.easeIn,
    })
    .from(
      ".preload__logo_2",
      {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0,
        ease: Expo.easeIn,
      },
      "-=1"
    )
    .to(".preload__logo", {
      duration: 0.5,
      opacity: 0,
      delay: 0.5,
    })
    .to(".preload__logo", {
      duration: 1,
      opacity: 1,
      delay: 0.5,
    })
    .to(".preload__logo", {
      duration: 0.5,
      opacity: 0,
      delay: 0.5,
    })
    .to(".preload__logo", {
      duration: 1,
      opacity: 1,
      delay: 0.5,
    })
    .to(".preload__logo_1", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: Expo.easeIn,
    })
    .to(
      ".preload__logo_2",
      {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0,
        ease: Expo.easeIn,
      },
      "-=1"
    )
    .to(".preload", {
      duration: 1,
      opacity: 0,
      ease: "power3.easeOut",
    })
    .to("body", {
      duration: 1,
      css: { overflowY: "auto" },
      ease: "power3.easeOut",
    })
    .to(".preload", {
      duration: 0,
      css: { display: "none" },
      ease: "power3.easeOut",
    });
};

export const divider = () => {
  tl.to(".divider-about", {
    backgroundColor: "#fff",
    color: "#000",
    scrollTrigger: {
      trigger: ".divider-about",
      start: "top 0",
      end: "bottom 0",
      toggleClass: "active",
      pin: true,
      scrub: true,
    },
  });
};