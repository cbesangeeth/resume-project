import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  NgbModal, NgbActiveModal, NgbTabChangeEvent, NgbDate, NgbCalendar, NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';
import { WorkService } from './work.service';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  @Input() userId;
  @Input() userName;
  workExperienceForm;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
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

    this.workService.createWork(formData).subscribe(response => {
      alert('request!! \n\n' + JSON.stringify(this.workExperienceForm.value, null, 4));

      console.log("success", response);
      this.response = response;
      alert('SUCCESS!! \n\n' + JSON.stringify(this.workExperienceForm.value, null, 4));
      this.workExperienceForm.reset();

    });
  }


}
