$(document).on('scroll', function() {
    let scrollAmount = $(document).scrollTop()
    $(".progress").text(scrollAmount + ' pixels from top')
})