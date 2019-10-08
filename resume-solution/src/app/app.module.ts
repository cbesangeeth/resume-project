import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GeneralFormComponent } from './general-form/general-form.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material';
import {
  MatButtonModule, MatSelectModule,MatRadioModule,MatNativeDateModule,
  MatDialogModule, MatExpansionModule, MatIconModule, MatCheckboxModule,
  MatDatepickerModule, MatInputModule, MatListModule,
} from '@angular/material';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { NgbModule,NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import {MatStepperModule} from '@angular/material/stepper';
import { GeneralService } from './general-form/general.service';

@NgModule({
  declarations: [
    AppComponent,
    GeneralFormComponent,
    WorkExperienceComponent
  ],
  imports: [
    MatListModule,
    MatNativeDateModule,
    NgbModalModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSliderModule,
    MatDatepickerModule,
    MatRadioModule,
    MatInputModule,
    HttpClientModule,
    NgbModule,
    MatStepperModule,
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent],
  entryComponents:[WorkExperienceComponent]
})
export class AppModule { }
