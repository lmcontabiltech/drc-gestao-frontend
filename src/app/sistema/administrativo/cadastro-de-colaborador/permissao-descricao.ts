import { Permissao } from "./permissao";

export const PermissaoDescricao: Record<Permissao, string> = {
    [Permissao.COORDENADOR]: "Coordenador",
    [Permissao.COLABORADOR]: "Colaborador",
    [Permissao.ESTAGIARIO]: "Estagiário",
};