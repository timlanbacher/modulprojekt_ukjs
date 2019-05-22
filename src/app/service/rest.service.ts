import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private weatherUrl: string;

  constructor(private http: HttpClient) { 
    this.weatherUrl = 'https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=882000'
  }

  public findAll(): Observable<[]> {
    return this.http.get<[]>(this.weatherUrl);
  }






}



// https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=882000