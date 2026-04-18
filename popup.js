$(document).ready(function () {
    const modal = $('#modalDialog');
    const closeBtn = $(".close");
    const form = $('#contactFrm');
    
    $('.book-btn').on('click', function () {
        modal.fadeIn();
    });

    closeBtn.on('click', function () {
        modal.fadeOut();
    });

    $(window).on('click', function (e) {
        if ($(e.target).is(modal)) {
            modal.fadeOut();
        }
    });

    form.on('submit', function (e) {
        e.preventDefault();
        alert("Your message was sent! Please wait for the reply in 1-5 business days");
        modal.fadeOut();
    });
});
