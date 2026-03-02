# Web Terminal

RDE provides a full Linux terminal experience in the browser, built on xterm.js + WebSocket + PTY.

## Features

- **Full Shell**: Supports bash/zsh and other shells, same as SSH login
- **Multi-session management**: Open multiple terminal tabs simultaneously
- **Auto-resize**: Terminal automatically adjusts rows/columns when window size changes
- **Theme switching**: Multiple built-in color schemes
- **Copy & paste**: Text selection and paste support

## Usage

1. Click the terminal icon on the taskbar
2. Or open "Terminal" from the start menu
3. Context menu also provides "Open terminal here"

## Keyboard Shortcuts

| Shortcut | Function |
|----------|----------|
| Ctrl+Shift+C | Copy selected text |
| Ctrl+Shift+V | Paste |
| Ctrl+Shift+T | New tab |

## Multi-User Isolation

Each user's terminal session runs under an independent Linux system user, ensuring:

- Process isolation
- File system permission isolation
- Independent environment variables
