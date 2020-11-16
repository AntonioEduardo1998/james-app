import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Establishment from '../models/Establishment';


@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private baseURL: string;

  constructor(private http: HttpClient, ) {
    this.baseURL = 'https://my-json-server.typicode.com/james-delivery/frontend-challenge';
  }

  public setEstablishments(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(`${this.baseURL}/establishments`).pipe(map((establishments: Establishment[]) => {
      localStorage.setItem('@establishments', JSON.stringify(establishments));
      return establishments;
    }));
  }

  public addNewEstablishment(establishment: Establishment): void {
    let data: Establishment[] = JSON.parse(localStorage.getItem('@establishments'));

    data[establishment.index] = establishment;

    localStorage.setItem('@establishments', JSON.stringify(data));

  }
}
