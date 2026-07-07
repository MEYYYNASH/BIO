// 🌟 Premium Website Bio Interactive Logic

document.addEventListener('DOMContentLoaded', () => {

    // 1. ✨ Mouse Follower Spotlight Effect (for larger displays)
    const spotlight = document.getElementById('spotlight');
    
    document.addEventListener('mousemove', (e) => {
        if (spotlight) {
            spotlight.style.left = `${e.clientX}px`;
            spotlight.style.top = `${e.clientY}px`;
        }
    });

    // 2. 📑 Tab Navigation Logic
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Deactivate all buttons & contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate current button & content
            button.classList.add('active');
            const targetEl = document.getElementById(targetTab);
            if (targetEl) {
                targetEl.classList.add('active');
            }
        });
    });

    // 3. 🗺️ Multilingual (English/Khmer) Translation Dictionary & Logic
    const translations = {
        en: {
            get_in_touch: "Get In Touch",
            status: "Online & Crafting",
            tagline: "MIS Student & Digital Developer",
            summary: "Creating elegant web applications, AI integrations, and responsive designs with a passion for clean glassmorphism layouts and cyberpunk aesthetics.",
            tab_bio: "Bio & Story",
            tab_skills: "Tech Stack",
            tab_works: "Projects",
            journey_title: "My Journey",
            journey_desc: "Currently pursuing my degree in Management Information Systems (MIS), I stand at the intersection of business intelligence and software development. I specialize in crafting user interfaces that are not only visual treats but highly intuitive to navigate.",
            time_1_date: "Present",
            time_1_title: "MIS Student & Independent Developer",
            time_1_desc: "Building responsive web pages, interactive tools, and Telegram applications.",
            time_2_date: "2025",
            time_2_title: "AI Tool Integration",
            time_2_desc: "Experimented with custom API connections, building bots, and automated workflows.",
            time_3_date: "2024",
            time_3_title: "Web Design Foundation",
            time_3_desc: "Dived deep into HTML5, modern CSS3 layout paradigms, and responsive design systems.",
            skills_title: "Key Competencies",
            skill_1_title: "Frontend Core",
            skill_1_desc: "HTML5 / CSS3 / ES6 Javascript",
            skill_2_title: "UI/UX & Layouts",
            skill_2_desc: "Responsive Designs & Glassmorphism",
            skill_3_title: "Backend Systems",
            skill_3_desc: "PHP / Server Operations & Config",
            skill_4_title: "Telegram Architect",
            skill_4_desc: "Bot APIs & Mini App Integration",
            works_title: "Selected Creations",
            work_1_tag: "Web Portfolio",
            work_1_title: "MEYYY Portfolio",
            work_1_desc: "A personal portfolio website showcasing projects, skills, and digital creations by Penhpich Bormey.",
            work_2_tag: "Telegram Bot",
            work_2_title: "AI Assistant Bot",
            work_2_desc: "An intelligent AI-powered Telegram assistant bot for smart conversations and automated replies.",
            work_3_tag: "Service Hub",
            work_3_title: "Office & Windows Hub",
            work_3_desc: "Premium Microsoft Office & Windows service hub. Professional software setup, activation, drivers, and utilities.",
            explore_project: "Explore Project",
            contact_title: "Initiate Contact",
            label_name: "Identifier (Name)",
            label_email: "Digital Address (Email)",
            send_message: "Send Message",
            direct_messenger: "Chat on Messenger",
            toast_sent: "Redirecting you to Messenger!",
            toast_fail: "Could not open Messenger. Try the button below.",
            toast_err: "Something went wrong. Please try again.",
            toast_lang: "Language switched to: English",
            cv_toast: "CV/Resume is available upon request. Contact Penhpich Bormey."
        },
        kh: {
            get_in_touch: "ទាក់ទងមកខ្ញុំ",
            status: "កំពុងអនឡាញ & អភិវឌ្ឍន៍",
            tagline: "និស្សិត MIS & អ្នកអភិវឌ្ឍន៍ឌីជីថល",
            summary: "បង្កើតកម្មវិធីគេហទំព័រទំនើប ការតភ្ជាប់ប្រព័ន្ធ AI និងរចនាបថទម្រង់ទំនើប ដោយផ្តោតលើភាពច្នៃប្រឌិតខ្ពស់។",
            tab_bio: "ជីវប្រវត្តិ",
            tab_skills: "បច្ចេកទេស",
            tab_works: "គម្រោង",
            journey_title: "ដំណើរជីវិតរបស់ខ្ញុំ",
            journey_desc: "បច្ចុប្បន្ន កំពុងសិក្សាជំនាញប្រព័ន្ធព័ត៌មានគ្រប់គ្រង (MIS)។ ខ្ញុំចូលចិត្តការរចនាទម្រង់អ្នកប្រើប្រាស់ (UI/UX) ដែលមានភាពទាក់ទាញ និងងាយស្រួលប្រើប្រាស់។",
            time_1_date: "បច្ចុប្បន្ន",
            time_1_title: "និស្សិត MIS & អ្នកបង្កើតកម្មវិធីឯករាជ្យ",
            time_1_desc: "អភិវឌ្ឍន៍គេហទំព័រ បង្កើតកម្មវិធី និងប៊ូតតេឡេក្រាមសម្រាប់សម្រួលការងារ។",
            time_2_date: "២០២៥",
            time_2_title: "ការរួមបញ្ចូលប្រព័ន្ធ AI",
            time_2_desc: "ពិសោធន៍ការតភ្ជាប់ API បង្កើតប៊ូតឆ្លាតវៃ និងស្វ័យប្រវត្តកម្មការងារ។",
            time_3_date: "២០២៤",
            time_3_title: "មូលដ្ឋានគ្រឹះរចនាគេហទំព័រ",
            time_3_desc: "សិក្សាស៊ីជម្រៅលើ HTML5, CSS3 និងការរចនាទម្រង់ឆ្លើយតបគ្រប់ឧបករណ៍។",
            skills_title: "ជំនាញស្នូល",
            skill_1_title: "Frontend ស្នូល",
            skill_1_desc: "HTML5 / CSS3 / ES6 Javascript",
            skill_2_title: "UI/UX & ប្លង់រចនា",
            skill_2_desc: "ការរចនាទម្រង់ឆ្លើយតប និងស្ទីលកញ្ចក់ថ្លា",
            skill_3_title: "ប្រព័ន្ធ Backend",
            skill_3_desc: "PHP / ការគ្រប់គ្រងម៉ាស៊ីនមេ & Config",
            skill_4_title: "ស្ថាបត្យករតេឡេក្រាម",
            skill_4_desc: "Bot APIs & ការរួមបញ្ចូល Mini App",
            works_title: "គម្រោងជ្រើសរើស",
            work_1_tag: "វែបផតហ្វូលីយ៉ូ",
            work_1_title: "MEYYY Portfolio",
            work_1_desc: "គេហទំព័រផតហ្វូលីយ៉ូផ្ទាល់ខ្លួន បង្ហាញគម្រោង ជំនាញ និងស្នាដៃឌីជីថលរបស់ Penhpich Bormey។",
            work_2_tag: "ប៊ូតតេឡេក្រាម",
            work_2_title: "AI Assistant Bot",
            work_2_desc: "ប៊ូតជំនួយការ Telegram ឆ្លាតវៃ បំពាក់ដោយបច្ចេកវិទ្យា AI សម្រាប់ការសន្ទនាឆ្លាតវៃ និងការឆ្លើយតបដោយស្វ័យប្រវត្ត។",
            work_3_tag: "មជ្ឈមណ្ឌលសេវាកម្ម",
            work_3_title: "Office & Windows Hub",
            work_3_desc: "មជ្ឈមណ្ឌលសេវាកម្ម Windows & Microsoft Office។ ការដំឡើង ការធ្វើឱ្យសកម្មកម្មវិធី កម្មវិធីបញ្ជាឧបករណ៍ និងកម្មវិធីជំនួយផ្សេងៗ។",
            explore_project: "ស្វែងយល់បន្ថែម",
            contact_title: "ផ្ញើសារមកខ្ញុំ",
            label_name: "ឈ្មោះរបស់អ្នក",
            label_email: "អាសយដ្ឋានអ៊ីមែល",
            send_message: "ផ្ញើសារចេញ",
            direct_messenger: "ជជែកតាម Messenger",
            toast_sent: "កំពុងបញ្ជូនទៅ Messenger!",
            toast_fail: "មិនអាចបើក Messenger។ សូមចុចប៊ូតខាងក្រោម។",
            toast_err: "មានបញ្ហា។ សូមព្យាយាមម្តងទៀត។",
            toast_lang: "ភាសាត្រូវបានប្តូរទៅ៖ ភាសាខ្មែរ",
            cv_toast: "ប្រវត្តិរូបសង្ខេប (CV/Resume) អាចស្នើសុំបានដោយផ្ទាល់។ សូមទាក់ទង Penhpich Bormey។"
        }
    };

    let currentLang = localStorage.getItem('selected-lang') || 'en';
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'success') {
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation';
        toast.innerHTML = `
            <i class="fa-solid ${iconClass} toast-icon"></i>
            <span class="toast-message">${message}</span>
        `;
        
        toastContainer.appendChild(toast);
        
        // Remove toast after 3 seconds duration
        setTimeout(() => {
            toast.classList.add('fade-out');
            setTimeout(() => {
                toast.remove();
            }, 400); // Wait for transition animation to complete
        }, 3000);
    }

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('selected-lang', lang);
        
        // Update language attribute on HTML
        document.documentElement.lang = lang;
        
        // Update all translated elements
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update placeholder/labels specifically if needed
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        
        // Update switcher button label
        const langSwitcher = document.getElementById('lang-switcher');
        if (langSwitcher) {
            langSwitcher.textContent = lang === 'en' ? 'KH' : 'EN';
            langSwitcher.setAttribute('data-lang', lang);
        }
    }

    // Initialize language
    applyLanguage(currentLang);

    // Lang Switcher Event
    const langSwitcher = document.getElementById('lang-switcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', () => {
            const targetLang = currentLang === 'en' ? 'kh' : 'en';
            applyLanguage(targetLang);
            showToast(translations[targetLang].toast_lang, 'success');
        });
    }

    // 4. ✉️ Contact Form → Open Messenger
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const submitBtn = contactForm.querySelector('.submit-btn');
            const submitText = submitBtn.querySelector('span');
            const btnIcon = submitBtn.querySelector('.btn-icon');
            const btnSpinner = submitBtn.querySelector('.btn-spinner');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();

            if (!name || !email) return;

            // Show sending state
            submitBtn.disabled = true;
            const originalText = submitText.textContent;
            submitText.textContent = currentLang === 'en' ? 'Opening Messenger...' : 'កំពុងបើក Messenger...';
            if (btnIcon) btnIcon.classList.add('hidden');
            if (btnSpinner) btnSpinner.classList.remove('hidden');

            // Open Messenger via anchor click (avoids popup blocker)
            const link = document.createElement('a');
            link.href = 'https://m.me/JaxFrez';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showToast(translations[currentLang].toast_sent, 'success');
            contactForm.reset();
            submitBtn.disabled = false;
            submitText.textContent = originalText;
            if (btnIcon) btnIcon.classList.remove('hidden');
            if (btnSpinner) btnSpinner.classList.add('hidden');
        });
    }

    // 5. 📄 PDF Resume Action (Show owner info/message instead of loading file)
    const resumeLink = document.getElementById('resume-link');
    if (resumeLink) {
        resumeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showToast(translations[currentLang].cv_toast, 'success');
        });
    }

    // 6. 🎨 Random color shifting loop for "DEV" text
    const devText = document.getElementById('dev-text');
    if (devText) {
        const colors = [
            '#00ffff', // Cyan
            '#ff00ff', // Pink
            '#9d4edd', // Purple
            '#82c91e', // Soft Green
            '#ff922b', // Soft Orange
            '#ff8787', // Soft Red
            '#4dabf7', // Soft Blue
            '#e6e6e6'  // Off-white
        ];
        
        function changeColor() {
            let randomColor;
            do {
                randomColor = colors[Math.floor(Math.random() * colors.length)];
            } while (randomColor === devText.style.color);
            
            devText.style.color = randomColor;
        }
        
        changeColor();
        setInterval(changeColor, 1500);
    }

    // 7. 🏝️ Navbar Auto-Morphing Scroll Event
    const navbar = document.querySelector('.glass-navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                navbar.classList.add('island-mode');
            } else {
                navbar.classList.remove('island-mode');
            }
        });
    }



});
