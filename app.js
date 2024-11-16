// Mock data for different sections
const cloudData = [
    {
        id: 1,
        image: 'https://picsum.photos/403/400',
        title: '云端渲染工作站',
        description: '高性能云端工作站随时可用',
        author: 'cloudmaster',
        likes: 892,
        status: 'running'
    },
    {
        id: 2,
        image: 'https://picsum.photos/404/400',
        title: '云游戏平台',
        description: '低延迟云游戏体验',
        author: 'gamepro',
        likes: 567
    },
    {
        id: 3,
        image: 'https://picsum.photos/405/400',
        title: '云存储解决方案',
        description: '企业级云存储服务',
        author: 'storageking',
        likes: 723,
        status: 'running'
    }
];

const aiData = [
    {
        id: 1,
        image: 'https://picsum.photos/400/400',
        title: 'TILTA铁头',
        description: '随便拍！手持拍摄换一种思路！',
        author: 'cocolook',
        likes: 1677,
        status: 'running'
    },
    {
        id: 2,
        image: 'https://picsum.photos/401/400',
        title: 'AI视频教程',
        description: 'AI视频的商业效果大揭秘',
        author: '李嘉max',
        likes: 284
    },
    {
        id: 3,
        image: 'https://picsum.photos/402/400',
        title: '毒液变身AI特效教程',
        description: '今天教大家用AI实现毒液特效',
        author: '安迪教AI',
        likes: 380,
        status: 'running'
    }
];

const workflowData = [
    {
        id: 1,
        image: 'https://picsum.photos/406/400',
        title: '自动化剪辑流程',
        description: '一键生成短视频',
        author: 'workflow_master',
        likes: 456,
        status: 'running'
    },
    {
        id: 2,
        image: 'https://picsum.photos/407/400',
        title: '批量AI处理',
        description: '自动化AI工作流',
        author: 'ai_expert',
        likes: 789
    },
    {
        id: 3,
        image: 'https://picsum.photos/408/400',
        title: '智能分发系统',
        description: '多平台自动发布',
        author: 'publisher',
        likes: 234,
        status: 'running'
    }
];

const reviewerData = [
    {
        id: 1,
        avatar: 'https://picsum.photos/100/100?random=1',
        name: 'AI点评官',
        title: 'AI应用专家',
        image: 'https://picsum.photos/413/400',
        description: '深度解析AI应用场景',
        likes: 1288
    },
    {
        id: 2,
        avatar: 'https://picsum.photos/100/100?random=2',
        name: '技术评测师',
        title: 'AI技术专家',
        image: 'https://picsum.photos/414/400',
        description: '专业角度解读AI技术',
        likes: 956
    },
    {
        id: 3,
        avatar: 'https://picsum.photos/100/100?random=3',
        name: '产品体验官',
        title: 'AI产品专家',
        image: 'https://picsum.photos/415/400',
        description: '用户视角评测AI产品',
        likes: 1567
    }
];

const userReviewsData = [
    {
        id: 1,
        image: 'https://picsum.photos/409/400',
        title: 'AI绘画工具点评',
        description: '从专业角度解析AI绘画的优劣',
        likes: 156,
        status: 'draft'
    },
    {
        id: 2,
        image: 'https://picsum.photos/410/400',
        title: '云渲染服务评测',
        description: '深度对比主流云渲染平台',
        likes: 89,
        status: 'draft'
    }
];

const userFavoritesData = [
    {
        id: 1,
        image: 'https://picsum.photos/411/400',
        title: 'AI绘画教程',
        description: '从零开始学习AI绘画',
        author: 'art_master',
        likes: 567
    },
    {
        id: 2,
        image: 'https://picsum.photos/412/400',
        title: '效率工作流',
        description: '提高10倍工作效率',
        author: 'efficiency_pro',
        likes: 890
    }
];

const hotSearches = {
    cloud: ['云端渲染', '游戏加速', '存储方案', '远程协作', '云端开发'],
    ai: ['AI绘画', 'ChatGPT', '视频处理', '语音合成', 'AI换脸'],
    workflow: ['自动化剪辑', '批量处理', '工作流优化', '效率提升', '智能分发'],
    reviewer: ['AI点评', '产品测评', '技术解析', '应用场景', '用户体验']
};

// Page management
const pages = {
    cloud: document.getElementById('cloudPage'),
    ai: document.getElementById('aiPage'),
    workflow: document.getElementById('workflowPage'),
    reviewer: document.getElementById('reviewerPage'),
    profile: document.getElementById('profilePage')
};

function showPage(pageId) {
    // Hide all pages first
    Object.values(pages).forEach(page => {
        if (page) {
            page.classList.remove('active');
            // Hide top tabs when showing profile page
            document.querySelector('.top-nav').style.display = 
                pageId === 'profile' ? 'none' : 'flex';
        }
    });
    
    // Show selected page
    const page = pages[pageId];
    if (page) {
        page.classList.add('active');
        // Render appropriate content
        if (pageId === 'cloud') {
            renderFeed('cloudFeedGrid', cloudData);
            renderHotSearches('cloudHotSearches', 'cloud');
        } else if (pageId === 'ai') {
            renderFeed('feedGrid', aiData);
            renderHotSearches('aiHotSearches', 'ai');
        } else if (pageId === 'workflow') {
            renderFeed('workflowFeedGrid', workflowData);
            renderHotSearches('workflowHotSearches', 'workflow');
        } else if (pageId === 'reviewer') {
            renderReviewerFeed('reviewerFeedGrid', reviewerData);
            renderHotSearches('reviewerHotSearches', 'reviewer');
        }
    }
}

