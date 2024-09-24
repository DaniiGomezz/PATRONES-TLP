/*magina que tienes una única libreta en la que apuntas todos los equipos que tienes en tu almacén. Solo puedes tener una única libreta, porque si tienes varias, podrías apuntar cosas en diferentes libretas y sería un caos mantener todo organizado.

El patrón Singleton es como esa libreta única. Este patrón se asegura de que solo exista una única instancia de una clase en todo tu programa. En este caso, la clase sería una "libreta" llamada Inventario, y todas las veces que quieras usar esa libreta, siempre obtendrás la misma.

Vamos a ver cómo funciona paso a paso:

Ejemplo de la clase Inventario (Singleton)
Una única libreta: La clase Inventario tiene una propiedad llamada instancia. Esta propiedad guarda la única libreta que puede existir.

Constructor privado: En la clase Inventario, el constructor es privado. Esto significa que nadie fuera de la clase puede crear una nueva libreta (o una nueva instancia de Inventario). Esto evita que accidentalmente se creen varias libretas.

Método obtenerInstancia(): Este método es como una puerta de acceso a la libreta. La primera vez que llamas a este método, si no hay libreta creada todavía, se crea una nueva. Pero si ya hay una libreta, simplemente te devuelve la misma que ya existe. De esta forma, te aseguras de estar usando siempre la misma libreta.

Métodos agregarEquipo() y listarEquipos(): Estos métodos son como las acciones que puedes hacer con tu libreta. Puedes escribir en la libreta (agregar equipos) o leer lo que has apuntado (listar equipos).*/

class Inventario {
    // Este es el espacio donde guardamos la única instancia (la libreta única)
    private static instancia: Inventario;
    
    // Aquí guardamos todos los equipos que anotamos en nuestra libreta
    private equipos: { nombre: string; tipo: string; estado: string }[] = [];
    
    // El constructor es privado para que nadie más pueda crear otra libreta
    private constructor() {}

    // Este es el método que te da acceso a la libreta
    public static obtenerInstancia(): Inventario {
        // Si no hay libreta aún, creamos una
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        // Si ya existe, devolvemos la libreta existente
        return Inventario.instancia;
    }

    // Este método sirve para agregar equipos a la libreta
    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.equipos.push({ nombre, tipo, estado });
    }

    // Este método devuelve la lista de todos los equipos que has anotado
    public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
        return this.equipos;
    }
}

// Uso del patrón Singleton
const inventario = Inventario.obtenerInstancia(); // Aquí pedimos la única libreta
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible"); // Anotamos un equipo
console.log(inventario.listarEquipos()); // Vemos qué tenemos anotado
// Salida: [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]


/*Si alguien más en tu empresa necesita trabajar con el inventario, ambos estarían usando la misma libreta, porque el Inventario es un Singleton. No se crean nuevas libretas cada vez que alguien necesita ver los equipos; todos comparten la misma instancia de Inventario.
Si intentas obtener la libreta varias veces, el programa siempre te dará la misma, de modo que todo el mundo tiene acceso a la misma información.
Es como si solo hubiera una única verdad sobre los equipos que tienes, y esa verdad está en la libreta que todos usan. */