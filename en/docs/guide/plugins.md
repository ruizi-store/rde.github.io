# Plugin System

RDE supports extending functionality through plugins using Unix Socket HTTP communication with hot-swappable loading.

## Plugin Architecture

    RDE Main Process
      ↕ Unix Socket HTTP
    Plugin Process (standalone binary)

Plugins run as independent processes communicating with the RDE main process via Unix Socket. This design ensures:

- Plugin crashes don't affect the main program
- Multi-language plugin development (Go, Python, Node.js, etc.)
- Hot-swappable, no RDE restart needed

## Plugin Capabilities

Plugins can:

- Register new desktop apps (windows, icons, menu items)
- Add API routes
- Listen to system events
- Access the file system

## Developing Plugins

A minimal plugin example (Go):

    package main

    import (
        "net"
        "net/http"
    )

    func main() {
        mux := http.NewServeMux()
        mux.HandleFunc("/api/hello", func(w http.ResponseWriter, r *http.Request) {
            w.Write([]byte(`{"message": "Hello from plugin!"}`))
        })

        listener, _ := net.Listen("unix", "/run/rde/plugins/hello.sock")
        http.Serve(listener, mux)
    }

## Plugin Manifest

Each plugin needs a `manifest.json` descriptor file:

    {
      "id": "hello-plugin",
      "name": "Hello Plugin",
      "version": "1.0.0",
      "description": "A sample plugin",
      "entry": "./hello-plugin",
      "socket": "/run/rde/plugins/hello.sock"
    }

## Installing Plugins

Place the plugin directory in RDE's plugin directory, and RDE will automatically detect and load it.

See the GitHub repository for detailed plugin development guide.
