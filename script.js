







// [REPLACE] ระบบ Parallax ที่ฉลาดขึ้น (ตรวจจับมือถือ)
document.addEventListener('mousemove', (e) => {
    // ถ้าหน้าจอแคบกว่า 768px (มือถือ) ไม่ต้องรันโค้ดขยับกล่อง
    if (window.innerWidth <= 768) return;

    requestAnimationFrame(() => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const boxes = document.querySelectorAll('.box');
        boxes.forEach((box, index) => {
            const depth = (index + 1) * 0.08; 
            const moveX = (clientX - centerX) * depth;
            const moveY = (clientY - centerY) * depth;
            box.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotateX(${moveY * 0.01}deg) rotateY(${moveX * 0.01}deg)`;
        });
    });
});

// 2. ระบบหดแถบเมนูเมื่อเลื่อนจอ
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.style.top = '10px';
        nav.style.width = '95%';
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        nav.style.top = '25px';
        nav.style.width = '90%';
        nav.style.background = 'rgba(255, 255, 255, 0.6)';
    }
});


// [APPEND] ฟังก์ชันแม่เหล็กสำหรับปุ่ม Contact (ทำให้ปุ่มขยับตามเมาส์เบาๆ)
const contactBtn = document.querySelector('.btn-contact');

contactBtn.addEventListener('mousemove', (e) => {
    const rect = contactBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    contactBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.5}px) scale(1.05)`;
});

contactBtn.addEventListener('mouseleave', () => {
    contactBtn.style.transform = `translate(0, 0) scale(1)`;
});


// [APPEND] ระบบเปิดตัวเนื้อหาเมื่อเลื่อนหน้าจอมาถึง (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.news-card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s cubic-bezier(0.19, 1, 0.22, 1)";
    observer.observe(card);
});