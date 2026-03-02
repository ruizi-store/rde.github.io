# Configuration

RDE uses configuration files to manage system settings.

## Configuration File

After installation, the config file is located at `/etc/rde/conf.conf`.

    # Listen port
    port = 80

    # Data storage directory
    data_dir = /var/lib/rde

    # Debug mode
    debug = false

    # Log level
    log_level = info

## Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| `port` | `80` | HTTP listen port |
| `data_dir` | `/var/lib/rde` | Data storage directory (database, user files) |
| `debug` | `false` | Debug mode, enables verbose logging when on |
| `log_level` | `info` | Log level: debug/info/warn/error |

## Data Directory Structure

    /var/lib/rde/
    ├── rde.db           # SQLite database
    ├── uploads/         # Upload file cache
    ├── thumbnails/      # Thumbnail cache
    └── plugins/         # Plugin data

## Environment Variables

Configuration can also be overridden via environment variables:

| Environment Variable | Corresponds To |
|---------------------|----------------|
| `RDE_PORT` | `port` |
| `RDE_DATA_DIR` | `data_dir` |
| `RDE_DEBUG` | `debug` |

## Modify Configuration

    # Edit config file
    sudo vim /etc/rde/conf.conf

    # Restart service to apply changes
    sudo systemctl restart rde
