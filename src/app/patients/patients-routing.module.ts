import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePatientComponent } from './components/patient/single-patient.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { PatientTableComponent } from './components/patient-table/patient-table.component';


const routes: Routes = [
    { path: 'create', component: NewPatientComponent,  },
    { path: 'table', component: PatientTableComponent },
    { path: ':id', component: SinglePatientComponent, canActivate: [AuthGuard] },
    { path: '', component: PatientListComponent, canActivate: [AuthGuard]},
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PatientsRoutingModule {}