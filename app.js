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
       duration: 1
   })