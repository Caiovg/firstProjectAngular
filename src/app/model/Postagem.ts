import { Tema } from "./Tema";
import { Usuario } from "./Usuario";

export type Postagem = {
    id: number;
    titulo: string; 
    txt: string;
    tema: Tema;
    usuario: Usuario
}