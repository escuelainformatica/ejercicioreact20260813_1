import * as React from "react";
import type { Route } from "../+types/home";
import type Producto from "../../modelos/Producto";
import { listarProductos, insertarProducto } from "../../servicios/ProductoSrv";
import { Link } from "react-router";
import FormularioInsertar from "~/componentes/producto/FormularioInsertar";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    return <>
        <FormularioInsertar />
    </>

}
