import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  // userEmail: string;
  userEmail = 'me@my-house.com';
  userEmail2 = 'me@my-housesgegre.com';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue(): void {
    this.router.navigateByUrl('patients');
  }

  onSubmitForm(form: NgForm) {
    console.log(form.value);
    }
}
