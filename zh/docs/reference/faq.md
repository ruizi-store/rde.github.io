# 常见问题

## 安装相关

### 安装后无法访问？

检查以下几点：
1. RDE 服务是否正在运行：`sudo systemctl status rde`
2. 端口是否被占用：`sudo ss -tlnp | grep :80`
3. 防火墙是否放行端口：`sudo ufw allow 80`

### 支持哪些操作系统？

目前支持 Debian/Ubuntu 系列（提供 DEB 安装包）。其他 Linux 发行版可从源码编译安装。

### 如何更新到最新版本？

```bash
wget https://github.com/ruizi-store/rde/releases/latest/download/rde_amd64.deb
sudo apt install ./rde_amd64.deb
```

## 使用相关

### Docker 应用商店看不到容器？

确保服务器已安装 Docker，且 RDE 运行用户有 Docker 权限：

```bash
sudo usermod -aG docker $USER
```

### 文件上传失败？

- 检查磁盘空间是否充足
- 大文件上传支持 TUS 断点续传，刷新页面后可恢复上传
- 检查反向代理是否限制了请求体大小（Nginx 需设置 `client_max_body_size`）

### 终端连接断开？

终端使用 WebSocket 连接，确保：
1. 反向代理正确转发 WebSocket（配置 `Upgrade` 头）
2. 反向代理没有设置过短的超时时间

### 如何更换端口？

编辑 `/etc/rde/conf.conf` 修改 `port` 配置项，然后重启服务。

## 增值服务相关

### Docker 镜像拉取失败？

1. 检查网络连接
2. 尝试使用镜像加速（参考 [国际化与镜像加速](/zh/docs/guide/i18n)）

### 如何查看会员到期时间？

在 RDE 设置中查看「会员信息」，或登录 [会员商城](/shop) 查看。

## 其他问题

有更多问题？欢迎 [加入 QQ 交流群](/community) 与我们沟通。
