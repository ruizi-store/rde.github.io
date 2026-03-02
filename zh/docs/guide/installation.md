# 安装部署

## 系统要求

| 项目 | 最低要求 | 推荐 |
|------|---------|------|
| 操作系统 | Debian 11+ / Ubuntu 20.04+ | Ubuntu 22.04 LTS |
| CPU | 1 核 | 2 核+ |
| 内存 | 1 GB | 2 GB+ |
| 磁盘 | 10 GB | 20 GB+ |
| Docker | 可选（用于应用商店） | 建议安装 |

## 安装方式

### DEB 包安装（推荐）

```bash
# 下载最新版
wget https://github.com/ruizi-store/rde/releases/latest/download/rde_amd64.deb

# 安装
sudo apt install ./rde_amd64.deb
```

安装后 RDE 自动注册为 systemd 服务并启动。

### 从源码构建

```bash
git clone https://github.com/ruizi-store/rde.git
cd rde
make deb
sudo apt install ./outputs/rde_*.deb
```

## 服务管理

```bash
# 查看状态
sudo systemctl status rde

# 启动/停止/重启
sudo systemctl start rde
sudo systemctl stop rde
sudo systemctl restart rde

# 查看日志
sudo journalctl -u rde -f
```

## 反向代理

如果需要通过域名 + HTTPS 访问，推荐使用 Caddy 或 Nginx 做反向代理：

### Caddy 示例

```
your-domain.com {
    reverse_proxy localhost:80
}
```

### Nginx 示例

```nginx
server {
    listen 443 ssl;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

::: tip
WebSocket 连接（终端、下载进度等）需要在反向代理中正确配置 `Upgrade` 头。
:::

## 数据目录

| 路径 | 说明 |
|------|------|
| `/etc/rde/` | 配置文件 |
| `/var/lib/rde/` | 数据库、用户数据 |
| `/usr/bin/rde` | 可执行文件 |

## 卸载

```bash
sudo apt remove rde
```

## 下一步

- [桌面环境](/zh/docs/guide/desktop) — 了解桌面功能
- [配置说明](/zh/docs/reference/config) — 详细配置参考
- [常见问题](/zh/docs/reference/faq) — 部署常见问题
