$(document).ready(function(){

    $(".promo").hide();

    $(".promo-text").on('click',function(){

        $(this).next().Toggle('slow');         
    })
})     