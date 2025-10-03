---
abbrlink: '24180'
categories: []
date: '2025-02-15T18:38:48.352541+08:00'
swiper_index: 1
tags: []
title: hexo博客
updated: '2025-02-15T18:38:48.352541+08:00'
---
## 官方"

hexo.io

## 第一步"

先安装git和node.js到电脑中，教程如下👇
点击下载node.js https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi
点击下载git https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/Git-2.47.1-64-bit.exe

## 二"

🆗呀！你已经完成了，接下来开始的安装过程吧，可以配置一些淘宝镜像源，但是不介意速度的就直接在git中复制

```复制to'git'
npm install -g hexo-cli
```

🆗加载好了，在桌面新建一个文件夹，右击选择open git bash here,启动后输

```复制to'git'
hexo into 你随意名字命名
```

🆗你又好了对吧？直接又输入

```复制to'git'
cd 刚刚名字
```

此时基本🆗，先输入hexo g，ok后写入hexo s，这下可以本地预览了！

## 第N步"

主题自己配置，到hexo.io，进theme这里建议stellar主题，很好用，具体：www.xaoxuu.com/wiki/stellar
#安装方法
选自stellar安装文档
npm i hexo-theme-stellar
在 _config.yml 文件中找到并修改：
theme: stellar

## 第N步"

主题可以自己魔改，接下来发文章，在\source\_posts里新建XXX.md，格式

```复制to'git'
---
title: 标题
---
```

## 第N步"

新建github账户，创建一个仓库，名字叫GitHub名字.github.io，公开的，复制一下仓库地址！
在config.yml,在下面找到#
deploy:
type: 'git'
repo: 自己的
branch: main
就可输入名字.github.io访问了！
