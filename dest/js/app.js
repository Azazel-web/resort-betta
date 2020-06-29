let accardionTitle = document.querySelectorAll('.accardion__title')

accardionTitle.forEach(elem => elem.addEventListener('click', () => {
   if(elem.nextElementSibling.style.display === 'none'){
      elem.nextElementSibling.style.display = 'block'
   } else
   elem.nextElementSibling.style.display = 'none'
}))