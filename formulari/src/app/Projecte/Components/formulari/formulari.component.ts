import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {

  criteriForm!: FormGroup;
  criteris: Array<String> = new Array<string>();
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criteriForm = this.fb.group({
      nom: new FormControl(""),
      nivell: new FormControl(""),
    });
  }

  onSubmit(form: FormGroup): void {
    console.log(form);
    this.criteris.push(form.value.nom, form.value.nivell);
    console.log(this.criteris);
  }

}
