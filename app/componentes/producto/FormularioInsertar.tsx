import * as React from "react";
import type Producto from "../../modelos/Producto";
import { insertarProducto } from "../../servicios/ProductoSrv";
import { Link } from "react-router";
export default function FormularioInsertar() {
    const [producto, setProducto] = React.useState<Producto>({ id: 0, nombre: "", stock: 0 });
    const [mensaje, setMensaje] = React.useState<string>("");

    const modificarId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProducto({ ...producto, id: parseInt(e.target.value) });
    }
    const modificarNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProducto({ ...producto, nombre: e.target.value });
    }
    const modificarStock = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProducto({ ...producto, stock: parseInt(e.target.value) });
    }
    const clickBoton = (e: React.MouseEvent<HTMLButtonElement>) => {
        insertarProducto(producto);
        setProducto({ id: 0, nombre: "", stock: 0 }); // funciones son asincronicas
        setMensaje("Producto insertado correctamente."); // funciones son asincronicas
    }
    if (mensaje) {
        return <>
            <p>{mensaje}</p>
            <Link to="/productos/">Ir a Listar Productos</Link><br />                
        </>
    }
    else {
        return <>
            <form>
                <label>Id</label>
                <input type="number" name="id" value={producto.id} onChange={modificarId} /><br />
                <label>Nombre</label>
                <input type="text" name="nombre" value={producto.nombre} onChange={modificarNombre} /><br />
                <label>Stock</label>
                <input type="number" name="stock" value={producto.stock} onChange={modificarStock} /><br />
                <button type="button" onClick={clickBoton}>Insertar</button><br />
                <Link to="/productos/">Ir a Listar Productos</Link><br />                
            </form>
        </>
    }
}
