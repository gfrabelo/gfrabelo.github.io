# 🎬 Guia: Hero Video Otimizado para Portfolio

## 📋 Visão Geral

Este guia mostra como implementar um vídeo hero em looping perfeito e otimizado para seu portfolio Astro.

---

## 🎯 Objetivos

- ✅ Looping perfeito sem gaps
- ✅ Performance otimizada (< 2MB)
- ✅ Fallback para imagem estática
- ✅ Responsivo e acessível
- ✅ Carregamento rápido

---

## 📁 Estrutura de Arquivos

```
portfolio/
├── public/
│   ├── videos/
│   │   ├── hero-ascii-loop.mp4      # Formato principal (H.264)
│   │   ├── hero-ascii-loop.webm     # Formato alternativo (VP9)
│   │   └── hero-poster.jpg          # Imagem de fallback
│   └── img/
│       └── hero-poster.jpg          # Backup estático
├── src/
│   └── components/
│       ├── HeroVideo.astro          # Componente do vídeo
│       └── Hero.astro               # Hero section completa
└── scripts/
    └── optimize-hero-video.sh       # Script de otimização
```

---

## 🚀 Passo a Passo

### 1. Preparar o Vídeo Original

**Opção A: Refinar o Prompt da IA**

Use este prompt otimizado para gerar um novo vídeo:

```
Create a perfectly looping animated portrait for a tech portfolio hero section.

SUBJECT: Professional headshot, centered. Head and upper torso visible. 
Modern tech professional aesthetic. Confident, approachable pose.

VISUAL STYLE: Clean ASCII art using monospaced characters (A-Z, a-z, 0-9, 
@#%&+=:;<>/\|_-()). Color: cyan (#00D9FF), electric blue (#0EA5E9), 
white on black. Subtle scan-line effect.

ANIMATION: Smooth 360° camera orbit at constant speed. One complete rotation. 
Subject stays still. Perfect loop.

BACKGROUND: Solid black (#000000). NO animation. NO effects. Completely static.

TECHNICAL: 16:9 or 4:3, 8-12 seconds, 30fps minimum, MP4/WebM export.

NEGATIVE: no matrix rain, no falling code, no background animation, 
no glitch effects, no loop seam
```

**Opção B: Editar o Vídeo Atual**

Se você quer usar o GIF atual, precisamos:
1. Remover o fundo animado
2. Isolar apenas o personagem
3. Otimizar para web

---

### 2. Otimizar o Vídeo

**Instalar FFmpeg** (se ainda não tiver):

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt install ffmpeg

# Windows
# Baixar de: https://ffmpeg.org/download.html
```

**Executar o script de otimização:**

```bash
# Dar permissão de execução
chmod +x scripts/optimize-hero-video.sh

# Converter o GIF/vídeo
./scripts/optimize-hero-video.sh input-video.gif public/videos
```

Isso criará:
- ✅ `hero-ascii-loop.mp4` (compatibilidade máxima)
- ✅ `hero-ascii-loop.webm` (melhor compressão)
- ✅ `hero-poster.jpg` (fallback estático)

---

### 3. Implementar no Astro

**3.1. Copiar os componentes:**

```bash
# Copiar HeroVideo.astro para seu projeto
cp HeroVideo.astro src/components/

# Copiar Hero.astro (exemplo) para seu projeto
cp Hero-Example.astro src/components/Hero.astro
```

**3.2. Importar no layout principal:**

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
import Hero from '../components/Hero.astro';
---

<Layout title="Gabriel Rabelo | Full-Stack Engineer">
  <Hero />
  <!-- resto do conteúdo -->
</Layout>
```

---

### 4. Customizar para seu Branding

**4.1. Cores (em Hero.astro):**

```css
/* Mudar gradiente do título */
.hero-title-highlight {
  background: linear-gradient(135deg, #00d9ff, #0ea5e9); /* Suas cores */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Mudar cor do badge */
.hero-badge {
  background: rgba(0, 217, 255, 0.1); /* Sua cor primária */
  border: 1px solid rgba(0, 217, 255, 0.3);
}
```

