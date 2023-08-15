import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APatientComponent } from './components/a-patient/a-patient.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { SinglePatientComponent } from './components/patient/single-patient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientTableComponent } from './components/patient-table/patient-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [
    APatientComponent,
    PatientListComponent,
    NewPatientComponent,
    SinglePatientComponent,
    APatientComponent,
    PatientTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class PatientsModule { }
