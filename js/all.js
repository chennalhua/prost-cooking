function showBtnCondition() {
    if ($(this).scrollTop() >= 300) {
      $('.top a').attr('style','opacity:1');
        } else {
         $('.top a').attr('style','opacity:0');
       }
     }
 $(window).scroll(showBtnCondition);

