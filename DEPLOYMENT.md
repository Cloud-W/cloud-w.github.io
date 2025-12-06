# 快速部署指南

## ✅ 已完成的设置

您的新网站已经准备好了！包含:

- ✅ 现代化的响应式设计
- ✅ 博客系统(已有2篇示例文章)
- ✅ Defold应用部署区域
- ✅ 关于页面
- ✅ 完整的导航系统

## 🚀 立即部署到GitHub Pages

### 1. 提交所有更改

```powershell
cd c:\Users\Windows\Documents\GitHub\cloud-w.github.io
git add .
git commit -m "全新网站上线：现代化设计 + 博客 + 应用"
git push origin master
```

### 2. 等待GitHub Pages构建

- 通常需要1-3分钟
- 访问: https://cloud-w.github.io

### 3. 部署Defold应用

#### 在Defold中:
1. 打开您的投票应用项目
2. 菜单: `Project → Bundle → HTML5`
3. 选择导出位置并生成

#### 复制文件:
```powershell
# 假设Defold导出到 D:\defold-build
Copy-Item -Recurse D:\defold-build\* c:\Users\Windows\Documents\GitHub\cloud-w.github.io\vote-app\
```

#### 提交应用:
```powershell
git add vote-app/
git commit -m "添加Defold投票应用"
git push origin master
```

## 📝 添加新博文

### 步骤1: 编辑博客数据

编辑 `js/blog-loader.js`,在 `blogData.posts` 数组添加:

```javascript
{
    id: 3,
    title: "我的新博文",
    date: "2025-12-07",
    category: "技术",
    tags: ["标签1", "标签2"],
    excerpt: "这是文章摘要...",
    content: "posts/2025-12-07-my-new-post.html"
}
```

### 步骤2: 创建博文HTML

复制 `posts/2025-12-06-welcome.html` 作为模板,修改内容。

### 步骤3: 提交发布

```powershell
git add .
git commit -m "添加新博文"
git push origin master
```

## 🎨 自定义设置

### 修改颜色主题

编辑 `css/style.css` 的 `:root` 部分:

```css
:root {
    --primary-color: #你的颜色;
    --secondary-color: #你的颜色;
    /* ... */
}
```

### 修改网站信息

在各HTML文件中搜索并替换:
- "皮蛋工作室" → 您的工作室名
- "pidanworkshop@gmail.com" → 您的邮箱
- GitHub链接等

## 📊 文件结构总览

```
cloud-w.github.io/
├── index.html          ← 主页
├── blog.html           ← 博客列表
├── about.html          ← 关于页面
├── css/
│   ├── style.css       ← 主样式
│   └── blog.css        ← 博客样式
├── js/
│   ├── blog-loader.js  ← ⭐ 在这里添加博文数据
│   └── blog-page.js
├── posts/              ← ⭐ 博文HTML文件放这里
├── vote-app/           ← ⭐ Defold应用文件放这里
└── assets/             ← 图片等资源放这里
```

## 🔍 本地预览

```powershell
# 方法1: Python
python -m http.server 8000

# 方法2: VS Code Live Server扩展
# 右键 index.html → Open with Live Server
```

访问: http://localhost:8000

## ⚠️ 注意事项

1. **不再使用Jekyll** - 这是纯HTML/CSS/JS网站
2. **`.nojekyll` 文件** - 已创建,告诉GitHub不使用Jekyll
3. **博文是HTML** - 不是Markdown,可以完全自定义
4. **JavaScript加载** - 博文通过JS动态加载

## 🆘 常见问题

### Q: 页面更新了但网站没变化?
A: 清除浏览器缓存,或等待几分钟让GitHub Pages更新

### Q: 如何添加图片?
A: 将图片放到 `assets/` 文件夹,在HTML中引用 `/assets/your-image.png`

### Q: Defold应用不显示?
A: 确保所有Defold导出的文件都在 `vote-app/` 目录,且主文件名为 `index.html`

### Q: 如何修改博客数据源?
A: 目前使用 `js/blog-loader.js` 中的静态数据。未来可以改为从JSON文件或API加载

## 📞 需要帮助?

如果遇到问题,请检查:
1. 浏览器控制台是否有错误
2. GitHub Pages设置是否正确
3. 文件路径是否正确

---

祝您部署顺利! 🎉
