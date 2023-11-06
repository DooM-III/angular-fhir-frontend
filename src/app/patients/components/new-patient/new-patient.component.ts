import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/core/services/patients.service';
import { Patient } from 'src/app/core/models/patient.model';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent implements OnInit {

  snapForm!: FormGroup;
  PatientPreview$!: Observable<Patient>;
  urlDate!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private PatientsService: PatientsService,
    private router: Router) { }

  ngOnInit(): void {
    this.urlDate = /\b(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)?\d{2}\b/;
    this.snapForm = this.formBuilder.group({
      First_Name: [null, [Validators.required]],
      Last_Name: [null, [Validators.required]],
      BirthDate: [null, [Validators.required, Validators.pattern(this.urlDate)]],
      Diagnosis: [null]
      }, {
        updateOn: 'blur'
    });
    this.PatientPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
          ...formValue,
          createdDate: new Date(),
          snaps: 0,
          id: 0
      }))
      );
  }

  onSubmitForm() {
    console.log(this.snapForm.value);
    this.PatientsService.addPatient(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/Patients'))).subscribe();
  
    ;
}

}