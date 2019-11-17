import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-text-box-ui',
  templateUrl: './text-box-ui.component.html',
  styleUrls: ['./text-box-ui.component.scss']
})
export class TextBoxUiComponent implements OnInit {
  polygonForm: FormGroup;
  selected: number;

  constructor(public fb: FormBuilder) {
    this.polygonForm = this.fb.group({
      polygonArray: this.fb.array([new FormControl('')])
    });
    console.log(this.arr);
  }

  get arr() { return this.polygonForm.get('polygonArray') as FormArray; }

  ngOnInit() {
  }

  addControl() {
    this.arr.insert(this.selected + 1, new FormControl(''));
  }

  setSelected(i: number) {
    this.selected = i;
  }

  removeControl() {
    this.arr.removeAt(this.selected);
  }
}
