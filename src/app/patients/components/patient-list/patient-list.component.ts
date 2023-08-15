import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/core/models/patient.model';
import { PatientsService } from 'src/app/core/services/patients.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit, OnDestroy {
  patients$!: Observable<Patient[]>;

  constructor(private patientsService: PatientsService) { }

  ngOnInit(): void {
    this.patients$ = this.patientsService.getAllPatients();
  }

  ngOnDestroy(): void {
    // this.destroy$.next(true);
  }
}
