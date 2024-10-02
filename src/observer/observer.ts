/*¿Qué es el Patrón Observer?
El Patrón Observer es como una lista de personas (u "observadores") que quieren ser notificados cada vez que algo importante sucede. En este caso, el equipo (como un "sujeto") tiene una lista de observadores (el departamento de soporte), y cada vez que cambia su estado (como cuando pasa de "disponible" a "en reparación"), el equipo avisa a los observadores.

Ejemplo paso a paso:
Clase Equipo (Sujeto): Esta clase es el equipo que puede cambiar de estado. Tiene una lista de observadores y los notifica cada vez que hay un cambio de estado.

Clase Soporte (Observador): Esta clase representa el departamento de soporte, que quiere ser notificado cada vez que un equipo cambia de estado.

Método agregarObservador(): Este método se usa para agregar observadores a la lista del equipo, para que reciban notificaciones cuando cambie el estado.

Método cambiarEstado(): Cuando se cambia el estado de un equipo, se notifica a todos los observadores.*/ 

/**
 * Patrón Observer
 *
 * El patrón Observer es un patrón de diseño que permite a un objeto (el equipo) notificar a otros objetos (observadores)
 * cuando su estado cambia. En este ejemplo, el equipo notifica al departamento de soporte cada vez que su estado cambia.
 */

// Interfaz para un Observador (en este caso, el Soporte)
interface Observador {
    notificar(equipo: Equipo): void; // Cada observador debe tener un método para ser notificado
}

// Clase Equipo, que es el "Sujeto" que será observado
class Equipo {
    private observadores: Observador[] = []; // Lista de observadores
    private estado: string; // Estado actual del equipo

    constructor(
        public nombre: string, // Nombre del equipo
        public tipo: string,   // Tipo de equipo (ej. Portátil)
        estado: string         // Estado inicial del equipo (ej. disponible)
    ) {
        this.estado = estado;
    }

    // Método para agregar un observador (en este caso, el Soporte)
    public agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    // Método para cambiar el estado del equipo
    public cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores(); // Cada vez que cambia el estado, se notifica a los observadores
    }

    // Método para notificar a todos los observadores del cambio de estado
    private notificarObservadores(): void {
        for (const observador of this.observadores) {
            observador.notificar(this); // Se notifica a cada observador
        }
    }

    // Método para obtener el estado actual del equipo
    public getEstado(): string {
        return this.estado;
    }
}

// Clase Soporte, que es el observador que será notificado
class Soporte implements Observador {
    // Método que es llamado cuando el estado del equipo cambia
    public notificar(equipo: Equipo): void {
        console.log(`Soporte notificado: ${equipo.nombre} ha cambiado su estado a ${equipo.getEstado()}.`);
    }
}

// Ejemplo de uso del Patrón Observer

const soporte = new Soporte(); // Creamos el observador (Soporte)
const equipo = new Equipo("Notebook HP", "Portátil", "disponible"); // Creamos el equipo observado

// Agregamos el soporte como observador del equipo
equipo.agregarObservador(soporte);

// Cambiamos el estado del equipo, lo que notificará a Soporte
equipo.cambiarEstado("en reparación");
// Salida esperada: Soporte notificado: Notebook HP ha cambiado su estado a en reparación.
