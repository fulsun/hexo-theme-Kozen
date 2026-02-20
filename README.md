# Kozen Theme for Hexo

## 简介

Kozen 是一个为 Hexo 博客框架设计的自定义主题，结合 "Ko" 和 "Ozen"（Zen 的变体，禅意），寓意简洁、宁静的阅读体验。

## 主题名称由来

- **Ko**：来自朋友的建议
- **Ozen**：Zen 的变体，代表禅意
- **Kozen**：寓意简洁、宁静的阅读体验，为用户提供沉浸式的博客阅读环境

## 功能特性

- 简洁现代的设计风格
- 响应式布局，适配各种设备
- 支持文章列表和单篇文章展示
- 支持分类和标签
- 支持分页导航
- 自定义菜单配置
- 易于扩展和定制

## 安装方法

### 1. 克隆主题到本地

```bash
git clone https://github.com/yourusername/kozen.git themes/kozen
```

### 2. 配置 Hexo 使用此主题

在 Hexo 博客的根目录下的 `_config.yml` 文件中设置：

```yaml
theme: kozen
```

### 3. 安装依赖

```bash
npm install
```

### 4. 生成并预览

```bash
hexo clean && hexo g && hexo s
```

然后访问 `http://localhost:4000` 查看效果。

## 配置选项

在主题目录下的 `_config.yml` 文件中可以配置以下选项：

```yaml
# 主题配置文件
name: Kozen
version: 1.0.0
author:
    name: Your Name
    description: 'A blog about technology life.'
    avatar: '/images/default-avatar.jpg'
social:
  github: https://github.com/yourusername
  twitter: 
  email: yourname@example.com
  rss: yourname@example.com

language: zh-CN
menu:
  Home: / || fas fa-home
  Archives: /archives || fas fa-archive
```

## 目录结构

```
kozen/
├── _config.yml              # 主题配置
├── package.json             # 依赖配置
├── README.md                # 主题说明
├── layout/                  # 模板文件
│   ├── layout.ejs           # 布局模板
│   ├── index.ejs            # 首页模板
│   ├── post.ejs             # 文章模板
│   └── partials/            # 组件
│       ├── header.ejs       # 头部组件
│       └── footer.ejs       # 底部组件
└── source/                  # 静态资源
    ├── css/                 # 样式文件
    │   └── style.min.css    # 主样式文件
    ├── js/                  # 脚本文件
    │   └── main.js          # 主脚本文件
    └── images/              # 图片资源
```

## 使用方法

### 添加文章

在 `source/_posts` 目录下创建 Markdown 文件，例如 `hello-world.md`：

```markdown
---
title: Hello World
date: 2023-01-01 00:00:00
tags:
  - 测试
categories:
  - 示例
---

这是我的第一篇博客文章。
```

### 自定义样式

可以修改 `source/css/style.css` 文件来自定义主题样式。

### 自定义脚本

可以修改 `source/js/main.js` 文件来自定义主题脚本。

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个主题。

## 许可证

本主题采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。
