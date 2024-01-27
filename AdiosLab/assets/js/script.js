// $(document).ready(function () {
//     let currentIndex = 0;
//     const cards = $(".carddispos");
//     const cardWidth = cards.first().outerWidth();
//     let originaltrans = 0
//     cards.slice(currentIndex, currentIndex + 3).addClass("active-card");
//     $("#prev-btndispos").on("click", function () {
//         if (currentIndex < cards.length - 3) {
//             currentIndex++;
//             updateSlider();
//         }
//     });

//     $("#prev-btndispos").on("click", function () {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateSlider();
//         }
//     });

//     function updateSlider() {
//         const translateX = -currentIndex * cardWidth;
//         cards.each(function () {
//             $(this).css("transform", `translateX(${translateX}px)`);
//         });
//         originaltrans = translateX
//         // $(".slider").css("transform", `translateX(${translateX}px)`);
//         // $(".slider").css("position", "static");
//         cards.removeClass("active-card");
//         cards.slice(currentIndex, currentIndex + 3).addClass("active-card");
//     }

//     let openIndex = null;
//     const expandedCard = $(".expanded-card");
//     const cardsbtn = $(".cardbutton");
//     cardsbtn.on("click", function () {
//         const card = $(this).closest(".carddispos");
//         // openIndex = card.data("index");
//         // expandCard(openIndex);
//             // setTimeout(function () {
//             //     card.addClass("expanded");
//             // }, 1000);
//             card.addClass("expanded");
//             card.css('transform','translateX(0px)')
//             $('.close-expand').addClass('show')
//             $(".sidebar").addClass('shown')
//             // $("body").css("overflow", "hidden"); // Disable scrolling of the body

//             // Delay the expansion of the current card
//             // setTimeout(function () {
//             //     card.css("transform", "translate(0, 0) scale(1)");
//             // }, 1000);
//             $(".carddispos").not(card).each(function () {
//                 const otherCard = $(this);
//                     otherCard.removeClass('active-card')
//                     otherCard.addClass("hidden");
//             });

//     });

//     $(".expanded-card").on("click", function (e) {
//         if ($(e.target).is(this)) {
//             closeExpandedCard();
//             card.css("transform", "translate(0, 0) scale(1)");
//             card.removeClass("expanded");

//         }
//     });

//     $('.close-expand').on("click", function (e) {

//             $(".card.expanded").css("transform", `translateX(${originaltrans}px)`);
//             $(".card.expanded").removeClass("expanded");
//             $(".sidebar").removeClass('shown')
//             $('.close-expand').removeClass('show')
//             $(".card").each(function () {
//                 const otherCard = $(this);
//                 if (!otherCard.hasClass("expanded")) {
//                     cards.slice(currentIndex, currentIndex + 3).addClass("active-card");
//                     otherCard.removeClass("hidden");
//                 } else {
//                     otherCard.css("opacity", 1);
//                 }
//             });

//     });

//     function expandCard(index) {
//         const selectedCard = cards.eq(index).clone();
//         expandedCard.find(".content").html(selectedCard);
//         expandedCard.css("display", "block");
//     }

//     function closeExpandedCard() {
//         expandedCard.css("display", "none");
//     }
// });

// ..............
// Get all elements with the class "read-more"
const readMoreButtons = document.querySelectorAll(".read-more");
const popups = document.querySelectorAll(".popup");

// Add a click event listener to each "read-more" button
readMoreButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Show the corresponding popup
    popups[index].style.display = "block";
  });
});

// Get all elements with the class "close-popup"
const closePopupButtons = document.querySelectorAll(".close-popup");

// Add a click event listener to each "close-popup" button
closePopupButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Hide the corresponding popup when the "close-popup" button is clicked
    popups[index].style.display = "none";
  });
});

// Get the Previous and Next buttons
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

// Calculate the width of a single card
const cardWidth = document.querySelector(".slide").clientWidth;

// Initialize a variable to keep track of the current scroll position
let currentScrollPosition = 0;

// Add click event listeners to Previous and Next buttons
prevButton.addEventListener("click", () => {
  // Scroll to the previous card
  currentScrollPosition -= cardWidth;
  document.querySelector(".slider").scrollTo({
    left: currentScrollPosition,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", () => {
  // Scroll to the next card
  currentScrollPosition += cardWidth;
  document.querySelector(".slider").scrollTo({
    left: currentScrollPosition,
    behavior: "smooth",
  });
});






