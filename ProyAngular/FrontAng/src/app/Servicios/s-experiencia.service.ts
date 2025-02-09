import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  //expURL = 'https://localhost:8080/explab/';  //LOCAL
  expURL = ' https://backaar-1.herokuapp.com/explab/'; //REMOTO

  constructor(private httpClient: HttpClient) { }

  public lista (): Observable<Experiencia []>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + 'detail/${id}');
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create',experiencia);
  }

  public update(id:number, experiencia:Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + 'update/${id}',experiencia);
  }

  public delete(id:number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + 'delete/${id}');
  }

}
