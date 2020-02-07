(function () {
    const burgerItem =  document.querySelector('.menu-burger');
    const menu = document.querySelector('.open-menu');
    const menuCloseItem = document.querySelector('.menu-close')
    burgerItem.addEventListener('click', () => {
        menu.classList.add('open-menu__active')
           
    });
    menuCloseItem.addEventListener ('click', () => {
        menu.classList.remove('open-menu__active')

    });

}());
$(function(){

    $('.item-open__slider').slick({
        infinite: true,
        fade: false,
        autoplay: true,
       slidesToShow: 1,
       
        
        prevArrow: '<img class="mobile-next__button" src="img/arrow_left.png" alt="">',
        nextArrow: '<img class="mobile-prev__button" src="img/arrow_right.png" alt="">',
       

      
    });
     
      
});

(function () {
    const item =  document.querySelectorAll('.item');
    const openItem = document.querySelector('.item-open');
    const back = document.querySelector('.back');
   

    item.forEach(el => {
        el.addEventListener('click', () => {
        openItem.classList.add('opened');
    
        });
    }); 
    back.addEventListener('click', () => {
        openItem.classList.remove('opened')
    });
}());
$(document).ready(function() {
    $('.open-lang').click(function(event) {
      event.preventDefault();
      $('.lang-dropdown').slideToggle();
    });
  });
  $(document).ready(function() {
    $('.tablet-lang').click(function(event) {
      event.preventDefault();
      $('.tablet-lang__dropdown').slideToggle();
    });
  });
  $(document).ready(function() {
    $('.item').click(function(event) {
      event.preventDefault();
      $('.opened').slideToggle();
    });
  });


$(function(){

    $('.tablet-slider').slick({
        infinite: true,
        fade: false,
        autoplay: true,
        dots: true,
        prevArrow: '<div class="tablet-prev"><img class="border-button" src="img/left_arrow_icon.png" alt=""></div>',
        nextArrow: '<div class="tablet-next"><img class="border-button" src="img/right_arrow_icon.png" alt=""></div>',
     
       
      
    });
     
      
});
$('.open-all').click(function(){
    $('.hidden').toggle('normal');
})
$(document).ready(function(){
    $('.animation-box').click(function(){
     $(this).parent().children('div.hidden').toggle('normal');
     return false;
    });
   });



