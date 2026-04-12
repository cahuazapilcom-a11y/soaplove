# SoapLove – Jabones Artesanales Peruanos

Página web oficial de SoapLove, tienda de jabones artesanales 100% naturales hechos en Perú.

## Cómo publicar en GitHub Pages (gratis)

### Paso 1 – Crear cuenta en GitHub
1. Ve a [github.com](https://github.com) y crea tu cuenta gratuita.

### Paso 2 – Crear repositorio
1. Haz clic en **"New repository"** (botón verde).
2. Nombre del repositorio: `soaplove` (o el que prefieras).
3. Márcalo como **Public**.
4. Haz clic en **"Create repository"**.

### Paso 3 – Subir los archivos
En tu terminal (Git Bash), dentro de la carpeta `soaplove`, ejecuta:

```bash
cd /c/Users/USER/soaplove
git init
git add .
git commit -m "Primer commit: página web SoapLove"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/soaplove.git
git push -u origin main
```

> Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

### Paso 4 – Activar GitHub Pages
1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** (Configuración).
3. En el menú lateral, haz clic en **Pages**.
4. En "Source", selecciona **main** y carpeta **/ (root)**.
5. Haz clic en **Save**.

### Paso 5 – Tu página estará en línea en:
```
https://TU_USUARIO.github.io/soaplove/
```

¡Listo! Tu página web de SoapLove estará publicada de forma gratuita.

---

## Estructura del proyecto

```
soaplove/
├── index.html          # Página principal con todas las secciones
├── css/
│   └── styles.css      # Todos los estilos del sitio
├── js/
│   └── script.js       # Quiz de piel, filtros, animaciones
└── README.md           # Este archivo
```

## Secciones incluidas

- **Inicio (Hero)** – Presentación con llamada a la acción
- **Ingredientes** – Banda de ingredientes estrella
- **Sobre Mí** – Historia de Katherine y SoapLove
- **Proceso** – Los 4 pasos artesanales
- **Catálogo** – Todos los productos con precios y filtros por categoría
- **Quiz de Piel** – 4 preguntas para recomendar el jabón ideal
- **Testimonios** – Reseñas de clientes reales
- **Envíos** – Información de envíos y métodos de pago
- **Contacto** – Formulario que abre WhatsApp + redes sociales
- **Footer** – Links, contacto y copyright

## Contacto

- WhatsApp: 983 106 899 / 918 156 548
- Email: katherine.uchupe@gmail.com
- Instagram: @katherine_13_octubre
