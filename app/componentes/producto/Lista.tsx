import * as React from "react";
import type Producto from "../../modelos/Producto";
import { listarProductos } from "../../servicios/ProductoSrv";

export default function Lista() {
    const [productos, setProductos] = React.useState<Producto[]>(listarProductos());
    const productosJSX=productos.map((producto) => (
        <li key={producto.id}>
            {producto.nombre} - Stock: {producto.stock}
        </li>
    ));
    return <ul>{productosJSX}</ul>;
}