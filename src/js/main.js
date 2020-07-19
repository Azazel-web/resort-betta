window.addEventListener('load', function () {
   new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      scrollLock: true,
      duration: 2,
      scrollLockDelay: 50,
      arrows: {
         prev: '.glider-prev',
         next: '.glider-next'
      }
   })
})