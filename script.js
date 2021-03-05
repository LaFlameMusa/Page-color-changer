$('.btn').click(function() {
    $('.box').toggleClass('box-show');
})

$('#hex').keyup(function() {
    $('.prev').css('background',$('#hex').val());
});

$('.apply').click(function() {
    $('body').css('background',$('#hex').val());

    $('.box').toggleClass('box-show');
});