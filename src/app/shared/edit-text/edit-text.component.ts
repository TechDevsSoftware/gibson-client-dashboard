import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-edit-text',
  template: `
  <div class="input-group mb-3">
    <input type="text" class="form-control" [name]="name" [(ngModel)]="value">
    <div class="input-group-append">
      <button *ngIf="dirty" class="btn btn-outline-secondary" type="button" (click)="save()"><i class="fa fa-save"></i></button>
    </div>
  </div>
`,
  styleUrls: ['./edit-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EditTextComponent),
      multi: true
    }
  ],
})
export class EditTextComponent implements ControlValueAccessor {

  @Input() name: string;
  @Input('value') val: string;
  @Input() initialState: string;
  @Output() onSaveRequest = new EventEmitter();

  onChange: any = () => { console.log("changed")};
  onTouched: any = () => { console.log("touched") };
  dirty = false;

  get value() {
    return this.val;
  }

  set value(val) {
    this.dirty = (this.initialState != val);
    this.val = val;
    this.onChange(val);
    this.onTouched();
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  save(){
    this.onSaveRequest.emit();
    this.dirty = false;
  }

}
