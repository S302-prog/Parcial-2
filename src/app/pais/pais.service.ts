import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from './pais';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]>{
    return this.http.get<Pais[]>(this.apiURL);
  }

}
