Feature/Tarea: Header centrado verticalmente con logo, nav y switch

Prompt/Pregunta a la IA:

No logro que todo el contenido del header (logo, nav y switch) esté centrado verticalmente
.

Respuesta completa de la IA (plan):

Ajustar .site-header con display: flex; align-items: center; justify-content: center;.

Ajustar .header-inner con display: flex; align-items: center; justify-content: space-between;.

Eliminar height: 84px de nav a para no romper el centrado vertical.

Añadir align-items: center a .logo, nav, y .theme-checkbox.

Mantener justify-content: space-between en .header-inner para distribuir horizontalmente logo, nav y switch.

Notas de implementación:

Se aplicó el CSS sugerido y el header ahora muestra logo a la izquierda, nav centrado verticalmente, y switch alineado al centro vertical.

Eliminé la altura fija de los enlaces para un centrado vertical correcto.