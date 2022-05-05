import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activateRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {

   /* this.activateRoute.params.pipe(
      switchMap(({ codigo }) => this.paisService.buscarPorAlphaCode(codigo)) )
      .subscribe((respuesta) => {
        console.log(respuesta);
      })*/
   
    this.activateRoute.params.subscribe(({ id }) => {
      this.paisService.buscarPorAlphaCode(id).subscribe((dataCountry) => {
          this.pais = dataCountry; 
      });
    })
  }

}
