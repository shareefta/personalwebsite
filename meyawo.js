
// smooth scroll
$(document).ready(function () {
    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
});

// navbar toggle
$('#nav-toggle').click(function () {
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

// contact form submission
$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzhYb826mF_nHikyl4zCc3hTnFzAOqhl10xY4xg3Advh8kB2GXyAdO0joBglonBQ_o/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            // window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})