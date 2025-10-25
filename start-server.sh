#!/bin/bash

# 个人信息展示页面 - 启动脚本
# Personal Profile Page - Start Server Script

PORT=8080
BROWSER_CMD=""

# 检测操作系统并设置浏览器打开命令
if [[ "$OSTYPE" == "darwin"* ]]; then
    BROWSER_CMD="open"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    BROWSER_CMD="xdg-open"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    BROWSER_CMD="start"
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🚀 个人信息展示页面 - 启动服务器"
echo "  Personal Profile Page - Starting Server"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📍 服务器地址: http://localhost:$PORT"
echo "📁 项目目录: $(pwd)"
echo ""
echo "💡 提示："
echo "   - 在浏览器中访问: http://localhost:$PORT"
echo "   - 按 Ctrl+C 停止服务器"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# 检查 Python 是否可用
if command -v python3 &> /dev/null; then
    echo "✅ 使用 Python 3 启动服务器..."
    echo ""
    
    # 延迟打开浏览器
    if [ -n "$BROWSER_CMD" ]; then
        (sleep 2 && $BROWSER_CMD "http://localhost:$PORT" &> /dev/null) &
    fi
    
    # 启动服务器
    python3 -m http.server $PORT
    
elif command -v python &> /dev/null; then
    echo "✅ 使用 Python 启动服务器..."
    echo ""
    
    if [ -n "$BROWSER_CMD" ]; then
        (sleep 2 && $BROWSER_CMD "http://localhost:$PORT" &> /dev/null) &
    fi
    
    python -m SimpleHTTPServer $PORT
    
elif command -v php &> /dev/null; then
    echo "✅ 使用 PHP 启动服务器..."
    echo ""
    
    if [ -n "$BROWSER_CMD" ]; then
        (sleep 2 && $BROWSER_CMD "http://localhost:$PORT" &> /dev/null) &
    fi
    
    php -S localhost:$PORT
    
else
    echo "❌ 错误: 未找到 Python 或 PHP"
    echo ""
    echo "请安装以下任一工具："
    echo "  - Python 3: https://www.python.org/"
    echo "  - PHP: https://www.php.net/"
    echo "  - Node.js http-server: npm install -g http-server"
    echo ""
    exit 1
fi
