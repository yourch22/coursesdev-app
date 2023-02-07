export interface Category{
    id: bigint;
    categoria: string;
    api: string;
    ruta: string;
    titulo: string;
    descripcion: string;
    palabrasClaves: string;
    imgBanner: string;
    oferta: number;
    descuento: number;
    finOferta: Date;
}