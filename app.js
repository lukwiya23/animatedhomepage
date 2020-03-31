const tl = gsap.timeline()
tl.fromTo(".hero", {
    height: "0%"
}, {
    height: "80%",
    duration: 1,
    ease: Power2.easeInOut
})
tl.fromTo(".hero", { width: "100%" }, {
        width: "80%",
        duration: 1.2,
        ease: Power2.easeInOut

    })
    .fromTo(".slider", {
        x: "-100%",

    }, {
        x: "0%",
        ease: Power2.easeInOut,
        duration: 1.2

    })
    .fromTo("#logo", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 })
    .fromTo(".hamburger", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5 })