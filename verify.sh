#!/bin/bash

# 项目完整性验证脚本
# Project Verification Script

echo "🔍 正在检查项目完整性..."
echo ""

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 检查计数器
total=0
passed=0

# 检查文件函数
check_file() {
    local file=$1
    local description=$2
    total=$((total + 1))
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $description: $file"
        passed=$((passed + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $description: $file ${RED}[缺失]${NC}"
        return 1
    fi
}

# 检查目录函数
check_dir() {
    local dir=$1
    local description=$2
    total=$((total + 1))
    
    if [ -d "$dir" ]; then
        echo -e "${GREEN}✓${NC} $description: $dir/"
        passed=$((passed + 1))
        return 0
    else
        echo -e "${RED}✗${NC} $description: $dir/ ${RED}[缺失]${NC}"
        return 1
    fi
}

echo "📁 检查目录结构..."
check_dir "css" "样式目录"
check_dir "js" "脚本目录"
echo ""

echo "📄 检查核心文件..."
check_file "index.html" "主页面"
check_file "css/style.css" "样式文件"
check_file "js/main.js" "脚本文件"
echo ""

echo "📖 检查文档文件..."
check_file "README.md" "项目说明"
check_file "QUICK_START.md" "快速开始"
check_file ".gitignore" "Git忽略"
echo ""

echo "🚀 检查启动脚本..."
check_file "start-server.sh" "Linux/macOS启动脚本"
check_file "start-server.bat" "Windows启动脚本"
echo ""

# 检查文件内容
echo "🔍 检查文件内容..."
total=$((total + 1))
if grep -q "个人信息展示" index.html 2>/dev/null; then
    echo -e "${GREEN}✓${NC} HTML 包含中文内容"
    passed=$((passed + 1))
else
    echo -e "${RED}✗${NC} HTML 内容检查失败"
fi

total=$((total + 1))
if grep -q "@media" css/style.css 2>/dev/null; then
    echo -e "${GREEN}✓${NC} CSS 包含响应式设计"
    passed=$((passed + 1))
else
    echo -e "${RED}✗${NC} CSS 响应式设计缺失"
fi

total=$((total + 1))
if grep -q "addEventListener" js/main.js 2>/dev/null; then
    echo -e "${GREEN}✓${NC} JavaScript 包含事件监听"
    passed=$((passed + 1))
else
    echo -e "${RED}✗${NC} JavaScript 事件监听缺失"
fi

echo ""

# 检查启动脚本权限
total=$((total + 1))
if [ -x "start-server.sh" ]; then
    echo -e "${GREEN}✓${NC} 启动脚本具有执行权限"
    passed=$((passed + 1))
else
    echo -e "${YELLOW}!${NC} 启动脚本缺少执行权限"
    echo "   运行: chmod +x start-server.sh"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 计算通过率
percentage=$((passed * 100 / total))

if [ $passed -eq $total ]; then
    echo -e "${GREEN}✅ 所有检查通过！ ($passed/$total)${NC}"
    echo ""
    echo "🎉 项目已准备就绪！"
    echo ""
    echo "运行以下命令启动服务器："
    echo "  ./start-server.sh"
    echo ""
    echo "或直接在浏览器中打开："
    echo "  index.html"
    exit 0
else
    echo -e "${YELLOW}⚠️  通过 $passed/$total 项检查 (${percentage}%)${NC}"
    echo ""
    echo "请检查缺失的文件或内容"
    exit 1
fi
