jQuery(document).ready(function ($) {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1090:{
            items:2
        }
    }
  });
  $('.owl-dot span').remove();
  $('.owl-dot').html('<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.7906 1.40666C5.19484 0.267994 6.80516 0.267994 7.2094 1.40666C7.445 2.07032 8.1714 2.42013 8.83717 2.19055C9.97945 1.79665 10.9835 3.05565 10.3453 4.08165C9.97329 4.67963 10.1527 5.46566 10.7473 5.84304C11.7675 6.49052 11.4091 8.06046 10.2091 8.20119C9.50961 8.28321 9.00693 8.91356 9.08261 9.61372C9.21245 10.815 7.7616 11.5137 6.90334 10.6632C6.40312 10.1675 5.59688 10.1675 5.09666 10.6632C4.2384 11.5137 2.78755 10.815 2.91739 9.61372C2.99307 8.91356 2.49039 8.28321 1.79094 8.20119C0.590873 8.06046 0.232543 6.49052 1.25271 5.84304C1.8473 5.46566 2.02671 4.67963 1.65474 4.08165C1.01653 3.05565 2.02055 1.79665 3.16283 2.19055C3.8286 2.42013 4.555 2.07032 4.7906 1.40666Z" fill="white"/></svg>');
  $('.checkbox-toggle').click(function () { 
    $('html').toggleClass('overflow');
  });
});
var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("accordion_active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }