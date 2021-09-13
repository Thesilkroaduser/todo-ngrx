import { Component, Input } from '@angular/core';
import { BtnConfig } from '../../models/shared.models';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {

  @Input() config: BtnConfig;

  constructor() { }

}
