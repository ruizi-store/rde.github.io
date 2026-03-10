---
layout: home

hero:
  name: RDE
  text: Your Cloud Linux Desktop
  tagline: One command to turn any Linux server into a feature-rich web desktop. File management, Docker app store, terminal, media playback — all in the browser.
  image:
    src: /rde_desktop.png
    alt: RDE Desktop Preview
  actions:
    - theme: brand
      text: Get Started
      link: /en/docs/guide/getting-started
    - theme: alt
      text: Live Demo →
      link: http://115.190.126.25:3080/
---

<!-- Demo Account -->
<style>
.VPHero .actions + .actions ~ * { display: none; }
.VPHero .actions {
  align-items: center !important;
}
.demo-badge {
  display: inline-flex;
  align-items: center;
  margin-top: 0;
  padding: 0.25rem 0.8rem;
  border-radius: 99px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  line-height: 1;
  height: fit-content;
}
.demo-badge code {
  font-weight: 600;
  color: var(--vp-c-brand-1);
}
</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Insert demo account badge into the actions row
  const actions = document.querySelector('.VPHero .actions')
  if (actions) {
    const badge = document.createElement('div')
    badge.className = 'demo-badge'
    badge.innerHTML = 'Demo: <code>demo</code> / <code>demo1234</code>'
    actions.appendChild(badge)
  }

  // Tab switching
  window.switchTab = function(tab) {
    document.querySelectorAll('.install-tab').forEach(t => t.classList.remove('active'))
    document.querySelectorAll('.install-tab-content').forEach(c => c.classList.remove('active'))
    event.target.classList.add('active')
    document.getElementById('tab-' + tab).classList.add('active')
  }
})
</script>

<!-- ── Quick Install (Three Tabs) ─────────────────── -->

<div class="rde-section" style="padding-top: 0;">
  <div class="install-block">
    <div class="install-tabs">
      <button class="install-tab active" onclick="switchTab('server')">🖥️ Cloud Server</button>
      <button class="install-tab" onclick="switchTab('nas')">💿 NAS Image</button>
      <button class="install-tab" onclick="switchTab('global')">🌐 Global</button>
    </div>
    <div id="tab-server" class="install-tab-content active">
      <div class="label">Ubuntu / Debian Quick Install (China accelerated)</div>
      <div class="command">
        <span class="prompt">$</span>
        <code>wget https://github.com/ruizi-store/rde/releases/latest/download/rde_latest_amd64.deb && sudo apt install -y ./rde_latest_amd64.deb</code>
      </div>
    </div>
    <div id="tab-nas" class="install-tab-content">
      <div class="label">Download the ISO image, flash to USB drive, and turn any x86 machine into a NAS</div>
      <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem 1.2rem; background: rgba(0,0,0,0.3); border-radius: 10px; border: 1px solid rgba(255,255,255,0.08);">
        <span style="font-size: 1.5rem;">💿</span>
        <div style="flex: 1;">
          <div style="color: #e0e7ff; font-weight: 600; font-size: 0.95rem;">RDE OS Image</div>
          <div style="color: #a5b4fc; font-size: 0.8rem; margin-top: 0.2rem;">Based on Debian 13, pre-installed with RDE Desktop + all dependencies</div>
        </div>
        <a href="https://github.com/ruizi-store/rde/releases" target="_blank" style="display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.5rem 1.2rem; background: linear-gradient(135deg, #4F46E5, #7C3AED); color: white; border-radius: 8px; text-decoration: none; font-size: 0.85rem; font-weight: 600; white-space: nowrap;">📥 Download from GitHub</a>
      </div>
    </div>
    <div id="tab-global" class="install-tab-content">
      <div class="label">Install via GitHub Releases (auto-fetch latest)</div>
      <div class="command">
        <span class="prompt">$</span>
        <code>curl -s https://api.github.com/repos/ruizi-store/rde/releases/latest | grep -o 'https://.*\.deb' | xargs wget -q && sudo apt install -y ./rde_*.deb</code>
      </div>
      <div style="margin-top: 0.6rem; text-align: right;">
        <a href="https://github.com/ruizi-store/rde/releases" target="_blank" style="color: #a5b4fc; font-size: 0.8rem; text-decoration: none;">All releases →</a>
      </div>
    </div>
  </div>
</div>

<!-- ── Core Features (Alternating Layout) ───────────── -->

