# 🚀 快速开始指南

> 5 分钟内让你的个人信息页面运行起来！

---

## 📦 方式一：使用启动脚本（推荐）

### Linux / macOS

```bash
./start-server.sh
```

### Windows

双击运行 `start-server.bat` 或在命令行中执行：

```cmd
start-server.bat
```

✅ **搞定！** 浏览器会自动打开 http://localhost:8080

---

## 📦 方式二：手动启动

### 1. 使用 Python（最常用）

```bash
# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

### 2. 使用 Node.js

```bash
# 全局安装 http-server
npm install -g http-server

# 启动服务器
http-server -p 8080
```

### 3. 使用 PHP

```bash
php -S localhost:8080
```

### 4. 使用 VS Code

1. 安装 **Live Server** 扩展
2. 右键点击 `index.html`
3. 选择 **"Open with Live Server"**

---

## 🌐 访问页面

在浏览器中打开：

- **http://localhost:8080**
- **http://127.0.0.1:8080**

---

## 🎯 体验功能

### 交互功能

| 操作 | 效果 |
|------|------|
| 点击头像 | 切换随机头像 |
| 点击联系卡片 | 复制信息到剪贴板 |
| 滚动页面 | 触发技能条动画 |
| 悬停卡片 | 查看悬停效果 |
| 点击返回顶部 | 平滑滚动到顶部 |
| 按 Ctrl/Cmd + K | 快捷键返回顶部 |

### 响应式测试

1. 打开浏览器开发者工具（F12）
2. 点击设备工具栏图标
3. 选择不同设备查看效果：
   - 📱 iPhone SE (375px)
   - 📱 iPhone 12 Pro (390px)
   - 📱 iPad (768px)
   - 💻 Desktop (1024px+)
   - 🖥️ Large Desktop (1400px+)

---

## ✏️ 自定义内容

### 修改个人信息

编辑 `index.html` 文件：

```html
<!-- 第 28 行：修改姓名 -->
<h1 class="name">你的姓名 <span class="wave">👋</span></h1>

<!-- 第 29 行：修改职位 -->
<p class="position">你的职位</p>

<!-- 第 30 行：修改简介 -->
<p class="bio">你的个人简介...</p>
```

### 修改社交链接

在 `index.html` 中找到社交链接部分（约第 114-133 行）：

```html
<a href="你的GitHub" target="_blank">
<a href="你的LinkedIn" target="_blank">
<a href="你的Twitter" target="_blank">
<a href="mailto:你的邮箱">
```

### 修改联系方式

在 `index.html` 中找到联系卡片部分（约第 138-163 行）：

```html
<a href="mailto:你的邮箱">你的邮箱</a>
<a href="tel:你的电话">你的电话</a>
<p>你的位置</p>
```

### 添加/修改技能

在 `index.html` 技能部分添加新卡片：

```html
<div class="skill-card" data-category="frontend">
    <div class="skill-icon">
        <i class="fab fa-vuejs"></i>
    </div>
    <h3>Vue.js</h3>
    <div class="skill-level">
        <div class="skill-bar" data-level="80"></div>
    </div>
</div>
```

- `data-category`: `frontend` / `backend` / `tools`
- `data-level`: 0-100（技能熟练度）

### 更换配色

编辑 `css/style.css` 第 9-22 行：

```css
:root {
    --primary-color: #6366f1;    /* 主色 */
    --secondary-color: #8b5cf6;  /* 次色 */
    --accent-color: #ec4899;     /* 强调色 */
    --bg-color: #0f172a;         /* 背景色 */
    --card-bg: #1e293b;          /* 卡片背景 */
}
```

---

## 🌐 部署到线上

### GitHub Pages（免费）

1. 推送代码到 GitHub
2. 仓库 Settings → Pages
3. Source 选择 `main` 分支
4. 访问 `https://你的用户名.github.io/仓库名/`

### Netlify（免费）

1. 登录 [Netlify](https://netlify.com)
2. 拖拽项目文件夹到网站
3. 自动部署完成

### Vercel（免费）

```bash
# 安装 Vercel CLI
npm install -g vercel

# 部署
vercel
```

---

## 🛑 停止服务器

在终端中按 **Ctrl + C**

---

## ❓ 常见问题

### 端口被占用？

修改端口号：

```bash
python3 -m http.server 3000  # 使用 3000 端口
```

### 修改后不生效？

1. 清除浏览器缓存（Ctrl + Shift + R）
2. 或使用无痕模式

### 图标不显示？

确保能访问互联网（Font Awesome 使用 CDN）

---

## 📚 更多信息

详细文档请查看 `README.md`

---

## 💬 需要帮助？

- 📧 Email: example@email.com
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)

---

<div align="center">

**祝你使用愉快！ 🎉**

[返回主页](README.md)

</div>
