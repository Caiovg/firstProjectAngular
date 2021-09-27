import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  getAllTema(){
    return this.http.get("https://blog-pessoal-caio.herokuapp.com/tema")
  }
}
