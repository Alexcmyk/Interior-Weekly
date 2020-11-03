$(document).on('scroll', function() {
    let scrollAmount = $(document).scrollTop()
    let documentHeight = $(document).height()
    let windowHeight = $(window).height()
    let totalHeight = documentHeight - windowHeight
    let percentage = 100 * scrollAmount / totalHeight

    // Hide header

    $(".progress").text(scrollAmount + ' pixels from top')

    if (scrollAmount > 50) {
        $('header').addClass('hide')
    } else {
        $('header').removeClass('hide')
    }

    // Background color changer

    if (scrollAmount < 600) {
        $('body').css('background-color', '#fff')
    } else if (scrollAmount < 1400) {
        $('body').css('background-color', '#a29c97')
    } else if (scrollAmount < 2200) {
        $('body').css('background-color', '#d9dfe4')
    } else if (scrollAmount < 3000) {
        $('body').css('background-color', '#fff0f0')
    } else {
        $('body').css('background-color', '#cdccc7')
    }

    $('.bar').css('width', percentage + "%")
    console.log(percentage);
})