   const hero = document.querySelector(".hero")
   const slider = document.querySelector(".slider")
   const logo = document.querySelector("#logo")
   const hamburger = document.querySelector(".hamburger")
   const headline = document.querySelector(".headline")

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
       duration: 1.5,
       ease: Power2.easeInOut

   })