$(document).ready(function () {
 $('#menu').on('click', 'a', function (e) {
  e.preventDefault();

  let id = $(this).attr('href');
  let top = $(id).offset().top;

  $('body,html').animate({ scrollTop: top }, 1300)
 });
 $('#arrow').on('click', 'a', function (e) {
  e.preventDefault();

  let id = $(this).attr('href');
  let top = $(id).offset().top;

  $('body,html').animate({ scrollTop: top }, 1300);
 });
});

$(document).scroll(() => {
 if ($(window).scrollTop() > 60) {
  $('header').addClass('fixed');
 } else {
  $('header').removeClass('fixed');
 }
});
