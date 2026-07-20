---
title: hexo博客
swiper_index: 1
cover: https://api.iconify.design/tabler:brand-hexo.svg?color=%235d95b1
date: 2023-01-01 00:00:00
---
## 官方
hexo.io
## 第一步
先安装git和node.js到电脑中，教程如下👇
点击下载[node.js](https://nodejs.org/dist/v22.11.0/node-v22.11.0-x64.msi)
点击下载[git](https://github.com/git-for-windows/git/releases/download/v2.47.1.windows.1/Git-2.47.1-64-bit.exe)

## 二
你已经完成了，接下来可以配置阿里镜像源，不介意速度的就直接在git中复制

``` 复制to'git'
npm install -g hexo-cli
```
🆗加载好了，在自选路径中写
``` 复制to'git'
hexo into name
```
再cd进去
``` 复制to'git'
cd 刚刚名字
```
此时写hexo s，这下可以本地预览了！
## 第N步
主题自己配置，到hexo.io，进theme这里建议stellar主题，很好用，具体：www.xaoxuu.com/wiki/stellar
#安装方法
选自stellar安装文档
npm i hexo-theme-stellar
在 _config.yml 文件中找到并修改：
theme: stellar
再安装一点点模块就好了

## 第N步"
主题可以自己改，接下来发文章，在\source\_posts里新建XXX.md，格式
``` 复制to'git'
---
title: 标题
---
```

## 第N步"
新建github账户，创建一个仓库，名字叫GitHub名字.github.io，公开的，复制一下仓库地址
在config.yml,在下面找到
```
deploy:
  type: 'git'
  repo: 自己的
  branch: main

```
就可输入名字.github.io访问了！