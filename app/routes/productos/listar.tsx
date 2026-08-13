
import type { Route } from "../+types/home";
import { Link } from "react-router";
import Lista from "~/componentes/producto/Lista";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export default function Home() {
    
    return <>
        <Lista />
        <Link to="/productos/insertar">Ir a Insertar Productos</Link><br />
    </>;
}
