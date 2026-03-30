# 个人作品集网站部署指南

本文档提供了多种免费部署方案，您可以选择最适合您的方式来部署您的个人作品集网站。

## 方案一：GitHub Pages（推荐）

### 优点：
- 完全免费
- 支持自定义域名
- 全球CDN加速
- 版本控制
- 社区支持好

### 部署步骤：

1. **创建GitHub账号**
   - 访问 https://github.com 注册账号

2. **创建仓库**
   - 点击右上角 "+" 按钮，选择 "New repository"
   - 仓库名称：`yourname.github.io`（将yourname替换为您的GitHub用户名）
   - 设置为Public（公开）
   - 点击 "Create repository"

3. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - 将以下文件拖拽到上传区域：
     - `index.html`
     - `portfolio.html`
     - `articles.html`
     - `about.html`
     - `css/style.css`
     - `js/script.js`
   - 点击 "Commit changes"

4. **访问网站**
   - 等待1-2分钟
   - 访问：`https://yourname.github.io`

### 自定义域名（可选）：
- 在仓库中创建 `CNAME` 文件
- 文件内容填入您的域名（如：`www.yourdomain.com`）
- 在域名服务商处配置DNS记录

---

## 方案二：Vercel

### 优点：
- 部署速度快
- 支持自动部署
- 提供免费SSL证书
- 界面友好

### 部署步骤：

1. **注册Vercel账号**
   - 访问 https://vercel.com 注册（推荐使用GitHub账号登录）

2. **导入项目**
   - 登录后点击 "Add New Project"
   - 选择您的GitHub仓库
   - 点击 "Import"

3. **配置部署**
   - Framework Preset: Other
   - Root Directory: `./`
   - 点击 "Deploy"

4. **获取访问链接**
   - 部署完成后，Vercel会提供一个 `.vercel.app` 域名
   - 可以在项目设置中自定义域名

---

## 方案三：Netlify

### 优点：
- 拖拽部署
- 自动HTTPS
- 表单处理功能
- 免费额度充足

### 部署步骤：

1. **注册Netlify账号**
   - 访问 https://netlify.com 注册

2. **拖拽部署**
   - 登录后，将整个项目文件夹拖拽到Netlify页面
   - 等待部署完成

3. **自定义设置**
   - 可以在Site settings中更改域名
   - 配置重定向规则等

---

## 方案四：Gitee Pages（国内推荐）

### 优点：
- 国内访问速度快
- 中文界面
- 完全免费
- 支持自定义域名

### 部署步骤：

1. **创建Gitee账号**
   - 访问 https://gitee.com 注册账号

2. **创建仓库**
   - 点击右上角 "+" 按钮，选择 "新建仓库"
   - 仓库名称：任意名称
   - 设置为公开
   - 点击 "创建"

3. **上传文件**
   - 在仓库页面点击 "文件" -> "上传文件"
   - 上传所有网站文件

4. **启用Gitee Pages**
   - 进入仓库页面
   - 点击 "服务" -> "Gitee Pages"
   - 选择分支：master
   - 点击 "启动"
   - 等待部署完成

5. **访问网站**
   - 访问：`https://yourname.gitee.io/your-repo-name`

---

## 方案五：Cloudflare Pages

### 优点：
- 全球CDN加速
- 无限带宽
- 自动部署
- DDoS防护

### 部署步骤：

1. **注册Cloudflare账号**
   - 访问 https://dash.cloudflare.com 注册

2. **连接GitHub**
   - 在Workers & Pages页面连接GitHub账号
   - 选择要部署的仓库

3. **配置构建设置**
   - 构建命令：留空
   - 构建输出目录：`/`
   - 点击 "Save and Deploy"

---

## 推荐方案选择

### 如果您：
- **有GitHub账号**：推荐使用 **GitHub Pages**
- **想要快速部署**：推荐使用 **Vercel**
- **在国内使用**：推荐使用 **Gitee Pages**
- **需要全球加速**：推荐使用 **Cloudflare Pages**

## 部署前检查清单

- [ ] 确保所有文件路径正确（CSS、JS文件路径）
- [ ] 检查图片链接是否有效
- [ ] 测试所有页面链接是否正常
- [ ] 检查移动端显示效果
- [ ] 确保没有本地路径引用

## 常见问题

### Q: 部署后页面显示空白？
A: 检查浏览器控制台是否有错误，通常是文件路径问题。

### Q: 图片无法显示？
A: 确保图片使用的是相对路径或在线URL，不要使用本地绝对路径。

### Q: 如何更新网站？
A: 只需更新对应仓库中的文件，部署平台会自动重新部署。

### Q: 可以绑定自己的域名吗？
A: 可以，所有平台都支持自定义域名绑定。

## 联系支持

如果在部署过程中遇到问题，可以：
- 查看各平台的官方文档
- 在社区论坛寻求帮助
- 检查浏览器控制台错误信息

---

**祝您部署成功！**