// [1] ฟังก์ชัน เปิด-ปิด Sidebar (Toggle)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');
    
    // สลับคลาสเพื่อหด/ขยาย
    sidebar.classList.toggle('collapsed');
    mainWrapper.classList.toggle('expanded');
}

// [2] ฟังก์ชัน สลับหน้าเนื้อหา
function switchPage(pageId) {
    // ซ่อนทุกหน้า
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(s => s.classList.remove('active'));

    // เอาไฮไลท์ออกจากทุกปุ่ม
    const menuItems = document.querySelectorAll('.nav-item');
    menuItems.forEach(i => i.classList.remove('active'));

    // แสดงหน้าใหม่
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // ใส่สีไฮไลท์ปุ่มที่กด (ใช้Event)
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
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