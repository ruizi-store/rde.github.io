# FAQ

## Installation

### Can't access after installation?

Check the following:
1. Is the RDE service running: `sudo systemctl status rde`
2. Is the port in use: `sudo ss -tlnp | grep :80`
3. Is the firewall allowing the port: `sudo ufw allow 80`

### Which operating systems are supported?

Currently supports Debian/Ubuntu (DEB package provided). Other Linux distributions can be compiled from source.

### How to update to the latest version?

    wget https://github.com/ruizi-store/rde/releases/latest/download/rde_amd64.deb
    sudo apt install ./rde_amd64.deb

## Usage

### Docker App Store doesn't show containers?

Make sure Docker is installed and the RDE user has Docker permissions:

    sudo usermod -aG docker $USER

### File upload fails?

- Check if disk space is sufficient
- Large file uploads support TUS resumable upload, refresh page to resume
- Check if reverse proxy limits request body size (Nginx needs `client_max_body_size`)

### Terminal connection drops?

The terminal uses WebSocket connections. Ensure:
1. Reverse proxy correctly forwards WebSocket (configure `Upgrade` header)
2. Reverse proxy doesn't have too short a timeout

### How to change the port?

Edit `/etc/rde/conf.conf` to modify the `port` option, then restart the service.

## Premium Services

### Docker image pull fails?

1. Verify membership is active
2. Try `docker login rde.lidj.cn` again
3. Check network connection

### How to check membership expiry?

Check "Membership Info" in RDE settings, or log in to the membership store.

## More Questions

Have more questions? Join our community to connect with us.
