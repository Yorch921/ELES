# SOP: Flujo de Trabajo en GitHub

Instrucciones para mantener el repositorio sincronizado siguiendo la arquitectura de 3 capas.

## Procedimiento de Actualización

### 1. Verificar Estado
Antes de cualquier cambio, verificar si hay cambios remotos.
- **Ejecución**: `git status` y `git pull origin master`.

### 2. Guardar Cambios
Una vez completada la tarea de orquestación:
- **Ejecución**: `git add .`
- **Ejecución**: `git commit -m "[Descripción clara de los cambios]"`

### 3. Sincronizar
- **Ejecución**: `git push origin master`

## Reglas de Commits
- Los commits deben reflejar tareas de orquestación completas.
- Si se modifican directivas, mencionarlo en el commit.
- Los archivos en `.tmp/` no deben ser commiteados (revisar `.gitignore`).
