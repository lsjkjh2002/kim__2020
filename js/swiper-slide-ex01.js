new Swiper (".sw-visual",{
    diraction: "vertical",
    autoplay: {
        delay: 2000,
    },
    speed : 1000,
    loop : true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation : {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    }
})

new Swiper (".sw-display",{
    diraction:"vertical",
    autoplay: {
        delay:3000,
        disableOnInteraction:true
    },
    loop:true,
    slidesPerView:2,
    spaceBetween:20,
    navigation: {
        prevEl:".btn-prev",
        nextEl:".btn-next",
    },
})

new Swiper (".sw-education", {
    autoplay: {
        delay:3000,
        disableOnInteraction:true,
    },
    loop:true,
    slidesPerView:2,
    spaceBetween:20,
    navigation: {
        prevEl:".edu-btn-prev",
        nextEl:".edu-btn-next"
    },
})