
// src/assets/site.js
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({top: offsetTop, behavior: 'smooth'});
        }
    });
});

// Active navigation highlighting
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
});

// dodaje  <link rel="canonical" href="https://szkolaterapiizabawa.pl/....html"> do head-a na każdej ze stron

(function () {
    const head = document.querySelector("head");
    if (!head) return;

    // Złap pełny URL (bez query string i bez hash)
    const canonicalUrl = window.location.origin + window.location.pathname;

    // Sprawdź, czy już jest jakiś canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        head.appendChild(link);
    }
    link.setAttribute("href", canonicalUrl);
})();


(function () {
    // tylko na desktopie / urządzeniach z hoverem
    const mql = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 992px)');
    if (!mql.matches) return;

    document.querySelectorAll('.navbar .dropdown').forEach(function (ddWrap) {
        const toggle = ddWrap.querySelector('[data-bs-toggle="dropdown"]');
        if (!toggle) return;

        const dd = bootstrap.Dropdown.getOrCreateInstance(toggle, {
            autoClose: 'outside' // nie zamykaj przy kliknięciu w środek menu
        });

        let hideTimer;

        ddWrap.addEventListener('mouseenter', function () {
            clearTimeout(hideTimer);
            dd.show();
        });

        ddWrap.addEventListener('mouseleave', function () {
            hideTimer = setTimeout(function () {
                dd.hide();
            }, 120); // małe opóźnienie, żeby nie "mrugało"
        });

        // dostępność: otwieraj przy focusie z klawiatury
        toggle.addEventListener('focus', function () {
            dd.show();
        });
        // i zamknij, gdy focus wyjdzie poza dropdown
        ddWrap.addEventListener('focusout', function (e) {
            if (!ddWrap.contains(e.relatedTarget)) dd.hide();
        });
    });
})();

// 1. Klik na toggle: pierwszy klik otwiera, drugi przechodzi do href
document.querySelectorAll('.navbar .dropdown > .nav-link.dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const isOpen = this.closest('.dropdown')?.classList.contains('show');
        // Bootstrap sam „połyka” nawigację przy kliknięciu w toggle,
        // więc przejmujemy sterowanie:
        e.preventDefault();

        if (isOpen) {
            // drugi klik – przejście na stronę
            window.location.href = href;
        }
        // pierwszy klik – po prostu zostaw (Bootstrap otworzy menu)
    });
});

// 2. Ułatwienie: Ctrl/Cmd + klik zawsze nawigują (bez otwierania menu)
document.querySelectorAll('.navbar .dropdown > .nav-link.dropdown-toggle').forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
        if (e.metaKey || e.ctrlKey || e.button === 1) {
            // pozwól przeglądarce otworzyć w nowej karcie
            return;
        }
    });
});