import { Component, Input } from "@angular/core";

@Component({
  selector: "app-square",
  template: `
    <button *ngIf="!value">{{ value }}</button>
    <button class="cross" *ngIf="value == 'X'">
      {{ value }}
    </button>
    <button class="round" *ngIf="value == 'O'">
      {{ value }}
    </button>
  `,
  styles: ["button { width: 100%; height: 100%; font-size: 5em !important; }"]
})
export class SquareComponent {
  @Input() value: "X" | "O";
}
