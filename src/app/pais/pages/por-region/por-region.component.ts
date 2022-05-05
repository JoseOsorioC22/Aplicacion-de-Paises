import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/Country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent implements OnInit {

  regionActive: string = "";
  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  countries: Country[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  regionSelected(region: string) {

    if (region !== this.regionActive) {
      this.regionActive = region;
      this.paisService.buscarPorRegion(region).subscribe((countries) => {
        this.countries = [];
        this.countries = countries;
      });
    }

  }


}


