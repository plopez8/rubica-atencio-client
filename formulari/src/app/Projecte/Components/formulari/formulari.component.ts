import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Criteri } from '../../Model/Entitats/Implementations/Criteri/Criteri';
import { Formulari } from '../../Model/Entitats/Implementations/Formulari/Formulari';
import { Valoracio } from '../../Model/Entitats/Implementations/Valoracio/Valoracio';
@Component({
  selector: 'app-formulari',
  templateUrl: './formulari.component.html',
  styleUrls: ['./formulari.component.css']
})

export class FormulariComponent implements OnInit {


  criteriForm!: FormGroup;
  criteris!: Criteri;
  rubica!: Formulari;
  valoracions!: Array<Valoracio>;
  valoracioForm!: FormGroup;
  valoracio!: Valoracio;

  ngOnInit() {

    this.criteriForm = new FormGroup({
      titol: new FormControl('', [Validators.required])
    });

    this.valoracioForm = new FormGroup({
      nota: new FormControl('', [Validators.required, Validators.min(0)]),
      descripcio: new FormControl('', [Validators.required, Validators.minLength(3)])
    });


    this.comprobarlocal();

  }


  onSubmitCriteri() {
    if (this.criteriForm.controls['titol'].valid) {
        this.añadircriteri();
    } else {
      window.alert("El criteri es incorrecte");
    }
  }


  onSubmitValoracio() {


    if (this.valoracioForm.controls['nota'].valid) {
      if (this.valoracioForm.controls['descripcio'].valid) {
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
    }else{
      this.valoracions = JSON.parse(localStorage.getItem('valoracions')!);
    }
    if (localStorage.getItem('rubica') == null) {
      localStorage.setItem('rubica', JSON.stringify([]));
    }
    if (localStorage.getItem('allnotes') == null) {
      localStorage.setItem('allnotes', JSON.stringify([]));
    }
  }





  añadirvaloracion() {
    let nota = this.valoracioForm.controls['nota'].value;
    let descripcio = this.valoracioForm.controls['descripcio'].value;
    this.valoracio = new Valoracio(nota, descripcio);
    this.valoracions = JSON.parse(localStorage.getItem('valoracions')!);
    let allnotes = JSON.parse(localStorage.getItem('allnotes')!);
    if (this.valoracions.length !== 0) {
      for (let i = 0; i < this.valoracions.length; i++) {
        if (this.valoracions[i].nota !== nota) {
          if (this.valoracions[i].nota > nota) {
            this.valoracions.splice(i, 0, this.valoracio);
            break;
          } else if (i + 1 === this.valoracions.length) {
            this.valoracions.push(this.valoracio);
            break;
          }
        } else {
          window.alert("Ja hi ha una valoracio amb aquesta nota");
          break;
        }
      }
    } else {
      this.valoracions.push(this.valoracio);
    }
    if (allnotes.length !== 0) {
      for (let i = 0; i < allnotes.length; i++) {
        if (allnotes[i] !== nota) {
          if (allnotes[i] > nota) {
            allnotes.splice(i, 0, nota);
            break;
          } else if (i + 1 === allnotes.length) {
            allnotes.push(nota);
            break;
          }
        }else{
          break;
        }
      }
    } else {
      allnotes.push(nota);
    }



    localStorage.setItem('valoracions', JSON.stringify(this.valoracions));
    localStorage.setItem('allnotes', JSON.stringify(allnotes));
    
  }




  añadircriteri() {
    let titol = this.criteriForm.controls['titol'].value;
    let localstoragearray = JSON.parse(localStorage.getItem('valoracions')!);
    this.rubica = JSON.parse(localStorage.getItem('rubica')!);
    let keys = Object.keys(this.rubica);
    if(localstoragearray.length !== 0){
      if(keys.length !== 0){
        this.rubica.criteris.push(new Criteri(titol, localstoragearray));
        localStorage.setItem('rubica', JSON.stringify(this.rubica));
        localStorage.setItem('valoracions', JSON.stringify([]));
        this.valoracions = [];
        window.alert("S'ha afegit el criteri: '"+titol+"'. Actualitza la pagina per verure '"+titol+"' en la taula");

      } else{
        let criteris: Criteri[] = [
          new Criteri(titol, localstoragearray)
        ];
        this.rubica = new Formulari(criteris);
        localStorage.setItem('rubica', JSON.stringify(this.rubica));
        localStorage.setItem('valoracions', JSON.stringify([]));
        this.valoracions = [];
        window.alert("S'ha afegit el criteri: '"+titol+"'. Actualitza la pagina per verure '"+titol+"' en la taula");
      }
           

    }else{
      window.alert("Has de crear com a minim una Valoracio abans de crear un criteri");
    }
  }


}