# 配置说明

RDE 使用配置文件管理系统设置。

## 配置文件

安装后配置文件位于 `/etc/rde/conf.conf`。

```ini
# 监听端口
port = 80

# 数据存储目录
data_dir = /var/lib/rde

# 调试模式
debug = false

# 日志级别
log_level = info
```

## 配置项说明

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| `port` | `80` | HTTP 监听端口 |
| `data_dir` | `/var/lib/rde` | 数据存储目录（数据库、用户文件） |
| `debug` | `false` | 调试模式，开启后输出详细日志 |
| `log_level` | `info` | 日志级别：debug/info/warn/error |

## 数据目录结构

```
/var/lib/rde/
├── rde.db           # SQLite 数据库
├── uploads/         # 上传文件缓存
├── thumbnails/      # 缩略图缓存
└── plugins/         # 插件数据
```

## 环境变量

也可通过环境变量覆盖配置：

| 环境变量 | 对应配置项 |
|----------|-----------|
| `RDE_PORT` | `port` |
| `RDE_DATA_DIR` | `data_dir` |
| `RDE_DEBUG` | `debug` |

## 修改配置

```bash
# 编辑配置文件
sudo vim /etc/rde/conf.conf

# 重启服务使配置生效
sudo systemctl restart rde
```
