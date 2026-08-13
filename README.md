# Ejercicio Route 2026-08-13

* [x] Crear un proyecto de Route con TypeScript y React.
* [x] Limpiar el proyecto
    * borre todos los componentes, paginas y css que no va a usar. Puede que requiera quitarlos de root.tsx y routes.ts
* [x] Crear los modelos
    * Cree las interfaces que va a usar. Ejemplo [modelos/Producto.ts](app/modelos/Producto.ts)
* [x] Crear los servicios
    * Cree las funciones que va a usar. Ejemplo [servicios/ProductoSrv.ts](app/servicios/ProductoSrv.ts)

* [x] Crear las paginas

Ejemplo:

```tsx
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <h1>pagina inicial</h1>;
}
```

* [x] Crear las rutas 
    * Edite [app/routes.ts](app/routes.ts) para agregar las rutas de las paginas que creo. Ejemplo:
```ts

export default [
    index("routes/home.tsx"), 
    route("/inicio", "./routes/inicio.tsx"),
    route("/productos/", "./routes/productos/listar.tsx"),
    route("/productos/insertar", "./routes/productos/insertar.tsx"),

] satisfies RouteConfig;
```

