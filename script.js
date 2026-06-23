document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        pl: {
            "nav-about": "O mnie",
            "nav-skills": "Umiejętności",
            "nav-projects": "Projekty",
            "nav-contact": "Kontakt",
            "hero-badge": "Student & Specjalista IT",
            "hero-title": "Roman <span class='accent-text'>Chumak</span>",
            "hero-description": "Buduję nowoczesne aplikacje i rozwiązuję problemy za pomocą kodu. Łączę wiedzę akademicką z praktycznym podejściem do technologii, aby dostarczać rozwiązania, które działają.",
            "hero-btn-projects": "Zobacz moje projekty",
            "hero-btn-contact": "Skontaktuj się",
            "about-title": "O mnie",
            "about-h3": "Doświadczenie i Cel",
            "about-p1": "Posiadam wiedzę z zakresu nowoczesnych technologii frontend, backend oraz baz danych.",
            "about-p2": "Obsługuję również system operacyjny Windows oraz aplikacje biurowe, w tym zaawansowane funkcje MS Excel.",
            "about-p3": "Jestem osobą niezależną, odpowiedzialną i szybko się uczę. Chcę aktywnie rozwijać się w branży IT oraz wnosić wartość do nowoczesnych i innowacyjnych projektów.",
            "edu-title": "Edukacja",
            "edu-current": "Obecnie",
            "edu-school": "Kijowskie Liceum Inżynierskie",
            "skills-title": "Umiejętności",
            "skills-tech": "Technologie",
            "skills-tools": "Narzędzia & Cechy",
            "skills-lang": "Języki",
            "soft-1": "Kreatywność",
            "soft-2": "Praca zespołowa",
            "soft-3": "Odpowiedzialność",
            "lang-pl": "Polski",
            "lang-ua": "Ukraiński",
            "lang-ru": "Rosyjski",
            "lang-en": "Angielski",
            "projects-title": "Moje Projekty",
            "proj-1-desc": "Pełnoprawna aplikacja e-commerce z systemem logowania, panelem admina, koszykiem i czatem live.",
            "proj-2-desc": "Prosta aplikacja do zarządzania zadaniami. Dane w localStorage, responsywny interfejs, bez przeładowania strony.",
            "proj-3-desc": "Interaktywna strona kina CineFlex — repertuar, mapa siedzeń, menu bufetu i dark mode UI.",
            "proj-4-desc": "Pogoda w czasie rzeczywistym z OpenWeatherMap API — AQI, prognoza 5-dniowa, przełącznik °C/°F.",
            "feat-shop-1": "Logowanie",
            "feat-shop-2": "Panel Admina",
            "feat-shop-3": "Koszyk",
            "feat-shop-4": "Czat live",
            "feat-cinema-1": "Mapa siedzeń",
            "feat-cinema-2": "Repertuar",
            "feat-cinema-3": "Menu bufetu",
            "feat-weather-1": "Prognoza 5 dni",
            "feat-task-1": "Dodawanie zadań",
            "feat-task-2": "Responsywny UI",
            "proj-5-desc": "Wielostronicowy fan-site gry Star Wars Jedi: Fallen Order — 19 podstron, wspólny system designu, responsywne menu i galeria z lightboxem.",
            "feat-jedi-1": "19 podstron",
            "feat-jedi-2": "Galeria + Lightbox",
            "feat-jedi-3": "Animacje",
            "proj-finance-desc": "Inteligentny tracker finansów osobistych z asystentem AI — budżety, cele oszczędnościowe, wykresy i analiza wydatków.",
            "feat-finance-1": "AI Doradca",
            "feat-finance-2": "Budżety",
            "feat-finance-3": "Cele",
            "footer-title": "Skontaktuj się ze mną",
            "footer-subtitle": "Jestem otwarty na nowe możliwości współpracy.",
            "location": "Warszawa, Polska",
            "rights": "Wszelkie prawa zastrzeżone."
        },
        en: {
            "nav-about": "About",
            "nav-skills": "Skills",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-badge": "Student & IT Specialist",
            "hero-title": "Roman <span class='accent-text'>Chumak</span>",
            "hero-description": "I build modern applications and solve problems with code. I combine academic knowledge with a practical approach to technology to deliver solutions that work.",
            "hero-btn-projects": "View My Projects",
            "hero-btn-contact": "Get in Touch",
            "about-title": "About Me",
            "about-h3": "Experience & Goal",
            "about-p1": "I have knowledge in modern frontend and backend technologies, as well as databases.",
            "about-p2": "I also work with Windows OS and office applications, including advanced MS Excel functions.",
            "about-p3": "I am an independent, responsible person and a fast learner. I want to actively grow in the IT industry and bring value to modern and innovative projects.",
            "edu-title": "Education",
            "edu-current": "Current",
            "edu-school": "Kyiv Engineering High School",
            "skills-title": "Skills",
            "skills-tech": "Technologies",
            "skills-tools": "Tools & Traits",
            "skills-lang": "Languages",
            "soft-1": "Creativity",
            "soft-2": "Teamwork",
            "soft-3": "Responsibility",
            "lang-pl": "Polish",
            "lang-ua": "Ukrainian",
            "lang-ru": "Russian",
            "lang-en": "English",
            "projects-title": "My Projects",
            "proj-1-desc": "A full-featured e-commerce application with login system, admin panel, shopping cart and live chat.",
            "proj-2-desc": "A simple task management app. Data stored in localStorage, responsive interface, no page reloads.",
            "proj-3-desc": "Interactive CineFlex cinema website — schedule, seat map, buffet menu and dark mode UI.",
            "proj-4-desc": "Real-time weather app using OpenWeatherMap API — AQI, 5-day forecast, °C/°F toggle.",
            "feat-shop-1": "Login System",
            "feat-shop-2": "Admin Panel",
            "feat-shop-3": "Shopping Cart",
            "feat-shop-4": "Live Chat",
            "feat-cinema-1": "Seat Map",
            "feat-cinema-2": "Schedule",
            "feat-cinema-3": "Buffet Menu",
            "feat-weather-1": "5-day Forecast",
            "feat-task-1": "Add Tasks",
            "feat-task-2": "Responsive UI",
            "proj-5-desc": "Multi-page fan site for Star Wars Jedi: Fallen Order — 19 subpages, a shared design system, responsive menu and a gallery with lightbox.",
            "feat-jedi-1": "19 subpages",
            "feat-jedi-2": "Gallery + Lightbox",
            "feat-jedi-3": "Animations",
            "proj-finance-desc": "Smart personal finance tracker with AI assistant — budgets, savings goals, charts and expense analysis.",
            "feat-finance-1": "AI Advisor",
            "feat-finance-2": "Budgets",
            "feat-finance-3": "Goals",
            "footer-title": "Contact Me",
            "footer-subtitle": "I am open to new collaboration opportunities.",
            "location": "Warsaw, Poland",
            "rights": "All rights reserved."
        },
        ua: {
            "nav-about": "Про мене",
            "nav-skills": "Навички",
            "nav-projects": "Проєкти",
            "nav-contact": "Контакти",
            "hero-badge": "Студент та IT Фахівець",
            "hero-title": "Roman <span class='accent-text'>Chumak</span>",
            "hero-description": "Створюю сучасні додатки та вирішую задачі за допомогою коду. Поєдную академічні знання з практичним підходом до технологій, щоб доставляти рішення, які працюють.",
            "hero-btn-projects": "Мої проєкти",
            "hero-btn-contact": "Зв'язатися",
            "about-title": "Про мене",
            "about-h3": "Досвід та Мета",
            "about-p1": "Маю знання у сучасних технологіях frontend, backend та баз даних.",
            "about-p2": "Також працюю з ОС Windows та офісними програмами, включаючи розширені функції MS Excel.",
            "about-p3": "Я незалежний, відповідальний і швидко навчаюсь. Хочу активно розвиватися у сфері IT та приносити цінність сучасним і інноваційним проєктам.",
            "edu-title": "Освіта",
            "edu-current": "Зараз",
            "edu-school": "Київська інженерна гімназія",
            "skills-title": "Навички",
            "skills-tech": "Технології",
            "skills-tools": "Інструменти та Риси",
            "skills-lang": "Мови",
            "soft-1": "Креативність",
            "soft-2": "Командна робота",
            "soft-3": "Відповідальність",
            "lang-pl": "Польська",
            "lang-ua": "Українська",
            "lang-ru": "Російська",
            "lang-en": "Англійська",
            "projects-title": "Мої Проєкти",
            "proj-1-desc": "Повноцінний e-commerce додаток із системою входу, панеллю адміна, кошиком та живим чатом.",
            "proj-2-desc": "Простий менеджер завдань. Дані зберігаються в localStorage, адаптивний інтерфейс, без перезавантаження сторінки.",
            "proj-3-desc": "Інтерактивний сайт кінотеатру CineFlex — репертуар, карта місць, меню буфету та темний режим.",
            "proj-4-desc": "Погода в реальному часі через OpenWeatherMap API — AQI, прогноз на 5 днів, перемикач °C/°F.",
            "feat-shop-1": "Авторизація",
            "feat-shop-2": "Панель адміна",
            "feat-shop-3": "Кошик",
            "feat-shop-4": "Живий чат",
            "feat-cinema-1": "Карта місць",
            "feat-cinema-2": "Репертуар",
            "feat-cinema-3": "Меню буфету",
            "feat-weather-1": "Прогноз на 5 днів",
            "feat-task-1": "Додавання завдань",
            "feat-task-2": "Адаптивний UI",
            "proj-5-desc": "Багатосторінковий фан-сайт гри Star Wars Jedi: Fallen Order — 19 підсторінок, спільна система дизайну, адаптивне меню та галерея з лайтбоксом.",
            "feat-jedi-1": "19 підсторінок",
            "feat-jedi-2": "Галерея + Lightbox",
            "feat-jedi-3": "Анімації",
            "proj-finance-desc": "Розумний трекер особистих фінансів з AI-асистентом — бюджети, цілі накопичення, графіки та аналіз витрат.",
            "feat-finance-1": "AI-радник",
            "feat-finance-2": "Бюджети",
            "feat-finance-3": "Цілі",
            "footer-title": "Зв'яжіться зі мною",
            "footer-subtitle": "Відкритий до нових можливостей співпраці.",
            "location": "Варшава, Польща",
            "rights": "Усі права захищені."
        }
    };

    const langButtons = document.querySelectorAll(".lang-btn");

    function setLanguage(lang) {
       
        if (!translations[lang]) lang = 'pl';

        document.documentElement.lang = lang;
        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        langButtons.forEach(btn => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });

        localStorage.setItem("portfolio-language", lang);
    }

    langButtons.forEach(button => {
        button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });

    const savedLanguage = localStorage.getItem("portfolio-language") || "pl";
    setLanguage(savedLanguage);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });
});