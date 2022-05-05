import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/Country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private readonly apiUrl = "https://restcountries.com/v2";


  constructor(private httpClient: HttpClient) { }

  get getParameters(): HttpParams {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,population,flag');
  }


  buscarPais(termino: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/name/${termino}`, { params: this.getParameters });
  }

  buscarCapital(termino: string) {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/capital/${termino}`, { params: this.getParameters });
  }

  buscarPorAlphaCode(alphaCode: string): Observable<Country> {
    return this.httpClient.get<Country>(`${this.apiUrl}/alpha/${alphaCode}`);
  }

  buscarPorRegion(region: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.apiUrl}/regionalbloc/${region}`, { params: this.getParameters });
  }


}
