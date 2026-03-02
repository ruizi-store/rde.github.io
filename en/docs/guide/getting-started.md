# Quick Start

This guide will help you install and run RDE in 5 minutes.

## System Requirements

- Debian / Ubuntu (Ubuntu 22.04+ recommended)
- At least 1 GB RAM, 10 GB disk
- Docker installed (required for Docker App Store feature)

## One-Click Install

    # Debian / Ubuntu
    wget https://github.com/ruizi-store/rde/releases/latest/download/rde_amd64.deb
    sudo apt install ./rde_amd64.deb

After installation, RDE automatically starts as a system service.

## Access the Desktop

Open your browser and navigate to:

    http://YOUR_SERVER_IP:80

The first visit will launch the setup wizard for admin account and basic configuration.

## Setup Wizard

1. **Set Language**: Choose interface language (Chinese/English)
2. **Create Admin**: Set admin username and password
3. **Mirror Sources**: Chinese users can enable domestic mirror acceleration (APT/Docker/NPM/PIP, etc.)
4. **Done**: Enter the desktop environment

## Start Using

Once on the desktop, you can:

- 📁 Open the **File Manager** to browse and manage server files
- 💻 Open the **Web Terminal** to run commands
- 🐳 Enter the **Docker App Store** to deploy apps with one click
- ⬇️ Use the **Download Manager** to download files
- 🎵 Play music, 🎬 Watch videos

## Development Environment

If you want to contribute to RDE:

    git clone https://github.com/ruizi-store/rde.git
    cd rde

    # Start frontend and backend together
    make dev

    # Or start separately
    cd backend && go run .        # Backend :80
    cd frontend && pnpm dev       # Frontend :5173

## Build Package

    make deb    # Build DEB package

## Next Steps

- [Installation](/en/docs/guide/installation) — Detailed configuration and deployment options
- [Desktop Environment](/en/docs/guide/desktop) — Learn about desktop features
- [Docker App Store](/en/docs/guide/docker) — One-click container deployment
