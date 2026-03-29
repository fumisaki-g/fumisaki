function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');

    // สลับคลาสเพื่อหด/ขยาย
    sidebar.classList.toggle('collapsed');
    mainWrapper.classList.toggle('expanded');
}

function switchPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    const targetPage = document.getElementById(pageId);
    
    // ถ้าหน้าเป้าหมายไม่มีอยู่จริง ให้ไปหน้า coming-soon
    const pageToShow = targetPage ? targetPage : document.getElementById('coming-soon');

    sections.forEach(s => s.classList.remove('active'));
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach(i => i.classList.remove('active'));

    pageToShow.classList.add('active');

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
    
    // 📊 Track section switch with Firebase Analytics
    if (typeof trackSectionSwitch === 'function') {
        trackSectionSwitch(pageId);
    }
}

function switchPageAndScroll(pageId) {
    // เรียก switchPage ก่อนเพื่อเปลี่ยนหน้า
    switchPage(pageId);
    
    // แล้ว scroll ไปยัง section ที่ต้องการ
    const targetElement = document.getElementById(pageId);
    if (targetElement) {
        targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}



function filterProjects(category) {
    // 1. จัดการไฮไลท์ปุ่ม Filter
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // 2. จัดการแสดง/ซ่อน การ์ดผลงาน
    const items = document.querySelectorAll('.project-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
            item.style.animation = 'fadeIn 0.4s ease';
        } else {
            item.style.display = 'none';
        }
    });
}
// ฟังก์ชันเช็กขนาดหน้าจอและตั้งค่า Sidebar อัตโนมัติ
function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');
    
    // ถ้าหน้าจอน้อยกว่า 768px (ขนาดมือถือ/แท็บเล็ต)
    if (window.innerWidth <= 768) {
        sidebar.classList.add('collapsed');
        mainWrapper.classList.add('expanded');
    }
}

// เรียกใช้งานฟังก์ชันทันทีที่โหลดหน้าเว็บ
window.onload = initSidebar;

// ปรับปรุงฟังก์ชัน toggleSidebar เดิมให้ฉลาดขึ้น
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');
    
    sidebar.classList.toggle('collapsed');
    mainWrapper.classList.toggle('expanded');
}