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
    this.weatherUrl = 'https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=882000'
  }

  public findAll(): Observable<MeteoSwissData> {
    this.http.get<MeteoSwissData>(this.weatherUrl).subscribe((data) => {
      console.log(data)
    });
    return this.http.get<MeteoSwissData>(this.weatherUrl);
  }






}



// https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=882000