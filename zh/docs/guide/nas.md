# NAS 镜像安装

RDE 提供基于 **Debian 13** 构建的 ISO 镜像，可将任意 x86_64 主机变成功能完整的 NAS + 云桌面。

## 与 curl 部署的区别

| | curl / deb 部署 | NAS ISO 镜像 |
|---|---|---|
| **基础系统** | 需已有 Ubuntu / Debian | 自带完整 Debian 13 系统 |
| **依赖** | 需通过网络安装部分依赖 | 全部预装，开箱即用 |
| **Flatpak** | 首次运行需 setup 安装依赖 | 已预装，无需额外 setup |
| **适用场景** | 已有云服务器 / VPS | 全新硬件 / 旧电脑改 NAS |
| **安装方式** | 一行命令 | U 盘启动安装 |

## 下载

<a href="https://pan.baidu.com/s/1VcEEPIlWV8IuvXQRj9xUCA?pwd=rde1" target="_blank" style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.5rem; background: linear-gradient(135deg, #4F46E5, #7C3AED); color: white; border-radius: 8px; text-decoration: none; font-weight: 600;">
📥 百度网盘下载
</a>

提取码：`rde1`

## 系统要求

- **CPU**: x86_64 架构（Intel / AMD）
- **内存**: 最低 2GB，推荐 4GB+
- **磁盘**: 最低 16GB，推荐 64GB+ SSD
- **网络**: 有线网络连接

## 安装步骤

### 1. 制作启动 U 盘

准备一个 4GB 以上的 U 盘，使用以下工具将 ISO 写入：

**Windows:**
- [Rufus](https://rufus.ie/) — 选择 ISO 文件，分区类型选 GPT，点击开始
- [Ventoy](https://www.ventoy.net/) — 安装 Ventoy 后，直接把 ISO 复制到 U 盘即可

**Linux / macOS:**
```bash
# 查找 U 盘设备名（如 /dev/sdb）
lsblk

# 写入 ISO（注意替换设备名，会清除 U 盘所有数据）
sudo dd if=rde-os.iso of=/dev/sdX bs=4M status=progress && sync
```

### 2. BIOS 设置

1. 插入 U 盘，开机按 `F2` / `F12` / `Del` 进入 BIOS
2. 设置 U 盘为第一启动项
3. 保存退出，自动从 U 盘启动

### 3. 安装系统

按照 Debian 安装向导完成系统安装。安装完成后重启，RDE 桌面会自动启动。

### 4. 访问桌面

在浏览器中访问 `http://<NAS_IP>:3080` 即可进入 RDE 桌面。

## 预装内容

ISO 镜像相比 curl 部署版本，额外预装了：

- **Flatpak 运行环境**：直接安装 Flatpak 应用，无需 setup
- **完整系统依赖**：所有 RDE 依赖的系统库和工具
- **硬盘管理工具**：方便 NAS 场景下管理多硬盘
- **网络配置工具**：静态 IP、网桥等 NAS 常用网络配置

## 常见问题

### 安装后如何更新 RDE？

ISO 安装的 RDE 可以通过 deb 包更新：

```bash
wget https://rde.lidj.cn/releases/rde_latest_amd64.deb && sudo apt install -y ./rde_latest_amd64.deb
```

### 能否在虚拟机中体验？

可以。在 VMware / VirtualBox / Proxmox 中创建虚拟机，挂载 ISO 安装即可。推荐分配 2 核 4GB 内存。

### 与群晖 / 飞牛有什么区别？

RDE 是开源的 Web 桌面方案，可运行在任意 x86 硬件上。相比群晖和飞牛：
- 完全开源，无授权限制
- 内置 Docker 应用商店
- Web 桌面体验，不仅是 NAS 管理界面
