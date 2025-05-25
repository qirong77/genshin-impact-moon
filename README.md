# Genshin Impact Moon


[Song of the Welkin Moon - 空月之歌](https://qirong77.github.io/genshin-impact-moon/)

![预览图](./image.png)

## 项目简介

**Genshin Impact Moon** 是一个基于 Three.js 构建的 3D 场景展示项目，灵感来源于《原神》的空月之歌主题。项目通过丰富的星环、流星背景、卫星等元素，营造出梦幻般的深空场景。

## 功能特性

- **星环效果**：动态星环，支持自定义颜色、透明度、随机性等参数。
- **流星背景**：动态流星效果，增强场景的沉浸感。
- **卫星系统**：可旋转的卫星和装饰元素。
- **GUI 控制**：通过 lil-gui 实现实时参数调整。
- **响应式渲染**：支持窗口大小变化的自动调整。

## 本地开发

### 环境要求

- Node.js >= 18

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建项目

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 项目结构


```
src/
  ├── common/      # 通用工具和配置
  │   ├── axisHelper.ts       # 提供坐标轴辅助功能的工具模块
  │   ├── gui.ts              # 用于创建和管理 GUI 控制面板的模块
  │   ├── main.ts             # 初始化 Three.js 场景的主模块
  │   └── resizeRendererToDisplaySize.ts # 动态调整渲染器尺寸的工具模块
  ├── scene/       # 场景模块
  │   ├── 1-mask/             # 包含场景遮罩和启动界面的模块
  │   ├── 2-moon/             # 负责月亮场景的模块
  │   │   ├── components/     # 月亮场景的独立组件
  │   │   └── moon-gui.ts     # 配置月亮场景 GUI 的模块
  │   ├── 3-wheel/            # 负责星环场景的模块
  │   │   ├── components/     # 星环场景的独立组件
  │   │   └── groups/         # 星环场景的组合模块
  │   └── common/             # 通用的场景组件模块
  ├── style.css    # 定义全局样式的 CSS 文件
  └── main.ts      # 项目的入口文件
```


## 许可证

MIT License
