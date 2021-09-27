import { Postagem } from "./Postagem";

export type Usuario = {
    idUsuario: number,
    nome: string,
    email: string,
    usuario: string,
    senha: string,
    minhasPostagens: Postagem;
}