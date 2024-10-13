import { Component, Renderer2 } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-frontend';


  isCapsLockOn: boolean = false;
  navToggle=false
  checkCapsLock(event: KeyboardEvent) {
    this.isCapsLockOn = event.getModifierState && event.getModifierState('CapsLock');
  }

  onFocus(event: FocusEvent) {
    // Reset the Caps Lock indicator on focus
    this.isCapsLockOn = false;
  }

  time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };

  onTimeChange(newTime: NgbTimeStruct) {
    console.log('Time changed to:', newTime);
  }


  constructor(private renderer: Renderer2) {}

  toggleSidebar() {
    // Toggling the 'toggle-sidebar' class on the body element
    const body = document.querySelector('body');
    if (body) {
      if (body.classList.contains('toggle-sidebar')) {
        this.renderer.removeClass(body, 'toggle-sidebar');
      } else {
        this.renderer.addClass(body, 'toggle-sidebar');
      }
    }
  }
}
