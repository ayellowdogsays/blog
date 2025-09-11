---
abbrlink: 没想到很久没更这个系列了，🐱
categories:
- - 没想到很久没更这个系列了，🐱
date: '2025-07-24T16:35:33.158330+08:00'
tags:
- 没想到很久没更这个系列了，🐱
title: stellar主题修改
updated: '2025-07-24T16:49:26.259+08:00'
---
# 开头

没想到很久没更这个系列了，🐱，把折腾的都记录一下

# 每日热点

新建new/index.html,把这个图片![https://api.szfx.top/morning-paper](https://api.szfx.top/morning-paper)放入，例如


| `!(1)[https://api.szfx.top/morning-paper]`<br/><br /> |
| ----------------------------------------------------- |

# 搜索框透明,1.30.4,附上代码css

在`/source/css/...../search.styl   `中打开，替换为

```css







.search-wrapper {
  padding-bottom: 32px;
  width: 100%;
  border-radius: $border-card-s;
  
  > .search-form {
    position: sticky;
    top: 0;
    height: 48px;  // Slightly taller for better interaction
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.38s ease-out;
    z-index: 1;
    border-radius: $border-card-s;
    color: var(--text);
    background: var(--bg-a5);  // Subtle background
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
    > * {
      z-index: 1;
    }
  
    &:before {
      position: absolute;
      content: '';
      height: 2px;
      bottom: 0;
      left: 1rem;
      right: 1rem;
      border-radius: $border-bar;
      background: var(--theme-a30);  // Use theme color for accent
      z-index: 0;
      transition: all 0.3s ease;
    }
  
    &:hover,
    &:has(input:focus),
    &:has(input:not(:placeholder-shown)) {
      background: var(--bg-a10);  // Slightly more visible on interaction
  
      &:before {
        background: var(--theme-a50);  // More prominent theme color
        height: 100%;
        left: 0;
        right: 0;
      }
  
      .search-button svg {
        color: var(--theme);  // Match icon with theme
      }
    }
  }
  
  .search-input {
    width: 100%;
    box-sizing: border-box;
    font-family: $ff-body;
    font-size: $fs-15;  // Slightly larger font
    padding: 12px 16px;  // More horizontal padding
    color: var(--text);
    background: transparent;
    border: none;
    outline: none;
  
    &::placeholder {
      color: var(--text-p3);
      transition: color 0.2s ease;
  
      @media screen and (prefers-color-scheme: dark) {
        color: var(--text-p2);
      }
    }
  
    &:focus::placeholder {
      color: var(--text-p4);  // Make placeholder fade more when focused
    }
  }
  
  .search-button {
    border-radius: $border-bar;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
  
    &:hover {
      background: var(--bg-a20);
    }
  
    svg {
      height: 1.1rem;  // Slightly larger icon
      width: 1.1rem;
      color: var(--text-p2);
      fill: currentColor;
      transition: color 0.2s ease;
  
      path[p-id="1562"] {
        color: var(--theme);
      }
    }
  }
  
  &[searching='true'] {
    .search-button {
      animation: pulse 1.5s infinite;
  
      path[p-id="1562"] {
        color: $c-green;
      }
    }
  }
  
  &.noresult[searching='true'] {
    .search-button {
      path[p-id="1562"] {
        color: $c-red;
      }
    }
  }
  
  .search-no-result {
    display: none;
    color: var(--text-p1);
    text-align: center;
    font-size: $fs-14;
    padding: 2rem;
    margin: 8px 0;
    background: var(--bg-a20);
    border-radius: $border-card-s;
    border: 1px dashed var(--bg-a50);
  }
  
  #search-result {
    max-height: 60vh;
    overflow: auto;
    scrollbar-width: none;
    scrollbar(0, 0);
    border-radius: $border-bar;
    margin-top: 12px;
  
    &:empty {
      display: none;
    }
  
    .search-result-list {
      padding: 0;
      margin: 8px 0;
      list-style-type: none;
    }
  
    li a {
      display: block;
      background: var(--bg-a20);
      line-height: 1.2;
      padding: 1rem;  // More padding
      border-radius: $border-card-s;
      transition: all 0.2s ease;
      border-left: 3px solid transparent;
  
      &:hover {
        background: var(--bg-a100);
        border-left-color: var(--theme);  // Accent border
        transform: translateX(2px);
      }
    }
  
    li + li {
      margin-top: 8px;
    }
  
    .search-result-title {
      color: var(--text-p1);
      font-weight: 700;
      font-size: $fs-15;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
  
      &:before {
        content: '→';
        margin-right: 6px;
        color: var(--theme);
        font-size: 0.9em;
      }
    }
  
    .search-result-content {
      overflow: hidden;
      color: var(--text-p3);
      margin: 4px 0 0;
      max-height: 13em;
      text-align: justify;
      font-size: $fs-13;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
      line-height: 1.5;
    }
  
    .search-keyword {
      color: var(--theme);  // Use theme color instead of red
      font-weight: bold;
      background: var(--theme-a10);
      padding: 0 2px;
      border-radius: 2px;
    }
  }
}

.search-wrapper.noresult[searching='true'] {
  .search-no-result {
    display: block;
    margin-bottom: 8px;
  }
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
}
```

# Menu

菜单栏按下动效以及搜索框是deepseek写的

```
.nav-area .menu {
  display: grid;
  margin-bottom: 12px;
  padding: 6px;
  border-radius: 24px; /* 增大外圆角 */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 1px rgba(255, 255, 255, 0.1);
  grid-template-columns: repeat(hexo-config('menubar.columns'), 1fr);
  grid-gap: 6px; /* 增大间距 */
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  touch-action: pan-x;

  /* 隐藏滚动条 */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  .nav-item {
    box-sizing: border-box;
    width: 100%;
    min-height: 52px; /* 增加高度 */
    font-size: $fs-15;
    font-weight: 500;
    color: var(--text-p3);
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 18px; /* 增大圆角 */
    margin: 0;
    padding: 8px 4px;
  
    /* 图标样式 */
    img, svg {
      height: 26px;
      width: 26px;
      object-fit: contain;
      filter: grayscale(100%) brightness(0.8) opacity(0.8);
      transition: all 0.3s ease;
      margin-bottom: 4px;
    }
  
    /* 文字样式 */
    span {
      text-overflow: ellipsis;
      word-break: keep-all;
      white-space: nowrap;
      font-size: $fs-12;
      line-height: 1.2;
    }
  
    /* 激活和悬停状态 */
    &.active, &:hover {
      color: var(--text-p1);
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(10px);
      box-shadow: 
        0 4px 12px rgba(0, 0, 0, 0.1),
        inset 0 1px 1px rgba(255, 255, 255, 0.2);
  
      img, svg {
        filter: unset;
        transform: scale(1.15);
      }
    }
  
    /* 激活状态指示器 */
    &.active:after {
      content: '';
      position: absolute;
      width: 20px;
      height: 3px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 3px;
      bottom: 6px;
      background: currentColor;
      opacity: 0.8;
    }
  
    /* 按压效果 */
    &:active {
      transform: scale(0.96);
      transition: transform 0.1s ease;
    }
  }
}

/* 拖动状态样式 */
.nav-area.dragging .menu {
  cursor: grabbing;
  
  .nav-item {
    transition: none !important;
    pointer-events: none;
  }
}

/* 响应式调整 */
@media screen and (max-width: $device-mobile) {
  .nav-area .menu {
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
    padding: 8px;
    border-radius: 20px;
  
    .nav-item {
      min-height: 48px;
      padding: 6px 4px;
      border-radius: 16px;
  
      img, svg {
        height: 22px;
        width: 22px;
      }
  
      span {
        font-size: $fs-11;
      }
  
      &.active:after {
        width: 18px;
        bottom: 5px;
      }
    }
  }
}

/* 滚动指示器（可选） */
.menu-scroll-indicator {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  &.left {
    left: 0;
    background: linear-gradient(90deg, rgba(255,255,255,0.5), transparent);
  }
  
  &.right {
    right: 0;
    background: linear-gradient(270deg, rgba(255,255,255,0.5), transparent);
  }
  
  &.visible {
    opacity: 1;
  }
  
  i {
    background: rgba(255,255,255,0.8);
    border-radius: 50%;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    color: var(--theme);
  }
}
```

```

```
