import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'enccrm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {


  @Input() type: string = 'regular';
  @Input() content: string = '';
  @Input() disabled: boolean = false;
  @Output() clicked = new EventEmitter();
  @Input() size: string = 'reg';

  constructor() { }

  ngOnInit(): void {
  }

}
