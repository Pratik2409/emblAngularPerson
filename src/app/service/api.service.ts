import { ApiRequest } from './../model/api.request';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Person} from '../model/person.model';
import {Observable} from 'rxjs/index';
import {ApiResponse} from '../model/api.response';
import { last } from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:9090/person/api/';

  getPersons(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'v1/persons');
  }

  getPerson(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'v1/persons/' + id );
  }

  createPerson(ApiRequest): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'v1/person', ApiRequest);
  }

  updatePerson(ApiRequest): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + 'v1/person', ApiRequest);
  }

  deletePerson(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + 'v1/person/' + id );
  }
}