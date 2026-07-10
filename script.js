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

    // 2. 📑 Tab Navigation Logic (via macOS Dock)
    const dockItems = document.querySelectorAll('.dock-item[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    dockItems.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Deactivate all dock tab items & contents
            dockItems.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate current dock item & content
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
            cv_toast: "CV/Resume is available upon request. Contact Penhpich Bormey.",
            email_picker_title: "Choose Email Client",
            email_picker_gmail: "Gmail (Web)",
            email_picker_default: "Default Mail App",
            email_picker_copy: "Copy Email Address",
            email_copied: "Email address copied to clipboard!",
            dock_connect: "Connect",
            dock_lang: "Switch Language",
            connect_picker_title: "Let's Connect",
            connect_telegram: "Telegram Messenger",
            connect_messenger: "Facebook Messenger",
            connect_cv: "Request CV / Resume",
            lang_picker_title: "Select Language",
            toast_privacy_on: "Privacy Mode Enabled (Profile Blurred)",
            toast_privacy_off: "Privacy Mode Disabled"
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
            cv_toast: "ប្រវត្តិរូបសង្ខេប (CV/Resume) អាចស្នើសុំបានដោយផ្ទាល់។ សូមទាក់ទង Penhpich Bormey។",
            email_picker_title: "ជ្រើសរើសកម្មវិធីអ៊ីមែល",
            email_picker_gmail: "Gmail (វេបសាយ)",
            email_picker_default: "កម្មវិធីអ៊ីមែលលំនាំដើម",
            email_picker_copy: "ចម្លងអាសយដ្ឋានអ៊ីមែល",
            email_copied: "បានចម្លងអាសយដ្ឋានអ៊ីមែលរួចរាល់!",
            dock_connect: "ទំនាក់ទំនង",
            dock_lang: "ប្តូរភាសា",
            connect_picker_title: "ទំនាក់ទំនងមកខ្ញុំ",
            connect_telegram: "តេឡេក្រាម",
            connect_messenger: "ហ្វេសប៊ុក មេសេនជ័រ",
            connect_cv: "ស្នើសុំប្រវត្តិរូបសង្ខេប",
            lang_picker_title: "ជ្រើសរើសភាសា",
            toast_privacy_on: "របៀបឯកជនភាពត្រូវបានបើក (ព័ត៌មានត្រូវបានបិទបាំង)",
            toast_privacy_off: "របៀបឯកជនភាពត្រូវបានបិទ"
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

    // Lang Switcher Event -> Open Language Modal
    const langModal = document.getElementById('lang-modal');
    const langSwitcher = document.getElementById('lang-switcher');
    const dockLangBtn = document.getElementById('dock-lang-btn');
    const langModalCloseBtn = document.getElementById('lang-modal-close-btn');
    const langEnBtn = document.getElementById('lang-en-btn');
    const langKhBtn = document.getElementById('lang-kh-btn');

    if (langModal) {
        const openLangModal = (e) => {
            if (e) e.preventDefault();
            langModal.classList.add('active');
        };

        const closeLangModal = () => {
            langModal.classList.remove('active');
        };

        if (langSwitcher) {
            langSwitcher.addEventListener('click', openLangModal);
        }
        if (dockLangBtn) {
            dockLangBtn.addEventListener('click', openLangModal);
        }

        if (langModalCloseBtn) {
            langModalCloseBtn.addEventListener('click', closeLangModal);
        }

        langModal.addEventListener('click', (e) => {
            if (e.target === langModal) {
                closeLangModal();
            }
        });

        if (langEnBtn) {
            langEnBtn.addEventListener('click', () => {
                if (currentLang !== 'en') {
                    applyLanguage('en');
                    showToast(translations['en'].toast_lang, 'success');
                }
                closeLangModal();
            });
        }

        if (langKhBtn) {
            langKhBtn.addEventListener('click', () => {
                if (currentLang !== 'kh') {
                    applyLanguage('kh');
                    showToast(translations['kh'].toast_lang, 'success');
                }
                closeLangModal();
            });
        }
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

    // 5. ✉️ Unified Contact/Connect Modal Action
    const connectModal = document.getElementById('connect-modal');
    const connectLink = document.getElementById('email-link'); // card email icon
    const resumeLink = document.getElementById('resume-link'); // card resume icon
    const dockConnectBtn = document.getElementById('dock-connect-btn'); // dock icon
    
    const connectModalCloseBtn = document.getElementById('connect-modal-close-btn');
    
    const gmailOptionBtn = document.getElementById('gmail-option-btn');
    const defaultOptionBtn = document.getElementById('default-option-btn');
    const copyOptionBtn = document.getElementById('copy-option-btn');
    const cvOptionBtn = document.getElementById('cv-option-btn');
    const targetEmail = 'pichpenhbormey383@gmail.com';

    if (connectModal) {
        const openConnectModal = (e) => {
            e.preventDefault();
            connectModal.classList.add('active');
        };

        const closeConnectModal = () => {
            connectModal.classList.remove('active');
        };

        // Open triggers
        if (connectLink) connectLink.addEventListener('click', openConnectModal);
        if (resumeLink) resumeLink.addEventListener('click', openConnectModal);
        if (dockConnectBtn) dockConnectBtn.addEventListener('click', openConnectModal);

        // Close triggers
        if (connectModalCloseBtn) {
            connectModalCloseBtn.addEventListener('click', closeConnectModal);
        }
        connectModal.addEventListener('click', (e) => {
            if (e.target === connectModal) {
                closeConnectModal();
            }
        });

        // Options actions inside the modal:
        // Note: Telegram & Messenger are standard <a> links, so they navigate natively.

        // Gmail Option
        if (gmailOptionBtn) {
            gmailOptionBtn.addEventListener('click', () => {
                window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}`, '_blank');
                closeConnectModal();
            });
        }

        // Default Client Option
        if (defaultOptionBtn) {
            defaultOptionBtn.addEventListener('click', () => {
                window.location.href = `mailto:${targetEmail}`;
                closeConnectModal();
            });
        }

        // Copy Option
        if (copyOptionBtn) {
            copyOptionBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(targetEmail).then(() => {
                    showToast(translations[currentLang].email_copied, 'success');
                }).catch(() => {
                    // Fallback copy method
                    const tempInput = document.createElement('input');
                    tempInput.value = targetEmail;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    showToast(translations[currentLang].email_copied, 'success');
                });
                closeConnectModal();
            });
        }

        // CV / Resume Option
        if (cvOptionBtn) {
            cvOptionBtn.addEventListener('click', () => {
                showToast(translations[currentLang].cv_toast, 'success');
                closeConnectModal();
            });
        }
    }

    // 6. 🎨 Hacker Character Swapping & Logo Shake (synchronized with CSS glitch)
    const devText = document.getElementById('dev-text');
    const brandText = document.querySelector('.logo-brand');
    const logoContainer = document.querySelector('.logo-text');
    const glitchSlices = document.querySelectorAll('.glitch-slice');
    const glitchChars = document.querySelectorAll('.glitch-char');
    
    if (devText && logoContainer) {
        const hackerChars = ['D3V', 'DΞV', 'D_V', 'DØV', 'D%V', '[D]', 'DΞV', 'DV_'];
        
        const setGlitchText = (text) => {
            if (glitchChars.length === 3) {
                for (let i = 0; i < 3; i++) {
                    const charNode = glitchChars[i];
                    const newChar = text[i] || '';
                    
                    const baseNode = charNode.querySelector('.char-base');
                    if (baseNode) {
                        baseNode.textContent = newChar;
                    }
                    charNode.setAttribute('data-text', newChar);
                    
                    const pieces = charNode.querySelectorAll('.char-piece');
                    pieces.forEach(piece => {
                        piece.textContent = newChar;
                        piece.setAttribute('data-text', newChar);
                    });
                }
            }
            glitchSlices.forEach(slice => {
                slice.textContent = text;
                slice.setAttribute('data-text', text);
            });
            devText.setAttribute('data-text', text);
        };

        const triggerLogoGlitchSpike = (duration) => {
            if (brandText) brandText.classList.add('tremble');
            logoContainer.classList.add('shake-glitch');
            glitchChars.forEach(char => char.classList.add('broken'));
            
            let isSpikeActive = true;
            let swaps = 0;
            const swapInterval = setInterval(() => {
                if (!isSpikeActive) return;
                const randomLogoChar = hackerChars[Math.floor(Math.random() * hackerChars.length)];
                setGlitchText(randomLogoChar);
                swaps++;
                if (swaps > 3) {
                    isSpikeActive = false;
                    clearInterval(swapInterval);
                }
            }, 30);

            setTimeout(() => {
                isSpikeActive = false;
                clearInterval(swapInterval);
                if (brandText) brandText.classList.remove('tremble');
                logoContainer.classList.remove('shake-glitch');
                glitchChars.forEach(char => char.classList.remove('broken'));
                setGlitchText('DEV');
            }, duration);
        };

        const startRegularGlitchLoop = () => {
            setInterval(() => {
                setTimeout(() => {
                    triggerLogoGlitchSpike(400); // 400ms duration (highly visible)
                }, 300);
                setTimeout(() => {
                    triggerLogoGlitchSpike(300); // 300ms duration
                }, 1050);
            }, 1500);
        };

        // 🚀 Startup Slow Spread Cinematic (Only 1 Time)
        const triggerStartupSlowSpread = () => {
            let isStartupActive = true;
            devText.classList.add('slow-spread');
            glitchChars.forEach(char => char.classList.add('broken'));
            if (brandText) brandText.classList.add('tremble');
            logoContainer.classList.add('shake-glitch');

            const swapInterval = setInterval(() => {
                if (!isStartupActive) return;
                const randomLogoChar = hackerChars[Math.floor(Math.random() * hackerChars.length)];
                setGlitchText(randomLogoChar);
            }, 250);

            setTimeout(() => {
                isStartupActive = false;
                clearInterval(swapInterval);
                devText.classList.remove('slow-spread');
                glitchChars.forEach(char => char.classList.remove('broken'));
                if (brandText) brandText.classList.remove('tremble');
                logoContainer.classList.remove('shake-glitch');
                setGlitchText('DEV');

                setTimeout(() => {
                    startRegularGlitchLoop();
                }, 600);
            }, 3000);
        };

        // Start startup sequence on load
        setTimeout(triggerStartupSlowSpread, 500);
    }

    // 7. 🖥️ macOS Dock Interactive Fisheye Zoom Effect
    const dock = document.getElementById('mac-dock');
    const allDockItems = document.querySelectorAll('.dock-item');
    
    if (dock) {
        dock.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            
            allDockItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const itemCenterX = rect.left + rect.width / 2;
                const dist = Math.abs(mouseX - itemCenterX);
                
                // Fisheye zone of influence (150px)
                if (dist < 150) {
                    const scale = 1 + 0.35 * Math.pow((150 - dist) / 150, 2);
                    item.style.transform = `scale(${scale})`;
                    item.style.margin = `0 ${6 * Math.pow((150 - dist) / 150, 2)}px`;
                } else {
                    item.style.transform = 'scale(1)';
                    item.style.margin = '0';
                }
            });
        });
        
        dock.addEventListener('mouseleave', () => {
            allDockItems.forEach(item => {
                item.style.transform = 'scale(1)';
                item.style.margin = '0';
            });
        });
    }

    // 8. 🖥️ macOS Dock Auto-Hide / Auto-Show (Scroll & Hover based)
    const dockContainer = document.querySelector('.mac-dock-container');
    if (dockContainer && dock) {
        let lastScrollY = window.scrollY;
        let hideTimeout;
        let isMouseNearBottom = false;
        let isMouseOverDock = false;

        const updateDockVisibility = () => {
            const currentScrollY = window.scrollY;
            const isScrollingUp = currentScrollY < lastScrollY;
            const isAtTop = currentScrollY < 10;
            const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 10);

            // If mouse is near bottom/over dock, OR scrolling up, OR at top, OR at bottom -> Show it!
            if (isMouseNearBottom || isMouseOverDock || isScrollingUp || isAtTop || isAtBottom) {
                dockContainer.classList.remove('dock-hidden');
            } else {
                // Otherwise, hide it (when scrolling down, for example)
                dockContainer.classList.add('dock-hidden');
            }
            
            lastScrollY = currentScrollY;
        };

        // Scroll listener (active on all viewports for scroll reveals)
        window.addEventListener('scroll', updateDockVisibility, { passive: true });

        // Mouse movement listeners (only on desktop hover-capable viewports)
        if (window.matchMedia('(hover: hover)').matches) {
            document.addEventListener('mousemove', (e) => {
                const viewportHeight = window.innerHeight;
                const mouseY = e.clientY;
                
                isMouseNearBottom = (viewportHeight - mouseY) < 50;
                isMouseOverDock = dockContainer.contains(e.target);

                if (isMouseNearBottom || isMouseOverDock) {
                    clearTimeout(hideTimeout);
                    dockContainer.classList.remove('dock-hidden');
                } else {
                    clearTimeout(hideTimeout);
                    hideTimeout = setTimeout(() => {
                        updateDockVisibility();
                    }, 400); // 400ms delay for smooth mouse exits
                }
            });
        }
    }

    // 9. 🔒 Stealth Privacy Mode (Double-click anywhere to blur)
    document.addEventListener('dblclick', (e) => {
        // Exclude double-clicks on interactive elements
        if (e.target.closest('button, a, input, textarea, select, .mac-dock, .modal, .modal-content')) {
            return;
        }
        
        const isPrivacyActive = document.body.classList.toggle('privacy-active');
        if (isPrivacyActive) {
            showToast(translations[currentLang].toast_privacy_on, 'info');
        } else {
            showToast(translations[currentLang].toast_privacy_off, 'info');
        }
    });

});
