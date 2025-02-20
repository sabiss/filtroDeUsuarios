import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoPipe } from './endereco.pipe';
import { TelefonePipe } from './telefone.pipe';
import { StatusPipe } from './status.pipe';
import { CampoVazioPipe } from './campo-vazio.pipe';

@NgModule({
  declarations: [EnderecoPipe, TelefonePipe, StatusPipe, CampoVazioPipe],
  imports: [CommonModule],
  exports: [EnderecoPipe, TelefonePipe, StatusPipe, CampoVazioPipe],
})
export class PipeModule {}