<div class="rde-section" style="padding-top: 0;">
  <h2 class="rde-section-title">Why RDE?</h2>
  <p class="rde-section-subtitle">Not just a panel — a real cloud desktop OS</p>

  <!-- Desktop Experience -->
  <div class="feature-row">
    <div class="feature-content">
      <h3 class="feature-title">Native Desktop Experience</h3>
      <p class="feature-desc">Say goodbye to form-based panels. RDE provides a full Windows-like desktop environment, making Linux management intuitive.</p>
      <ul class="feature-points">
        <li><span class="point-icon">✦</span> Window dragging, resizing, maximizing, side-by-side</li>
        <li><span class="point-icon">✦</span> Taskbar, context menus, desktop shortcuts</li>
        <li><span class="point-icon">✦</span> Responsive design — phone, tablet, desktop</li>
      </ul>
    </div>
    <div class="feature-visual">
      <img src="/rde_desktop.png" alt="RDE Desktop Environment" />
    </div>
  </div>

  <!-- File Manager -->
  <div class="feature-row reverse">
    <div class="feature-content">
      <h3 class="feature-title">Powerful File Management</h3>
      <p class="feature-desc">A web file manager rivaling native desktop apps, handling large file transfers with ease.</p>
      <ul class="feature-points">
        <li><span class="point-icon">✦</span> Drag & drop upload, batch operations, online preview</li>
        <li><span class="point-icon">✦</span> TUS protocol resumable uploads, supports GB-sized files</li>
        <li><span class="point-icon">✦</span> File sharing, compression, permission management</li>
      </ul>
    </div>
    <div class="feature-visual">
      <img src="/rde_files.png" alt="RDE File Manager" />
    </div>
  </div>

  <!-- Docker -->
  <div class="feature-row">
    <div class="feature-content">
      <h3 class="feature-title">Docker Apps, One-Click Deploy</h3>
      <p class="feature-desc">Built-in app store — deploy services visually without memorizing Docker commands.</p>
      <ul class="feature-points">
        <li><span class="point-icon">✦</span> Visual container, image, and network management</li>
        <li><span class="point-icon">✦</span> Pre-built app templates, click to deploy</li>
        <li><span class="point-icon">✦</span> Real-time logs, resource monitoring, auto-updates</li>
      </ul>
    </div>
    <div class="feature-visual">
      <img src="/rde_docker.png" alt="Docker App Store" />
    </div>
  </div>
</div>

<!-- ── Feature Grid ───────────────────────── -->

<div class="rde-section" style="padding-top: 0;">
  <h2 class="rde-section-title">Out-of-the-Box App Ecosystem</h2>
  <p class="rde-section-subtitle">One platform for all your needs</p>

  <div class="feature-grid">
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
      </div>
      <h3>Web Terminal</h3>
      <p>Full Linux terminal in the browser with multi-session management and theme customization.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
      </div>
      <h3>Download Manager</h3>
      <p>Powered by Aria2 — HTTP, BT, and magnet links with real-time progress via WebSocket.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      </div>
      <h3>Photos</h3>
      <p>Smart photo management with EXIF extraction, thumbnail generation, and album grouping.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
      </div>
      <h3>Music Player</h3>
      <p>Desktop-grade music experience with lyrics, audio visualization, and multiple play modes.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
      </div>
      <h3>Video Player</h3>
      <p>Multi-format playback with ffmpeg HLS live transcoding, subtitles, and picture-in-picture.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>
      </div>
      <h3>Retro Games</h3>
      <p>WebAssembly emulator — relive NES, SNES, GBA, PS1 and more classic platforms.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
      </div>
      <h3>Flatpak Apps</h3>
      <p>Run Linux GUI apps in the browser, universally deployed across distributions.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
      </div>
      <h3>Plugin System</h3>
      <p>Unix Socket communication, hot-swappable loading, extend functionality on demand.</p>
    </div>
    <div class="feature-card">
      <div class="card-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      </div>
      <h3>Internationalization</h3>
      <p>Chinese/English bilingual, one-click switch to domestic mirror sources (APT/Docker/NPM/PIP).</p>
    </div>
  </div>
</div>

<!-- ── Comparison ────────────────────────────── -->

