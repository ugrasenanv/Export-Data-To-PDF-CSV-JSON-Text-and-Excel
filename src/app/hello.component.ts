import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Export Data To  PDF  CSV  JSON Text and Excel
  {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
