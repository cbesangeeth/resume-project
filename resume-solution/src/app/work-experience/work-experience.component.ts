import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  NgbModal, NgbActiveModal, NgbTabChangeEvent, NgbDate, NgbCalendar, NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  @Input() userId;
  workExperienceForm;

  constructor(
    private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal
  ) {
    this.workExperienceForm = this.formBuilder.group({
      companyName: '',
      designation: '',
      skills: '',
      isCurrentCompany: false,
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


}
