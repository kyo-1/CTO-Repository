# 个人信息展示页面 | Personal Profile Page

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

一个现代化、响应式的个人信息展示页面 Demo，采用纯前端技术实现，支持多种设备访问。

[在线演示](#) | [功能特性](#功能特性) | [快速开始](#快速开始)

</div>

---

## 📋 目录

- [功能特性](#功能特性)
- [技术栈](#技术栈)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [自定义配置](#自定义配置)
- [浏览器兼容性](#浏览器兼容性)
- [部署指南](#部署指南)
- [性能优化](#性能优化)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## ✨ 功能特性

### 核心功能

- **🎨 现代化设计**
  - 深色主题配色方案
  - 渐变背景和动态装饰元素
  - 流畅的动画和过渡效果
  - 高对比度和优雅的视觉效果

- **👤 个人信息展示**
  - 圆形头像，支持悬停效果和点击切换
  - 在线状态指示器（带脉冲动画）
  - 姓名、职位和个人简介
  - 挥手动画效果

- **💼 技能展示模块**
  - 卡片式技能展示
  - 进度条显示技能熟练度
  - 技能分类（前端、后端、工具）
  - 视口内动画触发
  - 悬停交互效果

- **🔗 社交链接**
  - GitHub、LinkedIn、Twitter、Email
  - 图标 + 文字的清晰展示
  - 悬停时的渐变背景效果
  - 新标签页打开外部链接

- **📞 联系方式**
  - 邮箱、电话、地址信息卡片
  - 点击复制功能（支持剪贴板 API）
  - 视觉反馈和提示消息

- **🎯 交互增强**
  - 返回顶部按钮（平滑滚动）
  - 键盘快捷键支持（Ctrl/Cmd + K）
  - 平滑滚动效果
  - 加载动画
  - Toast 提示消息

### 响应式设计

- ✅ 移动设备（320px+）
- ✅ 平板设备（768px+）
- ✅ 桌面设备（1024px+）
- ✅ 大屏幕（1400px+）
- ✅ 横屏/竖屏自适应

### 可访问性

- ✅ 语义化 HTML 标签
- ✅ ARIA 标签支持
- ✅ 键盘导航友好
- ✅ 减少动画模式支持
- ✅ 高对比度模式支持

---

## 🛠️ 技术栈

| 技术 | 说明 | 版本 |
|------|------|------|
| HTML5 | 页面结构 | - |
| CSS3 | 样式和动画 | - |
| JavaScript (ES6+) | 交互逻辑 | - |
| Font Awesome | 图标库 | 6.4.0 |

### CSS 特性

- Flexbox 布局
- Grid 布局
- CSS 变量（自定义属性）
- CSS 动画和过渡
- 媒体查询（响应式设计）
- 渐变背景
- 阴影和模糊效果

### JavaScript 特性

- ES6+ 语法
- Intersection Observer API
- Clipboard API
- DOM 操作
- 事件监听
- 防抖和节流优化

---

## 📁 项目结构

```
personal-info-page/
│
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 交互脚本
└── README.md           # 项目文档
```

---

## 🚀 快速开始

### 方式一：直接打开

1. **克隆或下载项目**
   ```bash
   git clone <repository-url>
   cd personal-info-page
   ```

2. **打开页面**
   - 直接用浏览器打开 `index.html` 文件
   - 或者双击 `index.html` 文件

### 方式二：本地服务器（推荐）

使用本地 HTTP 服务器可以获得更好的体验：

#### 使用 Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

然后访问：`http://localhost:8000`

#### 使用 Node.js

```bash
# 安装 http-server（全局）
npm install -g http-server

# 启动服务器
http-server -p 8000
```

然后访问：`http://localhost:8000`

#### 使用 PHP

```bash
php -S localhost:8000
```

然后访问：`http://localhost:8000`

#### 使用 VS Code

安装 "Live Server" 扩展，右键点击 `index.html` → "Open with Live Server"

---

## 🎨 自定义配置

### 修改个人信息

编辑 `index.html` 文件中的以下内容：

```html
<!-- 姓名 -->
<h1 class="name">你的姓名 <span class="wave">👋</span></h1>

<!-- 职位 -->
<p class="position">你的职位</p>

<!-- 个人简介 -->
<p class="bio">你的个人简介...</p>

<!-- 社交链接 -->
<a href="你的GitHub链接" target="_blank">...</a>

<!-- 联系方式 -->
<a href="mailto:你的邮箱">你的邮箱</a>
<a href="tel:你的电话">你的电话</a>
```

### 修改技能列表

在 `index.html` 中添加或修改技能卡片：

```html
<div class="skill-card" data-category="frontend">
    <div class="skill-icon">
        <i class="fab fa-react"></i>
    </div>
    <h3>技能名称</h3>
    <div class="skill-level">
        <div class="skill-bar" data-level="85"></div>
    </div>
</div>
```

- `data-category`: 技能分类（frontend/backend/tools）
- `data-level`: 技能熟练度（0-100）

### 修改配色方案

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
    /* 主色调 */
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    
    /* 背景色 */
    --bg-color: #0f172a;
    --card-bg: #1e293b;
    
    /* 文字颜色 */
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
}
```

### 更换头像

有三种方式：

1. **使用在线生成器（当前方式）**
   ```html
   <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=YourName" alt="头像">
   ```

2. **使用本地图片**
   - 将图片放到项目目录（如 `images/avatar.jpg`）
   - 修改 img 标签的 src 属性：
     ```html
     <img src="images/avatar.jpg" alt="头像">
     ```

3. **使用 Gravatar**
   ```html
   <img src="https://www.gravatar.com/avatar/你的MD5邮箱?s=200" alt="头像">
   ```

---

## 🌐 浏览器兼容性

| 浏览器 | 最低版本 | 状态 |
|--------|---------|------|
| Chrome | 90+ | ✅ 完全支持 |
| Firefox | 88+ | ✅ 完全支持 |
| Safari | 14+ | ✅ 完全支持 |
| Edge | 90+ | ✅ 完全支持 |
| Opera | 76+ | ✅ 完全支持 |

**注意事项：**
- 需要支持 ES6+ 语法
- 需要支持 CSS Grid 和 Flexbox
- 需要支持 Intersection Observer API

---

## 🌍 部署指南

### GitHub Pages

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 Settings → Pages
   - Source 选择 `main` 分支
   - 点击 Save

3. **访问页面**
   - 访问：`https://你的用户名.github.io/仓库名/`

### Netlify

1. **连接 GitHub 仓库**
   - 登录 [Netlify](https://www.netlify.com/)
   - 点击 "New site from Git"
   - 选择你的仓库

2. **配置部署**
   - Build command: 留空
   - Publish directory: `./`
   - 点击 "Deploy site"

3. **自定义域名（可选）**
   - Domain settings → Add custom domain

### Vercel

1. **导入项目**
   - 登录 [Vercel](https://vercel.com/)
   - 点击 "New Project"
   - 导入 GitHub 仓库

2. **部署**
   - Framework Preset: Other
   - 点击 "Deploy"

### Cloudflare Pages

1. **连接仓库**
   - 登录 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 点击 "Create a project"
   - 连接 GitHub 仓库

2. **构建配置**
   - Build command: 留空
   - Build output directory: `/`

---

## ⚡ 性能优化

### 已实现的优化

- ✅ CSS 变量减少重复代码
- ✅ 使用 Intersection Observer 延迟加载动画
- ✅ 防抖和节流函数优化滚动事件
- ✅ CSS 动画使用 GPU 加速（transform、opacity）
- ✅ 最小化重排和重绘
- ✅ 图标库使用 CDN 加载

### 进一步优化建议

1. **图片优化**
   - 使用 WebP 格式
   - 添加图片懒加载
   - 使用响应式图片（srcset）

2. **代码压缩**
   ```bash
   # CSS 压缩
   npx csso css/style.css -o css/style.min.css
   
   # JS 压缩
   npx terser js/main.js -o js/main.min.js
   ```

3. **启用缓存**
   - 配置 HTTP 缓存头
   - 使用 Service Worker

4. **减少依赖**
   - 考虑自托管 Font Awesome
   - 或使用 SVG 图标替代

---

## 📊 功能清单

- [x] 响应式布局
- [x] 深色主题
- [x] 个人头像展示
- [x] 技能进度条动画
- [x] 社交链接
- [x] 联系方式展示
- [x] 返回顶部按钮
- [x] 平滑滚动
- [x] 复制到剪贴板
- [x] 键盘快捷键
- [x] Toast 提示
- [x] 打字机效果
- [x] 可访问性支持
- [ ] 多语言支持（待扩展）
- [ ] 浅色/深色主题切换（待扩展）
- [ ] 项目作品展示（待扩展）
- [ ] 博客文章列表（待扩展）

---

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出新功能建议！

### 贡献步骤

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 代码规范

- 使用语义化的 HTML 标签
- CSS 类名使用小写字母和连字符
- JavaScript 使用驼峰命名
- 添加必要的注释
- 确保响应式设计正常工作

---

## 📝 更新日志

### v1.0.0 (2024-01-01)

- 🎉 初始版本发布
- ✨ 实现基础个人信息展示
- ✨ 添加技能展示模块
- ✨ 实现响应式设计
- ✨ 添加多种交互效果
- ✨ 支持多设备访问

---

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

---

## 💬 联系方式

如有问题或建议，欢迎联系：

- 📧 Email: example@email.com
- 🐙 GitHub: [@yourusername](https://github.com/yourusername)
- 💼 LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

## 🙏 致谢

- [Font Awesome](https://fontawesome.com/) - 图标库
- [DiceBear Avatars](https://dicebear.com/) - 头像生成器
- 灵感来自众多优秀的个人主页设计

---

<div align="center">

**[⬆ 返回顶部](#个人信息展示页面--personal-profile-page)**

Made with ❤️ and ☕

</div>
