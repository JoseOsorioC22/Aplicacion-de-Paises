import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = "";
  hayError: boolean = false; 
  countries: Country[] = [];


  constructor(private paisService: PaisService) { }

  buscar( termino: string ) {

    this.termino =  termino; 
    
    this.paisService.buscarCapital(this.termino).subscribe((datos: any) => {
      this.countries = datos; 
      this.hayError = false; 

    }, (error: Error) => {
      this.hayError = true; 
      console.log(error)
      this.countries = []; 

    })
  }

  
}
