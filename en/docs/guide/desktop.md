# Desktop Environment

RDE provides a Windows-like web desktop experience, delivering a complete desktop environment in the browser.

## Window Manager

The window manager is the core component of the RDE desktop, managing the lifecycle, layout, and interaction of all application windows.

### Window Operations

- **Drag to move**: Hold the title bar to drag windows anywhere
- **Resize**: Drag window edges to resize
- **Maximize**: Double-click title bar or click maximize button
- **Minimize**: Click minimize button, window goes to taskbar
- **Close**: Click close button or use keyboard shortcut

### Window Types

RDE supports three window types:

| Type | Description | Use Case |
|------|-------------|----------|
| Component | Svelte component rendered directly | File manager, settings, and native apps |
| iframe | Embedded external page | Web apps, third-party services |
| Popup | Modal/non-modal dialog | Confirm dialogs, property panels |

### Multi-Window Management

- Multiple windows can be open simultaneously with automatic z-index management
- Clicking a window brings it to the front
- Drag-and-drop data transfer between windows

## Taskbar

The taskbar at the bottom of the screen provides:

- **App icons**: Quick-launch shortcuts for common apps
- **Open windows**: Click to switch or minimize/restore windows
- **System tray**: Time, notifications, network status, etc.
- **Start menu**: List of all installed applications

## Context Menu

Desktop and file manager support context menu operations:

- New file/folder
- Paste, refresh
- Change wallpaper
- Display settings

## Multi-User Support

RDE supports concurrent multi-user access:

- Each user has an independent desktop space
- File system is isolated per user
- Terminal sessions are isolated per user
- Linux system users are created automatically

See [User Management](/en/docs/guide/users) for details.
