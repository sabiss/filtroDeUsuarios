import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnderecoPipe } from './endereco.pipe';
import { TelefonePipe } from './telefone.pipe';

@NgModule({
  declarations: [EnderecoPipe, TelefonePipe],
  imports: [CommonModule],
  exports: [EnderecoPipe, TelefonePipe],
})
export class PipeModule {}
