import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { PreviewComponent } from './preview/preview.component';
import { VoteRecordComponent } from './vote-record/vote-record.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  {
    path:'',component:DefaultComponent,children:[
      {path:'',redirectTo:'file-upload',pathMatch:'full'},
      {path:'file-upload',component:FileUploadComponent},
      {path:'preview',component:PreviewComponent},
      {path:'vote-record',component:VoteRecordComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
