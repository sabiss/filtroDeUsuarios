import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  standalone: false,
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
})
export class InputsComponent {
  pessoas = [
    {
      value: 'sabrina',
      viewValue: 'sabrina',
    },
  ];
}
