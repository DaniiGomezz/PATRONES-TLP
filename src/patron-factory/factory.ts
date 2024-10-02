/*Imagina que tienes una fábrica de equipos informáticos, donde puedes hacer diferentes tipos de equipos, como notebooks, desktops y servidores. En lugar de que cada persona en la fábrica tenga que saber cómo hacer cada tipo de equipo, tienes una "fábrica general" que se encarga de construir cualquier equipo cuando alguien lo necesite. Solo necesitas decirle qué tipo de equipo quieres y qué especificaciones debe tener.

¿Qué es el Patrón Factory?
El Patrón Factory es como esa fábrica general. En lugar de crear los objetos directamente (como un Notebook o un Desktop), le pides a la fábrica que se encargue de hacerlo por ti. Esto te permite simplificar el proceso de creación de objetos, porque no necesitas preocuparte por los detalles internos de cómo se crean.

Ejemplo paso a paso
Fábrica: La clase EquipoFactory es como una fábrica que construye diferentes tipos de equipos según lo que le pidas.

Tipos de equipos: Tienes diferentes clases como Notebook, Desktop y Servidor, cada una con sus propias propiedades como el nombre, la cantidad de RAM y el procesador.

Método crearEquipo(): En lugar de tener que crear cada tipo de equipo manualmente, llamas a este método y le dices qué tipo de equipo quieres. Él se encarga de crear la clase adecuada y te la devuelve.*/

/**
 * Patrón Factory Method
 *
 * El patrón Factory Method es como una fábrica de objetos. En lugar de crear los objetos tú mismo,
 * le dices a la fábrica qué tipo de objeto (equipo) necesitas y la fábrica lo crea por ti.
 * En este ejemplo, la clase `EquipoFactory` es la fábrica que construye equipos como Notebooks,
 * Desktops y Servidores.
 */

// Clase para los equipos Notebook
class Notebook {
    constructor(
        public nombre: string, // Nombre del equipo (ej. Dell XPS)
        public ram: string,    // Cantidad de RAM (ej. 16GB)
        public procesador: string // T  ipo de procesador (ej. i7)
    ) {}

    // Este método devuelve los detalles del equipo
    public detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

// Clase para los equipos Desktop
class Desktop {
    constructor(
        public nombre: string,
        public ram: string,
        public procesador: string
    ) {}

    public detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

// Clase para los equipos Servidor
class Servidor {
    constructor(
        public nombre: string,
        public ram: string,
        public procesador: string
    ) {}

    public detalles(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
    }
}

// Clase Factory que se encarga de crear los diferentes tipos de equipos
class EquipoFactory {
    /**
     * Este método es el "fabricante". Según el tipo de equipo que le pidas,
     * construye y devuelve la clase correspondiente (Notebook, Desktop o Servidor).
     */
    public crearEquipo(
        tipo: string,     // Tipo de equipo (ej. "Notebook", "Desktop", "Servidor")
        nombre: string,   // Nombre del equipo (ej. Dell XPS)
        ram: string,      // RAM del equipo (ej. 16GB)
        procesador: string // Procesador del equipo (ej. i7)
    ) {
        // Según el tipo de equipo que se pida, crea una instancia de la clase correspondiente
        switch (tipo) {
            case "Notebook":
                return new Notebook(nombre, ram, procesador);
            case "Desktop":
                return new Desktop(nombre, ram, procesador);
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            default:
                throw new Error("Tipo de equipo no válido"); // Si no es un tipo válido, da un error
        }
    }
}

// Ejemplo de uso del Patrón Factory

const factory = new EquipoFactory(); // Creamos la fábrica
const notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7"); // Pedimos que nos hagan un Notebook
console.log(notebook.detalles()); // Salida: Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7

/*
Qué es EquipoFactory?: Es como una fábrica de verdad. Le dices qué tipo de equipo quieres (Notebook, Desktop, Servidor) y te lo construye con las características que le pidas (como el nombre, la RAM y el procesador).

¿Cómo funciona el método crearEquipo()?: Es el constructor de la fábrica. Recibe tres cosas: el tipo de equipo, el nombre, la RAM y el procesador. Dependiendo del tipo que le digas (por ejemplo, "Notebook"), construye un objeto de la clase correcta (Notebook, Desktop, Servidor) y te lo devuelve. Si alguien pide un tipo de equipo que no existe, lanza un error.

Ejemplo real: Si trabajas en la fábrica y le pides a la máquina que te haga un "Notebook" con 16GB de RAM y un procesador i7, la máquina te devuelve ese notebook. Todo lo que tienes que hacer es decirle qué quieres, y la fábrica se encarga del resto.

Ventajas de este enfoque:
Fácil de mantener: Si mañana decides crear un nuevo tipo de equipo (por ejemplo, "Tablet"), simplemente agregas una nueva clase Tablet y ajustas el crearEquipo(). No tienes que cambiar todo el código.

Simplifica el proceso: Ya no necesitas saber los detalles de cómo se construyen los equipos. Solo le dices a la fábrica qué tipo de equipo quieres y obtienes lo que necesitas.

Así es como funciona el Patrón Factory, ayudando a organizar y simplificar la creación de objetos.
*/