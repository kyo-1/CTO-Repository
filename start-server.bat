@echo off
REM 个人信息展示页面 - Windows 启动脚本
REM Personal Profile Page - Windows Start Script

set PORT=8080

echo ================================================
echo   个人信息展示页面 - 启动服务器
echo   Personal Profile Page - Starting Server
echo ================================================
echo.
echo 服务器地址: http://localhost:%PORT%
echo 项目目录: %CD%
echo.
echo 提示：
echo    - 在浏览器中访问: http://localhost:%PORT%
echo    - 按 Ctrl+C 停止服务器
echo.
echo ================================================
echo.

REM 检查 Python 3
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo 使用 Python 启动服务器...
    echo.
    start http://localhost:%PORT%
    python -m http.server %PORT%
    goto :end
)

REM 检查 Python 2
where python2 >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo 使用 Python 2 启动服务器...
    echo.
    start http://localhost:%PORT%
    python2 -m SimpleHTTPServer %PORT%
    goto :end
)

REM 检查 PHP
where php >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo 使用 PHP 启动服务器...
    echo.
    start http://localhost:%PORT%
    php -S localhost:%PORT%
    goto :end
)

REM 未找到合适的服务器
echo 错误: 未找到 Python 或 PHP
echo.
echo 请安装以下任一工具：
echo   - Python 3: https://www.python.org/
echo   - PHP: https://www.php.net/
echo   - Node.js http-server: npm install -g http-server
echo.
pause
exit /b 1

:end
