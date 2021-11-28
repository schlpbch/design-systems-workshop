import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { InputApi, InputComponent, InputType } from '../input/input.component';

@Component({
  selector: 'app-form-element',
  templateUrl: './form-element.component.html',
  styleUrls: ['./form-element.component.scss'],
})
export class FormElementComponent implements OnInit, InputApi {
  uuid: string;
  inputValue = '';

  @ViewChild(InputComponent, { static: false }) input!: InputComponent;

  @Input() type: InputType = InputType.text;
  @Input() placeholder?: string;
  @Input()
  set value(val: string) {
    this.inputValue = val.length > 0 ? val : '';
  }
  @Input() label = 'Input Label';

  constructor() {
    // @ts-ignore
    this.uuid = crypto.randomUUID();
  }

  ngOnInit(): void {}

  get text(): string {
    return this.input.text;
  }
}
