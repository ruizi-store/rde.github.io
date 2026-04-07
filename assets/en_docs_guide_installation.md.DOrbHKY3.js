import{_ as t,o as a,c as r,ag as o}from"./chunks/framework.DEqXEGcv.js";const m=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[],"relativePath":"en/docs/guide/installation.md","filePath":"en/docs/guide/installation.md"}'),d={name:"en/docs/guide/installation.md"};function n(s,e,i,l,c,h){return a(),r("div",null,[...e[0]||(e[0]=[o(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><h2 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-label="Permalink to &quot;System Requirements&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Item</th><th>Minimum</th><th>Recommended</th></tr></thead><tbody><tr><td>OS</td><td>Debian 11+ / Ubuntu 20.04+</td><td>Ubuntu 22.04 LTS</td></tr><tr><td>CPU</td><td>1 core</td><td>2 cores+</td></tr><tr><td>RAM</td><td>1 GB</td><td>2 GB+</td></tr><tr><td>Disk</td><td>10 GB</td><td>20 GB+</td></tr><tr><td>Docker</td><td>Optional (for app store)</td><td>Recommended</td></tr></tbody></table><h2 id="installation-methods" tabindex="-1">Installation Methods <a class="header-anchor" href="#installation-methods" aria-label="Permalink to &quot;Installation Methods&quot;">​</a></h2><h3 id="deb-package-recommended" tabindex="-1">DEB Package (Recommended) <a class="header-anchor" href="#deb-package-recommended" aria-label="Permalink to &quot;DEB Package (Recommended)&quot;">​</a></h3><pre><code># Download latest version
wget https://github.com/ruizi-store/rde/releases/latest/download/rde_amd64.deb

# Install
sudo apt install ./rde_amd64.deb
</code></pre><p>After installation, RDE automatically registers as a systemd service and starts.</p><h3 id="build-from-source" tabindex="-1">Build from Source <a class="header-anchor" href="#build-from-source" aria-label="Permalink to &quot;Build from Source&quot;">​</a></h3><pre><code>git clone https://github.com/ruizi-store/rde.git
cd rde
make deb
sudo apt install ./outputs/rde_*.deb
</code></pre><h2 id="service-management" tabindex="-1">Service Management <a class="header-anchor" href="#service-management" aria-label="Permalink to &quot;Service Management&quot;">​</a></h2><pre><code># Check status
sudo systemctl status rde

# Start/Stop/Restart
sudo systemctl start rde
sudo systemctl stop rde
sudo systemctl restart rde

# View logs
sudo journalctl -u rde -f
</code></pre><h2 id="reverse-proxy" tabindex="-1">Reverse Proxy <a class="header-anchor" href="#reverse-proxy" aria-label="Permalink to &quot;Reverse Proxy&quot;">​</a></h2><p>For domain + HTTPS access, use Caddy or Nginx as a reverse proxy:</p><h3 id="caddy-example" tabindex="-1">Caddy Example <a class="header-anchor" href="#caddy-example" aria-label="Permalink to &quot;Caddy Example&quot;">​</a></h3><pre><code>your-domain.com {
    reverse_proxy localhost:80
}
</code></pre><h3 id="nginx-example" tabindex="-1">Nginx Example <a class="header-anchor" href="#nginx-example" aria-label="Permalink to &quot;Nginx Example&quot;">​</a></h3><pre><code>server {
    listen 443 ssl;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:80;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection &quot;upgrade&quot;;
    }
}
</code></pre><blockquote><p>WebSocket connections (terminal, download progress, etc.) require proper <code>Upgrade</code> header configuration in the reverse proxy.</p></blockquote><h2 id="data-directories" tabindex="-1">Data Directories <a class="header-anchor" href="#data-directories" aria-label="Permalink to &quot;Data Directories&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Path</th><th>Description</th></tr></thead><tbody><tr><td><code>/etc/rde/</code></td><td>Configuration files</td></tr><tr><td><code>/var/lib/rde/</code></td><td>Database, user data</td></tr><tr><td><code>/usr/bin/rde</code></td><td>Executable</td></tr></tbody></table><h2 id="uninstall" tabindex="-1">Uninstall <a class="header-anchor" href="#uninstall" aria-label="Permalink to &quot;Uninstall&quot;">​</a></h2><pre><code>sudo apt remove rde
</code></pre><h2 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next Steps&quot;">​</a></h2><ul><li><a href="/en/docs/guide/desktop.html">Desktop Environment</a> — Learn about desktop features</li><li><a href="/en/docs/reference/config.html">Configuration</a> — Detailed configuration reference</li><li><a href="/en/docs/reference/faq.html">FAQ</a> — Common deployment issues</li></ul>`,24)])])}const p=t(d,[["render",n]]);export{m as __pageData,p as default};
