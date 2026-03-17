---
layout: page
---

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const lang = navigator.language || navigator.userLanguage || ''
  if (lang.startsWith('en')) {
    window.location.replace('/en/')
  } else {
    window.location.replace('/zh/')
  }
})
</script>

<div style="display: flex; justify-content: center; align-items: center; min-height: 50vh; gap: 2rem;">
  <a href="/zh/" style="padding: 1rem 2rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; text-decoration: none; font-size: 1.2rem;">🇨🇳 简体中文</a>
  <a href="/en/" style="padding: 1rem 2rem; border: 1px solid var(--vp-c-divider); border-radius: 8px; text-decoration: none; font-size: 1.2rem;">🇺🇸 English</a>
</div>
