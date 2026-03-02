# File Management

RDE includes a full-featured file manager that delivers a desktop-grade file experience in the browser.

## Basic Operations

- **Browse**: Tree directory navigation with breadcrumb path bar
- **Create**: Create files and folders
- **Copy/Cut/Paste**: Supports keyboard shortcuts
- **Rename**: Double-click filename or press F2
- **Delete**: Supports recycle bin and permanent delete
- **Search**: Search by filename

## File Upload

Multiple upload methods supported:

- **Drag & drop**: Drag files into the file manager window
- **Click to upload**: Use the upload button to select files
- **Folder upload**: Upload entire folders

### Large File Resumable Upload

Resumable uploads based on TUS protocol, supporting 10 GB+ files:

- Automatic recovery on network interruption
- Real-time upload progress display
- Support for pause/resume

## File Download

- Single file direct download
- Multi-file/folder packaged as ZIP download

## File Preview

Built-in file previewers for multiple formats:

| Type | Supported Formats |
|------|------------------|
| Images | JPG, PNG, GIF, SVG, WebP |
| Video | MP4, WebM, MKV |
| Audio | MP3, FLAC, WAV, OGG |
| Documents | TXT, Markdown, PDF |
| Code | Syntax-highlighted code viewer |

## File Sharing

Generate share links to easily share files with others:

- Set share password (optional)
- Set expiration time
- Limit download count

## Samba Sharing

One-click LAN file sharing via SMB protocol, allowing other devices to access files on RDE.
