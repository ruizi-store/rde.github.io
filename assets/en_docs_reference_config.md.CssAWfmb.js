import{_ as t,o,c as a,ag as r}from"./chunks/framework.DEqXEGcv.js";const h=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"en/docs/reference/config.md","filePath":"en/docs/reference/config.md"}'),n={name:"en/docs/reference/config.md"};function d(i,e,c,l,s,f){return o(),a("div",null,[...e[0]||(e[0]=[r(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><p>RDE uses configuration files to manage system settings.</p><h2 id="configuration-file" tabindex="-1">Configuration File <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration File&quot;">​</a></h2><p>After installation, the config file is located at <code>/etc/rde/conf.conf</code>.</p><pre><code># Listen port
port = 80

# Data storage directory
data_dir = /var/lib/rde

# Debug mode
debug = false

# Log level
log_level = info
</code></pre><h2 id="configuration-options" tabindex="-1">Configuration Options <a class="header-anchor" href="#configuration-options" aria-label="Permalink to &quot;Configuration Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>port</code></td><td><code>80</code></td><td>HTTP listen port</td></tr><tr><td><code>data_dir</code></td><td><code>/var/lib/rde</code></td><td>Data storage directory (database, user files)</td></tr><tr><td><code>debug</code></td><td><code>false</code></td><td>Debug mode, enables verbose logging when on</td></tr><tr><td><code>log_level</code></td><td><code>info</code></td><td>Log level: debug/info/warn/error</td></tr></tbody></table><h2 id="data-directory-structure" tabindex="-1">Data Directory Structure <a class="header-anchor" href="#data-directory-structure" aria-label="Permalink to &quot;Data Directory Structure&quot;">​</a></h2><pre><code>/var/lib/rde/
├── rde.db           # SQLite database
├── uploads/         # Upload file cache
├── thumbnails/      # Thumbnail cache
└── plugins/         # Plugin data
</code></pre><h2 id="environment-variables" tabindex="-1">Environment Variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to &quot;Environment Variables&quot;">​</a></h2><p>Configuration can also be overridden via environment variables:</p><table tabindex="0"><thead><tr><th>Environment Variable</th><th>Corresponds To</th></tr></thead><tbody><tr><td><code>RDE_PORT</code></td><td><code>port</code></td></tr><tr><td><code>RDE_DATA_DIR</code></td><td><code>data_dir</code></td></tr><tr><td><code>RDE_DEBUG</code></td><td><code>debug</code></td></tr></tbody></table><h2 id="modify-configuration" tabindex="-1">Modify Configuration <a class="header-anchor" href="#modify-configuration" aria-label="Permalink to &quot;Modify Configuration&quot;">​</a></h2><pre><code># Edit config file
sudo vim /etc/rde/conf.conf

# Restart service to apply changes
sudo systemctl restart rde
</code></pre>`,14)])])}const g=t(n,[["render",d]]);export{h as __pageData,g as default};
