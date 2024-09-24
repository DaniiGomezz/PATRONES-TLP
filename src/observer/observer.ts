/*¿Qué es el Patrón Observer?
El Patrón Observer es como una lista de personas (u "observadores") que quieren ser notificados cada vez que algo importante sucede. En este caso, el equipo (como un "sujeto") tiene una lista de observadores (el departamento de soporte), y cada vez que cambia su estado (como cuando pasa de "disponible" a "en reparación"), el equipo avisa a los observadores.

Ejemplo paso a paso:
Clase Equipo (Sujeto): Esta clase es el equipo que puede cambiar de estado. Tiene una lista de observadores y los notifica cada vez que hay un cambio de estado.

Clase Soporte (Observador): Esta clase representa el departamento de soporte, que quiere ser notificado cada vez que un equipo cambia de estado.

Método agregarObservador(): Este método se usa para agregar observadores a la lista del equipo, para que reciban notificaciones cuando cambie el estado.

Método cambiarEstado(): Cuando se cambia el estado de un equipo, se notifica a todos los observadores.*/ 