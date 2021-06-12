function showBtnCondition() {
    if ($(this).scrollTop() >= 300) {
      $('.top a ,.top i').attr('style','opacity:1');
        } else {
         $('.top a , .top i').attr('style','opacity:0');
       }
     }
 $(window).scroll(showBtnCondition);

 $(document).ready(function(){
  $('.top a ,.top i').attr('style','opacity:0');
    $('.top a ,.top i').click(function(event){
      event.preventDefault();
      $('html').animate({scrollTop:0} ,1000);
    });
});