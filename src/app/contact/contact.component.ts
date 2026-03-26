import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm: FormGroup;

  countries: string[] = [
    'Afghanistan','Albania','Algeria','Andorra','Angola',
    'Argentina','Armenia','Australia','Austria','Azerbaijan',
    'Bahamas','Bahrain','Bangladesh','Barbados','Belarus',
    'Belgium','Belize','Bhutan','Bolivia','Brazil','Bulgaria',
    'Cambodia','Cameroon','Canada','Chile','China','Colombia',
    'Croatia','Cuba','Czech Republic','Denmark','Dominican Republic',
    'Ecuador','Egypt','Estonia','Ethiopia','Finland','France',
    'Germany','Greece','Hungary','Iceland','India','Indonesia',
    'Ireland','Israel','Italy','Japan','Kenya','Kuwait',
    'Latvia','Lithuania','Luxembourg','Malaysia','Mexico',
    'Nepal','Netherlands','New Zealand','Nigeria','Norway',
    'Pakistan','Peru','Philippines','Poland','Portugal',
    'Qatar','Romania','Russia','Saudi Arabia','Singapore',
    'Slovakia','Slovenia','South Africa','South Korea','Spain',
    'Sri Lanka','Sweden','Switzerland','Thailand','Turkey',
    'Ukraine','United Arab Emirates','United Kingdom','United States',
    'Vietnam','Zimbabwe'
  ];

constructor(
  private fb: FormBuilder,
  private http: HttpClient,
  private title: Title,
  private meta: Meta
) {

  this.title.setTitle('Contact Contisoft | API Marketplace Support');

  this.meta.updateTag({
    name: 'description',
    content: 'Contact Contisoft Technologies for API integration, partnerships, and enterprise solutions.'
  });

  this.meta.updateTag({
    name: 'keywords',
    content: 'Contact Contisoft, API Support, API Marketplace Help, Enterprise API Contact'
  });

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

      this.http.post('https://sealsure-new-backend.sealsure.in/api/contact', this.contactForm.value)
        .subscribe({
          next: (response) => {
            alert('✅ Message sent successfully!');
            this.contactForm.reset();
          },
          error: (error) => {
            console.error(error);
            alert('❌ Failed to send message');
          }
        });

    } else {
      alert('⚠️ Please fill all required fields correctly.');
    }
  }
}
