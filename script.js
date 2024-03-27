$('.owl-carousel').owlCarousel({
    autoplayHoverPause: true,
    loop: true,

    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 18,

    nav: true,
    responsive: {
        0: {
            items: 1
        },
        375: {
            items: 1
        },
        768: {
            items: 2
        },
        1024: {
            items: 5
        }
    }
})
