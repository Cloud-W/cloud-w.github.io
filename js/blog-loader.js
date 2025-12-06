// 博客数据管理
const blogData = {
    posts: [],
    categories: new Set(),
    tags: new Set(),
    archives: {}
};

// 从posts目录加载所有博文
async function loadPosts() {
    try {
        // 这里是博文数据，您可以手动维护或通过后端API加载
        // 暂时使用静态数据示例
        blogData.posts = [
            {
                id: 1,
                title: "欢迎来到皮蛋工作室",
                date: "2025-12-06",
                category: "公告",
                tags: ["介绍", "开始"],
                excerpt: "欢迎来到皮蛋工作室的博客！这里我们会分享游戏开发经验、技术心得和有趣的项目。",
                content: "posts/2025-12-06-welcome.html"
            },
            {
                id: 2,
                title: "使用Defold开发投票应用",
                date: "2025-12-06",
                category: "教程",
                tags: ["Defold", "游戏开发", "教程"],
                excerpt: "本文介绍如何使用Defold游戏引擎开发一个互动投票应用，包括广告集成和数据存储。",
                content: "posts/2025-12-06-defold-voting-app.html"
            }
        ];

        // 构建分类、标签和归档索引
        buildIndexes();
        
        return blogData.posts;
    } catch (error) {
        console.error("加载博文失败:", error);
        return [];
    }
}

// 构建索引
function buildIndexes() {
    blogData.posts.forEach(post => {
        // 分类
        if (post.category) {
            blogData.categories.add(post.category);
        }
        
        // 标签
        if (post.tags) {
            post.tags.forEach(tag => blogData.tags.add(tag));
        }
        
        // 归档（按年月）
        const yearMonth = post.date.substring(0, 7); // YYYY-MM
        if (!blogData.archives[yearMonth]) {
            blogData.archives[yearMonth] = [];
        }
        blogData.archives[yearMonth].push(post);
    });
}

// 格式化日期
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

// 在首页显示最新博文
async function showRecentPosts(limit = 3) {
    await loadPosts();
    const recentPosts = blogData.posts.slice(0, limit);
    const container = document.getElementById('recent-posts');
    
    if (!container) return;
    
    if (recentPosts.length === 0) {
        container.innerHTML = '<p class="loading">暂无博文</p>';
        return;
    }
    
    container.innerHTML = recentPosts.map(post => `
        <div class="post-item">
            <h3><a href="posts/${post.content}">${post.title}</a></h3>
            <div class="post-meta">
                ${formatDate(post.date)} | 分类: ${post.category}
            </div>
            <p class="post-excerpt">${post.excerpt}</p>
        </div>
    `).join('');
}

// 在博客页面显示所有博文
async function showAllPosts(filterCategory = null, filterTag = null) {
    await loadPosts();
    let posts = blogData.posts;
    
    // 应用过滤
    if (filterCategory && filterCategory !== 'all') {
        posts = posts.filter(post => post.category === filterCategory);
    }
    if (filterTag) {
        posts = posts.filter(post => post.tags.includes(filterTag));
    }
    
    const container = document.getElementById('posts-list');
    if (!container) return;
    
    if (posts.length === 0) {
        container.innerHTML = '<p class="loading">暂无博文</p>';
        return;
    }
    
    container.innerHTML = posts.map(post => `
        <article class="post-card">
            <h2><a href="posts/${post.content}">${post.title}</a></h2>
            <div class="post-meta">
                ${formatDate(post.date)} | 分类: ${post.category}
            </div>
            <div class="post-tags">
                ${post.tags.map(tag => `<a href="#" class="tag" data-tag="${tag}">${tag}</a>`).join('')}
            </div>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="posts/${post.content}" class="post-read-more">阅读全文 →</a>
        </article>
    `).join('');
}

// 显示分类列表
function showCategories() {
    const container = document.getElementById('categories');
    if (!container) return;
    
    const categoriesList = Array.from(blogData.categories);
    const html = '<li><a href="#" data-category="all">全部</a></li>' +
        categoriesList.map(cat => 
            `<li><a href="#" data-category="${cat}">${cat}</a></li>`
        ).join('');
    
    container.innerHTML = html;
    
    // 添加点击事件
    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            showAllPosts(category);
        });
    });
}

// 显示标签云
function showTags() {
    const container = document.getElementById('tags');
    if (!container) return;
    
    const tagsList = Array.from(blogData.tags);
    container.innerHTML = tagsList.map(tag => 
        `<a href="#" class="tag" data-tag="${tag}">${tag}</a>`
    ).join('');
    
    // 添加点击事件
    container.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tag = e.target.dataset.tag;
            showAllPosts(null, tag);
        });
    });
}

// 显示归档
function showArchives() {
    const container = document.getElementById('archives');
    if (!container) return;
    
    const sortedArchives = Object.keys(blogData.archives).sort().reverse();
    container.innerHTML = sortedArchives.map(yearMonth => {
        const count = blogData.archives[yearMonth].length;
        const [year, month] = yearMonth.split('-');
        return `<li><a href="#" data-archive="${yearMonth}">${year}年${month}月 (${count})</a></li>`;
    }).join('');
}

// 初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('recent-posts')) {
            showRecentPosts();
        }
    });
} else {
    if (document.getElementById('recent-posts')) {
        showRecentPosts();
    }
}
