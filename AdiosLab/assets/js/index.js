$(document).ready(function () {
    let currentIndex = 0;
    const cards = $(".card");
    const cardWidth = cards.first().outerWidth();
    let originaltrans = 0
    cards.slice(currentIndex, currentIndex + 3).addClass("active-card");
    $("#next-btn").on("click", function () {
        if (currentIndex < cards.length - 3) {
            currentIndex++;
            updateSlider();
        }
    });

    $("#prev-btn").on("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    function updateSlider() {
        const translateX = -currentIndex * cardWidth;
        cards.each(function () {
            $(this).css("transform", `translateX(${translateX}px)`);
        });
        originaltrans = translateX
        // $(".slider").css("transform", `translateX(${translateX}px)`);
        // $(".slider").css("position", "static");
        cards.removeClass("active-card");
        cards.slice(currentIndex, currentIndex + 3).addClass("active-card");
    }

    let openIndex = null;
    const expandedCard = $(".expanded-card");
    const cardsbtn = $(".cardbutton");
    cardsbtn.on("click", function () {
        const card = $(this).closest(".card");
        // openIndex = card.data("index");
        // expandCard(openIndex);
            // setTimeout(function () {
            //     card.addClass("expanded");
            // }, 1000);
            card.addClass("expanded");
            card.css('transform','translateX(0px)')
            $('.close-expand').addClass('show')
            $(".sidebar").addClass('shown')
            // $("body").css("overflow", "hidden"); // Disable scrolling of the body

            // Delay the expansion of the current card
            // setTimeout(function () {
            //     card.css("transform", "translate(0, 0) scale(1)");
            // }, 1000);
            $(".card").not(card).each(function () {
                const otherCard = $(this);
                    otherCard.removeClass('active-card')
                    otherCard.addClass("hidden");
            });    
        
    });

    $(".expanded-card").on("click", function (e) {
        if ($(e.target).is(this)) {
            closeExpandedCard();
            card.css("transform", "translate(0, 0) scale(1)");
            card.removeClass("expanded");
            
        }
    });

    

    $('.close-expand').on("click", function (e) {
        
            $(".card.expanded").css("transform", `translateX(${originaltrans}px)`);
            $(".card.expanded").removeClass("expanded");
            $(".sidebar").removeClass('shown')
            $('.close-expand').removeClass('show')
            $(".card").each(function () {
                const otherCard = $(this);
                if (!otherCard.hasClass("expanded")) {
                    cards.slice(currentIndex, currentIndex + 3).addClass("active-card");
                    otherCard.removeClass("hidden");
                } else {
                    otherCard.css("opacity", 1);
                }
            });
    
        
    });
    

    function expandCard(index) {
        const selectedCard = cards.eq(index).clone();
        expandedCard.find(".content").html(selectedCard);
        expandedCard.css("display", "block");
    }

    function closeExpandedCard() {
        expandedCard.css("display", "none");
    }
});
