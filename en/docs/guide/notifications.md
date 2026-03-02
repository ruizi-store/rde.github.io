# Notification Center

RDE includes a built-in notification system with on-site messages and multi-channel external push support.

## On-Site Notifications

- **Read/unread management**: Mark notifications as read, batch mark
- **Category filtering**: Filter by type (system, backup, download, security)
- **Notification list**: Timeline display of all notifications
- **Desktop notifications**: Real-time unread count in taskbar tray

## Push Channels

Important notifications can be pushed to external channels:

| Channel | Description |
|---------|-------------|
| Email | SMTP email notifications |
| Telegram | Telegram Bot push |
| Bark | iOS Bark push |
| Webhook | Custom HTTP callback |
| DingTalk | DingTalk robot |
| WeChat | Enterprise WeChat robot |

## Push Rules

Configure different push channels for different event types:

- Backup complete/failed → Email + Telegram
- Low disk space → All channels
- Download complete → Bark
- Security alert → Email

## Do Not Disturb

Set quiet hours during which no external push notifications are sent.
