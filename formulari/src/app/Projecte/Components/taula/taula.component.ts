import { Component, OnInit } from '@angular/core';
import { Criteri } from '../../Model/Entitats/Implementations/Criteri/Criteri';
import { Formulari } from '../../Model/Entitats/Implementations/Formulari/Formulari';
import { Valoracio } from '../../Model/Entitats/Implementations/Valoracio/Valoracio';

@Component({
  selector: 'app-taula',
  templateUrl: './taula.component.html',
  styleUrls: ['./taula.component.css']
})
export class TaulaComponent implements OnInit {
  
  rubica!: Formulari;
  allnotes!: [];
  i!: number;

  constructor() { }

  ngOnInit(): void {
      this.rubica = JSON.parse(localStorage.getItem('rubica')!);
      this.allnotes = JSON.parse(localStorage.getItem('allnotes')!);

  }



  seleccion(valoracio: Valoracio, criteris: Criteri){
    criteris.valoracions.forEach(valoraci => {
      if(valoraci.seleccionat === true){
      valoraci.seleccionat = false;        
      }
    });
    valoracio.seleccionat = true;
    localStorage.setItem('rubica', JSON.stringify(this.rubica));
  }

eliminar(){
  localStorage.setItem('rubica', JSON.stringify([]));
  localStorage.setItem('valoracions', JSON.stringify([]));
  localStorage.setItem('allnotes', JSON.stringify([]));
  window.location.reload();
}

  mitjana(){
    if (localStorage.getItem('rubica') == null) {
      window.alert("falten criteris");
    }else{

    
    let totalselect: number;
    totalselect = 0;
    let totalnota: number;
    totalnota = 0;
    this.rubica.criteris.forEach(criteri => {
      criteri.valoracions.forEach(valoracio => {
        if(valoracio.seleccionat === true){
          totalselect++;
          totalnota = totalnota + valoracio.nota
        }        
      });
    });
    let keys = Object.keys(this.rubica.criteris);
      if(keys.length === totalselect){
        window.alert("La nota final es un: "+(totalnota/totalselect));
      }else{
        window.alert("Falta seleccionar notes");
      }
      }
  }
}