// Tab management for main navigation
const tabs = document.querySelectorAll('.tab-item');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        showPage(tab.dataset.page);
    });
});

// Profile tabs management
const profileTabs = document.querySelectorAll('.profile-tab');
profileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        profileTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Render appropriate content based on selected tab
        if (tab.dataset.tab === 'reviews') {
            renderFeed('profileFeedGrid', userReviewsData);
        } else if (tab.dataset.tab === 'favorites') {
            renderFeed('profileFeedGrid', userFavoritesData);
        }
    });
});

// Render feed items
function renderFeed(gridId, data) {
    const feedGrid = document.getElementById(gridId);
    if (!feedGrid) return;
    
    feedGrid.innerHTML = data.map(item => `
        <div class="feed-item">
            <img class="feed-image" src="${item.image}" alt="${item.title}">
            ${item.status ? `<div class="status-badge ${item.status}">${item.status === 'draft' ? '草稿' : '运行中'}</div>` : ''}
            <div class="feed-info">
                <h3 class="feed-title">${item.title}</h3>
                <p class="feed-description">${item.description}</p>
                <div class="feed-meta">
                    ${item.author ? `<span class="author">${item.author}</span>` : ''}
                    <span class="likes">❤️ ${item.likes}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render reviewer feed items
function renderReviewerFeed(gridId, data) {
    const feedGrid = document.getElementById(gridId);
    if (!feedGrid) return;
    
    feedGrid.innerHTML = data.map(item => `
        <div class="feed-item">
            <div class="reviewer-header">
                <img class="reviewer-avatar" src="${item.avatar}" alt="${item.name}">
                <div class="reviewer-info">
                    <h3 class="reviewer-name">${item.name}</h3>
                    <p class="reviewer-title">${item.title}</p>
                </div>
            </div>
            <img class="feed-image" src="${item.image}" alt="${item.description}">
            <div class="feed-info">
                <p class="feed-description">${item.description}</p>
                <div class="feed-meta">
                    <span class="likes">❤️ ${item.likes}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Render hot searches
function renderHotSearches(containerId, type) {
    const container = document.getElementById(containerId);
    if (!container || !hotSearches[type]) return;

    container.innerHTML = hotSearches[type].map(keyword => 
        `<span class="hot-keyword">${keyword}</span>`
    ).join('');
}

// Bottom navigation
const bottomNavItems = document.querySelectorAll('.nav-item');
bottomNavItems.forEach(item => {
    item.addEventListener('click', () => {
        const pageId = item.dataset.page;
        if (pageId) {
            showPage(pageId);
            // Update active state of bottom nav items
            bottomNavItems.forEach(navItem => {
                navItem.classList.toggle('active', navItem === item);
            });
        }
    });
});


// Modal and overlay controls
const publishBtn = document.querySelector('.publish-btn');
const publishModal = document.querySelector('.publish-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const backBtn = document.querySelector('.back-btn');
const uploadPlus = document.querySelector('.upload-plus');
const imageUploadArea = document.querySelector('.image-upload-area');

function closeModal() {
    publishModal.classList.remove('active');
    modalOverlay.classList.remove('active');
}

function openModal() {
    publishModal.classList.add('active');
    modalOverlay.classList.add('active');
}

publishBtn.addEventListener('click', openModal);
backBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Prevent modal close when clicking inside the modal
publishModal.addEventListener('click', (e) => {
    e.stopPropagation();
});



// Image upload handling
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.accept = 'image/*';
fileInput.style.display = 'none';
document.body.appendChild(fileInput);

document.querySelector('.upload-plus').addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        const preview = document.createElement('div');
        preview.className = 'upload-preview';
        preview.innerHTML = `<img src="${URL.createObjectURL(e.target.files[0])}" alt="Preview">`;
        
        const uploadArea = document.querySelector('.image-upload-area');
        const uploadPlus = document.querySelector('.upload-plus');
        uploadArea.insertBefore(preview, uploadPlus);
    }
});

// Official website link
document.querySelector('.official-link').addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://openaistore.cn/', '_blank');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showPage('ai'); // Show AI page by default
    renderFeed('cloudFeedGrid', cloudData);
    renderFeed('feedGrid', aiData);
    renderFeed('workflowFeedGrid', workflowData);
    renderReviewerFeed('reviewerFeedGrid', reviewerData);
    renderFeed('profileFeedGrid', userReviewsData);
    
    // Render hot searches for all sections
    renderHotSearches('cloudHotSearches', 'cloud');
    renderHotSearches('aiHotSearches', 'ai');
    renderHotSearches('workflowHotSearches', 'workflow');
    renderHotSearches('reviewerHotSearches', 'reviewer');
});