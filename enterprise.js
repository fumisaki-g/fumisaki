/* ========== Enhanced Interactions & Performance ========== */

/**
 * Smooth Scroll Behavior
 * ให้หน้าเว็บเลื่อนแบบนุ่มลื่น
 */
document.addEventListener('DOMContentLoaded', () => {
    // ใช้ native smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/**
 * Intersection Observer API
 * สำหรับ animations และ lazy loading บน scroll
 */
const setupIntersectionObserver = () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // เพิ่ม animation class
                entry.target.classList.add('in-view', 'animate-on-scroll');
                
                // Lazy load images
                if (entry.target.classList.contains('lazy')) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                }
                
                // Stop observing หลังจากปรากฏแล้ว
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-scroll class
    document.querySelectorAll('.fade-in-scroll, .animate-on-scroll, .blur-to-clear').forEach(el => {
        observer.observe(el);
    });
};

/**
 * Parallax Effect
 * สำหรับการเคลื่อนไหวขนาน
 */
const setupParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const elementOffset = element.offsetTop;
            const yPos = (scrollPosition - elementOffset) * 0.5;
            
            element.style.backgroundPosition = `center ${yPos}px`;
        });
    }, { passive: true });
};

/**
 * Navbar Hide on Scroll
 * ซ่อน navbar เมื่อเลื่อนลง
 */
const setupNavbarScroll = () => {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;

    let lastScrollTop = 0;
    let scrollTimer;

    window.addEventListener('scroll', () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        
        clearTimeout(scrollTimer);
        
        if (st > lastScrollTop) {
            // Scrolling DOWN
            topbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling UP
            topbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = st <= 0 ? 0 : st;
    }, { passive: true });
};

/**
 * Active Link Indicator
 * ไฮไลท์ nav item ตามตำแหน่ง scroll
 */
const setupActiveLink = () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.page-section');

    if (sections.length === 0) return;

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (current && item.getAttribute('onclick')?.includes(current)) {
                item.classList.add('active');
            }
        });
    }, { passive: true });
};

/**
 * Ripple Effect on Click
 * สำหรับ buttons และ clickable elements
 */
const setupRippleEffect = () => {
    const rippleElements = document.querySelectorAll('.ripple, .btn, .card');

    rippleElements.forEach(element => {
        element.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple-effect');
            
            // Style ripple
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(255, 255, 255, 0.5)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-spread 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-spread {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
};

/**
 * Dark Mode Toggle
 * สำหรับสลับโหมดมืด/สว่าง
 */
const setupDarkMode = () => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleDarkModeChange = (e) => {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    };

    // Initial check
    handleDarkModeChange(prefersDark);
    
    // Listen for changes
    prefersDark.addEventListener('change', handleDarkModeChange);
};

/**
 * Smooth Number Counter
 * นับตัวเลขจาก 0 ถึงค่าเป้าหมาย
 */
const setupCounters = () => {
    const counters = document.querySelectorAll('.stat-value');
    const speed = 200; // milliseconds

    const runCounter = (element) => {
        const target = +element.getAttribute('data-target');
        if (!target) return;

        const increment = target / speed;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.ceil(current).toLocaleString();
            }
        }, 10);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));
};

/**
 * Lazy Load Images
 * โหลดรูปภาพเมื่อเข้าสู่มุมมองเท่านั้น
 */
const setupLazyLoading = () => {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
};

/**
 * Pre-load Resource Hints
 * สำหรับเพิ่มประสิทธิภาพการโหลด
 */
const setupResourceHints = () => {
    // Preconnect to external domains
    const preconnects = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com'
    ];

    preconnects.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        document.head.appendChild(link);
    });
};

/**
 * Performance Monitoring
 * ติดตามประสิทธิภาพหน้าเพจ
 */
const monitorPerformance = () => {
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', () => {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log(`Page Load Time: ${pageLoadTime}ms`);
            
            // ส่ง analytics
            if (window.gtag) {
                gtag('event', 'page_load_time', {
                    'value': pageLoadTime,
                    'event_category': 'engagement'
                });
            }
        });
    }
};

/**
 * Initialize All Features
 * เรียกใช้ทุก setup function
 */
const initializeEnterpriseFeatures = () => {
    setupIntersectionObserver();
    setupParallax();
    setupNavbarScroll();
    setupActiveLink();
    setupRippleEffect();
    setupDarkMode();
    setupCounters();
    setupLazyLoading();
    setupResourceHints();
    monitorPerformance();

    console.log('✅ Enterprise Features Loaded');
};

// เรียกใช้เมื่อ DOM prepared
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEnterpriseFeatures);
} else {
    initializeEnterpriseFeatures();
}

// Prevent layout shift
document.documentElement.style.scrollBehavior = 'smooth';
