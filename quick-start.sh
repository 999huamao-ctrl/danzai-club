#!/bin/bash

# 蛋仔乐园 - 快速部署脚本
# 使用方法：./quick-start.sh 你的 GitHub 用户名

if [ -z "$1" ]; then
    echo "❌ 请提供 GitHub 用户名"
    echo "用法：./quick-start.sh your-github-username"
    exit 1
fi

GITHUB_USER=$1
REPO_URL="https://github.com/${GITHUB_USER}/danzai-club.git"

echo "🥚 星语的蛋仔乐园 - 快速部署"
echo "=============================="
echo ""

# 更新配置文件
echo "📝 更新配置文件..."
sed -i "s/OWNER/${GITHUB_USER}/g" src/app.js
sed -i "s/OWNER/${GITHUB_USER}/g" admin/config.yml
echo "✅ 配置已更新为：${GITHUB_USER}"
echo ""

# 初始化 Git
echo "🔄 初始化 Git 仓库..."
git init
git add .
git commit -m "Initial commit - 星语的蛋仔乐园 🥚"
git branch -M main
echo "✅ Git 仓库已初始化"
echo ""

# 添加远程仓库
echo "🔗 添加远程仓库..."
git remote add origin ${REPO_URL}
echo "✅ 远程仓库：${REPO_URL}"
echo ""

# 推送代码
echo "🚀 推送代码到 GitHub..."
git push -u origin main
echo "✅ 代码已推送"
echo ""

echo "=============================="
echo "🎉 完成！"
echo ""
echo "下一步："
echo "1. 访问 https://vercel.com"
echo "2. 登录并导入 danzai-club 仓库"
echo "3. 点击 Deploy"
echo "4. 获取你的网站链接！"
echo ""
echo "网站名称：星语的蛋仔乐园"
echo "制作人：星语 ❤️"
echo ""
