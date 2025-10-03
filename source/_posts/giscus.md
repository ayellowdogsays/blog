---
abbrlink: 63010
categories: []
date: '2025-02-15T18:20:44.340326+08:00'
tags: []
title: "给你的hexo加上自建评论区\U0001F47E"
updated: '2025-02-15T19:07:02.559+08:00'
---
# 自建giscus服务

今天，我的giscus崩了，因为太慢了，一气之下怒了一下🤣，便自己自建

若你也遇到但不想动手，用[我的URL即可](waline.laogoupro.us.kg)!

## 创建一个GitHub App

**前往[这个页面](https://github.com/settings/apps/new)创建一个Github App**

### 注册一个新的 GitHub App

![image-20240411162146774](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/imWfRv.png)

### 填入回调函数地址

![image-20240411162400664](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/3iEkCN.png)

* 使用 `https://[YOUR-DOMAIN-HERE]/api/oauth/authorized` 这样的格式作为回调地址，将中括号里的内容替换成你的域名。
  例如： `https://giscus.app/api/oauth/authorized`
* 将“**Expire user authorization tokens**”取消勾选。

### 编辑权限

为**Discussions**开启读写权限：

![image-20240411162855808](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/wU7Nmb.png)

### 用户权限

选当前用户就行了：

![image-20240411162935813](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/3G1iww.png)

### 其他设置

* Webhook，不需要使用取消勾选Active
* Post installation，不需要使用

### 创建GitHub App

[![image](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/KbbY36.png)](https://user-images.githubusercontent.com/6379424/120403234-fdb0b500-c36d-11eb-9cea-9879497cd3d6.png)

点击这个按钮

### 生成并下载Private keys

![image-20240411163318459](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/fnXL3b.png)

### 生成并记录Client secrets

![image-20240411163342018](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/Zecp1d.png)

### 记录app id 和 client id 备用

![image-20240411163426135](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/5tEFeB.png)

### 安装APP

![image-20240411163507793](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/7wioRl.png)

这里我们不要【【【【   suprbase  】】】】】】】】因为我懒

## 在Vercel部署Giscus

### fork giscus项目

首先将[giscus](https://github.com/giscus/giscus)项目fork到自己仓库。

![image-20240411164133004](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/6yYHqD.png)

### 在vercel部署

登录`vercel`，选择刚`fork`的`giscus`仓库，直接使用默认的参数部署。

### 配置域名

将前面预设好的域名映射一下。

![image-20240411165053003](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/AAs3rV.png)

### 添加配置

在Setting页面，增加相关配置参数。

![image-20240411164448843](https://gcore.jsdelivr.net/gh/cayzlh/fluffy-guide@master/2024/04/8Ek0DX.png)

这些参数全部来自前面步骤记录下来的内容，字段参考如下：


| `NEXT_PUBLIC_GISCUS_APP_HOST=https://yourdomain.com`<br/>`NEXT_PUBLIC_REVALIDATE_FIRST_PAGE=true`<br/>`GITHUB_APP_ID=APP ID`<br/>`GITHUB_CLIENT_ID=APP CLIENT ID`<br/>`GITHUB_CLIENT_SECRET=GITHUB CLIENT SECRET`<br/>`GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nENTER-KEY-HERE-WITHOUT-LINE-BREAKS\n-----END RSA PRIVATE KEY-----" # vercel可以直接将复制下来的值拷贝进去`<br/>`ENCRYPTION_PASSWORD= # 这个好像可以随便写`<br/>`SUPABASE_KEY= # SUPABSE的KEY`<br/>`SUPABASE_URL= # SUPABSE的项目URL`<br/>`SUPABASE_INSTALLATION_ACCESS_TOKENS_TABLE=installation_access_tokens`<br/>`# The following values are only for CORS-related stuff in the API.`<br/>`# The usage is different from the values in giscus.json.`<br/>`ORIGINS=["https://yourdomain.com", "https://yourdomain.com", "https://www.yourdomain.com"]`<br/>`ORIGINS_REGEX=["http://localhost:[0-9]+"]`<br/> |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## 在Stellar中应用

修改主题配置文件，将Giscus的src属性改成自己的域名就可以了。


| `######## Comments ########`<br/>`comments:`<br/>`  service: giscus # beaudar, utterances, giscus, twikoo, waline, artalk`<br/>`  # giscus`<br/>`  # https://giscus.app/zh-CN`<br/>`  giscus:`<br/>`    src: https://yourdomain.com/client.js # https://giscus.app/client.js`<br |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
