# What is RDE

**RDE** (Ruizi Desktop Environment) is an open-source web desktop environment that turns Linux servers into feature-rich cloud desktops. Access a Windows-like experience through your browser, with file management, Docker apps, system monitoring, and more.

## Why RDE?

- **No desktop environment needed**: No GNOME/KDE overhead — operate via the web
- **Access anywhere**: Open in any browser — phone, tablet, or desktop
- **Feature-rich**: File manager, Docker app store, media playback, download manager, and more
- **Free & open source**: All core features are free, licensed under GPL-3.0

## Core Features

### 🖥️ Web Desktop Experience

A Windows-like window manager with drag, resize, maximize, minimize, taskbar, and context menus. Supports iframe, component, and popup window types for a true desktop feel in the browser.

### 📁 File Management

A full-featured file manager with upload, download, preview, and sharing. Large files use TUS protocol for resumable uploads supporting 10GB+ files.

### 🐳 Docker App Store

Visually manage Docker containers and images. One-click deploy common applications without memorizing complex command-line arguments.

### 💻 Web Terminal

A web terminal built on xterm.js + WebSocket + PTY. Full Linux Shell in the browser with multi-session management and theme switching.

### 📦 More Built-in Apps

- **Download Manager**: Aria2-based, supports HTTP/BT/magnet links
- **Music Player**: Lyrics display, audio visualization, multiple play modes
- **Video Player**: Multi-format playback, ffmpeg live HLS transcoding
- **Photos**: Photo metadata extraction, thumbnail generation, Synology-like experience
- **Retro Games**: WebAssembly emulator for NES/SNES/GBA/PS1 and more
- **Flatpak Apps**: Run Linux GUI apps in the browser

### 🔌 Plugin System

A plugin mechanism using Unix Socket HTTP communication with hot-swappable loading to easily extend functionality.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Go, Gin, GORM, SQLite |
| Frontend | Svelte 5, SvelteKit, Tailwind CSS v4, Vite |
| Containers | Docker API |
| Downloads | Aria2 RPC |
| Plugins | Unix Socket HTTP |

## Architecture Overview

    Browser → RDE Server (Go + SQLite)
              ├── Desktop Environment (SvelteKit)
              │   ├── Window Manager
              │   ├── Taskbar
              │   └── App UI
              ├── Feature Modules
              │   ├── File Management
              │   ├── Docker Management
              │   ├── Terminal Service
              │   ├── Download Manager
              │   └── Backup & Restore
              └── Plugin System

## Premium Services

All open-source features of RDE are free forever. Optional paid premium services include:

- **Docker Mirror Acceleration**: Built-in registry reverse proxy for faster image pulls in China
- **Cloud Backup**: Automatic backup of system config and user data to the cloud
- **AI Assistant**: DeepSeek-powered intelligent chat
- **Android Emulator**: Run Android apps in the cloud desktop
- **Virtual Machines**: QEMU/KVM virtual machine management

See [Membership Plans](/shop) for details.

## Next Steps

- [Quick Start](/en/docs/guide/getting-started) — Install and get running in 5 minutes
- [Installation](/en/docs/guide/installation) — Detailed deployment guide
