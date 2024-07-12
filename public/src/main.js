window.onload = function() {
  // Reset the form fields when the page loads
  document.getElementById("form").reset();
};
let open = document.querySelector('.hamburger-icon')
let close = document.querySelector('.cross-icon')

let coverPage = document.querySelector('.cover')


open.addEventListener('click',()=>{
    coverPage.classList.add('flex')
    coverPage.classList.remove('hidden')
    console.log("clicked");
})

close.addEventListener('click',()=>{
    coverPage.classList.add('hidden')
    coverPage.classList.remove('flex')
    console.log("unclicked");
})



// our services 

document.querySelectorAll(".row").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate =  dets.clientX;
      
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        
    });
    });
  });