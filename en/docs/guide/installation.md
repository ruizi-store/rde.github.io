# Installation

## System Requirements

| Item | Minimum | Recommended |
|------|---------|-------------|
| OS | Debian 11+ / Ubuntu 20.04+ | Ubuntu 22.04 LTS |
| CPU | 1 core | 2 cores+ |
| RAM | 1 GB | 2 GB+ |
| Disk | 10 GB | 20 GB+ |
| Docker | Optional (for app store) | Recommended |

## Installation Methods

### DEB Package (Recommended)

    # Download latest version
    wget https://github.com/ruizi-store/rde/releases/latest/download/rde_amd64.deb

    # Install
    sudo apt install ./rde_amd64.deb

After installation, RDE automatically registers as a systemd service and starts.

### Build from Source

    git clone https://github.com/ruizi-store/rde.git
    cd rde
    make deb
    sudo apt install ./outputs/rde_*.deb

## Service Management

    # Check status
    sudo systemctl status rde

    # Start/Stop/Restart
    sudo systemctl start rde
    sudo systemctl stop rde
    sudo systemctl restart rde

    # View logs
    sudo journalctl -u rde -f

## Reverse Proxy

For domain + HTTPS access, use Caddy or Nginx as a reverse proxy:

### Caddy Example

    your-domain.com {
        reverse_proxy localhost:80
    }

### Nginx Example

    server {
        listen 443 ssl;
        server_name your-domain.com;

        location / {
            proxy_pass http://localhost:80;
            proxy_set_header Host $host;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }

> WebSocket connections (terminal, download progress, etc.) require proper `Upgrade` header configuration in the reverse proxy.

## Data Directories

| Path | Description |
|------|-------------|
| `/etc/rde/` | Configuration files |
| `/var/lib/rde/` | Database, user data |
| `/usr/bin/rde` | Executable |

## Uninstall

    sudo apt remove rde

## Next Steps

- [Desktop Environment](/en/docs/guide/desktop) — Learn about desktop features
- [Configuration](/en/docs/reference/config) — Detailed configuration reference
- [FAQ](/en/docs/reference/faq) — Common deployment issues
