# 皮蛋工作室 | Pidan Workshop

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success)](https://cloud-w.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

欢迎来到皮蛋工作室的官方网站！这里我们分享游戏开发经验、展示创意项目。

## 🌐 在线访问

访问我们的网站: [https://cloud-w.github.io](https://cloud-w.github.io)

## 📁 项目结构

```
cloud-w.github.io/
├── index.html          # 主页
├── blog.html           # 博客列表页
├── about.html          # 关于页面
├── css/                # 样式文件
│   ├── style.css       # 主样式
│   └── blog.css        # 博客样式
├── js/                 # JavaScript文件
│   ├── blog-loader.js  # 博客加载器
│   └── blog-page.js    # 博客页面脚本
├── posts/              # 博文HTML文件
│   ├── 2025-12-06-welcome.html
│   └── 2025-12-06-defold-voting-app.html
├── vote-app/           # Defold投票应用
│   └── index.html      # (将Defold导出文件放这里)
└── assets/             # 静态资源(图片等)
```

## 🎮 部署Defold应用

1. 在Defold编辑器打开您的项目
2. 选择 `Project → Bundle → HTML5`
3. 将生成的所有文件复制到 `vote-app/` 目录
4. 提交并推送到GitHub

## ✍️ 添加新博文

### 方法1: 编辑 `js/blog-loader.js`

在 `blogData.posts` 数组中添加新文章信息:

```javascript
{
    id: 3,
    title: "你的博文标题",
    date: "2025-12-06",
    category: "分类",
    tags: ["标签1", "标签2"],
    excerpt: "文章摘要...",
    content: "posts/2025-12-06-your-post.html"
}
```

### 方法2: 创建博文HTML文件

在 `posts/` 目录创建新的HTML文件,参考现有博文的格式。

## 🚀 本地开发

由于使用纯静态HTML,可以直接在浏览器打开 `index.html` 预览。

推荐使用本地服务器:

```bash
# Python 3
python -m http.server 8000

# Node.js (需要先安装 http-server)
npx http-server
```

然后访问 `http://localhost:8000`

## 🎨 自定义样式

所有颜色和样式变量在 `css/style.css` 的 `:root` 中定义:

```css
:root {
    --primary-color: #4a90e2;    /* 主色调 */
    --secondary-color: #f39c12;  /* 次要色 */
    --text-color: #333;          /* 文字颜色 */
    --bg-color: #f8f9fa;         /* 背景色 */
    /* ... */
}
```

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 📧 联系方式

- Email: pidanworkshop@gmail.com
- GitHub: [@Cloud-W](https://github.com/Cloud-W)

## 🙏 致谢

感谢所有访问和支持我们的朋友！

---

**Making game is the greatest game, ever.** 🎮
