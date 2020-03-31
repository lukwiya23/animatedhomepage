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
tl.fromTo(".slider", {
    x: "-100%",

}, {
    x: "0%",
    ease: Power1.easeInOut,
    duration: 1.2

})