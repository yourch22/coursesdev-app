export interface Courses{
    id: bigint;
    codigo: number;
    titulo: string;
    descripcion_corta: string;
    descripcion: string;
    portada: string;
    idioma: string;
    languages_id: bigint;
    categories_id: bigint;
    subcategories_id: bigint;
    ruta: string;
    estado: number;
    cupon: string;
    plataforma: string;
    logo: string;
    calificacion: number;
    cant_estudiantes: string;
    instructor: string;
    precio: number;
    precio_oferta: number;
    finOferta: Date;
    visitas: number;
    tag: string;
    fecha: Date;
    categoria: string;
    subcategoria: string;
}