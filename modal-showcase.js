/* ===== MODAL & SHOWCASE FUNCTIONALITY ===== */

// ข้อมูล Showcase สำหรับแต่ละปุ่ม
const showcaseData = {
    showcase1: {
        title: '🏆 ความสำเร็จและรางวัล',
        content: `
            <h3>ผลสัมฤทธิ์เด่นที่ได้รับ</h3>
            <p>เป็นตัวแทนของการพยายาม และทำงานหนักเพื่อความสำเร็จในทุกๆ ด้าน</p>
            
            <h3>🥇 รางวัลหลัก:</h3>
            <ul>
                <li><strong>เหรียญทอง</strong> - การสร้างสรรค์เกมจากคอมพิวเตอร์ (ศิลปหัตถกรรม ครั้งที่ 73)</li>
                <li><strong>ตำแหน่งผู้นำ</strong> - สภานักเรียน แผนกการประชาสัมพันธ์</li>
                <li><strong>ใบประกาศนียบัตร</strong> - อบรมโค้ชอีสปอร์ต (มหาวิทยาลัยราชภัฏสวนสุนันทา)</li>
                <li><strong>ความยอมรับ</strong> - สร้างสรรค์เว็บไซต์ที่มีคุณภาพสูง</li>
            </ul>
            
            <h3>📊 สถิติการบรรลุเป้าหมาย:</h3>
            <ul>
                <li>✅ ทำให้สำเร็จ 15+ โครงการต่างๆ</li>
                <li>✅ ได้รับการยกย่องจาก 5+ องค์กรภายนอก</li>
                <li>✅ นำทีมและทำงานเป็นกลุ่ม 8+ ครั้ง</li>
                <li>✅ พัฒนาทักษะใหม่ ๆ อย่างต่อเนื่อง</li>
            </ul>
        `
    },
    showcase2: {
        title: '🎮 โครงการสร้างสรรค์',
        content: `
            <h3>ความสร้างสรรค์ในการพัฒนา</h3>
            <p>จากแนวคิดเล็กๆ ไปจนถึงผลิตภัณฑ์ที่สดใสและทำงานได้อย่างดี</p>
            
            <h3>🎯 โครงการหลัก:</h3>
            <ul>
                <li><strong>Game Development</strong> - สร้างเกมที่ชนะรางวัลแชมป์</li>
                <li><strong>Mobile Applications</strong> - แอปพลิเคชันสำหรับแก้ปัญหาประจำวัน</li>
                <li><strong>Web Platforms</strong> - เว็บไซต์และแพลตฟอร์มออนไลน์</li>
                <li><strong>Interactive Systems</strong> - ระบบอินเตอร์แอกทีฟที่ใช้ได้ง่าย</li>
            </ul>
            
            <h3>🛠️ เทคนิคที่ใช้:</h3>
            <ul>
                <li>💻 JavaScript, Python, C++</li>
                <li>🎨 UI/UX Design</li>
                <li>🗄️ Database Management</li>
                <li>🚀 Deployment และ Optimization</li>
            </ul>
        `
    },
    showcase3: {
        title: '🤖 เทคโนโลยี IoT และ Arduino',
        content: `
            <h3>สร้างสิ่งของอัจฉริยะด้วยเทคโนโลยี</h3>
            <p>การสั่งสมประสบการณ์ด้าน IoT และ Hardware Programming</p>
            
            <h3>🔧 โครงการ IoT:</h3>
            <ul>
                <li><strong>Smart Home Systems</strong> - ระบบบ้านอัจฉริยะ ที่สามารถควบคุมอุปกรณ์ต่างๆ</li>
                <li><strong>Sensor Networks</strong> - เครือข่ายเซ็นเซอร์เพื่อเก็บข้อมูล</li>
                <li><strong>Automated Control</strong> - ระบบควบคุมอัตโนมัติด้วย Arduino</li>
                <li><strong>Environmental Monitoring</strong> - ติดตามสภาพแวดล้อมแบบเรียลไทม์</li>
            </ul>
            
            <h3>📱 ทักษะ Arduino:</h3>
            <ul>
                <li>⚡ C++ Programming for Microcontrollers</li>
                <li>🔌 Circuit Design และ Electronic Prototyping</li>
                <li>📡 Wireless Communication (WiFi, Bluetooth)</li>
                <li>🔧 Troubleshooting และ debugging embedded systems</li>
            </ul>
        `
    },
    showcase4: {
        title: '👥 ความเป็นผู้นำและการบริหารจัดการ',
        content: `
            <h3>นำทีมและชุมชนสู่ความสำเร็จ</h3>
            <p>ประสบการณ์ในการเป็นผู้นำ หลายบทบาทและหลายโครงการ</p>
            
            <h3>📍 ตำแหน่งผู้นำที่ได้รับมา:</h3>
            <ul>
                <li>📋 <strong>สภานักเรียน</strong> - แผนกการประชาสัมพันธ์</li>
                <li>🎯 <strong>ประธาน Project Team</strong> - หลายโครงการ</li>
                <li>👨‍🏫 <strong>Mentor/Coach</strong> - ฝึกอบรมน้องใหม่</li>
                <li>🤝 <strong>Community Leader</strong> - นำโครงการชุมชน</li>
            </ul>
            
            <h3>💡 ทักษะผู้นำ:</h3>
            <ul>
                <li>✅ การสื่อสารประสิทธิผล (89% skill level)</li>
                <li>✅ การตัดสินใจอย่างชาญฉลาด</li>
                <li>✅ การแก้ไขปัญหาและความขัดแย้ง</li>
                <li>✅ การสร้างแรงบันดาลใจและแรงจูงใจให้ทีม</li>
                <li>✅ การออกแบบและวางแผนยุทธศาสตร์</li>
            </ul>
        `
    },
    showcase5: {
        title: '🌐 Web Development & Full Stack',
        content: `
            <h3>สร้างเว็บไซต์สมัยใหม่ที่มีประสิทธิภาพ</h3>
            <p>ความสามารถในการพัฒนาเว็บจากหน้าที่เต็มไปถึงเซิร์ฟเวอร์</p>
            
            <h3>🎨 Frontend Development (85%):</h3>
            <ul>
                <li><strong>HTML5</strong> - โครงสร้างเว็บที่ปลอดภัยและหมาย</li>
                <li><strong>CSS3 & Design Systems</strong> - สไตล์และ Layout ที่สวยงาม</li>
                <li><strong>JavaScript & React</strong> - ความเป็น Interactive และ Responsive</li>
                <li><strong>UI/UX Design</strong> - ออกแบบประสบการณ์ผู้ใช้ที่ดี</li>
            </ul>
            
            <h3>⚙️ Backend Development (60%):</h3>
            <ul>
                <li><strong>Node.js & Express</strong> - เซิร์ฟเวอร์และ APIs</li>
                <li><strong>Databases</strong> - SQL และ NoSQL ทั้งสองแบบ</li>
                <li><strong>Authentication & Security</strong> - ความปลอดภัยข้อมูล</li>
                <li><strong>API Design</strong> - การสร้าง RESTful APIs</li>
            </ul>
            
            <h3>📦 Tools & Frameworks:</h3>
            <ul>
                <li>🔧 Git/GitHub - Version Control</li>
                <li>📦 NPM & Package Management</li>
                <li>🧪 Testing & Debugging</li>
                <li>☁️ Cloud Deployment (Firebase, Vercel)</li>
            </ul>
        `
    },
    showcase6: {
        title: '🎓 กิจกรรมพัฒนากำลังและการอบรม',
        content: `
            <h3>พัฒนาตัวเองและพัฒนาผู้อื่น</h3>
            <p>การศึกษาอย่างต่อเนื่องและการแบ่งปันความรู้กับคนอื่น</p>
            
            <h3>📚 กิจกรรมพัฒนา:</h3>
            <ul>
                <li><strong>โค้ชอีสปอร์ต</strong> - อบรมจาก มหาวิทยาลัยราชภัฏสวนสุนันทา</li>
                <li><strong>เวิร์กชอป Programming</strong> - ฝึกอบรมเพื่อน/น้อง</li>
                <li><strong>ศิลปหัตถกรรม</strong> - ศึกษาและสร้างสรรค์ระหว่างเรียน</li>
                <li><strong>Hackathon & Competition</strong> - ร่วมการแข่งขันเพื่อพัฒนาทักษะ</li>
            </ul>
            
            <h3>🎯 ทักษะที่พัฒนา:</h3>
            <ul>
                <li>💻 <strong>Technical Skills</strong> - Programming, Design, IoT</li>
                <li>🗣️ <strong>Soft Skills</strong> - Communication, Leadership, Teamwork</li>
                <li>📊 <strong>Analytical Skills</strong> - Problem Solving, Critical Thinking</li>
                <li>🎨 <strong>Creative Skills</strong> - Innovation, Design Thinking</li>
            </ul>
            
            <h3>🏆 ผลลัพธ์การพัฒนา:</h3>
            <ul>
                <li>✅ ได้รับใบประกาศนียบัตร 5+ ใบ</li>
                <li>✅ ทักษะเพิ่มขึ้น ทั้ง Technical และ Soft Skills</li>
                <li>✅ พูดได้และสอนน้องได้อย่างมีประสิทธิผล</li>
                <li>✅ ได้เพื่อน/Network ในสาขาต่างๆ</li>
            </ul>
        `
    }
};

