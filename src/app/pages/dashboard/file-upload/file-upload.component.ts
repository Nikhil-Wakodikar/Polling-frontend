import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {


  constructor(private router:Router){}
  uploadedFile: File | null = null;

  // Called when a file is selected
  onFileSelected(event: any): void {
    event.preventDefault()
    const file: File = event.target.files[0];
    if (file) {
      this.uploadedFile = file;
      console.log('File uploaded:', this.uploadedFile.name);
    }
  }

  // Called when preview button is clicked
  previewFile(): void {
    // if (this.uploadedFile) {
    //   // You can open the file or preview it in a new window/tab
    //   const fileURL = URL.createObjectURL(this.uploadedFile);
    //   window.open(fileURL, '_blank');
    // }

    this.router.navigate(['dashboard/preview'])
  }
}
