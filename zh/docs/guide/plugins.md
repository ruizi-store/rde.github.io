# 插件系统

RDE 支持通过插件扩展功能，采用 Unix Socket HTTP 通信机制，支持热插拔加载。

## 插件架构

```
RDE 主进程
  ↕ Unix Socket HTTP
插件进程（独立二进制）
```

插件作为独立进程运行，通过 Unix Socket 与 RDE 主进程通信。这种设计确保：

- 插件崩溃不影响主程序
- 支持多语言开发插件（Go、Python、Node.js 等）
- 热插拔，无需重启 RDE

## 插件能力

插件可以：

- 注册新的桌面应用（窗口、图标、菜单项）
- 添加 API 路由
- 监听系统事件
- 访问文件系统

## 开发插件

一个最简单的插件示例：

```go
package main

import (
    "net"
    "net/http"
)

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte(`{"message": "Hello from plugin!"}`))
    })

    listener, _ := net.Listen("unix", "/run/rde/plugins/hello.sock")
    http.Serve(listener, mux)
}
```

## 插件清单

每个插件需要一个 `manifest.json` 描述文件：

```json
{
  "id": "hello-plugin",
  "name": "Hello Plugin",
  "version": "1.0.0",
  "description": "A sample plugin",
  "entry": "./hello-plugin",
  "socket": "/run/rde/plugins/hello.sock"
}
```

## 安装插件

将插件目录放置到 RDE 的插件目录下，RDE 会自动检测并加载。

详细的插件开发指南请参考 [GitHub 仓库](https://github.com/ruizi-store/rde/tree/main/examples)。
