# Docker 应用商店

RDE 提供可视化的 Docker 容器管理和应用商店，无需记忆复杂命令即可部署和管理容器应用。

## 应用商店

预置常用应用模板，一键部署：

- 数据库：MySQL, PostgreSQL, Redis, MongoDB
- Web 服务：Nginx, Caddy, Apache
- 开发工具：GitLab, Jenkins, Portainer
- 更多社区应用持续更新

## 容器管理

### 容器操作

- **创建**：通过应用模板或自定义配置创建容器
- **启动/停止**：一键控制容器运行状态
- **重启**：重启运行中的容器
- **删除**：移除不需要的容器
- **日志**：实时查看容器日志输出

### 容器详情

查看容器的详细信息：

- 运行状态和资源占用
- 端口映射
- 挂载卷
- 环境变量
- 网络配置

## 镜像管理

- 查看本地镜像列表
- 拉取 Docker Hub 镜像
- 删除不需要的镜像
- 查看镜像层信息

::: tip Docker 镜像加速
国内用户拉取 Docker Hub 镜像可能很慢，RDE 会员可使用内置的 [Docker 镜像加速](/zh/docs/guide/mirror) 服务。
:::

## docker-compose 支持

支持通过 docker-compose.yml 文件批量管理应用：

- 上传或粘贴 docker-compose.yml
- 一键 `up` / `down`
- 查看 compose 项目状态
