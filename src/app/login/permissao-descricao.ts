import { Permissao } from "./permissao";

export const PermissaoDescricoes: Record<Permissao, string> = {
    [Permissao.ADMIN]: 'ADMIN',
    [Permissao.USER]: 'USER',
    [Permissao.GERENTE_DE_TI]: "GERENTE_DE_TI",
    [Permissao.COORDENADOR_DE_TI]: 'COORDENADOR_DE_TI',
    [Permissao.RH]: 'RH',
    [Permissao.PROFESSOR]: 'PROFESSOR',
    [Permissao.DESENVOLVEDOR]: 'DESENVOLVEDOR',
    [Permissao.ESTAGIARIO]: 'ESTAGIARIO',
    [Permissao.TRAINEE]: 'TRAINEE',
}