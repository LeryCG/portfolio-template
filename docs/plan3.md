Feature/Tarea: Dark Mode con toggle

Prompt/Pregunta a la IA:

Quiero hacer el dark mode de esta página cuando hago click en un checkbox. ¿Qué tengo que borrar, qué tengo que agregar y cómo hacerlo sin romper el resto del layout?

Respuesta completa de la IA (plan):

Agregar un checkbox con id="theme-toggle" en el nav.

Usar clase body.dark para activar dark mode.

CSS bajo body.dark para sobreescribir colores de fondo, texto y secciones.

JS que escuche cambios en #theme-toggle, agregue/quite body.dark y guarde la preferencia en localStorage.

Notas de implementación:

Se implementó toggle de dark mode sin tocar otros estilos.

JS maneja persistencia en localStorage.

Se añadieron reglas CSS para body.dark en el CSS.
