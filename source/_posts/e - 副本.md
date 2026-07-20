---
title:  hexo可控夜间模式
tags: Stellar
cover: https://api.iconify.design/tabler:brand-hexo.svg?color=%235d95b1
date: 2023-01-01 00:00:00
---
# 前言
在手机上习惯用深色，所以给blog也添加一个调整开关，由于最新的主题以及包括夜间文件，所以我们只要添加开关就行了
## 上手
先把这个官方文档的页脚加入blog
``` 复制to'git'
footer:
  social:
footer:
  social:
    github:
      icon: '<img src="/assets/placeholder/social/08a41b181ce68.svg"/>'
      url: https://
    music:
      icon: '<img src="/assets/placeholder/social/3845874.svg"/>'
      url: https://
    unsplash:
      icon: '<img src="/assets/placeholder/social/3616429.svg"/>'
      url: https://
    comments:
      icon: '<img src="/assets/placeholder/social/942ebbf1a4b91.svg"/>'
      url: https://
    theme:
      icon: default:theme
      onclick: 'switchTheme()'

```
就完事了！
# 如果
你用的是stellar18可以借鉴{https://blog.thatcoder.cn/Stellar%E5%8F%AF%E6%8E%A7%E5%A4%9C%E9%97%B4%E6%A8%A1%E5%BC%8F/}