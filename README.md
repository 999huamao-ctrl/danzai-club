# 🥚 星语的蛋仔乐园

蛋仔派对玩家交互平台 - 找队友、参加活动、快乐游戏！

**本网站由 星语 制作** ❤️

## 🚀 快速部署

### 1. 创建 GitHub 仓库

```bash
# 在 GitHub 创建新仓库，名为 danzai-club
# 然后将此项目代码推送上去
git init
git add .
git commit -m "Initial commit - 星语的蛋仔乐园"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/danzai-club.git
git push -u origin main
```

### 2. 连接 Vercel

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 "Add New Project"
3. 选择 "Import Git Repository"
4. 选择 `danzai-club` 仓库
5. 点击 "Deploy"

### 3. 更新配置

部署后需要更新以下文件中的 `OWNER` 为你的 GitHub 用户名：

- `src/app.js` - 第 7 行
- `admin/config.yml` - 第 4 行

然后重新部署即可。

## 📝 使用说明

### 管理后台

访问 `https://你的域名.vercel.app/admin` 进入管理后台。

首次登录需要用 GitHub 账号授权。

### 发布活动

1. 登录管理后台
2. 点击 "📢 活动公告"
3. 点击 "New Activity"
4. 填写活动信息
5. 点击 "Save"

### 玩家注册

玩家通过网站 "加入我们" 页面提交注册信息，会自动创建 GitHub Issue。

管理员审核后，可以手动将玩家信息添加到展示区。

## 🎨 自定义

### 修改头像选项

编辑 `.github/ISSUE_TEMPLATE/player-registration.yml` 中的头像选项。

### 修改颜色主题

编辑 `src/style.css` 中的 CSS 变量：

```css
:root {
    --primary-color: #FF6B9D;    /* 主色调 */
    --secondary-color: #C44569;  /* 辅助色 */
    --accent-color: #FFC312;     /* 强调色 */
}
```

## 📄 License

MIT License - 由星语创作
