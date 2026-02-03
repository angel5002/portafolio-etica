# Portafolio de Ética Profesional

Un portafolio digital interactivo para el curso de Ética Profesional, diseñado para que estudiantes universitarios presenten su postura ética en el ámbito laboral.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Secciones del Portafolio](#secciones-del-portafolio)
- [Guía de Edición](#guía-de-edición)
- [Funcionalidades JavaScript](#funcionalidades-javascript)
- [Personalización](#personalización)
- [Notas Técnicas](#notas-técnicas)
- [Historial de Cambios](#historial-de-cambios)

---

## Descripción

Este portafolio está diseñado con un enfoque **juvenil y profesional**, ideal para ser compartido en plataformas como LinkedIn. Incluye todas las secciones requeridas para el curso de ética:

1. **Manifiesto de Identidad Ética**
2. **Podcast sobre Dilemas Éticos**
3. **Video-Reacción Deontológica**
4. **Infografía de Compromiso**

### Características Principales

- Diseño moderno con gradientes y animaciones suaves
- Totalmente responsive (móvil, tablet, desktop)
- Videos de YouTube integrados con carga bajo demanda
- Navegación suave con scroll animado
- Sistema de tabs interactivo
- Efectos parallax en el hero
- Contadores animados
- Optimizado para impresión

---

## Estructura del Proyecto

```
portafolio-etica/
├── index.html      # Archivo HTML principal
├── styles.css      # Estilos CSS completos
├── script.js       # Funcionalidades JavaScript
└── README.md       # Este archivo de documentación
```

---

## Secciones del Portafolio

### 1. Manifiesto de Identidad Ética

Contiene 4 sub-secciones accesibles mediante tabs:

| Tab | Contenido |
|-----|-----------|
| **Telos Profesional** | Metáfora artística y descripción del fin de la carrera |
| **Mapa de Rostros** | Personas vulnerables afectadas por la profesión |
| **Valores No Negociables** | Los 5 valores principales del equipo |
| **Luces y Sombras** | Aspectos positivos y desafíos éticos de la carrera |

### 2. Podcast

- Reproductor de video de YouTube integrado
- Descripción del dilema ético discutido
- Lista de temas tratados
- Metadatos (duración, fecha)

### 3. Video-Reacción

- Análisis complementario desde perspectiva deontológica
- Explicación de qué es la deontología
- Puntos clave del análisis
- Cita reflexiva del equipo

### 4. Compromiso de Responsabilidad

- 4 pilares: Social, Ambiental, Económico, Gobernanza
- ODS (Objetivos de Desarrollo Sostenible) seleccionados
- Juramento/compromiso del equipo
- Espacio para firmas

### 5. Equipo

- Cards para cada integrante
- Enlaces a LinkedIn y correo
- Información del curso

---

## Guía de Edición

### Campos Editables

Busca los comentarios `<!-- EDITABLE: ... -->` en el HTML para encontrar las secciones que deben personalizarse.

### Ediciones Principales

#### 1. Información del Equipo (5 integrantes)

```html
<!-- En la sección #equipo -->
<h4>[Nombre Completo]</h4>
<span class="miembro-rol">Rol en el equipo</span>
<p class="miembro-contribucion">Contribución principal</p>
```

#### 2. Videos de YouTube

Reemplaza `VIDEO_ID_PODCAST` y `VIDEO_ID_REACCION` con los IDs reales:

```html
<button data-video-id="dQw4w9WgXcQ">
```

El ID se obtiene de la URL de YouTube: `youtube.com/watch?v=dQw4w9WgXcQ`

#### 3. Metáfora Artística

```html
<blockquote>
    "Tu metáfora artística aquí..."
</blockquote>
```

#### 4. Valores No Negociables

```html
<div class="valor-item">
    <div class="valor-number">1</div>
    <div class="valor-content">
        <h4>Nombre del Valor</h4>
        <p>Descripción del valor</p>
    </div>
</div>
```

#### 5. Información del Curso

```html
<li><strong>Curso:</strong> Ética Profesional</li>
<li><strong>Universidad:</strong> [Tu Universidad]</li>
<li><strong>Carrera:</strong> [Tu Carrera]</li>
<li><strong>Docente:</strong> [Nombre del Docente]</li>
<li><strong>Período:</strong> [Semestre/Año]</li>
```

#### 6. Firmas del Compromiso

```html
<span class="firma-nombre">[Nombre Integrante 1]</span>
```

---

## Funcionalidades JavaScript

### API Pública para Edición Dinámica

El archivo `script.js` expone un objeto `window.PortfolioData` con funciones útiles:

```javascript
// Actualizar miembro del equipo (índice 0-4)
PortfolioData.updateTeamMember(0, {
    nombre: "Juan Pérez",
    rol: "Líder del equipo",
    contribucion: "Coordinación y edición final",
    linkedin: "https://linkedin.com/in/juanperez",
    email: "juan@email.com"
});

// Actualizar metáfora del Telos
PortfolioData.updateMetaphor("Nueva metáfora artística...");

// Actualizar valor (índice 0-4)
PortfolioData.updateValue(0, {
    titulo: "Integridad",
    descripcion: "Actuamos con honestidad..."
});

// Actualizar información del curso
PortfolioData.updateCourseInfo({
    curso: "Ética Profesional",
    universidad: "Universidad Nacional",
    carrera: "Ingeniería de Sistemas",
    docente: "Dr. García",
    periodo: "2024-1"
});

// Actualizar firmas
PortfolioData.updateSignatures([
    "Ana García",
    "Carlos López",
    "María Rodríguez",
    "Pedro Sánchez",
    "Laura Martínez"
]);

// Actualizar juramento
PortfolioData.updateOath("Texto del nuevo juramento...");
```

### Funciones de Utilidad

```javascript
// Actualizar ID de video
window.updateVideoId('podcast', 'nuevo_id_youtube');
window.updateVideoId('reaccion', 'nuevo_id_youtube');

// Compartir en LinkedIn
window.shareOnLinkedIn();

// Copiar enlace
window.copyLink();

// Imprimir portafolio
window.printPortfolio();
```

---

## Personalización

### Colores

Los colores se definen en variables CSS en `styles.css`:

```css
:root {
    --primary: #6366f1;      /* Violeta principal */
    --secondary: #ec4899;    /* Rosa */
    --accent-cyan: #06b6d4;  /* Cian */
    --accent-emerald: #10b981; /* Verde */
    --accent-amber: #f59e0b; /* Ámbar */
}
```

### Tipografía

El portafolio usa dos fuentes de Google Fonts:
- **Inter**: Para texto general
- **Playfair Display**: Para títulos elegantes

### Imágenes

Para agregar imágenes (fotos de equipo, metáfora artística):

1. Crea una carpeta `images/` en el proyecto
2. Reemplaza los placeholders:

```html
<!-- De esto -->
<div class="foto-placeholder">
    <i data-lucide="user"></i>
</div>

<!-- A esto -->
<img src="images/foto-juan.jpg" alt="Juan Pérez">
```

---

## Notas Técnicas

### Dependencias Externas

- **Google Fonts**: Inter y Playfair Display
- **Lucide Icons**: Iconos SVG modernos

### Compatibilidad de Navegadores

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance

- Videos cargan bajo demanda (no automático)
- Animaciones usan CSS transforms (GPU-accelerated)
- Iconos SVG inline para menor latencia

### SEO y Compartir

Para mejorar el SEO y la vista previa en redes sociales, agrega estas meta tags en el `<head>`:

```html
<meta property="og:title" content="Portafolio de Ética - [Tu Equipo]">
<meta property="og:description" content="Nuestro compromiso ético profesional">
<meta property="og:image" content="URL_de_imagen_preview">
<meta property="og:url" content="URL_del_portafolio">
```

---

## Historial de Cambios

### Versión 1.1.0 (Actualización de estilo vintage)

**Cambios realizados:**
- [x] **Tema Visual**: Cambio de paleta futurista (violeta/rosa) a estilo **vintage/filosofía antigua**
  - Nuevos colores: tonos marrones, dorados, beige y crema
  - Acentos en dorado (#D4AF37) para elementos destacados
  - Fondos cálidos tipo pergamino antiguo
- [x] **Badge del Hero**: Aumentado padding y espaciado para mejor legibilidad
  - Añadido borde dorado y letter-spacing
  - Icono cambiado de 🎓 a 🏛️ (más acorde a filosofía)
- [x] **Navegación Suave**: Implementada función `smoothScrollTo()` con easing cubic
  - Duración de transición: 1200ms
  - Animación ease-in-out para sensación más natural
- [x] **Branding**:
  - Cambiado "ÉticaPro" por "Curso de Ética"
  - Icono del logo: 📜 (pergamino)
  - Actualizado año a 2026
  - Removido "Profesional" del nombre del curso
- [x] **Colores Actualizados**:
  - Primary: #8B7355 (marrón cálido)
  - Secondary: #C4A77D (beige dorado)
  - Accent Gold: #D4AF37 (dorado clásico)
  - Accent Burgundy: #722F37 (para sombras)
  - Accent Emerald: #2E5A4C (verde olivo oscuro)

**Archivos modificados:**
- `index.html` - Textos, iconos y referencias al curso
- `styles.css` - Paleta de colores completa, badge, transiciones
- `script.js` - Función de scroll suave mejorada

---

### Versión 1.0.0 (Fecha inicial)

**Funcionalidades creadas:**
- [x] Estructura HTML completa con 5 secciones
- [x] Sistema de navegación responsive con menú hamburguesa
- [x] Hero section con animaciones parallax
- [x] Sistema de tabs para el Manifiesto
- [x] Integración de videos de YouTube con carga lazy
- [x] Sección de compromiso con infografía
- [x] Cards de equipo con enlaces sociales
- [x] Footer con navegación y contacto
- [x] Botón scroll-to-top
- [x] Animaciones de entrada al scroll
- [x] Contadores animados
- [x] API JavaScript para edición dinámica
- [x] Diseño responsive completo
- [x] Estilos para impresión

**Notas de diseño (v1.0 - obsoletas):**
- ~~Paleta de colores violeta/rosa para aspecto juvenil pero profesional~~
- ~~Fondo oscuro con acentos de color para modernidad~~

**Notas de diseño (v1.1 - actuales):**
- Paleta de colores vintage inspirada en filosofía antigua
- Tonos cálidos: marrones, dorados, beige
- Tipografía elegante con Playfair Display para títulos
- Transiciones suaves y elegantes
- Estilo profesional apropiado para LinkedIn

---

## Próximos Pasos (Para el equipo)

1. [ ] Reemplazar todos los `[texto entre corchetes]` con información real
2. [ ] Agregar IDs de videos de YouTube del podcast y video-reacción
3. [ ] Agregar fotos de los integrantes del equipo
4. [ ] Personalizar la metáfora artística del Telos
5. [ ] Definir los valores no negociables específicos
6. [ ] Completar las luces y sombras de su carrera
7. [ ] Redactar el juramento/compromiso del equipo
8. [ ] Actualizar los ODS relevantes para su carrera
9. [ ] Agregar los enlaces de LinkedIn de cada integrante
10. [ ] Revisar todo el contenido antes de publicar

---

## Soporte

Si necesitas ayuda para personalizar este portafolio, puedes:

1. Consultar este README
2. Usar las funciones de `window.PortfolioData` para ediciones rápidas
3. Buscar los comentarios `<!-- EDITABLE -->` en el HTML
4. Modificar las variables CSS para cambiar colores

---

*Portafolio creado con fines académicos para el curso de Ética Profesional*
