import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  newsletterEmail: string = '';

  subscribeNewsletter() {
    if (this.newsletterEmail) {
      console.log('Subscribed Email:', this.newsletterEmail);
      alert(`✅ Thank you for subscribing: ${this.newsletterEmail}`);
      this.newsletterEmail = '';
    } else {
      alert('⚠️ Please enter a valid email address.');
    }
  }
}
