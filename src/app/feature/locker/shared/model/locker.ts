export interface ItipoCasilleros{
    id: number;
    tipo: string;
    valorHora: number;
    cantidad: number;
}

export interface Iocupados{
    id: number;
    tipo: string;
    ingreso: string;
}

export interface Icasilleros{
    id: number;
    estado: string;
    placa: string;
    nombre: string;
    telefono: string;
    ingreso: string;
    valorHora?: number;
}
