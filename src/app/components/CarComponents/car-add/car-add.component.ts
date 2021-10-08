import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  carAddForm: FormGroup;

  ngOnInit(): void {
    this.createCarAddForm();
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      productName: ["", Validators.minLength(1)],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required],
    })
  }

  add() {

  }
}
