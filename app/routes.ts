import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), // route("/", "./routes/inicio.tsx"),
    route("/inicio", "./routes/inicio.tsx"),
    route("/productos/", "./routes/productos/listar.tsx"),
    route("/productos/insertar", "./routes/productos/insertar.tsx"),

] satisfies RouteConfig;
