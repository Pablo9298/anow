$(function() {

  $('.header__burger').on('click', function() {
    $('.header__burger, .header__list').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.header__link, .header__logo').on('click', function() {
    $('.header__burger, .header__list').removeClass('active');
    $('body').removeClass('lock');
  });
});