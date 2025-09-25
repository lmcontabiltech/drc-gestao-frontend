import { Setor } from '../../administrativo/cadastro-de-colaborador/enums/setor';

export class Processo {
  id!: string;
  nome!: string;
  tipoDeProcesso!: string;
  dataCadastro!: string;
  setor!: Setor;
  dependeDeOutroSetor!: string;
  setorDeDependencia!: Setor | null;
  subprocessos!: { tarefa: string; id: number; checked: boolean }[];
}
