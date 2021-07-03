import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton outline-width="0" status="primary" *ngIf="!value">
      {{ value }}
    </button>
    <button
      nbButton
      hero
      outline-width="0px"
      status="success"
      *ngIf="value === 'X'"
    >
      <h1>{{ value }}</h1>
    </button>
    <button
      nbButton
      hero
      outline-width="0px"
      status="info"
      *ngIf="value === 'O'"
    >
      <h1>{{ value }}</h1>
    </button>
  `,
  styles: [
    `
      :host {
        height: 200px;
        border: 1px solid gray;
        outline-width: 0px;
      }
    `,
    `
      button {
        height: 200px;
        width: 200px;
        border: none;
      }
    `,
    `
      app-square {
        border: none;
      }
    `,
  ],
})
export class SquareComponent {
  @Input() value!: 'X' | 'O';
}
