/**
 * 个人信息展示页面 - 主要交互脚本
 * 功能包括：技能条动画、返回顶部按钮、平滑滚动、响应式交互等
 */

// DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    initSkillBars();
    initBackToTop();
    initSmoothScroll();
    initObserver();
    initAvatarClick();
    initTypingEffect();
});

/**
 * 初始化技能条动画
 * 使用 Intersection Observer API 实现视口内动画触发
 */
function initSkillBars() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // 添加延迟，使动画依次触发
                setTimeout(() => {
                    entry.target.classList.add('animate');
                    const skillBar = entry.target.querySelector('.skill-bar');
                    if (skillBar) {
                        const level = skillBar.dataset.level;
                        skillBar.style.setProperty('--skill-width', `${level}%`);
                    }
                }, index * 100);
                
                // 动画完成后取消观察
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => observer.observe(card));
}

/**
 * 初始化返回顶部按钮
 * 监听页面滚动，控制按钮显示/隐藏
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    // 点击返回顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 初始化平滑滚动
 * 为所有锚点链接添加平滑滚动效果
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // 如果是 # 本身，滚动到顶部
            if (href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // 其他锚点链接
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * 初始化交叉观察器
 * 为页面元素添加进入视口时的动画效果
 */
function initObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有 section
    document.querySelectorAll('section').forEach(section => {
        fadeInObserver.observe(section);
    });
}

/**
 * 头像点击交互
 * 点击头像可以切换随机头像
 */
function initAvatarClick() {
    const avatar = document.querySelector('.avatar');
    const avatarImg = document.getElementById('avatar-img');
    
    if (!avatar || !avatarImg) return;
    
    const seeds = ['Felix', 'Aneka', 'Angel', 'Whiskers', 'Boots', 'Dusty', 'Snowball', 'Midnight'];
    
    avatar.addEventListener('click', () => {
        // 添加旋转动画
        avatar.style.transform = 'rotate(360deg) scale(0.9)';
        
        setTimeout(() => {
            // 随机选择新头像
            const randomSeed = seeds[Math.random() * seeds.length | 0];
            avatarImg.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`;
            
            // 重置动画
            avatar.style.transform = '';
        }, 300);
    });
    
    // 添加 CSS 过渡
    avatar.style.transition = 'transform 0.3s ease';
}

/**
 * 打字机效果
 * 为职位描述添加打字机动画效果（可选）
 */
function initTypingEffect() {
    const positionElement = document.querySelector('.position');
    if (!positionElement) return;
    
    const originalText = positionElement.textContent;
    const shouldAnimate = window.innerWidth > 768; // 仅在桌面端启用
    
    if (!shouldAnimate) return;
    
    positionElement.textContent = '';
    positionElement.style.opacity = '1';
    
    let charIndex = 0;
    const typingSpeed = 80;
    
    function type() {
        if (charIndex < originalText.length) {
            positionElement.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        }
    }
    
    // 延迟启动打字效果
    setTimeout(type, 500);
}

/**
 * 技能卡片交互增强
 * 添加点击事件显示详细信息（可扩展）
 */
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function() {
        // 添加点击反馈动画
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
        
        // 这里可以扩展：显示技能详细信息、项目经验等
        const skillName = this.querySelector('h3').textContent;
        console.log(`点击了技能: ${skillName}`);
    });
});

/**
 * 社交链接悬停效果增强
 */
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'rotate(360deg) scale(1.2)';
            icon.style.transition = 'transform 0.5s ease';
        }
    });
    
    link.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = '';
        }
    });
});

/**
 * 联系卡片复制功能
 * 点击联系信息可复制到剪贴板
 */
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // 查找链接或文本内容
        const link = this.querySelector('a');
        const textToCopy = link ? link.textContent : this.querySelector('p')?.textContent;
        
        if (textToCopy && navigator.clipboard) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                showToast('已复制到剪贴板！');
            }).catch(err => {
                console.error('复制失败:', err);
            });
        }
    });
    
    // 添加鼠标指针提示
    card.style.cursor = 'pointer';
});

/**
 * 显示提示消息
 * @param {string} message - 要显示的消息
 */
function showToast(message) {
    // 创建提示元素
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideUp 0.3s ease;
        font-weight: 500;
    `;
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    // 3秒后移除
    setTimeout(() => {
        toast.style.animation = 'slideUp 0.3s ease reverse';
        setTimeout(() => {
            document.body.removeChild(toast);
            document.head.removeChild(style);
        }, 300);
    }, 3000);
}

/**
 * 键盘快捷键支持
 */
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K: 返回顶部
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // ESC: 关闭所有悬停效果（如果有）
    if (e.key === 'Escape') {
        document.querySelectorAll('.skill-card:hover').forEach(card => {
            card.blur();
        });
    }
});

/**
 * 性能优化：节流函数
 * @param {Function} func - 要节流的函数
 * @param {number} delay - 延迟时间（毫秒）
 */
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

/**
 * 性能优化：防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} delay - 延迟时间（毫秒）
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * 响应式调整
 * 根据窗口大小调整某些交互行为
 */
const handleResize = debounce(() => {
    const isMobile = window.innerWidth <= 768;
    
    // 移动端禁用某些悬停效果
    document.querySelectorAll('.skill-card').forEach(card => {
        if (isMobile) {
            card.style.pointerEvents = 'auto';
        }
    });
}, 250);

window.addEventListener('resize', handleResize);

// 页面加载完成提示
console.log('%c个人信息页面加载完成！', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%c感谢访问我的个人页面 😊', 'color: #764ba2; font-size: 14px;');
