import { Component, Input } from '@angular/core';
import { IUsuario } from '../../interfaces/usuario/usuario.interface';

@Component({
  selector: 'app-detalhes-usuario',
  standalone: false,
  templateUrl: './detalhes-usuario.component.html',
  styleUrl: './detalhes-usuario.component.scss',
})
export class DetalhesUsuarioComponent {
  @Input({ required: true }) usuarioParaExibir: IUsuario = {} as IUsuario;
}
