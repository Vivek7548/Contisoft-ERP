import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../shared/services/app.service';
@Component({
  selector: 'app-book-demo',
  templateUrl: './book-demo.component.html',
  styleUrls: ['./book-demo.component.scss']
})
export class BookDemoComponent {
  contactForm: FormGroup;
  countries: string[] = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus',
    'Belgium', 'Belize', 'Bhutan', 'Bolivia', 'Brazil', 'Bulgaria',
    'Cambodia', 'Cameroon', 'Canada', 'Chile', 'China', 'Colombia',
    'Croatia', 'Cuba', 'Czech Republic', 'Denmark', 'Dominican Republic',
    'Ecuador', 'Egypt', 'Estonia', 'Ethiopia', 'Finland', 'France',
    'Germany', 'Greece', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Ireland', 'Israel', 'Italy', 'Japan', 'Kenya', 'Kuwait',
    'Latvia', 'Lithuania', 'Luxembourg', 'Malaysia', 'Mexico',
    'Nepal', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway',
    'Pakistan', 'Peru', 'Philippines', 'Poland', 'Portugal',
    'Qatar', 'Romania', 'Russia', 'Saudi Arabia', 'Singapore',
    'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain',
    'Sri Lanka', 'Sweden', 'Switzerland', 'Thailand', 'Turkey',
    'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
    'Vietnam', 'Zimbabwe'
  ];

  constructor(private fb: FormBuilder, private AppService: AppService) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      jobTitle: ['', Validators.required],
      country: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {


      // this.ngxService.show();
      this.AppService.postVendorDemo(this.contactForm.value).subscribe((result: any) => {
        if (result.status === 200) {
          console.log('✅ Form Submitted:', this.contactForm.value);
          alert('Thank you! We will contact you soon.');
          this.contactForm.reset();
        } else {
          alert('⚠️ Demo Request Failed');
        }

      })


    } else {
      alert('⚠️ Please fill all required fields correctly.');
    }
  }
}
