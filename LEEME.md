# HEADBIRDS — V12 editable

Esta versión conserva el diseño HTML/CSS de V11. Los contenidos están en `content/site.json`.

## Verla en tu ordenador

No abras `index.html` con doble clic: el navegador puede bloquear la carga del JSON con `file://`.

Con Python instalado, abre una terminal en esta carpeta y ejecuta:

```sh
python3 -m http.server 8000
```

Abre http://localhost:8000. La V11 sigue disponible en el ZIP anterior como copia de seguridad.

## Publicación y editor (Pages CMS)

1. Crea un repositorio privado o público en GitHub y sube **el contenido de esta carpeta**, incluida `.pages.yml` (es un archivo oculto).
2. En Netlify, crea un sitio importando ese repositorio; directorio de publicación: raíz del repositorio (o `.`); sin comando de compilación.
3. En https://pagescms.org/ inicia sesión con GitHub y abre el repositorio. El archivo `.pages.yml` define el formulario para editar los textos, portadas, listas de lanzamientos, sesiones y galerías.
4. Cada cambio que guardes desde Pages CMS actualiza el repositorio; Netlify publica de nuevo el sitio automáticamente.
5. Cuando funcione, conecta tu dominio en Netlify y configura los DNS en el proveedor de tu dominio.

**Importante:** el panel de edición de esta configuración está en pagescms.org, **no** en `/admin`. No se ha conectado aún ninguna cuenta, ni se ha publicado la web.

## Notas

- `assets/portrait.jpg` es la imagen de portada original, separada del HTML.
- Puedes subir imágenes a `assets/` mediante Pages CMS y asignarlas a las galerías.
- El PDF original se encuentra en `assets/HEADBIRDS_Press_Kit.pdf`; su ruta es editable en el panel.
- El formulario Booking usa Netlify Forms: envía desde la web una vez publicado en Netlify. En Netlify, activa/verifica Form detection y configura notificaciones por email en Forms > Form notifications (la ubicación puede variar). Prueba un envío real tras desplegar y confirma que aparece en los envíos. En local o en otro hosting no se enviará.
- El email de recepción no está en el HTML público: se configura únicamente en Netlify. Revisa el tratamiento de datos y añade aviso de privacidad antes de publicar el formulario. Añade protección antispam si fuera necesario.
- No cambies las clases CSS ni el diseño si quieres mantener la composición V11.
