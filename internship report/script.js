const params = new URLSearchParams(window.location.search);
const type = params.get("type");

const heading = document.getElementById("heading");
const serviceList = document.getElementById("serviceList");

/* MEN SALON SERVICES */
const salonServices = [
  "Hair Cut – ₹150",
  "Beard Trim – ₹100",
  "Hair Spa – ₹400",
  "Kids Hair Cut – ₹100",
  "Hair Wash & Blow Dry – ₹120",
  "Head Massage – ₹200",
  "Face Cleanup – ₹300",
  "Anti-Dandruff Treatment – ₹350",
  "Hair Straightening – ₹1200",
  "Hair Smoothening – ₹1500",
  "Hair Coloring – ₹500",
  "Beard Styling – ₹150",
  "Premium Shaving – ₹120"
];

/* BEAUTY PARLOUR SERVICES */
const parlourServices = [
  "Facial – ₹600",
  "Party Makeup – ₹2000",
  "Bridal Makeup – ₹5000",
  "Eyebrow Threading – ₹50",
  "Upper Lip Threading – ₹30",
  "Full Hand Wax – ₹300",
  "Full Leg Wax – ₹450",
  "Underarm Wax – ₹120",
  "Face Bleach – ₹250",
  "Face Cleanup – ₹400",
  "Hair Spa – ₹700",
  "Manicure – ₹400",
  "Pedicure – ₹500"
];

/* LOAD SERVICES BASED ON USER CHOICE */
if (type === "salon") {
  heading.innerText = "Men Salon – Book Appointment";
  salonServices.forEach(service => {
    const option = document.createElement("option");
    option.text = service;
    serviceList.add(option);
  });
}

if (type === "parlour") {
  heading.innerText = "Beauty Parlour – Book Appointment";
  parlourServices.forEach(service => {
    const option = document.createElement("option");
    option.text = service;
    serviceList.add(option);
  });
}

/* FORM SUBMIT */
const form = document.getElementById("bookingForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Appointment Booked Successfully!");
  form.reset();
});

// /* REVIEW DATA */
// let reviews = [
//   {
//     name: "Rahul kumar",
//     text: "Best salon in the city!",
//     stars: 5,
//     img: "https://i.pravatar.cc/100?img=1"
//   },
//   {
//     name: "Prince ",
//     text: "Amazing bridal makeup experience.",
//     stars: 5,
//     img: "https://i.pravatar.cc/100?img=2"
//   },
//   {
//     name: "Amit ",
//     text: "Clean place and professional staff.",
//     stars: 4,
//     img: "https://i.pravatar.cc/100?img=3"
//   }
// ];

// let current = 0;
// let selectedStars = 0;

// const reviewImg = document.getElementById("reviewImg");
// const reviewText = document.getElementById("reviewText");
// const reviewName = document.getElementById("reviewName");
// const reviewStars = document.getElementById("reviewStars");

// /* LOAD REVIEW */
// function loadReview() {
//   const r = reviews[current];
//   reviewImg.src = r.img;
//   reviewText.innerText = "${r.text}";
//   reviewName.innerText = – ${r.name};
//   reviewStars.innerText = "★".repeat(r.stars);
// }

// function nextReview() {
//   current = (current + 1) % reviews.length;
//   loadReview();
// }

// function prevReview() {
//   current = (current - 1 + reviews.length) % reviews.length;
//   loadReview();
// }

// /* AUTO SLIDE */
// setInterval(nextReview, 4000);

// /* STAR SELECT */
// function selectStar(count) {
//   selectedStars = count;
//   document.querySelectorAll(".star-rating span").forEach((star, index) => {
//     star.classList.toggle("active", index < count);
//   });
// }

// /* FEEDBACK SUBMIT */
// const feedbackForm = document.getElementById("feedbackForm");

// feedbackForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const name = document.getElementById("userName").value;
//   const text = document.getElementById("userFeedback").value;

//   if (selectedStars === 0) {
//     alert("Please select star rating ⭐");
//     return;
//   }

//   reviews.push({
//     name,
//     text,
//     stars: selectedStars,
//     img: https://i.pravatar.cc/100?u=${name}
//   });

//   selectedStars = 0;
//   document.querySelectorAll(".star-rating span").forEach(star => star.classList.remove("active"));
//   feedbackForm.reset();

//   alert("🙏 Thank you for your feedback!");
// });

// /* INITIAL LOAD */
// if (reviewText) loadReview();







// /* DARK LIGHT MODE */
// const toggle = document.getElementById("themeToggle");
// toggle.onclick = () => {
//   document.body.classList.toggle("dark");
//   toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
// };

// /* REVIEWS DATA */
// let reviews = [
//   {
//     name: "Rahul kumar",
//     text: "Best salon experience!",
//     stars: 5,
//     img: "https://i.pravatar.cc/100?img=1"
//   },
//   {
//     name: "Prince",
//     text: "Very professional staff.",
//     stars: 4,
//     img: "https://i.pravatar.cc/100?img=2"
//   }
// ];

// let current = 0;
// let selectedStars = 0;

// const reviewImg = document.getElementById("reviewImg");
// const reviewText = document.getElementById("reviewText");
// const reviewName = document.getElementById("reviewName");
// const reviewStars = document.getElementById("reviewStars");

// /* LOAD REVIEW */
// function loadReview() {
//   const r = reviews[current];
//   reviewImg.src = r.img;
//   reviewText.innerText = "${r.text}";
//   reviewName.innerText = r.name;
//   reviewStars.innerText = "★".repeat(r.stars);
// }

// function nextReview() {
//   current = (current + 1) % reviews.length;
//   loadReview();
// }

// function prevReview() {
//   current = (current - 1 + reviews.length) % reviews.length;
//   loadReview();
// }

// setInterval(nextReview, 4000);

// /* STAR CLICK */
// function selectStar(count) {
//   selectedStars = count;
//   document.querySelectorAll(".star-rating span").forEach((s, i) => {
//     s.classList.toggle("active", i < count);
//   });
// }

// /* FEEDBACK SUBMIT */
// document.getElementById("feedbackForm").addEventListener("submit", e => {
//   e.preventDefault();

//   if (selectedStars === 0) {
//     alert("Please select stars ⭐");
//     return;
//   }

//   reviews.push({
//     name: userName.value,
//     text: userFeedback.value,
//     stars: selectedStars,
//     img: https://i.pravatar.cc/100?u=${userName.value}
//   });

//   selectedStars = 0;
//   document.querySelectorAll(".star-rating span").forEach(s => s.classList.remove("active"));
//   e.target.reset();

//   alert("Thanks for your feedback 🙏");
// });

// /* INITIAL */
// loadReview();




fetch("http://localhost:5000/api/book", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "vikash thakur",
    phone: "9117742133",
    service: "Hair Cut",
    date: "2025-01-05",
    time: "11:00 AM"
  })
})
.then(res => res.json())
.then(data => {
  alert("Booking Saved Successfully");
});