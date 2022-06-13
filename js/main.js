$(function() {

  $('.header__burger').on('click', function() {
    $('.header__burger, .header__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__link, .header__logo').on('click', function() {
    $('.header__burger, .header__list').removeClass('active');
    $('body').removeClass('lock');
  });

  $(".header__link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  var headerTop = $('.header');
  var doc = $(document);

  function headerFixed() {
    var threshold = doc.scrollTop() > 150;

    if (threshold) {
      headerTop.addClass('scrolled');
    } else {
      headerTop.removeClass('scrolled');
    }
  }
  $(window).on('scroll', headerFixed);

  headerFixed();

  var mixer = mixitup('.works__content');
});