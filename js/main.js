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
});