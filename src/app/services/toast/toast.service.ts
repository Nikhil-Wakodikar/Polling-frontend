import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    public toastr: ToastrService
  ) { }

  /**
   * Helper method to present the Success theme Toaster on the Screen.
   * @param message Description message.
   * @param title Title for different effects.
   */
  success(message: string | undefined, title?: string | undefined) {
    this.toastr.success(message, title);
  }

  /**
   * Helper method to present the Info theme Toaster on the Screen.
   * @param message Description message.
   * @param title Title for different effects.
   */
  info(message: string | undefined, title?: string | undefined) {
    this.toastr.info(message, title);
  }

  /**
   * Helper method to present the Error theme Toaster on the Screen.
   * @param message Description message.
   * @param title Title for different effects.
   */
  error(message: string | undefined, title?: string | undefined) {
    this.toastr.error(message, title, { timeOut: 7000, });
  }


  warning(message: string | undefined, title?: string | undefined) {
    this.toastr.warning(message, title, { timeOut: 7000, });
  }

}
