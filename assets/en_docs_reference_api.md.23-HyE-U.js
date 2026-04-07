import{_ as a,o as t,c as o,ag as n}from"./chunks/framework.DEqXEGcv.js";const p=JSON.parse('{"title":"API Reference","description":"","frontmatter":{},"headers":[],"relativePath":"en/docs/reference/api.md","filePath":"en/docs/reference/api.md"}'),r={name:"en/docs/reference/api.md"};function i(d,e,l,s,c,u){return t(),o("div",null,[...e[0]||(e[0]=[n(`<h1 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h1><p>The RDE backend provides a RESTful API. Below are the main endpoints.</p><h2 id="basic-information" tabindex="-1">Basic Information <a class="header-anchor" href="#basic-information" aria-label="Permalink to &quot;Basic Information&quot;">​</a></h2><ul><li><strong>Default port</strong>: <code>:80</code></li><li><strong>Authentication</strong>: JWT Token (via Cookie or Authorization Header)</li><li><strong>Data format</strong>: JSON</li></ul><h2 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h2><h3 id="login" tabindex="-1">Login <a class="header-anchor" href="#login" aria-label="Permalink to &quot;Login&quot;">​</a></h3><pre><code>POST /api/auth/login
Content-Type: application/json

{
  &quot;username&quot;: &quot;admin&quot;,
  &quot;password&quot;: &quot;your-password&quot;
}
</code></pre><p><strong>Response:</strong></p><pre><code>{
  &quot;token&quot;: &quot;eyJhbGciOiJIUzI1NiIs...&quot;,
  &quot;user&quot;: {
    &quot;id&quot;: 1,
    &quot;username&quot;: &quot;admin&quot;
  }
}
</code></pre><h2 id="file-management" tabindex="-1">File Management <a class="header-anchor" href="#file-management" aria-label="Permalink to &quot;File Management&quot;">​</a></h2><h3 id="list-directory" tabindex="-1">List Directory <a class="header-anchor" href="#list-directory" aria-label="Permalink to &quot;List Directory&quot;">​</a></h3><pre><code>GET /api/files/list?path=/home/user
Authorization: Bearer &lt;token&gt;
</code></pre><h3 id="upload-file" tabindex="-1">Upload File <a class="header-anchor" href="#upload-file" aria-label="Permalink to &quot;Upload File&quot;">​</a></h3><p>Resumable upload using TUS protocol:</p><pre><code>POST /api/files/upload
Tus-Resumable: 1.0.0
Upload-Length: &lt;file-size&gt;
</code></pre><h3 id="download-file" tabindex="-1">Download File <a class="header-anchor" href="#download-file" aria-label="Permalink to &quot;Download File&quot;">​</a></h3><pre><code>GET /api/files/download?path=/home/user/file.txt
Authorization: Bearer &lt;token&gt;
</code></pre><h2 id="docker-management" tabindex="-1">Docker Management <a class="header-anchor" href="#docker-management" aria-label="Permalink to &quot;Docker Management&quot;">​</a></h2><h3 id="container-list" tabindex="-1">Container List <a class="header-anchor" href="#container-list" aria-label="Permalink to &quot;Container List&quot;">​</a></h3><pre><code>GET /api/docker/containers
Authorization: Bearer &lt;token&gt;
</code></pre><h3 id="create-container" tabindex="-1">Create Container <a class="header-anchor" href="#create-container" aria-label="Permalink to &quot;Create Container&quot;">​</a></h3><pre><code>POST /api/docker/containers
Authorization: Bearer &lt;token&gt;
Content-Type: application/json

{
  &quot;image&quot;: &quot;nginx:latest&quot;,
  &quot;name&quot;: &quot;my-nginx&quot;,
  &quot;ports&quot;: {&quot;80&quot;: &quot;8080&quot;}
}
</code></pre><h2 id="terminal" tabindex="-1">Terminal <a class="header-anchor" href="#terminal" aria-label="Permalink to &quot;Terminal&quot;">​</a></h2><h3 id="websocket-connection" tabindex="-1">WebSocket Connection <a class="header-anchor" href="#websocket-connection" aria-label="Permalink to &quot;WebSocket Connection&quot;">​</a></h3><pre><code>WS /api/terminal/ws?id=&lt;session-id&gt;
</code></pre><p>Establish a terminal connection via WebSocket for real-time communication.</p><h2 id="download-manager" tabindex="-1">Download Manager <a class="header-anchor" href="#download-manager" aria-label="Permalink to &quot;Download Manager&quot;">​</a></h2><h3 id="add-download-task" tabindex="-1">Add Download Task <a class="header-anchor" href="#add-download-task" aria-label="Permalink to &quot;Add Download Task&quot;">​</a></h3><pre><code>POST /api/download/add
Authorization: Bearer &lt;token&gt;
Content-Type: application/json

{
  &quot;url&quot;: &quot;https://example.com/file.zip&quot;,
  &quot;dir&quot;: &quot;/home/user/downloads&quot;
}
</code></pre><h2 id="error-response" tabindex="-1">Error Response <a class="header-anchor" href="#error-response" aria-label="Permalink to &quot;Error Response&quot;">​</a></h2><pre><code>{
  &quot;error&quot;: &quot;error_code&quot;,
  &quot;message&quot;: &quot;Error description&quot;
}
</code></pre><table tabindex="0"><thead><tr><th>Status Code</th><th>Description</th></tr></thead><tbody><tr><td>400</td><td>Bad request parameters</td></tr><tr><td>401</td><td>Unauthorized</td></tr><tr><td>403</td><td>Forbidden</td></tr><tr><td>404</td><td>Resource not found</td></tr><tr><td>500</td><td>Internal server error</td></tr></tbody></table>`,32)])])}const q=a(r,[["render",i]]);export{p as __pageData,q as default};
