import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeteoSwissData } from '../models/MeteoSwissData';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private weatherUrl: string;

  constructor(private http: HttpClient) {
    this.weatherUrl = 'https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=';
  }

  public findAll(): Observable<MeteoSwissData> {
    return this.http.get<MeteoSwissData>(this.weatherUrl + '882000');
  }

  public find(plz: string): Observable<MeteoSwissData> {
    return this.http.get<MeteoSwissData>(this.weatherUrl + plz + '00');
  }






}
