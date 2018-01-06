$(document).ready(function() {

    var hash = window.location.hash.substr(1);
    var href = $('.menu li a').each(function(){

        var href = $(this).attr('href');
        if(hash==href){
            var toLoad = hash;
            $('.content').load(toLoad)
        }
    });

    $('.menu li a').click(function(event){

        var toLoad = $(this).attr('href');
        $('.content').hide('fast',loadContent);
        $('#load').remove();
        $('#wrapper').append('<span id="load">LOADING...</span>');
        $('#load').fadeIn('normal');
        window.location.hash = $(this).attr('href');
        function loadContent() {
            $('.content').load(toLoad,'',showNewContent)
        }
        function showNewContent() {
            $('.content').show('normal',hideLoader);
        }
        function hideLoader() {
            $('#load').fadeOut('normal');
        }
        loadContent();
        return false;

    });

    var hash = window.location.hash.substr(1);
    var href = $('#menu-adapt li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href){
            var toLoad = hash;
            $('.content').load(toLoad)
        }
    });

    $('.menu-adapt li a').click(function(event){

        var toLoad = $(this).attr('href');
        $('.content').hide('fast',loadContent);
        $('#load').remove();
        $('#wrapper').append('<span id="load">LOADING...</span>');
        $('#load').fadeIn('normal');
        window.location.hash = $(this).attr('href');
        function loadContent() {
            $('.content').load(toLoad,'',showNewContent)
        }
        function showNewContent() {
            $('.content').show('normal',hideLoader);
        }
        function hideLoader() {
            $('#load').fadeOut('normal');
        }
        loadContent();
        return false;

    });
});