# 🚀 蛋仔乐园 - 部署指南

## 快速部署步骤（5 分钟上线）

### 步骤 1: 创建 GitHub 仓库

1. 访问 [github.com](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名：`danzai-club`
4. 描述：`星语的蛋仔乐园 - 蛋仔派对玩家交互平台`
5. 选择 **Public**
6. ✅ 勾选 "Add a README file"
7. 点击 "Create repository"

### 步骤 2: 上传代码

**方法 A: 使用 GitHub 网页上传（推荐）**

1. 在仓库页面点击 "Add file" → "Upload files"
2. 将整个 `danzai-club` 文件夹拖进去
3. 点击 "Commit changes"

**方法 B: 使用 Git 命令**

```bash
cd /root/.openclaw/workspace/danzai-club

# 替换 YOUR_USERNAME 为你的 GitHub 用户名
git init
git add .
git commit -m "Initial commit - 星语的蛋仔乐园 🥚"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/danzai-club.git
git push -u origin main
```

### 步骤 3: 更新配置

上传后需要修改两个文件中的 GitHub 用户名：

**文件 1: `src/app.js`**
- 找到第 7 行：`githubOwner: 'OWNER'`
- 改为：`githubOwner: '你的 GitHub 用户名'`

**文件 2: `admin/config.yml`**
- 找到第 4 行：`repo: OWNER/danzai-club`
- 改为：`repo: 你的 GitHub 用户名/danzai-club`

修改后提交更改。

### 步骤 4: 连接 Vercel

1. 访问 [vercel.com](https://vercel.com)
2. 用 GitHub 账号登录
3. 点击 "Add New Project"
4. 选择 "Import Git Repository"
5. 找到 `danzai-club` 仓库，点击 "Import"
6. 保持默认设置，点击 "Deploy"
7. 等待部署完成（约 1 分钟）

### 步骤 5: 获取网站链接

部署完成后，Vercel 会给你一个链接：
- 格式：`https://danzai-club.vercel.app`
- 这就是网站的正式地址！

---

## 🎨 自定义头像

如果需要更换头像图片：

1. 准备 20 张卡通头像图片（100x100px）
2. 上传到 `public/images/avatars/` 目录
3. 更新 `src/app.js` 中的头像列表

---

## 📱 管理后台使用

### 访问后台
```
https://你的域名.vercel.app/admin
```

### 首次登录
1. 点击 "Login with GitHub"
2. 授权 Decap CMS 访问仓库
3. 登录成功！

### 发布活动
1. 点击左侧 "📢 活动公告"
2. 点击 "New Activity"
3. 填写活动信息
4. 点击 "Save"
5. 自动提交到 GitHub，Vercel 会自动重新部署

### 管理玩家
1. 玩家通过网站提交注册（GitHub Issue）
2. 在 GitHub 查看 Issue
3. 审核通过后，可以手动添加到玩家展示区

---

## 🔧 常见问题

### Q: 网站打不开？
A: 检查 Vercel 部署状态，确保没有报错。

### Q: GitHub Issues 无法加载？
A: 确保仓库是 Public 的，且配置中的用户名正确。

### Q: 如何修改网站颜色？
A: 编辑 `src/style.css` 中的 CSS 变量。

### Q: 如何更换域名？
A: 在 Vercel 项目设置中添加自定义域名。

---

## 📞 技术支持

如有问题，联系 OpenClaw 技术支持。

**祝星语的蛋仔乐园上线顺利！** 🎉🥚
