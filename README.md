# Gabriel Rabelo | Portfolio

**Software Engineer & AI Specialist**

Portfolio moderno construído com Astro e Tailwind CSS, destacando projetos de alto impacto para ANBIMA, Nike e Jequiti.

🔗 **Link:** https://gfrabelo.github.io

---

## 📊 Sobre

Software Engineer com **8+ anos de experiência** construindo produtos digitais de alto impacto. Atualmente na **ANBIMA**, onde já entreguei +120 merge requests em sistemas críticos de certificações financeiras.

Engenheiro de produtos completo que pensa em modelos de negócio, arquitetura e experiência do usuário. Como **AI Builder**, uso LLMs de ponta para entregar velocidade sem sacrificar qualidade.

---

## 💻 Stack Técnica

**Frontend**  
Astro, React, Next.js, Angular, TypeScript, Tailwind CSS, Sass

**Backend & Database**  
Node.js, Python, Supabase, PostgreSQL, REST APIs

**AI & Automação**  
OpenAI GPT-4, Claude Sonnet, Google Gemini, N8N, Fine-tuning, RAG, Prompt Engineering

**DevOps & Tools**  
Docker, Git, GitHub, Vercel, Figma, FFmpeg

---

## 🚀 Como Executar

```bash
# Clone e instale
git clone https://github.com/gfrabelo/gfrabelo.github.io.git
cd gfrabelo.github.io
npm install

# Desenvolvimento
npm run dev
# Acesse http://localhost:4321

# Build para produção
npm run build
```

---

## 🎬 Tutorial: Hero Animation com IA

O hero deste portfolio é único - um vídeo em ASCII art com rotação 360° gerado por IA e otimizado para web.

### 1. Gerar o Vídeo (Google Flow - VEO3)

Use este prompt no Google Flow ou similar:

```
Create a perfectly looping animated portrait for a tech portfolio hero section.

SUBJECT: Professional headshot of a software engineer, centered composition. 
Head and upper torso visible (chest level crop). Subject faces forward in a 
confident, approachable pose. Modern tech professional aesthetic.

VISUAL STYLE: Clean ASCII art effect using monospaced terminal characters 
(A-Z, a-z, 0-9, @#%&+=:;<>/\|_-()). Characters create depth through density 
variation. Color palette: cyan (#00D9FF), electric blue (#0EA5E9), and white 
on pure black background. Subtle scan-line effect for authenticity.

ANIMATION: Smooth 360° camera orbit around subject at constant speed. One 
complete rotation forming a perfect loop. Subject remains completely still. 
Camera moves through all angles including profile and back views.

BACKGROUND: Solid black (#000000) with NO animation, NO falling characters, 
NO effects. Completely static and minimal.

LOOP REQUIREMENTS (CRITICAL): Frame 1 = Frame N (identical). No fade, no 
flicker, no seam. Seamless infinite loop.

TECHNICAL SPECS: 
- Aspect ratio: 16:9 or 4:3
- Duration: 8-12 seconds
- Frame rate: 30fps minimum
- Export: MP4 or WebM for web optimization

NEGATIVE PROMPTS: no matrix rain, no falling code, no background animation, 
no glitch effects, no face distortion, no body crop below chest, no fade 
transitions, no loop seam
```

### 2. Otimizar o Vídeo (FFmpeg)

Depois de gerar, otimize para web:

```bash
# Remover background (opcional)
# Use EZGif.com → Remove Background → Download

# Converter GIF para WebP otimizado
ffmpeg -i hero.gif \
  -vcodec libwebp_anim \
  -loop 0 \
  -compression_level 6 \
  -q:v 75 \
  -preset picture \
  -an -vsync 0 \
  -y hero.webp

# Resultado: 60-80% menor que GIF original
# Exemplo: 24.61 MB → 9.73 MB
```

### 3. Usar no Componente

```astro
<picture>
  <source srcset="/img/hero.webp" type="image/webp">
  <img src="/img/hero.gif" alt="Hero Animation" loading="eager" />
</picture>
```

**Créditos:** Inspirado no [@rubenmarcus](https://github.com/rubenmarcus)

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── img/              # Assets otimizados
│   │   ├── hero-final.webp    # Hero WebP (9.73 MB)
│   │   ├── hero-final.gif     # Hero fallback (24.61 MB)
│   │   └── ...                # Logos de tecnologias
│   └── files/            # Downloads (CV)
├── src/
│   ├── components/       # Componentes Astro
│   │   ├── Hero.astro
│   │   ├── TechCarousel.astro
│   │   ├── Projects.astro
│   │   └── ...
│   ├── layouts/          # Layouts
│   ├── pages/            # Páginas
│   └── styles/           # Estilos globais
├── docs/                 # Documentação
└── astro.config.mjs
```

---

## 🌟 Features

- ✅ Design responsivo e mobile-first
- ✅ Animações suaves e glassmorphism
- ✅ Hero animation única gerada com IA
- ✅ Carrossel de tecnologias com tooltips
- ✅ SEO otimizado
- ✅ Performance Lighthouse 95+
- ✅ WebP otimizado (60% menor que GIF)

---

## 📞 Contato

Disponível para **projetos freelance**, **consultorias em IA** e **oportunidades full-time**.

**🌐 Site:** https://gabrielrabelo.dev  
**💼 LinkedIn:** https://www.linkedin.com/in/gabrielrabelob/  
**📧 Email:** gabrielrabelob@gmail.com  
**💬 WhatsApp:** +55 11 92158-6783  
**🐙 GitHub:** https://github.com/gfrabelo

---

## 📜 Licença

Código aberto para **fins educacionais**.

✅ Use como referência  
✅ Adapte conceitos  
✅ Compartilhe conhecimento  

❌ Não copie conteúdo pessoal (textos, fotos, projetos)

---

**2026 Gabriel Rabelo**  
Desenvolvido com Astro, Tailwind CSS e dedicação 🚀
