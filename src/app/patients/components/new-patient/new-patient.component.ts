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
  urlRegex!: RegExp;

  constructor(private formBuilder: FormBuilder,
    private PatientsService: PatientsService,
    private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
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

//   onSubmitForm() {
//     console.log(this.snapForm.value);
//     this.PatientsService.addPatient(this.snapForm.value).pipe(
//       tap(() => this.router.navigateByUrl('/Patients'))).subscribe();
  
//     ;
// }

}