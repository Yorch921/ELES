# SOP: Desarrollo y Uso Local

Este documento define cómo operar el proyecto en un entorno local.

## Capas involucradas
- **Orquestación**: Agente AI que coordina los comandos.
- **Ejecución**: Herramientas en `execution/`.

## Instrucciones de Inicio

### 1. Servidor de Desarrollo
Para iniciar la web, se debe ejecutar el comando de Vite:
- **Comando**: `npm run dev`
- **Herramienta de ejecución**: `execution/Iniciar_Web.bat` (Automatiza el inicio y la apertura del navegador).

### 2. Acceso Visual
El archivo `Acceso_Local.html` en la raíz sirve como panel de control manual para el usuario.

## Comandos Comunes
- `npm run dev`: Inicia el servidor HMR.
- `npm run build`: Genera el bundle de producción en `dist/`.
- `npm run lint`: Ejecuta el linter para mantener la calidad del código.

## Resolución de Problemas
- Si el puerto 5173 está ocupado, Vite intentará usar el siguiente (5174).
- Asegurarse de haber corrido `npm install` antes del primer inicio.
