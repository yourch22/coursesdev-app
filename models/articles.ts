export interface Articles{
    id: bigint;
    titulo: string;
    descripcion: string;
    contenido: string;
    portada: string;
    languages_id: bigint;
    categories_id: bigint;
    subcategories_id: bigint;
    users_id: bigint;
    ruta: string;
    palabras_claves: string;
    visitas:number;
    fecha:Date;
}