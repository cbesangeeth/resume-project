import { Component, OnInit, ViewChild, Input, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { WorkService } from './work.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  // @Input() userId;
  // @Input() userName;
  workExperienceForm;
  response;
  @Output() formDataOutput = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<WorkExperienceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private workService: WorkService,
  ) {
    this.workExperienceForm = this.formBuilder.group({
      companyName: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      skills: '',
      isCurrentCompany: true,
      start: ['', [Validators.required]],
      end: ''
    });
  }

  ngOnInit() {
    console.log(this.data)
  }

  onCheckboxChangeFn() {
    this.workExperienceForm.isCurrentCompany = !this.workExperienceForm.isCurrentCompany;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.workExperienceForm.controls;
  }

  onSubmit(formData) {
    // stop here if form is invalid
    if (this.workExperienceForm.invalid) {
      return;
    }

    // set user id
    formData.userId = this.data.userId;

    this.formDataOutput.emit(formData);

    this.workService.createWork(formData).subscribe(response => {
      alert('request!! \n\n' + JSON.stringify(this.workExperienceForm.value, null, 4));

      console.log("success", response);
      this.response = response;
      alert('SUCCESS!! \n\n' + JSON.stringify(this.workExperienceForm.value, null, 4));
      this.workExperienceForm.reset();
      this.dialogRef.close(true);

    });
  }

}