<div class="rde-section" style="padding-top: 0;">
  <h2 class="rde-section-title">RDE vs Alternatives</h2>
  <p class="rde-section-subtitle">A real desktop experience, not just a web panel</p>

  <div style="overflow-x: auto;">
    <table class="compare-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th class="highlight">RDE</th>
          <th>Synology DSM</th>
          <th>fnOS</th>
          <th>CasaOS</th>
          <th>BT Panel</th>
          <th>1Panel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desktop UI</td>
          <td class="highlight"><span class="check">✓ Full desktop</span></td>
          <td><span class="check">✓ Full desktop</span></td>
          <td><span class="check">✓ Full desktop</span></td>
          <td><span class="partial">△ Simple</span></td>
          <td><span class="cross">✗ Panel</span></td>
          <td><span class="cross">✗ Panel</span></td>
        </tr>
        <tr>
          <td>File Manager</td>
          <td class="highlight"><span class="check">✓ Desktop-grade</span></td>
          <td><span class="check">✓ Desktop-grade</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="partial">△ Basic</span></td>
          <td><span class="partial">△ Basic</span></td>
        </tr>
        <tr>
          <td>Docker Visual</td>
          <td class="highlight"><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Media Playback</td>
          <td class="highlight"><span class="check">✓ Music+Video</span></td>
          <td><span class="partial">△ Needs packages</span></td>
          <td><span class="partial">△ Needs packages</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
        </tr>
        <tr>
          <td>Photo Album</td>
          <td class="highlight"><span class="check">✓</span></td>
          <td><span class="check">✓ Moments</span></td>
          <td><span class="partial">△</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
        </tr>
        <tr>
          <td>Retro Games</td>
          <td class="highlight"><span class="check">✓ WebAssembly</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
        </tr>
        <tr>
          <td>Flatpak GUI Apps</td>
          <td class="highlight"><span class="check">✓</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
        </tr>
        <tr>
          <td>Cloud Server Install</td>
          <td class="highlight"><span class="check">✓ deb one-click</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="check">✓</span></td>
        </tr>
        <tr>
          <td>Bare Metal Install</td>
          <td class="highlight"><span class="check">✓ ISO image</span></td>
          <td><span class="cross">✗ HW locked</span></td>
          <td><span class="check">✓</span></td>
          <td><span class="partial">△</span></td>
          <td><span class="cross">✗</span></td>
          <td><span class="cross">✗</span></td>
        </tr>
        <tr>
          <td>Hardware Lock-in</td>
          <td class="highlight"><span class="check">✓ Any x86</span></td>
          <td><span class="cross">✗ Synology only</span></td>
          <td><span class="check">✓ Any x86</span></td>
          <td><span class="check">✓ Any</span></td>
          <td><span class="check">✓ Any</span></td>
          <td><span class="check">✓ Any</span></td>
        </tr>
        <tr>
          <td>Price</td>
          <td class="highlight"><span class="check">Free & Open Source</span></td>
          <td><span class="cross">$200+ hardware</span></td>
          <td><span class="check">Free</span></td>
          <td><span class="check">Free & Open Source</span></td>
          <td><span class="partial">Freemium</span></td>
          <td><span class="check">Free & Open Source</span></td>
        </tr>
        <tr>
          <td>License</td>
          <td class="highlight"><span class="check">GPL-3.0</span></td>
          <td><span class="cross">✗ Proprietary</span></td>
          <td><span class="cross">✗ Proprietary</span></td>
          <td><span class="check">Apache-2.0</span></td>
          <td><span class="cross">✗ Proprietary</span></td>
          <td><span class="check">GPL-3.0</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- ── Use Cases ────────────────────────────── -->

<div class="rde-section">
  <h2 class="rde-section-title">Who Uses RDE?</h2>
  <p class="rde-section-subtitle">Different scenarios, same great experience</p>

  <div class="persona-grid">
    <div class="persona-card">
      <div class="persona-icon">🏠</div>
      <h3>NAS / HomeLab Enthusiasts</h3>
      <p>Turn spare servers into a private cloud — manage files, run Docker services, watch movies, listen to music. All graphical, no command line needed.</p>
    </div>
    <div class="persona-card">
      <div class="persona-icon">👨‍💻</div>
      <h3>Remote Developers</h3>
      <p>Access your dev environment from anywhere via browser. Web terminal + file manager + Docker — one server for all your tools.</p>
    </div>
    <div class="persona-card">
      <div class="persona-icon">🏢</div>
      <h3>Small Team Ops</h3>
      <p>Multi-user management with permission isolation. Assign independent desktop environments to team members, centrally manage server resources.</p>
    </div>
  </div>
</div>

<!-- ── Tech Stack ─────────────────────────────── -->

<div class="rde-section" style="padding-top: 0;">
  <h2 class="rde-section-title">Tech Stack</h2>
  <p class="rde-section-subtitle">Modern technologies, reliable architecture</p>

  <div class="tech-stack">
    <div class="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="Go" />
      <span>Go</span>
    </div>
    <div class="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" />
      <span>Vue 3</span>
    </div>
    <div class="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
      <span>TypeScript</span>
    </div>
    <div class="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
      <span>Docker</span>
    </div>
    <div class="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
      <span>PostgreSQL</span>
    </div>
    <div class="tech-item">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
      <span>Redis</span>
    </div>
  </div>
</div>

<!-- ── Bottom CTA ────────────────────────────── -->

<div class="cta-bottom">
  <h2>Ready to go?</h2>
  <p>Deploy in one minute, experience your cloud desktop right away</p>
  <div class="cta-buttons">
    <a href="/en/docs/guide/getting-started" class="cta-btn primary">Get Started →</a>
    <a href="https://github.com/ruizi-store/rde" target="_blank" class="cta-btn secondary">
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>
      GitHub
    </a>
  </div>
</div>
