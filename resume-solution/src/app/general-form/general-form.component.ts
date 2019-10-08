import { Component, OnInit, ViewChild, ElementRef, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { GeneralService } from './general.service';

import { WorkExperienceComponent } from '../work-experience/work-experience.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-general-form',
  templateUrl: './general-form.component.html',
  styleUrls: ['./general-form.component.css']
})
export class GeneralFormComponent {

  basicDetailsForm;
  items = [];
  isLinear = true;
  secondFormGroup: FormGroup;

  // response to child component
  response;

  constructor(
    private inject: Injector,
    private formBuilder: FormBuilder,
    private generalService: GeneralService
  ) {

    this.basicDetailsForm = this.formBuilder.group({
      name: '',
      address: '',
      mobile: '',
      email: ['', [Validators.required, Validators.email]],
      gender: ''
    });

    this.secondFormGroup = this.formBuilder.group({
      items: [[], Validators.required]
    });

  }

  onSubmit(formData) {

    // stop here if form is invalid
    if (this.basicDetailsForm.invalid) {
      return;
    }

    this.generalService.createProfile(formData).subscribe(response => {


      alert('request!! \n\n' + JSON.stringify(this.basicDetailsForm.value, null, 4));

      console.log("success", response);
      this.response = response;
      alert('SUCCESS!! \n\n' + JSON.stringify(this.basicDetailsForm.value, null, 4));
      this.basicDetailsForm.reset();
      this.isLinear = !this.isLinear;
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
    // inject MatDialog only for this function
    const dialog = this.inject.get(MatDialog);

    const dialogRef = dialog.open(WorkExperienceComponent, {
      width: '450px',
      data: {userId: this.response.id, userName: this.response.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });

    // Get the result from child
    dialogRef.componentInstance.formDataOutput.subscribe((data) => {
      console.log(data);
      this.items.push(data);
    });

  }

}
