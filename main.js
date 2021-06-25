// abre e fecha o menu quando clicar no icone.
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

// quando clicar em um item do menu, esconder menu
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

// mudar reader da pagina quando der o scroll
 const reader = document.querySelector('#header')
 const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
    
    if (window.scrollY >= navHeight) {
            header.classList.add('scroll')
    } else {
            header.classList.remove('scroll')
    }
}


// testimonios corrocel

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mausewheel: true,
    keyboard: true,
    breakpoints: {
       767: {
           slidesPerView: 2,
           setWrappersSize: true
       } 
    }
  });

  // scrollrevell: mostra elementos quando der scroll na pagina

  const scrollReveal = ScrollReveal( {
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  })

  scrollReveal.reveal(
      `#home .text, #home .image,
      #about .image, #about .text,
      #services header, #services .card,
      #testimonials header, #testimonials .testimonials,
      #contact .text, #contact .links,
      footer .brand, footer .social
      `, 
      {interval: 100})

 // botao volta pra o topo 

 function backToTo() {
    const backToTopButton = document.querySelector('.back-to-top')
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
 }

 // menu ativo conforme a secao visivel da pagina
 const sections = document.querySelectorAll('main section[id]')
 function activeMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset +(window.innnerHeight /8) * 4
    
    for (const section of sections) {
        const sectionTop = section.osssetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointStart = checkpoint <= sectionTop + sectionHeight
        if (checkpointStart && checkpointEnd) {
            document.
            
            querySelector('nav ul li a[href*='+ sectionId + ']')
            .classList.add('active')
        } else {
            document.
            
            querySelector('nav ul li a[href*='+ sectionId + ']')
            .classList.remove('active')
        }
    }

 }

 window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTo()
    activeMenuAtCurrentSection()
})




