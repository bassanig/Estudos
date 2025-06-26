function initTabMenu() {
    const tabmenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabcontent = document.querySelectorAll('[data-tab="content"] section');

    if (tabcontent.length && tabcontent.length) {
    tabcontent[0].classList.add('active')

    function activeTab(index) {
        const anime = tabcontent[index].dataset.anime;
        tabcontent.forEach((item) => item.classList.remove('active'))
        tabcontent[index].classList.add('active', anime);
    }

    tabmenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index)
        })
    })
    }
}

initTabMenu()

function initAccordionList() {
    const dts = document.querySelectorAll('.js-accordion dt');
    if(dts.length) {
        dts[0].classList.add('active')
        dts[0].nextElementSibling.classList.add('active')

        function activeAccordion(event) {
        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
        }

        dts.forEach((dt) => {
            dt.addEventListener('click', activeAccordion)
        })
    }
}

initAccordionList()

function initScollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        console.log(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection);
    })
}

initScollSuave()

function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
        if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active')
                }
                
            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll)
    }
}

initAnimacaoScroll()