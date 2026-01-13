/* HERO SLIDER */
let slides=document.querySelectorAll(".slide");
let i=0;
setInterval(()=>{
  slides.forEach(s=>s.classList.remove("active"));
  i=(i+1)%slides.length;
  slides[i].classList.add("active");
},4000);

/* REVIEWS SLIDER */
let track=document.querySelector(".review-track");
let r=0;
setInterval(()=>{
  r=(r+1)%3;
  track.style.transform=`translateX(-${r*100}%)`;
},3000);
