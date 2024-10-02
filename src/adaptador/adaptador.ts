/**
 * El Patrón Adaptador permite que dos interfaces incompatibles trabajen juntas.
 * En este ejemplo, tenemos un sistema viejo (InventarioViejo) que maneja un inventario usando
 * métodos antiguos (agregarItem y listarItems), pero queremos usar una nueva interfaz más moderna 
 * (agregarEquipo y listarEquipos) sin modificar el código de InventarioViejo.
 * 
 * El adaptador actúa como un "traductor" entre la nueva interfaz y el sistema viejo.
 */

// Clase antigua `InventarioViejo` que tiene su propia manera de agregar y listar equipos
class InventarioViejo {
    // El inventario se almacena en un arreglo de objetos con las propiedades: nombre, tipo y estado
    private items: { nombre: string, tipo: string, estado: string }[] = [];

    // Constructor vacío, no se necesita inicialización específica
    constructor() {}

    // Método antiguo para agregar un equipo al inventario
    agregarItem(nombre: string, tipo: string, estado: string) {
        // Agrega un equipo al inventario antiguo
        this.items.push({ nombre, tipo, estado });
    }

    // Método antiguo para listar los equipos en el inventario
    listarItems() {
        // Devuelve todos los equipos almacenados en el inventario viejo
        return this.items;
    }
}

// Clase Adaptador que traduce las llamadas de la nueva interfaz al sistema viejo
class AdaptadorInventario {
    // El adaptador contiene una referencia al sistema antiguo `InventarioViejo`
    constructor(private inventarioViejo: InventarioViejo) {}

    // Método de la nueva interfaz para agregar un equipo
    // Aunque el nombre y la firma cambian, internamente se usa el sistema viejo
    agregarEquipo(nombre: string, tipo: string, estado: string) {
        // Se traduce la llamada al método antiguo del sistema viejo
        return this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }

    // Método de la nueva interfaz para listar los equipos
    listarEquipos() {
        // Se traduce la llamada al método antiguo del sistema viejo
        return this.inventarioViejo.listarItems();
    }
}

/**
 * Aquí utilizamos el patrón Adaptador:
 * Aunque `InventarioViejo` no tiene los métodos `agregarEquipo` o `listarEquipos`,
 * podemos usar la nueva interfaz gracias a `AdaptadorInventario`, que se encarga de
 * traducir las llamadas.
 */

// Creamos una instancia del sistema antiguo `InventarioViejo`
const inventarioViejo = new InventarioViejo();

// Creamos una instancia del adaptador, que recibe la instancia del inventario viejo
const adaptador = new AdaptadorInventario(inventarioViejo);

// Agregamos un equipo usando la nueva interfaz (el adaptador traduce esta acción al sistema viejo)
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");

// Listamos los equipos usando la nueva interfaz (el adaptador traduce la llamada al sistema viejo)
console.log(adaptador.listarEquipos());
// Salida esperada: [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]
