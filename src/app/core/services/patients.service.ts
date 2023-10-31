import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
    constructor(private http: HttpClient) {}
    
    getAllPatients(): Observable<Patient[]> {
      return this.http.get<Patient[]>('http://fhir-api-svc.demo-healthcare-fhir-dataviz.svc.cluster.local:8000/patients');
      }    

}