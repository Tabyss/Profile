import { Expo, gsap } from "gsap";

gsap.registerPlugin();

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

export const mainLoad = () => {
  tl.from(".main__identity__name__first,  .main__identity__name__last", {
    x: 20,
    opacity: 0,
    duration: 1,
    delay: 0,
    ease: "power3.easeInOut",
  })
    .from(".main__body__profile__nav", {
      y: -200,
      opacity: 0,
      duration: 0.5,
      ease: Expo.easeIn,
    })
    .from(".main__btn", {
      x: 20,
      opacity: 0,
      ease: "power3.easeInOut",
    })
    .from(".Logo", {
      opacity: 0,
      duration: 1.5,
      ease: "power3.easeInOut",
    });
};
