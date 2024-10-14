import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DefaultComponent } from './default/default.component';
import { PreviewComponent } from './preview/preview.component';
import { NgbModule, NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteRecordComponent } from './vote-record/vote-record.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RouterModule } from '@angular/router';
import { provideToastr } from 'ngx-toastr';


@NgModule({
  declarations: [
    DefaultComponent,
    PreviewComponent,
    VoteRecordComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],providers:[provideToastr()]
})
export class DashboardModule { }
