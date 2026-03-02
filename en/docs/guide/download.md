# Download Manager

RDE includes an Aria2-based multi-protocol download manager with WebSocket real-time progress updates.

## Supported Protocols

- **HTTP/HTTPS**: Direct link downloads
- **BT Torrents**: Upload .torrent files or paste magnet links
- **Magnet Links**: `magnet:?xt=...` format

## Features

- **Multi-threaded downloads**: Automatic segmented parallel downloading for large files
- **Resumable**: Automatic recovery after network interruption
- **Real-time progress**: WebSocket push for download speed and progress, no page refresh needed
- **Download queue**: Batch add download tasks
- **Download history**: All tasks recorded, supports re-download

## Usage

1. Click the download icon on the taskbar or open from start menu
2. Paste URL or magnet link
3. Select save path
4. Start downloading

## Download Statistics

View download data statistics:

- Total download volume
- Download speed trends
- Task completion status
