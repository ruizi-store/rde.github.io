import{_ as n,o as t,c as i,ag as l}from"./chunks/framework.DEqXEGcv.js";const g=JSON.parse('{"title":"Plugin System","description":"","frontmatter":{},"headers":[],"relativePath":"en/docs/guide/plugins.md","filePath":"en/docs/guide/plugins.md"}'),o={name:"en/docs/guide/plugins.md"};function a(u,e,s,r,p,c){return t(),i("div",null,[...e[0]||(e[0]=[l(`<h1 id="plugin-system" tabindex="-1">Plugin System <a class="header-anchor" href="#plugin-system" aria-label="Permalink to &quot;Plugin System&quot;">​</a></h1><p>RDE supports extending functionality through plugins using Unix Socket HTTP communication with hot-swappable loading.</p><h2 id="plugin-architecture" tabindex="-1">Plugin Architecture <a class="header-anchor" href="#plugin-architecture" aria-label="Permalink to &quot;Plugin Architecture&quot;">​</a></h2><pre><code>RDE Main Process
  ↕ Unix Socket HTTP
Plugin Process (standalone binary)
</code></pre><p>Plugins run as independent processes communicating with the RDE main process via Unix Socket. This design ensures:</p><ul><li>Plugin crashes don&#39;t affect the main program</li><li>Multi-language plugin development (Go, Python, Node.js, etc.)</li><li>Hot-swappable, no RDE restart needed</li></ul><h2 id="plugin-capabilities" tabindex="-1">Plugin Capabilities <a class="header-anchor" href="#plugin-capabilities" aria-label="Permalink to &quot;Plugin Capabilities&quot;">​</a></h2><p>Plugins can:</p><ul><li>Register new desktop apps (windows, icons, menu items)</li><li>Add API routes</li><li>Listen to system events</li><li>Access the file system</li></ul><h2 id="developing-plugins" tabindex="-1">Developing Plugins <a class="header-anchor" href="#developing-plugins" aria-label="Permalink to &quot;Developing Plugins&quot;">​</a></h2><p>A minimal plugin example (Go):</p><pre><code>package main

import (
    &quot;net&quot;
    &quot;net/http&quot;
)

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc(&quot;/api/hello&quot;, func(w http.ResponseWriter, r *http.Request) {
        w.Write([]byte(\`{&quot;message&quot;: &quot;Hello from plugin!&quot;}\`))
    })

    listener, _ := net.Listen(&quot;unix&quot;, &quot;/run/rde/plugins/hello.sock&quot;)
    http.Serve(listener, mux)
}
</code></pre><h2 id="plugin-manifest" tabindex="-1">Plugin Manifest <a class="header-anchor" href="#plugin-manifest" aria-label="Permalink to &quot;Plugin Manifest&quot;">​</a></h2><p>Each plugin needs a <code>manifest.json</code> descriptor file:</p><pre><code>{
  &quot;id&quot;: &quot;hello-plugin&quot;,
  &quot;name&quot;: &quot;Hello Plugin&quot;,
  &quot;version&quot;: &quot;1.0.0&quot;,
  &quot;description&quot;: &quot;A sample plugin&quot;,
  &quot;entry&quot;: &quot;./hello-plugin&quot;,
  &quot;socket&quot;: &quot;/run/rde/plugins/hello.sock&quot;
}
</code></pre><h2 id="installing-plugins" tabindex="-1">Installing Plugins <a class="header-anchor" href="#installing-plugins" aria-label="Permalink to &quot;Installing Plugins&quot;">​</a></h2><p>Place the plugin directory in RDE&#39;s plugin directory, and RDE will automatically detect and load it.</p><p>See the GitHub repository for detailed plugin development guide.</p>`,18)])])}const h=n(o,[["render",a]]);export{g as __pageData,h as default};
