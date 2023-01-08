import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Criteri } from '../../Model/Entitats/Implementations/Criteri/Criteri';
import { Valoracio } from '../../Model/Entitats/Implementations/Valoracio/Valoracio';
@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})
export class FormulariComponent implements OnInit {


  criteriForm!: FormGroup;
  valoracio!: Valoracio;
  criteri!: Criteri;

  // criteriForm!: FormGroup;
  // valoracio!: Valoracio;
  // criteri!: Criteri;

  // criteriForm!: FormGroup;
  // valoracio!: Valoracio;
  // criteri!: Criteri;

  ngOnInit() {

    this.criteriForm = new FormGroup({
      nota: new FormControl('', [Validators.required, Validators.min(0)]),
      descripcio: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    this.criteriForm = new FormGroup({
      nota: new FormControl('', [Validators.required, Validators.min(0)]),
      descripcio: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
    this.comprobarlocal();

  }


  onSubmitCriteri() {

  }


  onSubmitValoracio() {


    if (this.criteriForm.controls['nota'].valid) {
      if (this.criteriForm.controls['descripcio'].valid) {
        console.log("valid");
        this.añadirvaloracion();
      } else {
        window.alert("La descripcio es incorrecte");
      }
    } else {
      window.alert("La nota es incorrecte");
    }
  }

  comprobarlocal() {
    if (localStorage.getItem('valoracions') == null) {
      localStorage.setItem('valoracions', JSON.stringify([]));
    }
  }

  comprobarpocision() {
    this.criteriForm.controls['nota'].value;
  }

  añadirvaloracion() {
    console.log("añadir valoracion");
    let nameValue = this.criteriForm.controls['nota'].value;
    let nametext = this.criteriForm.controls['descripcio'].value;
    this.valoracio = new Valoracio(nameValue, nametext);
    let localstoragearray = JSON.parse(localStorage.getItem('valoracions')!);
    if (localstoragearray.length !== 0) {
      for (let i = 0; i < localstoragearray.length; i++) {
        console.log("for", i, "- -", localstoragearray.length);
        if (localstoragearray[i].nota !== nameValue) {
          console.log("if1 - - es diferent");
          if (localstoragearray[i].nota > nameValue) {
            console.log("if2 - - es menor");
            localstoragearray.splice(i, 0, this.valoracio);
            break;
          } else if (i + 1 === localstoragearray.length) {
            console.log("else if");
            localstoragearray.push(this.valoracio);
            break;
          }
        } else {
          console.log("else");
          window.alert("Ja hi ha una valoracio amb aquesta nota");
          break;
        }
      }
    } else {
      localstoragearray.push(this.valoracio);
      console.log("es 0", localstoragearray.length);
    }

    localStorage.setItem('valoracions', JSON.stringify(localstoragearray));
  }
}
