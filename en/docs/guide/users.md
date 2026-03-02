# User Management

RDE supports concurrent multi-user access, with each user having an independent desktop space.

## User Model

- All users have admin/sudo privileges
- Supports 2 concurrent online users
- Each user maps to an auto-created Linux system user

## User Isolation

| Resource | Isolation Method |
|----------|-----------------|
| File system | Each user has an independent home directory |
| Terminal sessions | Per-user isolated PTY sessions |
| Desktop space | Independent window layout and wallpaper |
| Docker | Shared (all users can manage containers) |

## User Operations

### Create User

Admins can add new users in settings:

1. Open "System Settings" → "User Management"
2. Click "Add User"
3. Set username and password
4. RDE automatically creates the corresponding Linux system user

### Delete User

When deleting a user, you can choose whether to keep user data.

## Authentication

- Username + password login
- JWT Token authentication
- Session management with auto-expiry
