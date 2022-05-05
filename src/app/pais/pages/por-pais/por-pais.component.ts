import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    ` li {
      cursor : pointer; 
    } 
    `
  ]
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  countries: Country[] = [];
  countriesSugerencia: Country[] = [];
  showSuggestion: boolean = false; 


  constructor(private paisService: PaisService) { }

  buscar(termino: string) {

    this.termino = termino;
    this.showSuggestion = false; 
    
    this.paisService.buscarPais(this.termino).subscribe((datos: any) => {
      this.countries = datos;
      this.hayError = false;
      console.log(this.countries)
    }, (error: Error) => {
      this.hayError = true;
      console.log(error)
      this.countries = [];

    })
  }


  sugerencias(sugerencia: string) {
    this.hayError = false;
    this.showSuggestion = true; 

    this.termino = sugerencia;
    this.paisService.buscarPais(sugerencia).subscribe(countries => {
      this.countriesSugerencia = countries.slice(0, 5);
    }, (error) => {
      this.countriesSugerencia = [];
    })

  }


  buscarSugerido(termino: string) {
    this.termino = termino;
    this.showSuggestion = false; 
    this.paisService.buscarPais(this.termino).subscribe((datos: any) => {
      this.countries = datos;
      this.hayError = false;
      console.log(this.countries)
    }, (error: Error) => {
      this.hayError = true;
      console.log(error)
      this.countries = [];

    })

  }




}
