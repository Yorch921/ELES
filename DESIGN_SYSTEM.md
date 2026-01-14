# Sistema de Diseño ELES Club

Este documento detalla los estilos, variables y componentes visuales utilizados en el sitio web de ELES Club. Úsalo como referencia para mantener la consistencia en el desarrollo de nuevas páginas y componentes.

## 1. Paleta de Colores

### Colores Principales
*   **Burgundy Red (Principal)**: `#70000e`
    *   Uso: Encabezados, botones primarios, iconos activos, fondos de footer.
    *   Variable CSS: `--burgundy-red` o `--burgundy`
*   **White (Texto/Fondos)**: `#ffffff`
    *   Uso: Texto sobre fondos oscuros, fondos de tarjetas limpias.
    *   Variable CSS: `--white`
*   **Cream (Fondo Suave)**: `#fffaee`
    *   Uso: Fondos de secciones (Method), calidez.
    *   Variable CSS: `--cream`
*   **Parchment (Fondo Acento)**: `#F4EFE7`
    *   Uso: Bloques destacados, fondos alternativos, badges.
    *   Variable CSS: `--parchment`

### Colores de Texto y Neutros
*   **Dark Gray (Texto Principal)**: `#2b2b2b`
    *   Uso: Títulos en fondos claros, texto de cuerpo fuerte.
    *   Variable CSS: `--dark-gray`
*   **Medium Gray (Texto Secundario)**: `#464242`
    *   Uso: Párrafos, descripciones.
    *   Variable CSS: `--medium-gray`
*   **Light Gray (Bordes/Detalles)**: `#c0bfc2`
    *   Variable CSS: `--light-gray`
*   **White Soft**: `rgba(255, 255, 255, 0.9)`
    *   Uso: Texto secundario sobre fondos oscuros.

## 2. Tipografía

### Fuentes
*   **Principal (Interfaz/Cuerpo)**: `'Roboto', sans-serif`
    *   Uso: Menús, botones, cuerpo de texto general, FAQ.
    *   Importación: Google Fonts (weights: 300, 400, 500, 700).
*   **Editorial (Títulos/Method)**: `'Playfair Display', serif`
    *   Uso: Encabezados grandes (H1, H2), citas, números destacados, secciones "The Method".
    *   Importación: Google Fonts (weights: 400, 500, 600, 700, 800).

### Jerarquía
*   **H1 (Hero)**: ~64px (Desktop), ~36-42px (Móvil). Font: Playfair Display.
*   **H2 (Secciones)**: ~48px. Font: Playfair Display.
*   **Subtítulos**: ~22px. Font: Playfair Display (Italic).
*   **Cuerpo**: 16px - 18px. Line-height: 1.6 - 1.8.

## 3. Espaciado y Layout

### Variables de Espaciado
*   `--spacing-xs`: 8px
*   `--spacing-sm`: 12px
*   `--spacing-md`: 20px
*   `--spacing-lg`: 32px
*   **Header Height**: 95px (Desktop), 80px (Mobile).
*   **Body Padding Top**: ~130px (para compensar el header fijo).

### Contenedores
*   **Ancho Máximo (Global)**: `1400px` (Header/Footer).
*   **Ancho Máximo (Contenido)**: `1200px` o `1300px` (Method/Workouts).
*   **Grid**: Se utiliza frecuentemente `display: grid` con columnas asimétricas (ej. `1fr 1.2fr` para texto + imagen).

## 4. Componentes UI

### Botones
*   **Botón Primario (Sólido)**:
    *   Fondo: `--burgundy`
    *   Texto: `--cream` / `--white`
    *   Border-radius: `50px` (Pill shape)
    *   Padding: `16px 40px`
    *   Hover: `transform: translateY(-3px)`, Sombra suave.
*   **Botón Outline / Header Actions**:
    *   Fondo: Transparent
    *   Borde: `2px solid var(--white)` o `--burgundy`
    *   Forma: Circular (para iconos) o Pill.

### Badges / Etiquetas
*   **Estilo**: Fondo `--parchment` o `--burgundy`, Texto uppercase, Letter-spacing `2px`.
*   **Font**: Playfair Display, weight 600.
*   **Border-radius**: `50px`.

### Tarjetas (Highlights)
*   **Highlight Box**:
    *   Fondo: `--parchment`
    *   Borde izquierdo: `4px solid var(--burgundy)`
    *   Border-radius: `15px`
    *   Padding: `30px`

## 5. Efectos y Animaciones

### Sombras
*   **Suave**: `0 4px 16px rgba(0, 0, 0, 0.2)` (Header)
*   **Elevada (Hover)**: `0 12px 35px rgba(112, 0, 14, 0.4)`
*   **Imagen Badge**: `0 10px 30px rgba(112, 0, 14, 0.4)`

### Transiciones
*   `--transition-smooth`: `all 0.3s ease`
*   `--transition-fast`: `all 0.2s ease`

### Animaciones Keyframes
*   `fadeInUp`: Entrada desde abajo con opacidad.
*   `fadeInDown`: Entrada desde arriba.
*   `cartBadgePulse`: Pulso para notificaciones.

## 6. Iconografía
*   **Librería**: Font Awesome 6.4.0 (clases `fas fa-`, `fab fa-`).
*   **Estilo**: A menudo encapsulados en círculos con fondo sólido o borde.

## 7. Reglas de Responsive
*   **Tablet**: `< 1024px`
    *   Header colapsa acciones.
    *   Grids de 2 columnas pasan a 1 columna o se ajustan márgenes.
*   **Móvil**: `< 768px` / `< 480px`
    *   Menú hamburguesa se activa.
    *   Fuentes H1 reducen tamaño (~36px).
    *   Padding lateral de secciones se reduce a `20px`.
