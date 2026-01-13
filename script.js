/* HERO SLIDER */
let slides=document.querySelectorAll(".slide");
let i=0;
setInterval(()=>{
  slides.forEach(s=>s.classList.remove("active"));
  i=(i+1)%slides.length;
  slides[i].classList.add("active");
},4000);

/* REVIEWS SLIDER */
/* ===== VERTICAL CLIENT REVIEWS SLIDER ===== */
const reviewTrack = document.querySelector(".review-track");
const reviews = document.querySelectorAll(".review-card");
let currentReview = 0;

setInterval(() => {
  currentReview = (currentReview + 1) % reviews.length;
  reviewTrack.style.transform =
    `translateY(-${currentReview * 100}%)`;
}, 3000); // 3 seconds
