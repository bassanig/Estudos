function initTabMenu() {
    const tabmenu = document.querySelectorAll('.js-tabmenu li');
    const tabcontent = document.querySelectorAll('.js-tabcontent section');

    if (tabcontent.length && tabcontent.length) {
    tabcontent[0].classList.add('active')

    function activeTab(index) {
        tabcontent.forEach((item) => item.classList.remove('active'))
        tabcontent[index].classList.add('active');
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
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"');

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