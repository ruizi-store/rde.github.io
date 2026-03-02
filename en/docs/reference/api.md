# API Reference

The RDE backend provides a RESTful API. Below are the main endpoints.

## Basic Information

- **Default port**: `:80`
- **Authentication**: JWT Token (via Cookie or Authorization Header)
- **Data format**: JSON

## Authentication

### Login

    POST /api/auth/login
    Content-Type: application/json

    {
      "username": "admin",
      "password": "your-password"
    }

**Response:**

    {
      "token": "eyJhbGciOiJIUzI1NiIs...",
      "user": {
        "id": 1,
        "username": "admin"
      }
    }

## File Management

### List Directory

    GET /api/files/list?path=/home/user
    Authorization: Bearer <token>

### Upload File

Resumable upload using TUS protocol:

    POST /api/files/upload
    Tus-Resumable: 1.0.0
    Upload-Length: <file-size>

### Download File

    GET /api/files/download?path=/home/user/file.txt
    Authorization: Bearer <token>

## Docker Management

### Container List

    GET /api/docker/containers
    Authorization: Bearer <token>

### Create Container

    POST /api/docker/containers
    Authorization: Bearer <token>
    Content-Type: application/json

    {
      "image": "nginx:latest",
      "name": "my-nginx",
      "ports": {"80": "8080"}
    }

## Terminal

### WebSocket Connection

    WS /api/terminal/ws?id=<session-id>

Establish a terminal connection via WebSocket for real-time communication.

## Download Manager

### Add Download Task

    POST /api/download/add
    Authorization: Bearer <token>
    Content-Type: application/json

    {
      "url": "https://example.com/file.zip",
      "dir": "/home/user/downloads"
    }

## Error Response

    {
      "error": "error_code",
      "message": "Error description"
    }

| Status Code | Description |
|-------------|-------------|
| 400 | Bad request parameters |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource not found |
| 500 | Internal server error |
