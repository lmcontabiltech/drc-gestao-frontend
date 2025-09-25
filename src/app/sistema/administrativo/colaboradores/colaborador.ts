import { Setor } from '../cadastro-de-colaborador/enums/setor';

export class Colaborador {
  id!: string;
  foto?: { documentoUrl: string; id: number; name: string } | null;
  fotoUrl?: any;
  nome!: string;
  cpf?: string;
  dataNascimento?: string;
  setor!: Setor;
  email!: string;
  status?: string;
}
