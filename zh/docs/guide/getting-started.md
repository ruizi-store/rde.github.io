# 快速开始

本指南将帮助你在 5 分钟内安装并运行 RDE 瑞子云桌面。

## 系统要求

- Debian / Ubuntu（推荐 Ubuntu 22.04+）
- 至少 1GB 内存，10GB 磁盘
- 已安装 Docker（用于 Docker 应用商店功能）

## 一键安装

```bash
# Debian / Ubuntu
wget https://github.com/ruizi-store/rde/releases/latest/download/rde_amd64.deb
sudo apt install ./rde_amd64.deb
```

安装完成后，RDE 将自动启动为系统服务。

## 访问桌面

打开浏览器访问：

```
http://服务器IP:80
```

首次访问会进入初始化向导，设置管理员账号和基本配置。

## 初始化向导

1. **设置语言**：选择界面语言（中文/English）
2. **创建管理员**：设置管理员用户名和密码
3. **镜像源配置**：中文用户可一键启用国内镜像源加速（APT/Docker/NPM/PIP 等）
4. **完成**：进入桌面环境

## 开始使用

进入桌面后，你可以：

- 📁 打开**文件管理器**浏览和管理服务器文件
- 💻 打开 **Web 终端**执行命令
- 🐳 进入 **Docker 应用商店**一键部署应用
- ⬇️ 使用**下载管理器**下载文件
- 🎵 播放音乐、🎬 观看视频

## 开发环境

如果你想参与 RDE 的开发：

```bash
git clone https://github.com/ruizi-store/rde.git
cd rde

# 前后端一键启动
make dev

# 或分别启动
cd backend && go run .        # 后端 :80
cd frontend && pnpm dev       # 前端 :5173
```

## 构建安装包

```bash
make deb    # 构建 DEB 安装包
```

## 下一步

- [安装部署](/zh/docs/guide/installation) — 详细配置和部署选项
- [桌面环境](/zh/docs/guide/desktop) — 了解桌面操作
- [Docker 应用商店](/zh/docs/guide/docker) — 一键部署容器应用
