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
            "about-p3": "Jestem osobą niezależną, odpowiedzialną i szybko się uczę. Chcę aktywnie rozwijać się w branży IT oraz wnosić wartość do nowoczesnych projektów.",
            "edu-title": "Edukacja",
            "edu-current": "Obecnie",
            "edu-school": "Kijów Engineering High School",
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
            "proj-1-desc": "Nowoczesna aplikacja webowa e-commerce.",
            "proj-2-desc": "Aplikacja do zarządzania zadaniami.",
            "proj-3-desc": "Strona internetowa dla kina.",
            "proj-4-desc": "Aplikacja pogodowa z API.",
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
            "hero-description": "I build modern applications and solve problems with code. I combine academic knowledge with a practical approach to technology.",
            "hero-btn-projects": "View Projects",
            "hero-btn-contact": "Contact Me",
            "about-title": "About Me",
            "about-h3": "Experience & Goal",
            "about-p1": "I have knowledge in modern frontend and backend technologies, as well as databases.",
            "about-p2": "I also use Windows and office applications, including advanced MS Excel functions.",
            "about-p3": "I am an independent, responsible person and I learn quickly. I want to actively develop in the IT industry.",
            "edu-title": "Education",
            "edu-current": "Current",
            "edu-school": "Kyiv Engineering High School",
            "skills-title": "Skills",
            "skills-tech": "Technologies",
            "skills-tools": "Tools & Features",
            "skills-lang": "Languages",
            "soft-1": "Creativity",
            "soft-2": "Teamwork",
            "soft-3": "Responsibility",
            "lang-pl": "Polish",
            "lang-ua": "Ukrainian",
            "lang-ru": "Russian",
            "lang-en": "English",
            "projects-title": "My Projects",
            "proj-1-desc": "Modern e-commerce web application.",
            "proj-2-desc": "Task management application.",
            "proj-3-desc": "Cinema website project.",
            "proj-4-desc": "Weather app using API.",
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
            "hero-badge": "Студент та IT Specialist",
            "hero-title": "Roman <span class='accent-text'>Chumak</span>",
            "hero-description": "Створюю сучасні додатки та вирішую проблеми за допомогою коду. Поєдную академічні знання з практичним підходом до технологій.",
            "hero-btn-projects": "Мої проєкти",
            "hero-btn-contact": "Зв'язатися",
            "about-title": "Про мене",
            "about-h3": "Досвід та Ціль",
            "about-p1": "Маю знання у сучасних технологіях frontend, backend та баз даних.",
            "about-p2": "Також працюю з ОС Windows та офісними програмами, включаючи MS Excel.",
            "about-p3": "Я незалежний, відповідальний, швидко навчаюсь. Прагну розвиватися в IT-сфері.",
            "edu-title": "Освіта",
            "edu-current": "Зараз",
            "edu-school": "Київська інженерна гімназія",
            "skills-title": "Навички",
            "skills-tech": "Технології",
            "skills-tools": "Інструменти",
            "skills-lang": "Мови",
            "soft-1": "Креативність",
            "soft-2": "Командна робота",
            "soft-3": "Відповідальність",
            "lang-pl": "Польська",
            "lang-ua": "Українська",
            "lang-ru": "Російська",
            "lang-en": "Англійська",
            "projects-title": "Мої Проєкти",
            "proj-1-desc": "Сучасний інтернет-магазин.",
            "proj-2-desc": "Менеджер завдань.",
            "proj-3-desc": "Сайт для кінотеатру.",
            "proj-4-desc": "Погодний додаток з API.",
            "footer-title": "Зв'яжіться зі мною",
            "footer-subtitle": "Відкритий до нових можливостей співпраці.",
            "location": "Варшава, Польща",
            "rights": "Усі права захищені."
        },
        ru: {
             "nav-about": "Обо мне",
             "nav-skills": "Навыки",
             "nav-projects": "Проекты",
             "nav-contact": "Контакты",
             "hero-badge": "Студент и IT Specialist",
             "hero-title": "Roman <span class='accent-text'>Chumak</span>",
             "hero-description": "Создаю современные приложения и решаю задачи с помощью кода. Сочетаю знания и практику.",
             "hero-btn-projects": "Мои проекты",
             "hero-btn-contact": "Связаться",
             "about-title": "Обо мне",
             "about-h3": "Опыт и Цель",
             "about-p1": "Владею современными технологиями frontend, backend и базами данных.",
             "about-p2": "Работаю с Windows и офисными программами, включая MS Excel.",
             "about-p3": "Я ответственный, быстро учусь и хочу развиваться в IT.",
             "edu-title": "Образование",
             "edu-current": "Сейчас",
             "edu-school": "Киевская инженерная гимназия",
             "skills-title": "Навыки",
             "skills-tech": "Технологии",
             "skills-tools": "Инструменты",
             "skills-lang": "Языки",
             "soft-1": "Креативность",
             "soft-2": "Командная работа",
             "soft-3": "Ответственность",
             "lang-pl": "Польский",
             "lang-ua": "Украинский",
             "lang-ru": "Русский",
             "lang-en": "Английский",
             "projects-title": "Мои Проекты",
             "proj-1-desc": "Интернет-магазин электроники.",
             "proj-2-desc": "Менеджер задач.",
             "proj-3-desc": "Сайт кинотеатра.",
             "proj-4-desc": "Погодное приложение с API.",
             "footer-title": "Связаться со мной",
             "footer-subtitle": "Открыт для предложений и сотрудничества.",
             "location": "Варшава, Польша",
             "rights": "Все права защищены."
        }
    };

    const langButtons = document.querySelectorAll(".lang-btn");

    function setLanguage(lang) {
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