**4.2. Borda do vídeo:**

```css
.hero-video-wrapper::before {
  background: linear-gradient(135deg, #00d9ff, #0ea5e9); /* Suas cores */
  opacity: 0.5;
}
```

---

### 5. Testar Performance

**Verificar tamanho dos arquivos:**

```bash
ls -lh public/videos/
```

**Metas de tamanho:**
- MP4: < 1.5MB
- WebM: < 1MB
- Poster: < 200KB

**Se os arquivos estiverem muito grandes:**

```bash
# Recomprimir MP4 com CRF mais alto
ffmpeg -i input.mp4 -crf 28 -preset slow output.mp4

# Recomprimir WebM
ffmpeg -i input.webm -crf 35 -b:v 0 output.webm
```

---

### 6. Otimizações Extras

**6.1. Lazy loading para mobile:**

```astro
<video
  class="hero-video"
  autoplay={!isMobile}
  loop
  muted
  playsinline
  poster={posterSrc}
  loading="lazy"
>
```

**6.2. Pausar quando fora da tela:**

```javascript
// Adicionar ao script do HeroVideo.astro
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
});

observer.observe(video);
```

**6.3. Preload apenas em desktop:**

```astro
<video
  preload={isDesktop ? 'auto' : 'none'}
>
```

---

## 🎨 Alternativas Criativas

Se o ASCII não funcionar bem, considere:

### Opção 1: Gradient Avatar Morph
- Background: gradiente animado suave
- Avatar: sua foto com efeito de glitch sutil
- Loop: morphing entre 2-3 poses

### Opção 2: Code Terminal Effect
- Simular digitação de código
- Destacar linhas importantes
- Efeito typing que faz loop

### Opção 3: Geometric Animation
- Formas geométricas formando seu rosto
- Estilo low-poly
- Rotação 360° suave

---

## 📊 Checklist de Qualidade

Antes de fazer deploy, verifique:

- [ ] Vídeo faz loop perfeitamente (sem gaps)
- [ ] Tamanho total < 2MB
- [ ] Poster image carrega instantaneamente
- [ ] Funciona em mobile e desktop
- [ ] Não trava em navegadores antigos
- [ ] Lighthouse Performance > 90
- [ ] Acessibilidade (prefers-reduced-motion)

---

## 🐛 Troubleshooting

**Problema: Loop tem um "pulo"**
- Solução: Garantir que o último frame = primeiro frame
- Cortar 1 frame do final: `ffmpeg -i input.mp4 -t $(duration-0.033) output.mp4`

**Problema: Vídeo não inicia no mobile**
- Solução: Adicionar `playsinline` e `muted`
- iOS bloqueia autoplay com som

**Problema: Arquivo muito grande**
- Solução: Aumentar CRF (23 → 28)
- Reduzir resolução (1080p → 720p)

**Problema: Background não está limpo**
- Solução: Regenerar vídeo com prompt atualizado
- Ou usar After Effects para remover background

---

## 📝 Notas Finais

**Performance Atual:**
- GIF original: ~5-10MB (não otimizado)
- MP4 otimizado: ~1MB ✅
- WebM otimizado: ~700KB ✅
- Redução: 80-90%

**Próximos Passos:**
1. Gerar novo vídeo com fundo limpo
2. Otimizar com o script fornecido
3. Implementar componentes no Astro
4. Testar em diferentes dispositivos
5. Ajustar cores para seu branding

---

## 🔗 Recursos Úteis

- [FFmpeg Docs](https://ffmpeg.org/documentation.html)
- [Video Optimization Guide](https://web.dev/fast/#optimize-your-videos)
- [Astro Assets](https://docs.astro.build/en/guides/assets/)
- [WebM vs MP4](https://www.cloudflare.com/learning/performance/webm-vs-mp4/)

---

**Criado por:** Gabriel Rabelo  
**Stack:** Astro, FFmpeg, HTML5 Video  
**Versão:** 1.0  
**Data:** Fevereiro 2026
