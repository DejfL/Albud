$(".nav-item-hover").click(function () {
  $id = $(this).attr("id");
  $(".active").removeClass("active");
  $(this).addClass("active");
  if ($id == 1) {
    scrol("#stronaGlowna");
  } else if ($id == 2) {
    scrol("#oNas");
  } else if ($id == 3) {
    scrol("#oferta");
  } else if ($id == 4) {
    scrol("#Realizacje");
  } else if ($id == 5) {
    scrol("#kontakt");
  }
});

function scrol(el) {
  $("html, body").animate(
    {
      scrollTop: $($(el)).offset().top - $(".navbar").height(),
    },
    500,
    "linear"
  );
}

$(".wiecej").click(function () {
  var $id = $(this).attr("id");
  $(".slideOffer").removeClass("collapse");
  if ($(".slideOffer").hasClass("fadeOutRight")) {
    $(".slideOffer").removeClass("fadeOutRight");
  }
  $(".slideOffer").addClass("fadeInLeft");

  if ($id == "1") {
    $("#slide1").removeClass("collapse");
  } else if ($id == "2") {
    $("#slide2").removeClass("collapse");
  } else if ($id == "3") {
    $("#slide3").removeClass("collapse");
  } else if ($id == "4") {
    $("#slide4").removeClass("collapse");
  } else if ($id == "5") {
    $("#slide5").removeClass("collapse");
  } else if ($id == "6") {
    $("#slide6").removeClass("collapse");
  } else if ($id == "7") {
    $("#slide7").removeClass("collapse");
  } else if ($id == "8") {
    $("#slide8").removeClass("collapse");
  } else if ($id == "9") {
    $("#slide9").removeClass("collapse");
  } else if ($id == "10") {
    $("#slide10").removeClass("collapse");
  } else if ($id == "11") {
    $("#slide11").removeClass("collapse");
  } else if ($id == "12") {
    $("#slide12").removeClass("collapse");
  }
  Masonry.init();
});

$(".closeSlide").click(function () {
  $(".slideOffer").removeClass("fadeInLeft");
  $(".slideOffer").addClass("fadeOutRight");
  setTimeout(function () {
    $(".slideOffer").delay(800).addClass("collapse");

    $(".pokaSlider").each(function () {
      if (!$(this).hasClass("collapse")) {
        $(this).addClass("collapse");
      }
    });
  }, 500);
});

$(document).ready(function () {
  var itemsCount = 4;
  if ($(window).width() <= 576) {
    itemsCount = 2;
  }

  var owl = $(".owl-carousel");

  owl.owlCarousel({
    items: itemsCount,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
  });
});

$(window).load(function () {
  $("#loader").addClass("fadeOutUp");
  $("html").css({ overflow: "auto" });
});

// $(".downloadButton").click(function(e) {
//     e.preventDefault();

//     /* Start loading process. */
//     $(this).addClass("loadingButton");

//     /* Set delay before switching from loading to success. */
//     window.setTimeout(function() {
//         $(this).removeClass("loadingButton");
//         $(this).addClass("success");
//     }, 3000);

//     /* Reset animation. */
//     window.setTimeout(function() {
//         $(this).removeClass("success");
//     }, 8000);
// })
