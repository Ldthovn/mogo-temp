window.onscroll = function () {
  console.log(document.body.scrollTop);
  console.log(document.documentElement.scrollTop);
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    document.getElementsByClassName("header")[0].style.background = "#e78182e8";
    document.getElementsByClassName("header")[0].style.padding = "2rem 0";
  } else {
    document.getElementsByClassName("header")[0].style.background =
      "transparent";
    document.getElementsByClassName("header")[0].style.padding = "4rem 0";
  }
};

// ----------- Slider banner ---------------

let slideIndex = 1;
showSlides(slideIndex);

function currentSliderBanner(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner-content__item");
  let dots = document.getElementsByClassName(
    "banner-bottom__item--line__process"
  );
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    console.log("dots[i].className", dots[i].className);
    dots[i].className = dots[i].className.replace(" banner-slider__active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " banner-slider__active";
}

// Collapse

$(".collapse-toggle").click(function (e) {
  e.preventDefault();
  $("a:first-of-type").removeClass("chev");

  var $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find(".collapse-content").removeClass("show");
    $this.parent().parent().find(".collapse-content").slideUp(350);
    $this.toggleClass("chev");
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

// Slider Service

$(document).ready(function () {
  $(".slider-global").slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    infinite: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left slick-arrow aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right slick-arrow' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".teams-slider").slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,
    infinite: true,
  });
});

$(document).ready(function () {
  $(".blog-list").slick({
    slidesToShow: 3,
    dots: false,
    arrows: false,
    infinite: true,
  });
});

// Toggle menu

function openMenu() {
  document.getElementsByClassName("header-mobile")[0].style.display = "block";
}

function closeMenu() {
  document.getElementsByClassName("header-mobile")[0].style.display = "none";
}
