(function($) {
    $(document).ready(function(){
        $('.bxslider').bxSlider({
            pagerCustom: '#bx-pager'
        });

        //фиксация шапки
        var h_hght =110; // высота шапки
        var h_mrg = 0;    // отступ когда шапка уже не видна
        var elem = $('.head-top');
        var top = $(this).scrollTop();
        if(top > h_hght){
            elem.css('top', h_mrg);
        }
        $(window).scroll(function(){
            top = $(this).scrollTop();

            if (top+h_mrg < h_hght) {
                elem.css('top', (h_hght-top));
            } else {
                elem.css('top', h_mrg);
            }
        });
});
})(jQuery);
