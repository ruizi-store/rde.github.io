# API 参考

RDE 后端提供 RESTful API，以下是主要接口说明。

## 基础信息

- **默认端口**: `:80`
- **认证方式**: JWT Token（通过 Cookie 或 Authorization Header）
- **数据格式**: JSON

## 认证接口

### 登录

```http
POST /api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "your-password"
}
```

**响应:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "username": "admin"
  }
}
```

## 文件管理

### 列出目录

```http
GET /api/files/list?path=/home/user
Authorization: Bearer <token>
```

### 上传文件

使用 TUS 协议进行断点续传上传：

```http
POST /api/files/upload
Tus-Resumable: 1.0.0
Upload-Length: <file-size>
```

### 下载文件

```http
GET /api/files/download?path=/home/user/file.txt
Authorization: Bearer <token>
```

## Docker 管理

### 容器列表

```http
GET /api/docker/containers
Authorization: Bearer <token>
```

### 创建容器

```http
POST /api/docker/containers
Authorization: Bearer <token>
Content-Type: application/json

{
  "image": "nginx:latest",
  "name": "my-nginx",
  "ports": {"80": "8080"}
}
```

## 终端

### WebSocket 连接

```
WS /api/terminal/ws?id=<session-id>
```

通过 WebSocket 建立终端连接，实时通信。

## 下载管理

### 添加下载任务

```http
POST /api/download/add
Authorization: Bearer <token>
Content-Type: application/json

{
  "url": "https://example.com/file.zip",
  "dir": "/home/user/downloads"
}
```

## 错误响应

```json
{
  "error": "error_code",
  "message": "错误描述"
}
```

| 状态码 | 说明 |
|--------|------|
| 400 | 请求参数错误 |
| 401 | 未认证 |
| 403 | 无权限 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |
