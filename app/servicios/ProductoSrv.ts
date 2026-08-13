import type Producto from "../modelos/Producto";

// variable global:
const productos: Producto[] = [
    { id: 1, nombre: "Producto 1", stock: 10 },
    { id: 2, nombre: "Producto 2", stock: 5 },
    { id: 3, nombre: "Producto 3", stock: 0 },
  ];

function listarProductos(): Producto[] {
  return productos;
}
function insertarProducto(producto: Producto): void {
  productos.push(producto);
}

export { listarProductos, insertarProducto };