/**
 * เปิด Modal ที่เลือก
 * @param {string} showcaseId - ID ของ showcase ที่เลือก
 */
function openFeatureModal(showcaseId) {
    const data = showcaseData[showcaseId];
    if (!data) return;
    
    const modal = document.getElementById('featureModal');
    const overlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.content;
    
    overlay.classList.add('active');
    modal.classList.add('active');
    
    document.body.style.overflow = 'hidden'; // ปิดการScroll
    
    // 📊 Track modal opening with Firebase Analytics
    if (typeof trackModalOpen === 'function') {
        trackModalOpen(showcaseId);
    }
}

/**
 * ปิด Modal
 * @param {string} modalId - ID ของ modal ที่ต้องปิด
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    const overlay = document.getElementById('modalOverlay');
    
    modal.classList.remove('active');
    overlay.classList.remove('active');
    
    document.body.style.overflow = 'auto'; // เปิดการScroll กลับ
}

/**
 * ปิด Modal ทั้งหมดเมื่อคลิกที่ Overlay
 */
function closeAllModals(event) {
    if (event.target.id === 'modalOverlay') {
        closeModal('featureModal');
    }
}

/**
 * Scroll ไปด้านบนของหน้า
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * ปิด Modal เมื่อกดปุ่ม Escape
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal('featureModal');
    }
});

// Initialize ทุกอย่างเมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Modal & Showcase Features Loaded');
});
