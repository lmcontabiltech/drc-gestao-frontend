import { Component, OnInit, Input } from '@angular/core';
import { Setor } from '../../sistema/administrativo/cadastro-de-colaborador/enums/setor';
import { SetorDescricao } from 'src/app/sistema/administrativo/cadastro-de-colaborador/enums/setor-descricao';

@Component({
  selector: 'app-setor-tag',
  templateUrl: './setor-tag.component.html',
  styleUrls: ['./setor-tag.component.css'],
})
export class SetorTagComponent {
  @Input() setor?: Setor | 'ALL';

  constructor() {}

  ngOnInit(): void {}

  get descricao(): string {
    if (this.setor === 'ALL') {
      return 'Todos os Setores';
    }
    return this.setor ? SetorDescricao[this.setor] : 'Desconhecido';
  }

  get cor(): string {
    if (this.setor === 'ALL') {
      return '#47484e';
    }
    switch (this.setor) {
      case Setor.FRONTEND:
        return '#DBBAE6';
      case Setor.PROFESSOR_UFC:
        return '#C9DEF9';
      case Setor.MONITOR:
        return '#D5E6C5';
      case Setor.BACKEND:
        return '#BABBE6';
      case Setor.FULLSTACK:
        return '#F9E8C9';
      case Setor.DEVOPS:
        return '#C9F9F1';
      case Setor.QA:
        return '#DBF9C9';
      case Setor.PROCESSOS:
        return '#F9F7C9';
      case Setor.REQUISITOS:
        return '#F9C9CA';
      case Setor.UI_UX_DESIGN:
        return '#F9C9E6';
      case Setor.CONSULTOR:
        return '#EAEAEA';
      default:
        return '#CCD0DE';
    }
  }

  get backgroundColor(): string {
    return this.lightenColor(this.cor, 0.5);
  }

  lightenColor(color: string, percent: number): string {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent * 100);

    let R = (num >> 16) + amt;
    let G = ((num >> 8) & 0x00ff) + amt;
    let B = (num & 0x0000ff) + amt;

    R = Math.max(0, Math.min(255, R));
    G = Math.max(0, Math.min(255, G));
    B = Math.max(0, Math.min(255, B));

    return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
  }
}
