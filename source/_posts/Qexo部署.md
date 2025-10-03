---
abbrlink: 36382
categories: []
date: '2025-02-07T09:47:59.586289+08:00'
excerpt: ''
poster:
  caption: null
  color: null
  headline: null
  topic: null
tags: []
title: 给你的博客实现多端写作2
updated: '2025-02-07T11:39:39.656+08:00'
swiper_index: 2
banner:
references:
topic:
---
# 开头

上次我们讲了GitHub+vercel,这次我们讲Github+Vercel+Qexo,我们在部署Qexo时推荐vercel部署，在[[New Project – Vercel](https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo)]里点击部署，首次部署会报错, 请无视并进行接下来的步骤

### 申请 Vercel 数据库[](https://www.oplog.cn/qexo/start/build.html#%E7%94%B3%E8%AF%B7-vercel-%E6%95%B0%E6%8D%AE%E5%BA%93)

进入[Vercel Storage 界面](https://vercel.com/dashboard/stores) 然后点击右上角的 Create Database 并选择 neon 创建免费 PostgreSQL 数据库, 在 Connect 页面获取数据库连接信息。请注意在地区选择的位置选择与你上一步项目对应的地区（通常为 Washington, D.C., USA (East) - iad1）。

### 绑定项目[](https://www.oplog.cn/qexo/start/build.html#%E7%BB%91%E5%AE%9A%E9%A1%B9%E7%9B%AE)

在左侧边栏选择 Projects 点击 Connect Project 连接到你第一步创建的项目

### 部署[](https://www.oplog.cn/qexo/start/build.html#%E9%83%A8%E7%BD%B2)

回到你的项目页面，在 Deployments 点击 Redeploy 开始部署, 若没有 Error 信息即可打开域名进入初始化引导

然后我们就可以开始部署博客了

# 配置

我们应该创建githubclassis密钥，得到后填入github密钥中，接着仓库选择blog源码，分支自己填仓库分支

### Vercel 配置[](https://www.oplog.cn/qexo/configs/vercel.html#vercel-%E9%85%8D%E7%BD%AE)

### VERCEL\_TOKEN[](https://www.oplog.cn/qexo/configs/vercel.html#vercel-token)

接下来配置vercel,您的 Vercel 账户密钥 在 [此处](https://vercel.com/account/tokens) 生成

### PROJECT\_ID[](https://www.oplog.cn/qexo/configs/vercel.html#project-id)

您 Qexo 部署所在项目的 ID 位于 Qexo部署 -> Project Settings -> General -> Project ID
