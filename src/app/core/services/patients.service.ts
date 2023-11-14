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
      return this.http.get<Patient[]>('/patients');
      }    

    addPatient(formValue: { First_Name: string, Last_Name: string, BirthDate: string,
      Diagnosis?: string }): Observable<Patient> {
        return this.getAllPatients().pipe(
        switchMap(newPatient => this.http.post<Patient>('/patients', newPatient))
        );
      }   
}