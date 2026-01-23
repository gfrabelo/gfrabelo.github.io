# Guia de Migracao - Portfolio Astro para Raiz

## Passo 1: Backup de Seguranca (IMPORTANTE!)

Antes de comecar, faca backup dos arquivos importantes:

```bash
# Opcional: Criar uma branch de backup
git checkout -b backup-antes-migracao
git add .
git commit -m "Backup antes da migracao"
git checkout refactor/next-js
```

## Passo 2: Mover Conteudo do Astro para Raiz

Execute os comandos na raiz do repositorio:

```powershell
# 1. Mover TUDO de dentro do portfolio-astro para a raiz
Move-Item -Path "portfolio-astro\*" -Destination "." -Force

# 2. Remover a pasta vazia portfolio-astro
Remove-Item -Path "portfolio-astro" -Recurse -Force
```

## Passo 3: Limpar Arquivos Antigos

Agora delete os arquivos obsoletos da raiz:

```powershell
# Arquivos HTML antigos
Remove-Item -Path "index.html" -Force
Remove-Item -Path "gabriel-rabelo-final.html" -Force -ErrorAction SilentlyContinue

# Pastas antigas CSS/JS
Remove-Item -Path "css" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "sass" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "js" -Recurse -Force -ErrorAction SilentlyContinue

# Package-lock antigo (o novo ja veio do Astro)
# Nao precisa fazer nada, o do Astro ja sobrescreveu
```

## Passo 4: Atualizar .gitignore

Crie ou atualize o .gitignore na raiz:

```gitignore
# Dependencies
node_modules/

# Build output
dist/
.astro/

# Environment variables
.env
.env.local
.env.production

# OS files
.DS_Store
Thumbs.db

# Editor directories
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*

# Temporary files
*.tmp
.cache/
```

## Passo 5: Verificar Estrutura

Apos a migracao, a estrutura deve ficar assim:

```
gfrabelo.github.io/
├── .git/                    # Git (preservado)
├── .gitignore              # Novo do Astro
├── public/                 # Assets do Astro
├── src/                    # Codigo do Astro
├── astro.config.mjs        # Config do Astro
├── tailwind.config.mjs     # Config do Tailwind
├── package.json            # Dependencies do Astro
├── package-lock.json       # Lock do Astro
├── README.md               # Unificado
├── ATUALIZACOES-2026.md    # Documentacao (preservada)
└── zenflow-prd.md          # Documentacao (preservada)
```

## Passo 6: Testar Localmente

```bash
# Instalar dependencias (caso necessario)
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Acessar http://localhost:4321 e verificar se tudo funciona
```

## Passo 7: Commit e Push

```bash
# Adicionar todos os arquivos
git add .

# Commit
git commit -m "Refactor: Migrar estrutura Astro para raiz do repositorio"

# Push
git push origin refactor/next-js
```

## Passo 8: Merge para Main

Depois de verificar que tudo funciona:

```bash
git checkout main
git merge refactor/next-js
git push origin main
```

## Arquivos que SERAO PRESERVADOS:
- `.git/` - Historico do Git
- `ATUALIZACOES-2026.md` - Documentacao
- `zenflow-prd.md` - Documentacao
- `img/` - Imagens (ja estao em public/img no Astro)

## Arquivos que SERAO REMOVIDOS:
- `index.html` - Versao monolitica antiga
- `gabriel-rabelo-final.html` - Referencia antiga
- `css/`, `sass/`, `js/` - Pastas antigas de assets

## Notas Importantes:

1. O conteudo do `public/` do Astro ja contem todas as imagens da pasta `img/` antiga
2. O `README.md` foi unificado com as melhores informacoes de ambos
3. O `.gitignore` do Astro e mais completo e adequado
4. Todos os arquivos de configuracao do Astro (astro.config.mjs, tailwind.config.mjs) vao para a raiz

## Em Caso de Problemas:

Se algo der errado, volte para o backup:

```bash
git checkout backup-antes-migracao
```

---

Pronto para executar! Qualquer duvida, me avise antes de comecar.
