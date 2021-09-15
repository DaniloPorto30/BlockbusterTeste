import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmeModel } from './filmes/filme.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  cadastrarFilme(filme: FilmeModel): Observable<any>{
    return this.http.post(environment.apiUrl,filme);
  }
  listarFilmes(): Observable<any>{
    return this.http.get(environment.apiUrl);
  }
  editarFilme(id:any, filme: FilmeModel): Observable<any>{
    return this.http.put(environment.apiUrl.concat(id),filme);
  }
  deletarFilme(id:any){
    return this.http.delete(environment.apiUrl.concat(id));
  }
}
