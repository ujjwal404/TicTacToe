import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton status="primary" *ngIf="!value">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value === 'X'">
      <h1>{{ value }}</h1>
    </button>
    <button nbButton hero status="info" *ngIf="value === 'O'">
      <h1>{{ value }}</h1>
    </button>
  `,
  styles: [
    `
      :host {
        height: 200px;
        border: 1px gray solid;
      }
    `,
    `
      button {
        height: 200px;
        width: 200px;
        border: none;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
