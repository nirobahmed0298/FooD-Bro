(function($){
    'use strict';
    // Mobile Menu //
    $(".var").on('click',function(){
        $(".menu-items").animate({left:0})
    });
    $(".x-mark >i").on('click',function(){
        $(".menu-items").animate({left:-250})
    });

})(jQuery);
