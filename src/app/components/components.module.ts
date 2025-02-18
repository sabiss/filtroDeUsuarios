import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { InputsComponent } from './inputs/inputs.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

@NgModule({
  declarations: [
    DetalhesUsuarioComponent,
    InputsComponent,
    ListaUsuariosComponent,
  ],
  imports: [CommonModule, AngularMaterialModule],
  exports: [DetalhesUsuarioComponent, InputsComponent, ListaUsuariosComponent], //pra aparecer no AppComponent tem que estar exportado
})
export class ComponentsModule {}
