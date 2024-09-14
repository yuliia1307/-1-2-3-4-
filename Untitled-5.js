var swiper = new Swiper(".mySwiper", {
      grabCursor: true,
      effect: "creative",
      autoplay:{
        delay: 2500
      },
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });