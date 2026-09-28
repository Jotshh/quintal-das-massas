document.documentElement.classList.add('js');

const backToTopButton = document.getElementById('backToTop');

function toggleBackToTopButton() {
    if (!backToTopButton) return;
    backToTopButton.classList.toggle('is-visible', window.scrollY > 300);
}

window.addEventListener('scroll', toggleBackToTopButton, { passive: true });

backToTopButton?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------- MOBILE NAVIGATION ----------
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.querySelector('.menu-backdrop');
const mobileMenuLinks = mobileMenu ? Array.from(mobileMenu.querySelectorAll('a')) : [];
let menuTrigger = null;

function closeMobileMenu() {
    if (!menuToggle || !document.body.classList.contains('menu-open')) return;
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
    menuTrigger?.focus();
}

function openMobileMenu() {
    if (!menuToggle) return;
    menuTrigger = document.activeElement;
    document.body.classList.add('menu-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menuToggle.setAttribute('aria-label', 'Fechar menu');
    mobileMenuLinks[0]?.focus();
}

menuToggle?.addEventListener('click', () => {
    if (document.body.classList.contains('menu-open')) closeMobileMenu();
    else openMobileMenu();
});

menuBackdrop?.addEventListener('click', closeMobileMenu);
mobileMenuLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMobileMenu();
});

// ---------- DADOS DO CARDÁPIO ----------
const icons = {
    petiscos: '<path d="M12 3v9M12 3c-2 0-3 1.5-3 3.5S10 12 12 12s3-2 3-5.5S14 3 12 3z"/><path d="M12 12v9"/>',
    jantinha: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
    "prato-dois": '<circle cx="9" cy="12" r="6"/><circle cx="17" cy="12" r="3.5"/>',
    "carnes-pedra": '<path d="M4 15c0-5 3.5-9 8-9s8 4 8 9-3.5 4-8 4-8 1-8-4z"/><path d="M9 9l3 3"/>',
    jacare: '<path d="M3 13c3-4 6-5 9-5s5 1 7 3l2-1-1 3 1 3-2-1c-2 2-4 3-7 3s-6-1-9-5z"/><circle cx="17" cy="10" r=".6" fill="currentColor"/>',
    vegano: '<path d="M6 20c-1-7 2-13 12-14-1 9-5 12-12 14z"/><path d="M6 20c1-4 3-7 6-9"/>',
    kids: '<circle cx="12" cy="8" r="3.4"/><path d="M5 20c1-4.5 4-7 7-7s6 2.5 7 7"/>',
    sobremesas: '<path d="M6 11h12l-1.5 8h-9L6 11z"/><path d="M9 11c0-3 1-5 3-6.5C14 6 15 8 15 11"/>',
    bebidas: '<path d="M7 4h10l-1.5 15a2 2 0 0 1-2 1.8h-3a2 2 0 0 1-2-1.8L7 4z"/><path d="M7.8 9h8.4"/>',
    adicionais: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M7.5 12h9"/>',
};

const menu = [
    {
        id: "petiscos",
        title: "Petiscos",
        items: [
            { name: "Batata", price: 25, desc: "Molho de alho" },
            { name: "Batata com Cheddar e Bacon", price: 45, desc: "Molho de cheddar e bacon" },
            { name: "Batata Pantaneira", price: 50, desc: "Creme de queijo e carne de sol" },
            { name: "Anel de Cebola", price: 30, desc: "Creme de alho" },
            { name: "Dadinho de Tapioca", price: 70, desc: "Geleia de pimenta" },
            { name: "Croquete de Costela", price: 60, desc: "Geleia de pimenta" },
            { name: "Filé Acebolado", price: 70, desc: "Batata frita" },
        ]
    },
    {
        id: "jantinha",
        title: "Jantinha (individual)",
        items: [
            { name: "Frango", price: 30, desc: "Arroz, frango grelhado, batata frita e vinagrete" },
            { name: "Pantaneiro", price: 30, desc: "Carreteiro, ovo, mandioca e vinagrete" },
            { name: "Peixe", price: 35, desc: "Arroz, peixe grelhado, batata frita e vinagrete" },
            { name: "Isca de Filé", price: 45, desc: "Arroz, isca de filé acebolado, batata frita e vinagrete" },
        ]
    },
    {
        id: "prato-dois",
        title: "Prato para dois",
        items: [
            { name: "Filé ao Molho 4 Queijo", price: 130, desc: "Arroz e batata frita" },
            { name: "Baião de Dois", price: 80, desc: "Vinagrete de abacaxi e mandioca" },
            { name: "Prato Pantaneiro", price: 80, desc: "Macarrão tropeiro, carreteiro, vinagrete e mandioca" },
            { name: "Frango ao Molho Mostarda", price: 70, desc: "Arroz e batata frita" },
            { name: "Arroz à Piamontese com Filé", price: 150, desc: "Farofa crocante" },
            { name: "Risoto de Camarão", price: 220, desc: "Farofa crocante e camarão recheado" },
            { name: "Peixe no Urucum", price: 160, desc: "Arroz e farofa de banana" },
            { name: "Nhoque de Cabotiá com Ragu de Fraldinha", price: 90, desc: "Arroz e farofa crocante" },
            { name: "Nhoque de Banana da Terra com Carne Seca", price: 95, desc: "Arroz e farofa crocante" },
            { name: "Rondelli 4 Queijos no Molho Branco", price: 100, desc: "Arroz e farofa crocante" },
            { name: "Rondelli de Tomate Seco e Rúcula", price: 95, desc: "Arroz e farofa crocante" },
            { name: "Lasanha de Costela", price: 95, desc: "Arroz e farofa crocante" },
        ]
    },
    {
        id: "carnes-pedra",
        title: "Carnes na pedra",
        items: [
            { name: "Picanha", price: 110, desc: "Arroz, mandioca, vinagrete e farofa" },
            { name: "Filé Completo", price: 130, desc: "Arroz, vinagrete de abacaxi, batata frita e farofa" },
            { name: "Porção de Filé com Queijo", price: 90, desc: "Mandioca" },
        ]
    },
    {
        id: "jacare",
        title: "Jacaré",
        items: [
            { name: "Jacaré à Romana", price: 150, desc: "Creme de alho e batata frita" },
            { name: "Jacaré ao Urucum", price: 230, desc: "Arroz e farofa de banana" },
            { name: "Linguiça de Jacaré", price: 260, desc: "Arroz, vinagrete de abacaxi, farofa e mandioca" },
        ]
    },
    {
        id: "vegano",
        title: "Vegano",
        items: [
            { name: "Porção de Falafel", price: 50, desc: "Geleia de pimenta" },
            { name: "Tropeiro Vegano", price: 80, desc: "Macarrão tropeiro, arroz, vinagrete e mandioca" },
        ]
    },
    {
        id: "kids",
        title: "Kids",
        items: [
            { name: "Filé (Kids)", price: 25, desc: "Arroz, filé e fritas" },
            { name: "Macarrão à Bolonhesa (Kids)", price: 25, desc: "Queijo ralado" },
        ]
    },
    {
        id: "sobremesas",
        title: "Sobremesas",
        items: [
            { name: "Petit Gâteau", price: 35, desc: "Sorvete e calda" },
            { name: "Brownie", price: 35, desc: "Sorvete e calda" },
        ]
    },
    {
        id: "bebidas",
        title: "Bebidas",
        subgroups: [
            {
                label: "Águas", items: [
                    { name: "Água Mineral Sferrie sem Gás 350ml", price: 5 },
                    { name: "Água Mineral Sferrie com Gás 350ml", price: 7 },
                    { name: "Água Tônica Antarctica 350ml", price: 8 },
                ]
            },
            {
                label: "Limoneto", items: [
                    { name: "H2O Limoneto sem Açúcar 350ml", price: 8 },
                ]
            },
            {
                label: "Refrigerantes", items: [
                    { name: "Coca-Cola Zero 1,5L", price: 15 },
                    { name: "Coca-Cola 1L", price: 12 },
                    { name: "Coca-Cola 310ml", price: 7 },
                    { name: "Sprite Mini 220ml", price: 5 },
                    { name: "Fanta Uva 220ml", price: 5 },
                    { name: "Fanta Laranja 220ml", price: 5 },
                    { name: "Coca-Cola sem Açúcar 350ml", price: 7 },
                ]
            },
            {
                label: "Sucos integrais", items: [
                    { name: "Suco Integral Gaseificado de Uva 275ml", price: 8 },
                    { name: "Suco Integral de Uva Garibaldi 1L", price: 25 },
                    { name: "Suco Integral de Uva Garibaldi 300ml", price: 12 },
                ]
            },
            {
                label: "Suco natural", items: [
                    { name: "Suco de Laranja 300ml", price: 10 },
                ]
            },
            {
                label: "Energéticos", items: [
                    { name: "Energético Monster 473ml", price: 15 },
                    { name: "Energético Red Bull sem Açúcar 250ml", price: 13 },
                ]
            },
            {
                label: "Cervejas", items: [
                    { name: "Corona Extra 330ml", price: 14 },
                    { name: "Heineken 330ml", price: 14 },
                    { name: "Stella Artois sem Glúten 330ml", price: 14 },
                ]
            },
        ]
    },
    {
        id: "adicionais",
        title: "Adicionais",
        items: [
            { name: "Arroz (500g)", price: 10 },
            { name: "Vinagrete (200g)", price: 10 },
            { name: "Vinagrete de Abacaxi (meio abacaxi)", price: 15 },
            { name: "Farofa (200g)", price: 7 },
            { name: "Farofa de Banana (200g)", price: 10 },
            { name: "Creme de Alho (50ml)", price: 3 },
        ]
    },
];

// ---------- RENDER MENU + TABS ----------
const tabsWrap = document.getElementById('catTabs');
const menuContent = document.getElementById('menuContent');
let itemCounter = 0;

function renderItemRow(item) {
    return `
      <div class="item-row">
        <div class="item-main">
          <div class="item-title-line">
            <span class="item-name">${item.name}</span>
          </div>
          ${item.desc ? `<div class="item-desc">${item.desc}</div>` : ``}
        </div>
      </div>
    `;
}

menu.forEach((cat, idx) => {
    // tab button
    const tabBtn = document.createElement('button');
    tabBtn.className = 'cat-tab' + (idx === 0 ? ' active' : '');
    tabBtn.textContent = cat.title;
    tabBtn.addEventListener('click', () => {
        document.getElementById('cat-' + cat.id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    tabsWrap.appendChild(tabBtn);

    // category block
    const block = document.createElement('div');
    block.className = 'category-block';
    block.id = 'cat-' + cat.id;

    const iconSvg = icons[cat.id]
        ? `<svg class="cat-icon" viewBox="0 0 24 24">${icons[cat.id]}</svg>`
        : '';
    let html = `<h3>${iconSvg}<span>${cat.title}</span></h3><div class="divider"><span class="dot"></span></div>`;

    if (cat.items) {
        cat.items.forEach(item => { html += renderItemRow(item); });
    }
    if (cat.subgroups) {
        cat.subgroups.forEach(sg => {
            html += `<div class="sub-label">${sg.label}</div>`;
            sg.items.forEach(item => { html += renderItemRow(item); });
        });
    }

    block.innerHTML = html;
    menuContent.appendChild(block);
});

// highlight active tab on scroll
const catBlocks = menu.map(c => document.getElementById('cat-' + c.id));
const tabButtons = Array.from(tabsWrap.children);
window.addEventListener('scroll', () => {
    let activeIdx = 0;
    catBlocks.forEach((el, i) => {
        if (el.getBoundingClientRect().top - 160 <= 0) activeIdx = i;
    });
    tabButtons.forEach((b, i) => b.classList.toggle('active', i === activeIdx));
}, { passive: true });

// ---------- LIGHTBOX DE PRATOS ----------
const dishDetail = document.getElementById('dishDetail');
const detailImage = document.getElementById('detailImage');
const detailCategory = document.getElementById('detailCategory');
const detailName = document.getElementById('detailName');
const detailDescription = document.getElementById('detailDescription');
const detailClose = document.getElementById('detailClose');
let previousBodyOverflow = '';

function closeDishDetail() {
    dishDetail.classList.remove('is-open');
    dishDetail.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('detail-is-open');
    document.body.style.overflow = previousBodyOverflow;
}

document.querySelectorAll('.dish-card').forEach(card => {
    card.addEventListener('click', () => {
        detailImage.src = card.dataset.image;
        detailImage.alt = card.querySelector('img').alt;
        detailCategory.textContent = card.dataset.category;
        detailName.textContent = card.dataset.name;
        detailDescription.textContent = card.dataset.description;

        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.body.classList.add('detail-is-open');
        dishDetail.classList.add('is-open');
        dishDetail.setAttribute('aria-hidden', 'false');
        detailClose.focus();
    });
});

detailClose.addEventListener('click', closeDishDetail);

dishDetail.addEventListener('click', event => {
    if (event.target === dishDetail) closeDishDetail();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dishDetail.classList.contains('is-open')) closeDishDetail();
});

// ---------- CARROSSEL DE PRATOS INFINITO ----------
const carousel = document.getElementById('dishCarousel');
const carouselTrack = carousel.querySelector('.carousel-track');
const carouselSlides = Array.from(carousel.querySelectorAll('.carousel-slide'));
const carouselDots = document.getElementById('carouselDots');
const carouselCategory = document.getElementById('carouselCategory');
const carouselName = document.getElementById('carouselName');
const carouselDescription = document.getElementById('carouselDescription');

carousel.classList.add('swiper');
carouselTrack.classList.add('swiper-wrapper');
carouselSlides.forEach(slide => slide.classList.add('swiper-slide'));

const carouselDotsButtons = [];

carouselSlides.forEach((slide, index) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.type = 'button';
    dot.setAttribute('aria-label', `Mostrar ${slide.dataset.name}`);
    dot.addEventListener('click', () => dishSwiper.slideToLoop(index));
    carouselDots.appendChild(dot);
    carouselDotsButtons.push(dot);
});

function updateCarouselInfo(index) {
    const slide = carouselSlides[index];
    if (!slide) return;

    carouselCategory.textContent = slide.dataset.category;
    carouselName.textContent = slide.dataset.name;
    carouselDescription.textContent = slide.dataset.description;
    carouselCategory.parentElement.classList.remove('is-changing');
    requestAnimationFrame(() => carouselCategory.parentElement.classList.add('is-changing'));

    carouselDotsButtons.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
}

const dishSwiper = new Swiper('#dishCarousel', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1.15,
    spaceBetween: 18,
    speed: 550,
    grabCursor: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 3200,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    on: {
        init: function () {
            updateCarouselInfo(this.realIndex);
        },
        slideChange: function () {
            updateCarouselInfo(this.realIndex);
        },
    },
});

document.getElementById('carouselPrev').addEventListener('click', () => dishSwiper.slidePrev());
document.getElementById('carouselNext').addEventListener('click', () => dishSwiper.slideNext());

carousel.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') dishSwiper.slidePrev();
    if (event.key === 'ArrowRight') dishSwiper.slideNext();
});

updateCarouselInfo(0);

// ---------- SCROLL ANIMATIONS ----------
const siteNav = document.querySelector('.site-nav');
const revealSelectors = [
    '.about h2',
    '.about .divider',
    '.gallery .menu-head h2',
    '.gallery .menu-head .divider',
    '.dish-experience .menu-head h2',
    '.dish-experience .menu-head .divider',
    '.dish-carousel-section .carousel-topbar h2',
    '.dish-carousel-section .carousel-mark',
    '.menu-section .menu-head h2',
    '.menu-section .menu-head .divider',
    '.contact h2',
    '.contact .divider'
];

revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => element.classList.add('reveal-up'));
});

document.querySelectorAll('.gallery-grid .ph-card, .dish-card, .carousel-slide').forEach((element, index) => {
    element.classList.add('reveal-cascade', 'reveal');
    element.style.setProperty('--reveal-delay', `${(index % 6) * 90}ms`);
});

document.querySelectorAll('.gallery-grid .ph-card, .dish-card .dish-image-wrap, .carousel-image').forEach(element => {
    element.classList.add('reveal-zoom');
});

document.querySelectorAll('.contact-grid .contact-item').forEach((element, index) => {
    element.classList.add(index % 2 === 0 ? 'reveal-left' : 'reveal-right');
});
document.querySelector('.map-wrap')?.classList.add('reveal-right');

document.querySelectorAll('.reveal-up').forEach(element => element.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
    });
}, { rootMargin: '0px 0px -60px 0px', threshold: 0.12 });

document.querySelectorAll('.reveal-zoom, .reveal-left, .reveal-right').forEach(element => {
    revealObserver.observe(element);
});

// ---------- GSAP SCROLL EXPERIENCES ----------
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.reveal').forEach(element => {
        gsap.fromTo(element,
            { autoAlpha: 0, y: 30 },
            {
                autoAlpha: 1,
                y: 0,
                duration: .8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    once: true
                }
            }
        );
    });

    const splitImage = document.querySelector('.split-image');
    const splitLabel = document.querySelector('.split-image-label');
    const splitSection = document.querySelector('.split-scroll');
    const splitMedia = document.querySelector('.split-media');
    const splitSteps = gsap.utils.toArray('.split-step');

    function updateSplitImage(step) {
        if (!splitImage || !step) return;

        const nextImage = step.dataset.image;
        const nextAlt = step.dataset.alt || '';

        if (!nextImage) return;

        // evita troca repetida quando o mesmo passo continua ativo
        if (splitImage.dataset.currentImage === nextImage) return;

        gsap.killTweensOf(splitImage);
        if (splitLabel) gsap.killTweensOf(splitLabel);

        splitImage.dataset.currentImage = nextImage;

        gsap.to(splitImage, {
            autoAlpha: 0,
            duration: .2,
            ease: 'power1.out',
            onComplete: () => {
                splitImage.src = nextImage;
                splitImage.alt = nextAlt;
                gsap.to(splitImage, { autoAlpha: 1, duration: .55, ease: 'power2.out' });
            }
        });

        if (splitLabel) {
            gsap.to(splitLabel, {
                autoAlpha: 0,
                duration: .15,
                ease: 'power1.out',
                onComplete: () => {
                    splitLabel.textContent = step.querySelector('h3')?.textContent || '';
                    gsap.to(splitLabel, { autoAlpha: 1, duration: .3, ease: 'power2.out' });
                }
            });
        }
    }

    if (splitSteps[0]) updateSplitImage(splitSteps[0]);

    if (splitSection && splitMedia && window.matchMedia('(min-width: 641px)').matches) {
        ScrollTrigger.create({
            trigger: splitSection,
            start: 'top top',
            end: 'bottom bottom',
            pin: splitMedia,
            pinSpacing: false,
            anticipatePin: 1,
            invalidateOnRefresh: true
        });
    }

    function syncActiveSplitStep() {
        const activationPoint = window.innerHeight * .55;
        let activeStep = splitSteps[0];

        splitSteps.forEach(step => {
            if (step.getBoundingClientRect().top <= activationPoint) activeStep = step;
        });

        updateSplitImage(activeStep);
    }

    let splitSyncScheduled = false;
    window.addEventListener('scroll', () => {
        if (splitSyncScheduled) return;
        splitSyncScheduled = true;
        requestAnimationFrame(() => {
            splitSyncScheduled = false;
            syncActiveSplitStep();
        });
    }, { passive: true });

    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
        syncActiveSplitStep();
    });

    window.addEventListener('pageshow', () => {
        requestAnimationFrame(() => {
            ScrollTrigger.refresh();
            syncActiveSplitStep();
        });
    });

    window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
        syncActiveSplitStep();
    });

    const horizontalSection = document.querySelector('.horizontal-scroll');
    const horizontalTrack = document.querySelector('.horizontal-track');

    if (horizontalSection && horizontalTrack && window.matchMedia('(min-width: 641px)').matches) {
        const horizontalDistance = () => Math.max(0, horizontalTrack.scrollWidth - window.innerWidth + 40);

        gsap.to(horizontalTrack, {
            x: () => -horizontalDistance(),
            ease: 'none',
            scrollTrigger: {
                trigger: horizontalSection,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1,
                pin: '.horizontal-pin',
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });
    }
}

function updateNavState() {
    siteNav.classList.toggle('is-scrolled', window.scrollY > 50);
}

window.addEventListener('scroll', updateNavState, { passive: true });
updateNavState();

