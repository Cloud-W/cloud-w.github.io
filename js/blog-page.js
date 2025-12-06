// 博客页面专用脚本
document.addEventListener('DOMContentLoaded', async () => {
    // 加载博文列表
    await showAllPosts();
    
    // 加载侧边栏内容
    showCategories();
    showTags();
    showArchives();
});
