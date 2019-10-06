import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GeneralService } from './general.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WorkExperienceComponent } from '../work-experience/work-experience.component';


@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})
export class GeneralFormComponent {

  basicDetailsForm;
  items;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private generalService: GeneralService,
    private modalService: NgbModal
  ) {

    this.basicDetailsForm = this.formBuilder.group({
      name: '',
      address: '',
      mobile: '',
      email: ['', [Validators.required, Validators.email]],
      gender: ''
    });

    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      items: [[], Validators.required]
    });

  }

  onSubmit(formData) {
    // Process checkout data here
    console.warn('Your order has been submitted', formData);

    // stop here if form is invalid
    if (this.basicDetailsForm.invalid) {
      return;
    }

    this.generalService.createProfile(formData).subscribe(response => {

      if (response.status === 200) {
        console.log("success", response);
        alert('SUCCESS!! \n\n' + JSON.stringify(this.basicDetailsForm.value, null, 4));
        this.basicDetailsForm.reset();
      }
    });

  }

  getErrorMessage() {
    return this.f.email.errors.required ? 'You must enter a value' :
      this.f.email.errors.email ? 'Not a valid email' :
        '';
  }

  // convenience getter for easy access to form fields
  get f() { return this.basicDetailsForm.controls; }

  open() {
    const modalRef = this.modalService.open(WorkExperienceComponent);
    // this.modalService.open(this.theModal, { size: 'sm', backdrop: 'static'});

    modalRef.componentInstance.userId = 1;
  }

}
