# Backup & Restore

RDE provides backup, restore, and migration for system configuration and user data, supporting both cloud server and NAS private deployment scenarios.

## System Configuration Backup

| Backup Item | Description |
|-------------|-------------|
| RDE App Config | All module settings and preferences |
| User Accounts | User info, permissions, SSH keys |
| Docker Container Config | docker-compose.yml, env variables (not images) |
| Network Config | DDNS, reverse proxy, port mapping rules |
| Scheduled Tasks | Cron jobs, automation scripts |
| Samba Share Config | Shared directories, access permissions |

## User Data Backup

| Type | Strategy |
|------|----------|
| Files/Documents | Full + incremental backup |
| Photo Library | Including metadata, album structure |
| Database | SQLite export |
| App Data Directories | Selective backup per app |

## Backup Targets

Multiple backup targets supported:

- **Local disk**: Backup to another partition or external drive
- **WebDAV**: Nutstore, ownCloud, etc.
- **S3-compatible**: AWS S3, MinIO, Tencent Cloud COS
- **SFTP**: Backup to remote server via SSH
- **Rclone**: 40+ cloud storage services supported

## Backup Strategies

- **Manual backup**: Trigger anytime
- **Scheduled backup**: Set cron schedules
- **Incremental backup**: Only backup changed files, saving space
- **Retention policy**: Auto-clean expired backups

## Restore

- Restore system configuration from backup files
- Selectively restore specific module data
- Cross-device migration

> Premium users can also use cloud backup service for automatic cloud backups.
