import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/core/models/patient.model';


@Component({
  selector: 'app-a-patient',
  templateUrl: './a-patient.component.html',
  styleUrls: ['./a-patient.component.scss']
})
export class APatientComponent implements OnInit {
  @Input() patient!: Patient;
  
  ngOnInit() {

    }
}
